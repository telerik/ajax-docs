---
title: Save and Restore RadGrid filters in the code behind
description: Solution to Save and Restore Filters in the code behind for all filter types of RadGrid.
type: how-to
page_title: Save and Restore Filters programmatically - RadGrid | Telerik UI for ASP.NET AJAX
slug: grid-save-and-restore-filters-programmatically
position:
tags: grid, radgrid, filter, excel-like filter, headercontext, filtermenu, checklist filtering, basic, classic
ticketid: 1425180
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Saving and Restoring filters can be as simple as saving the Grid's FilterExpression ([Apply Default Filter on Initial Load](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Filtering/apply-default-filter-on-initial-load)). This, however, does not restore the filter functions and values for the Filter Controls automatically, it needs to be done manually.

Parsing the FilterExpressions to get the information required to restore the filter values/functions can eventually be time consuming.


## Solution

Easy and efficient way to collect and restore filters in RadGrid.
In order to collect all the necessary information needed for restoring the filters, loop through the Grid columns, get all filter related information and save it in the a variable. This example uses session.

For restoring, reverse the logic used to save the filters.

#### Buttons to Save/Restore filters

````ASP.NET
<telerik:RadButton ID="btnSaveFilters" runat="server" Text="Save Filters" OnClick="btnSaveFilters_Click"></telerik:RadButton>
<telerik:RadButton ID="btnRestoreFilters" runat="server" Text="Restore Filters" OnClick="btnRestoreFilters_Click"></telerik:RadButton>
````

#### FilterType="Classic"

````ASP.NET
<telerik:RadGrid ID="RadGrid_Classic_Filter" runat="server" AllowFilteringByColumn="true" OnNeedDataSource="RadGrid_NeedDataSource"
    FilterType="Classic">
</telerik:RadGrid>
````

#### FilterType="CheckList"

````ASP.NET
<telerik:RadGrid ID="RadGrid_CheckList_Filter" runat="server" AllowFilteringByColumn="true"
    FilterType="CheckList"
    OnNeedDataSource="RadGrid_NeedDataSource"
    OnColumnCreated="RadGrid_ColumnCreated"
    OnFilterCheckListItemsRequested="RadGrid_FilterCheckListItemsRequested">
</telerik:RadGrid>
````

#### FilterType="Combined"

````ASP.NET
<telerik:RadGrid ID="RadGrid_Combined_Filter" runat="server" AllowFilteringByColumn="true"
    FilterType="Combined"
    EnableHeaderContextMenu="true"
    EnableHeaderContextFilterMenu="true"
    OnNeedDataSource="RadGrid_NeedDataSource"
    OnColumnCreated="RadGrid_ColumnCreated"
    OnFilterCheckListItemsRequested="RadGrid_FilterCheckListItemsRequested">
</telerik:RadGrid>
````

#### FilterType="HeaderContext"

````ASP.NET
<telerik:RadGrid ID="RadGridWithHeaderContext" runat="server" AllowFilteringByColumn="true"
    FilterType="HeaderContext"
    EnableHeaderContextMenu="true"
    EnableHeaderContextFilterMenu="true"
    OnNeedDataSource="RadGrid_NeedDataSource"
    OnColumnCreated="RadGrid_ColumnCreated"
    OnFilterCheckListItemsRequested="RadGrid_FilterCheckListItemsRequested">
</telerik:RadGrid>
````

### Code Behind Logic

````C#
private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 3; i++)
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

protected void RadGrid_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}
protected void RadGrid_FilterCheckListItemsRequested(object sender, GridFilterCheckListItemsRequestedEventArgs e)
{
    string DataField = (e.Column as IGridDataColumn).GetActiveDataField();

    e.ListBox.DataSource = OrdersTable().DefaultView.ToTable(true, DataField);
    e.ListBox.DataKeyField = DataField;
    e.ListBox.DataTextField = DataField;
    e.ListBox.DataValueField = DataField;
    e.ListBox.DataBind();
}

