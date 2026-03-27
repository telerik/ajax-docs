---
title: Implementing Select All in Text-Limited Checklist Filters in RadGrid
description: Learn how to implement a "Select All" feature in a text-limited checklist filter for RadGrid in UI for ASP.NET AJAX.
type: how-to
page_title: Handling Select All in RadGrid Checklist Filters with Search
meta_title: Handling Select All in RadGrid Checklist Filters with Search
slug: grid-text-limited-checklist-select-all
tags: radgrid, checklist filter, select all, asp.net ajax
res_type: kb
ticketid: 1712168
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.1.225</td>
</tr>
</tbody>
</table>

## Description

When using the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) with a large number of distinct text values in a column, the default "Select All" in the checklist filter includes all matched values, leading to large payloads. This behavior can cause SQL Server parameter-limit failures and performance issues.

To achieve a more compact representation, "Select All" should capture the search term and apply a filter expression like `Contains(searchText)` instead of posting thousands of exact values. This article provides a way to implement this behavior using a custom `FilterTemplate` with a `RadComboBox` and server-side filtering.

This knowledge base article also answers the following questions:
- How to optimize the Select All feature in RadGrid checklist filters?
- How to handle large datasets in RadGrid filter payloads?
- How to apply Contains filtering in RadGrid checklist filters?

## Solution

To achieve the desired behavior, use a `FilterTemplate` with a `RadComboBox` and handle its "Select All" functionality programmatically. Follow these steps:

First, add hidden fields to store the filter column and values:

````ASP.NET
<asp:HiddenField ID="hfFilterCol" runat="server" />
<asp:HiddenField ID="hfFilterVals" runat="server" />

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    AllowFilteringByColumn="true"
    EnableLinqExpressions="false"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnItemCreated="RadGrid1_ItemCreated">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
                <FilterTemplate>
                    <div class="combo-filter-wrap">
                        <telerik:RadComboBox ID="cboShipName" runat="server"
                            CheckBoxes="true"
                            EnableCheckAllItemsCheckBox="true"
                            Filter="Contains"
                            EmptyMessage="Search ShipName..."
                            Width="220px" MaxHeight="250px"
                            OnClientCheckAllChecked="onClientCheckAllChecked">
                        </telerik:RadComboBox>
                    </div>
                </FilterTemplate>
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

Then implement the JavaScript function to handle "Select All":

````JavaScript
function onClientCheckAllChecked(sender, args) {
    let filterText = sender._filterText;
    if (!filterText) return;

    let filteredItems = sender.get_itemData()
        .filter((item) => item.value.toLowerCase().includes(filterText.toLowerCase()))
        .map((item) => item.value);

    if (filteredItems.length === 0) return;

    let colName = getColNameFromCombo(sender);
    if (!colName) return;

    // Store the exact matched values so the server can build an OR filter
    document.getElementById('<%= hfFilterCol.ClientID %>').value = colName;
    document.getElementById('<%= hfFilterVals.ClientID %>').value = filteredItems.join('||');

    $find('<%= RadGrid1.ClientID %>').get_masterTableView().fireCommand('RebindGrid', '');
}

function getColNameFromCombo(sender) {
    let id = sender.get_id();
    if (id.indexOf('cboShipName') !== -1) return 'ShipName';
    return null;
}
````

Finally, handle the filtering logic on the server:

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    DataView view = OrdersTable().DefaultView;

    // If the client posted exact values from the filteredItems array (Check All on
    // a narrowed combo), apply an OR equality filter across those exact values.
    string filterCol = hfFilterCol.Value;
    string filterVals = hfFilterVals.Value;

    if (!string.IsNullOrEmpty(filterCol) && !string.IsNullOrEmpty(filterVals))
    {
        string[] vals = filterVals.Split(new[] { "||" }, StringSplitOptions.RemoveEmptyEntries);
        var parts = vals.Select(v => string.Format("{0} = '{1}'", filterCol, v.Replace("'", "''")));
        view.RowFilter = string.Join(" OR ", parts);
    }
    else
    {
        string filterExpr = RadGrid1.MasterTableView.FilterExpression;
        if (!string.IsNullOrEmpty(filterExpr)) view.RowFilter = filterExpr;
    }

    RadGrid1.DataSource = view;
}

protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (!(e.Item is GridFilteringItem)) return;

    if (e.Item is GridFilteringItem filterItem)
    {
        RadComboBox cboShipName = filterItem.FindControl("cboShipName") as RadComboBox;

        if (cboShipName != null)
        {
            FillCombo(cboShipName, "ShipName");
        }
    }
}

private void FillCombo(RadComboBox combo, string field)
{
    combo.Items.Clear();

    IOrderedEnumerable<string> values = OrdersTable().AsEnumerable()
        .Select(row => row[field].ToString())
        .Distinct()
        .OrderBy(value => value);

    foreach (string val in values)
    {
        combo.Items.Add(new RadComboBoxItem(val, val));
    }
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();
    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));
    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 70; i++)
    {
        int index = i + 1;
        DataRow row = dt.NewRow();
        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;
        dt.Rows.Add(row);
    }
    return dt;
}
````

This implementation ensures that "Select All" in a text-limited checklist filter sends only the relevant search context to the server, avoiding large payloads and improving performance.

