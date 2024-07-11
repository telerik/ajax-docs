---
title: Filtering Out Empty Values in RadGrid Excel Like Filtering
description: Learn how to correctly filter out empty or blank values in RadGrid with Excel-like filtering, ensuring accurate data representation.
type: how-to
page_title: How to Exclude Blank Values in RadGrid Excel Like Filter
slug: grid-exclude-blank-values-from-excel-like-filter
tags: radgrid, asp.net ajax, filtering, excel-like, empty values, null values
res_type: kb
ticketid: 1657863
---

## Environment

| Product | Version |
| --- | --- |
| RadGrid for ASP.NET AJAX | All |

## Description

When using Excel like filtering in RadGrid, a `null` value appears in the filter list, but the actual data contains blanks instead of nulls. Selecting `null` from the filter list returns no results, while selecting `IsEmpty` returns the expected rows. This discrepancy occurs because the `EqualTo` filter function, used for the CheckBoxList in HeaderContextMenu Filtering, does not support filtering on empty values.

This KB article also answers the following questions:

- How can I filter out empty values in RadGrid?
- Why does the Excel like filter in RadGrid show null values instead of blanks?
- How do I ensure only non-empty values are listed in RadGrid's Excel like filter?

## Solution

To address this issue, modify the data source for the CheckBoxList to exclude empty values. Implement this by handling the `FilterCheckListItemsRequested` event of RadGrid. Additionally, utilize the secondary filter menu for more granular control over filtering null and empty values.

Below is an example of how to filter out empty values from the CheckBoxList in RadGrid:

````C#
protected void RadGrid1_FilterCheckListItemsRequested(object sender, GridFilterCheckListItemsRequestedEventArgs e)
{
    string DataField = (e.Column as IGridDataColumn).GetActiveDataField();

    e.ListBox.DataSource = OrdersTable()
        .AsEnumerable()
        .Where(r => !(string.IsNullOrEmpty(r.Field<string>(DataField))))
        .CopyToDataTable()
        .DefaultView.ToTable(true, DataField);

    e.ListBox.DataKeyField = DataField;
    e.ListBox.DataTextField = DataField;
    e.ListBox.DataValueField = DataField;
    e.ListBox.DataBind();
}

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = OrdersTable();
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 5; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        if (index % 3 == 0)
        {
            row["ShipName"] = null; 
        }
        else if (index % 4 == 0)
        {
            row["ShipName"] = string.Empty;
        }
        else 
        {
            row["ShipName"] = "Shipname" + index;
        }

        dt.Rows.Add(row);
    }

    return dt;
}
````

And the ASP.NET markup for the RadGrid:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="400px" AllowFilteringByColumn="true" FilterType="HeaderContext" 
    EnableHeaderContextMenu="true" EnableHeaderContextFilterMenu="true" OnFilterCheckListItemsRequested="RadGrid1_FilterCheckListItemsRequested" 
    OnInit="RadGrid1_Init" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32" FilterCheckListEnableLoadOnDemand="true"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName" FilterCheckListEnableLoadOnDemand="true"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

## Notes

- Remember to handle the `NeedDataSource` event to bind the RadGrid to its data source.
- The secondary filter menu below the CheckBoxList should be used to filter items specifically empty or null.

## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [CheckList Filtering in RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/filtering/checklist-filtering)