protected void RadGrid_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    if (e.Column.SupportsFiltering())
    {
        e.Column.FilterCheckListEnableLoadOnDemand = true;
    }
}
protected void btnSaveFilters_Click(object sender, EventArgs e)
{
    foreach (RadGrid grid in form1.Controls.OfType<RadGrid>())
    {
        SaveFilters(grid);
    }
}
protected void btnRestoreFilters_Click(object sender, EventArgs e)
{
    foreach (RadGrid grid in form1.Controls.OfType<RadGrid>())
    {
        RestoreFilters(grid);
    }
}
private void SaveFilters(RadGrid grid)
{
    GridFilters storedFilters = new GridFilters();

    storedFilters.GridID = grid.ID;
    storedFilters.FilterExpression = grid.MasterTableView.FilterExpression;
    storedFilters.ListOfColumnFilter = new List<ColumnFilter>();
    foreach (GridColumn column in grid.MasterTableView.RenderColumns.Where(x => x.SupportsFiltering()))
    {
        ColumnFilter columnFilter = new ColumnFilter();

        foreach (GridColumn col in grid.MasterTableView.RenderColumns.Where(x => x.SupportsFiltering()))
        {
            columnFilter.ColumnName = col.UniqueName;
            columnFilter.CurrentFilterValue = col.CurrentFilterValue;
            columnFilter.CurrentFilterFunction = col.CurrentFilterFunction;
            columnFilter.AndCurrentFilterValue = col.AndCurrentFilterValue;
            columnFilter.AndCurrentFilterFunction = col.AndCurrentFilterFunction;
            columnFilter.ListOfFilterValues = col.ListOfFilterValues;
        }

        storedFilters.ListOfColumnFilter.Add(columnFilter);
    }

    Session[grid.ID] = storedFilters;
}
private void RestoreFilters(RadGrid grid)
{
    if (Session[grid.ID] == null) return;

    GridFilters storedFilters = (GridFilters)Session[grid.ID];

    if (storedFilters == null) return;

    grid.MasterTableView.FilterExpression = storedFilters.FilterExpression;

    foreach (ColumnFilter colFilter in storedFilters.ListOfColumnFilter)
    {
        GridColumn col = grid.MasterTableView.GetColumn(colFilter.ColumnName);

        col.CurrentFilterValue = colFilter.CurrentFilterValue;
        col.CurrentFilterFunction = colFilter.CurrentFilterFunction;
        col.AndCurrentFilterValue = colFilter.AndCurrentFilterValue;
        col.AndCurrentFilterFunction = colFilter.AndCurrentFilterFunction;
        col.ListOfFilterValues = colFilter.ListOfFilterValues;
    }
    Session[grid.ID] = null;
    grid.Rebind();
}
class GridFilters
{
    public string GridID { get; set; }
    public string FilterExpression { get; set; }
    public List<ColumnFilter> ListOfColumnFilter { get; set; }
}
class ColumnFilter
{
    public string ColumnName { get; set; }
    public string CurrentFilterValue { get; set; }
    public GridKnownFunction CurrentFilterFunction { get; set; }
    public string AndCurrentFilterValue { get; set; }
    public GridKnownFunction AndCurrentFilterFunction { get; set; }
    public string[] ListOfFilterValues { get; set; }
}
````
````VB
Private Function OrdersTable() As DataTable
	Dim dt As DataTable = New DataTable()
	dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
	dt.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
	dt.Columns.Add(New DataColumn("Freight", GetType(Decimal)))
	dt.Columns.Add(New DataColumn("ShipName", GetType(String)))
	dt.Columns.Add(New DataColumn("ShipCountry", GetType(String)))
	dt.PrimaryKey = New DataColumn() {dt.Columns("OrderID")}

	For i As Integer = 0 To 3 - 1
		Dim index As Integer = i + 1
		Dim row As DataRow = dt.NewRow()
		row("OrderID") = index
		row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
		row("Freight") = index * 0.1 + index * 0.01
		row("ShipName") = "Name " & index
		row("ShipCountry") = "Country " & index
		dt.Rows.Add(row)
	Next

	Return dt
End Function

Protected Sub RadGrid_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
	(TryCast(sender, RadGrid)).DataSource = OrdersTable()
End Sub

