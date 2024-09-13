---
title: Cancel filtering when in Edit Mode
description: Learn how to automatically exit the edit mode of a row in RadGrid for ASP.NET AJAX when the data source is changed, such as after filtering.
type: how-to
page_title: Cancel filtering when in Edit Mode
slug: grid-cancel-filtering-when-in-edit-mode
tags: radgrid, asp.net ajax, edit mode, datasource, filtering, dropdownlist, combobox
res_type: kb
ticketid: 1664283
---

## Environment

| Product | Version |
| --- | --- |
| RadGrid for ASP.NET AJAX | All |

## Description

When using RadGrid to display and edit data, it is possible to enter an edit mode for a specific row. If the data source of the grid changes while a row is in edit mode, the same row position might enter edit mode with different data. This behavior could lead to inconsistencies, especially when filtering data through controls like RadDropDownList or RadComboBox. This article demonstrates how to ensure the grid exits edit mode when the data source changes due to filtering.

This KB article also answers the following questions:

- How do I disable RadGrid row editing on data source refresh?
- How can I ensure a row exits edit mode when changing the filter?
- What approach should I take to prevent editing a different row after data refresh in RadGrid?

## Solution

To manage the edit mode of RadGrid rows effectively when the data source changes, such as after applying a filter, follow these steps:

1. Utilize the `OnClientItemSelected` event of the DropDownList or ComboBox used for filtering. 
2. In the event handler, check if the grid is currently in edit mode by examining the length of the `editItems` collection.
3. If the grid is in edit mode, prevent the filter operation or, alternatively, exit edit mode before proceeding with the filter.

### Example Implementation

Here's an example of implementing the above solution in a RadGrid with a RadDropDownList for filtering:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="200px" AllowFilteringByColumn="true" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False">
        <Columns>
            <telerik:GridEditCommandColumn />
            <telerik:GridBoundColumn DataField="ShipName" AutoPostBackOnFilter="false"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
                <FilterTemplate>
                    <telerik:RadDropDownList ID="RadDropDownList1" runat="server" RenderMode="Lightweight" OnClientItemSelected="onClientItemSelected">
                        <Items>
                            <telerik:DropDownListItem Text="ShipName1" />
                            <telerik:DropDownListItem Text="ShipName2" />
                        </Items>
                    </telerik:RadDropDownList>
                </FilterTemplate>
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

````JavaScirpt
function onClientItemSelected(sender, args) {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    var isGridInEditMode = masterTable.get_editItems().length > 0;

    if (!isGridInEditMode) {
        var selectedText = args.get_item().get_text();
        var filterFunction = Telerik.Web.UI.GridFilterFunction.EqualTo;

        masterTable.filter("ShipName", selectedText, filterFunction, true);
    } else {
        alert("Grid is in edit mode, you can't filter!");
    }
}
````

### Server-Side Data Source Method

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));

    for (int i = 0; i < 6; i++)
    {
        int index = i + 1;
        DataRow row = dt.NewRow();
        row["ShipName"] = index % 2 == 0 ? "ShipName" + 1 : "ShipName" + 2;
        dt.Rows.Add(row);
    }

    return dt;
}
````

This approach ensures that the RadGrid exits edit mode when the data source changes, preventing the editing of a different row with potentially different data.

## See Also

- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [RadDropDownList Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/overview)
- [RadComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [OnClientItemSelected](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/client-side-programming/events/onclientitemselected#onclientitemselected)
