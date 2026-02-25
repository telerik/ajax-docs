---
title: Implementing Cascading Checklist Filtering in UI for ASP.NET AJAX Grid
description: Learn how to implement cascading checklist filtering in the UI for ASP.NET AJAX Grid to display filtered values based on previous filters.
type: how-to
page_title: Cascading Checklist Filtering for RadGrid
meta_title: Cascading Checklist Filtering for RadGrid
slug: grid-cascading-checklist-filtering
tags: grid, ui for asp.net ajax, filtering, filterchecklistitemsrequested, dataview, cascading filters
res_type: kb
ticketid: 1710506
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX Grid</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

By default, the RadGrid checklist filter displays all distinct values from the original dataset, regardless of previously applied filters. For cascading checklist filtering, each filter must reflect the remaining values based on the applied filters.

This knowledge base article also answers the following questions:
- How to filter checklist items dynamically based on filtered dataset?
- How to implement cascading filters in UI for ASP.NET AJAX Grid?
- How to use FilterCheckListItemsRequested for cascading checklist filtering?

## Solution

To implement cascading checklist filtering in the UI for ASP.NET AJAX Grid, follow these steps:

1. Use the `FilterCheckListItemsRequested` event to dynamically filter checklist items based on the current grid filters.
2. Convert the `FilterExpression` of the grid (in LINQ-style syntax) into a format understood by `DataView.RowFilter`.
3. Bind the filtered values to the checklist.

### Example Implementation

Here's a detailed example:

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = OrdersTable();
}

protected void RadGrid1_FilterCheckListItemsRequested(object sender, GridFilterCheckListItemsRequestedEventArgs e)
{
    string filterExpression = RadGrid1.MasterTableView.FilterExpression; // Get current grid filters
    string DataField = (e.Column as IGridDataColumn).GetActiveDataField(); // Column being filtered

    if (!string.IsNullOrEmpty(filterExpression))
    {
        DataTable filteredData = ApplyFilterToDataSource(filterExpression); // Filter the full dataset

        List<object> columnValues = filteredData
            .AsEnumerable()
            .Select(row => row[e.Column.UniqueName]) // Get values only from filtered rows
            .ToList();

        e.ListBox.DataSource = columnValues; // Bind filtered values to checklist
        e.ListBox.DataBind();
    }
    else
    {
        // No filter applied, show all distinct values
        e.ListBox.DataSource = OrdersTable().DefaultView.ToTable(true, DataField);
        e.ListBox.DataKeyField = DataField;
        e.ListBox.DataTextField = DataField;
        e.ListBox.DataValueField = DataField;
        e.ListBox.DataBind();
    }
}

private DataTable ApplyFilterToDataSource(string filterExpression)
{
    DataTable dt = OrdersTable(); // Start from the full dataset
    DataView dv = new DataView(dt);

    string rowFilter = ConvertRadGridFilterToRowFilter(filterExpression); // Convert LINQ-style to RowFilter

    try
    {
        dv.RowFilter = rowFilter; // Apply the filter to the DataView
    }
    catch
    {
        dv.RowFilter = ""; // Fallback in case of invalid filter
    }

    return dv.ToTable(); // Return filtered rows as DataTable
}

private string ConvertRadGridFilterToRowFilter(string filterExpression)
{
    string pattern = @"Convert\.ToString\(it\[""(?<col>[^""]+)""\]\)\s*=\s*""(?<val>[^""]*)"""; // Regex matches patterns like Convert.ToString(it["Column"]) = "Value"
    string result = Regex.Replace(filterExpression, pattern, m => $"{m.Groups["col"].Value} = '{m.Groups["val"].Value}'");  // Replace each match with: Column = 'Value'

    result = result.Replace("||", "OR").Replace("&&", "AND"); // Convert logical operators from RadGrid syntax to DataView syntax

    return result;
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

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px"
    AllowFilteringByColumn="true"
    FilterType="HeaderContext"
    EnableHeaderContextMenu="true"
    EnableHeaderContextFilterMenu="true"
    OnFilterCheckListItemsRequested="RadGrid1_FilterCheckListItemsRequested"
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32" FilterCheckListEnableLoadOnDemand="true"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime" FilterCheckListEnableLoadOnDemand="true"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal" FilterCheckListEnableLoadOnDemand="true"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName" FilterCheckListEnableLoadOnDemand="true"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry" FilterCheckListEnableLoadOnDemand="true"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

## See Also

- [UI for ASP.NET AJAX Grid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [DataView.RowFilter Documentation](https://learn.microsoft.com/en-us/dotnet/api/system.data.dataview.rowfilter)