Protected Sub RadGrid_FilterCheckListItemsRequested(ByVal sender As Object, ByVal e As GridFilterCheckListItemsRequestedEventArgs)
	Dim DataField As String = (TryCast(e.Column, IGridDataColumn)).GetActiveDataField()
	e.ListBox.DataSource = OrdersTable().DefaultView.ToTable(True, DataField)
	e.ListBox.DataKeyField = DataField
	e.ListBox.DataTextField = DataField
	e.ListBox.DataValueField = DataField
	e.ListBox.DataBind()
End Sub

Protected Sub RadGrid_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
	If e.Column.SupportsFiltering() Then
		e.Column.FilterCheckListEnableLoadOnDemand = True
	End If
End Sub

Protected Sub btnSaveFilters_Click(ByVal sender As Object, ByVal e As EventArgs)
	For Each grid As RadGrid In form1.Controls.OfType(Of RadGrid)()
		SaveFilters(grid)
	Next
End Sub

Protected Sub btnRestoreFilters_Click(ByVal sender As Object, ByVal e As EventArgs)
	For Each grid As RadGrid In form1.Controls.OfType(Of RadGrid)()
		RestoreFilters(grid)
	Next
End Sub

Private Sub SaveFilters(ByVal grid As RadGrid)
	Dim storedFilters As GridFilters = New GridFilters()
	storedFilters.GridID = grid.ID
	storedFilters.FilterExpression = grid.MasterTableView.FilterExpression
	storedFilters.ListOfColumnFilter = New List(Of ColumnFilter)()

	For Each column As GridColumn In grid.MasterTableView.RenderColumns.Where(Function(x) x.SupportsFiltering())
		Dim columnFilter As ColumnFilter = New ColumnFilter()

		For Each col As GridColumn In grid.MasterTableView.RenderColumns.Where(Function(x) x.SupportsFiltering())
			columnFilter.ColumnName = col.UniqueName
			columnFilter.CurrentFilterValue = col.CurrentFilterValue
			columnFilter.CurrentFilterFunction = col.CurrentFilterFunction
			columnFilter.AndCurrentFilterValue = col.AndCurrentFilterValue
			columnFilter.AndCurrentFilterFunction = col.AndCurrentFilterFunction
			columnFilter.ListOfFilterValues = col.ListOfFilterValues
		Next

		storedFilters.ListOfColumnFilter.Add(columnFilter)
	Next

	Session(grid.ID) = storedFilters
End Sub

Private Sub RestoreFilters(ByVal grid As RadGrid)
	If Session(grid.ID) Is Nothing Then Return
	Dim storedFilters As GridFilters = CType(Session(grid.ID), GridFilters)
	If storedFilters Is Nothing Then Return
	grid.MasterTableView.FilterExpression = storedFilters.FilterExpression

	For Each colFilter As ColumnFilter In storedFilters.ListOfColumnFilter
		Dim col As GridColumn = grid.MasterTableView.GetColumn(colFilter.ColumnName)
		col.CurrentFilterValue = colFilter.CurrentFilterValue
		col.CurrentFilterFunction = colFilter.CurrentFilterFunction
		col.AndCurrentFilterValue = colFilter.AndCurrentFilterValue
		col.AndCurrentFilterFunction = colFilter.AndCurrentFilterFunction
		col.ListOfFilterValues = colFilter.ListOfFilterValues
	Next

	Session(grid.ID) = Nothing
	grid.Rebind()
End Sub

Class GridFilters
	Public Property GridID As String
	Public Property FilterExpression As String
	Public Property ListOfColumnFilter As List(Of ColumnFilter)
End Class

Class ColumnFilter
	Public Property ColumnName As String
	Public Property CurrentFilterValue As String
	Public Property CurrentFilterFunction As GridKnownFunction
	Public Property AndCurrentFilterValue As String
	Public Property AndCurrentFilterFunction As GridKnownFunction
	Public Property ListOfFilterValues As String()
End Class
````


## See Also
* [Grid - Basic Filtering](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/basic-filtering/defaultcs.aspx) - Demo
* [Grid - Excel-like Filtering](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/excel-like-filtering/defaultcs.aspx) - Demo
* [CheckList Filtering](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/filtering/checklist-filtering) - Documentation
* [Known Filter functions](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/filtering/overview#filter-functions) - Documentation
* [Accessing Cells and Rows](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows) - Documentation
