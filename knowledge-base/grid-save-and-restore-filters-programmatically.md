---
title: Save and Restore RadGrid filters in the code behind
description: Solution to Save and Restore Filters in the code behind for all filter types of RadGrid.
type: how-to
page_title: Save and Restore Filters programmatically - RadGrid
slug: grid-save-and-restore-filters-programmatically
position:
tags: grid, radgrid, filter, excel-like filter, headercontext, filtermenu, checklist filtering, basic, classic
ticketid: 1425180
res_type: kb
---

## Description

Applying filters for the Grid is done by Setting the FilterExpressions as described in the [Operate with the FilterExpression Manually]({%slug grid/how-to/filtering/operate-with-the-filterexpression-manually%}) and [Setting the initial filter in the code-behind]({%slug grid/how-to/filtering/apply-default-filter-on-initial-load%}#setting-the-initial-filter-in-the-code-behind) articles. That approach, however, will only apply filters without setting/restoring the filter functions and values.

Furthermore, parsing the FilterExpressions to get the information required, or to restore the filter values/functions can be more complex and can be easily mistaken.

The following Solution, will show a all-in-one functionality to Save and Restore FilterExpressions, Filter Functions and Values to RadGrid easily.

## Solution

Easy and efficient way to Save/Restore filters in RadGrid that works with all Filter Types:
- FilterType="Classic"
- FilterType="CheckList"
- FilterType="Combined"
- FilterType="HeaderContext"

To Save the filters, you will need to collect the following information from RadGrid and save it somewhere in the *Session*, *Cookie*, *ViewState*, in a *File* or in the *Database*:

- **FilterExpression** (from RadGrid-MasterTableView)
- **CurrentFilterValue** (for each column)
- **CurrentFilterFunction** (for each column)
- **AndCurrentFilterValue** (for each column)
- **AndCurrentFilterFunction** (for each column)
- **ListOfFilterValues** (for each column)

````C#
// Get the FilterExpression
string filterExpression = RadGrid1.MasterTableView.FilterExpression;

// Loop through the Columns collection
foreach (GridColumn column in RadGrid1.MasterTableView.RenderColumns.Where(x => x.SupportsFiltering()))
{
    // For each column collect the following
        
    // Current Filter Filter Function/Value
    string currentFilterValue = column.CurrentFilterValue;
    GridKnownFunction currentFilterFunction = column.CurrentFilterFunction;

    // AND Filter Function/Value
    string andCurrentFilterValue = column.AndCurrentFilterValue;
    GridKnownFunction andCurrentFilterFunction = column.AndCurrentFilterFunction;

    // List of Filter Values -> Filter values for FilterType="Checklist" or FilterType="HeaderContext"
    string[] listOfFilterValues = column.ListOfFilterValues;
}
````
````VB
'Get the FilterExpression
Dim filterExpression As String = grid.MasterTableView.FilterExpression

'Loop through the Collection of Filter data you have saved

For Each column As GridColumn In grid.MasterTableView.RenderColumns.Where(Function(x) x.SupportsFiltering())
    'For each column collect the following
    
    'Current Filter Filter Function/Value
    Dim currentFilterValue As String = column.CurrentFilterValue
    Dim currentFilterFunction As GridKnownFunction = column.CurrentFilterFunction
    
    'AND Filter Function/Value
    Dim andCurrentFilterValue As String = column.AndCurrentFilterValue
    Dim andCurrentFilterFunction As GridKnownFunction = column.AndCurrentFilterFunction
    
    'List of Filter Values -> Filter values for FilterType="Checklist" or FilterType="HeaderContext"
    Dim listOfFilterValues As String() = column.ListOfFilterValues
Next
````

To restore the filters, apply the collected filter information back to RadGrid.

### Example

>caption 1) Create the following or similar Classes that will hold the information for us.

````C#
public class GridFilters
{
    public string GridID { get; set; }
    public string FilterExpression { get; set; }
    public List<ColumnFilter> ListOfColumnFilter { get; set; }
}
public class ColumnFilter
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
Public Class GridFilters
    Public Property GridID As String
    Public Property FilterExpression As String
    Public Property ListOfColumnFilter As List(Of ColumnFilter)
End Class

Public Class ColumnFilter
    Public Property ColumnName As String
    Public Property CurrentFilterValue As String
    Public Property CurrentFilterFunction As GridKnownFunction
    Public Property AndCurrentFilterValue As String
    Public Property AndCurrentFilterFunction As GridKnownFunction
    Public Property ListOfFilterValues As String()
End Class
````

>caption 2) Create a function that will save the filters

````C#
private void SaveFilters(RadGrid grid)
{
    GridFilters storedFilters = new GridFilters();

    storedFilters.GridID = grid.ID;
    storedFilters.FilterExpression = grid.MasterTableView.FilterExpression;
    storedFilters.ListOfColumnFilter = new List<ColumnFilter>();
    foreach (GridColumn column in grid.MasterTableView.RenderColumns.Where(x => x.SupportsFiltering()))
    {
        ColumnFilter columnFilter = new ColumnFilter();

        columnFilter.ColumnName = column.UniqueName;
        columnFilter.CurrentFilterValue = column.CurrentFilterValue;
        columnFilter.CurrentFilterFunction = column.CurrentFilterFunction;
        columnFilter.AndCurrentFilterValue = column.AndCurrentFilterValue;
        columnFilter.AndCurrentFilterFunction = column.AndCurrentFilterFunction;
        columnFilter.ListOfFilterValues = column.ListOfFilterValues;

        storedFilters.ListOfColumnFilter.Add(columnFilter);
    }
    Session[grid.ID] = storedFilters;
}
````
````VB
Private Sub SaveFilters(ByVal grid As RadGrid)
	Dim storedFilters As GridFilters = New GridFilters()
	storedFilters.GridID = grid.ID
	storedFilters.FilterExpression = grid.MasterTableView.FilterExpression
	storedFilters.ListOfColumnFilter = New List(Of ColumnFilter)()

	For Each column As GridColumn In grid.MasterTableView.RenderColumns.Where(Function(x) x.SupportsFiltering())
		Dim columnFilter As ColumnFilter = New ColumnFilter()

        columnFilter.ColumnName = column.UniqueName
        columnFilter.CurrentFilterValue = column.CurrentFilterValue
        columnFilter.CurrentFilterFunction = column.CurrentFilterFunction
        columnFilter.AndCurrentFilterValue = column.AndCurrentFilterValue
        columnFilter.AndCurrentFilterFunction = column.AndCurrentFilterFunction
        columnFilter.ListOfFilterValues = column.ListOfFilterValues

		storedFilters.ListOfColumnFilter.Add(columnFilter)
	Next

	Session(grid.ID) = storedFilters
End Sub
````

>caption 3) Create a function that will restore the filters

````C#
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
    //Session[grid.ID] = null; //Only clear the session if you're sure the filters are no longer needed.
    grid.Rebind();
}
````
````VB
Private Sub RestoreFilters(ByVal grid As RadGrid)
    If Session(grid.ID) Is Nothing Then Return

    Dim storedFilters As GridFilters = TryCast(Session(grid.ID), GridFilters)

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

    'Session(grid.ID) = Nothing 'Only clear the session if you're sure the filters are no longer needed.
    grid.Rebind()
End Sub
````

>caption 4) Create two Buttons, one for Saving and one for Restoring the filters

````ASP.NET
<telerik:RadButton ID="btnSaveFilters" runat="server" Text="Save Filters" OnClick="btnSaveFilters_Click"></telerik:RadButton>
<telerik:RadButton ID="btnRestoreFilters" runat="server" Text="Restore Filters" OnClick="btnRestoreFilters_Click"></telerik:RadButton>
````

>caption 5) In the Click event handler, call the function for saving/restoring respectively.

````C#
// Save Filters
protected void btnSaveFilters_Click(object sender, EventArgs e)
{
    // Pass the RadGrid object to the function
    SaveFilters(RadGrid1);
}
// Restore Filters
protected void btnRestoreFilters_Click(object sender, EventArgs e)
{
    // Pass the RadGrid object to the function
    RestoreFilters(RadGrid1);
}
````
````VB
'Save Filters
Protected Sub btnSaveFilters_Click(ByVal sender As Object, ByVal e As EventArgs)
    'Pass the RadGrid object to the function
    SaveFilters(RadGrid1)
End Sub
'Restore Filters
Protected Sub btnRestoreFilters_Click(ByVal sender As Object, ByVal e As EventArgs)
    'Pass the RadGrid object to the function
    RestoreFilters(RadGrid1)
End Sub
````

### TEST this Solution

Create an ASPX Page and add the following Grid definitions to it

````ASP.NET

<h3>Action Buttons</h3>
<telerik:RadButton ID="btnSaveFilters" runat="server" Text="Save Filters" OnClick="btnSaveFilters_Click"></telerik:RadButton>
<telerik:RadButton ID="btnRestoreFilters" runat="server" Text="Restore Filters" OnClick="btnRestoreFilters_Click"></telerik:RadButton>

<h3>RadGrid with FilterType="Classic"</h3>
<telerik:RadGrid ID="RadGrid_Classic_Filter" runat="server" AllowFilteringByColumn="true" OnNeedDataSource="RadGrid_NeedDataSource"
    FilterType="Classic">
</telerik:RadGrid>

<h3>RadGrid with FilterType="CheckList"</h3>
<telerik:RadGrid ID="RadGrid_CheckList_Filter" runat="server" AllowFilteringByColumn="true"
    FilterType="CheckList"
    OnNeedDataSource="RadGrid_NeedDataSource"
    OnColumnCreated="RadGrid_ColumnCreated"
    OnFilterCheckListItemsRequested="RadGrid_FilterCheckListItemsRequested">
</telerik:RadGrid>

<h3>RadGrid with FilterType="Combined"</h3>
<telerik:RadGrid ID="RadGrid_Combined_Filter" runat="server" AllowFilteringByColumn="true"
    FilterType="Combined"
    EnableHeaderContextMenu="true"
    EnableHeaderContextFilterMenu="true"
    OnNeedDataSource="RadGrid_NeedDataSource"
    OnColumnCreated="RadGrid_ColumnCreated"
    OnFilterCheckListItemsRequested="RadGrid_FilterCheckListItemsRequested">
</telerik:RadGrid>

<h3>RadGrid with FilterType="HeaderContext"</h3>
<telerik:RadGrid ID="RadGridWithHeaderContext" runat="server" AllowFilteringByColumn="true"
    FilterType="HeaderContext"
    EnableHeaderContextMenu="true"
    EnableHeaderContextFilterMenu="true"
    OnNeedDataSource="RadGrid_NeedDataSource"
    OnColumnCreated="RadGrid_ColumnCreated"
    OnFilterCheckListItemsRequested="RadGrid_FilterCheckListItemsRequested">
</telerik:RadGrid>
````

In the CodeBehind, add the following code

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

        columnFilter.ColumnName = column.UniqueName;
        columnFilter.CurrentFilterValue = column.CurrentFilterValue;
        columnFilter.CurrentFilterFunction = column.CurrentFilterFunction;
        columnFilter.AndCurrentFilterValue = column.AndCurrentFilterValue;
        columnFilter.AndCurrentFilterFunction = column.AndCurrentFilterFunction;
        columnFilter.ListOfFilterValues = column.ListOfFilterValues;

        storedFilters.ListOfColumnFilter.Add(columnFilter);
    }

    Session[grid.ID] = storedFilters;
}
private void RestoreFilters(RadGrid grid)
{
    if (Session[grid.ID] == null) return;

    GridFilters storedFilters = (Session[grid.ID] as GridFilters);

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
    //Session[grid.ID] = null; //Only clear the session if you're sure the filters are no longer needed.
    grid.Rebind();
}
public class GridFilters
{
    public string GridID { get; set; }
    public string FilterExpression { get; set; }
    public List<ColumnFilter> ListOfColumnFilter { get; set; }
}
public class ColumnFilter
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
    CType(sender, RadGrid).DataSource = OrdersTable()
End Sub

Protected Sub RadGrid_FilterCheckListItemsRequested(ByVal sender As Object, ByVal e As GridFilterCheckListItemsRequestedEventArgs)
    Dim DataField As String = TryCast(e.Column, IGridDataColumn).GetActiveDataField()
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

        columnFilter.ColumnName = column.UniqueName
        columnFilter.CurrentFilterValue = column.CurrentFilterValue
        columnFilter.CurrentFilterFunction = column.CurrentFilterFunction
        columnFilter.AndCurrentFilterValue = column.AndCurrentFilterValue
        columnFilter.AndCurrentFilterFunction = column.AndCurrentFilterFunction
        columnFilter.ListOfFilterValues = column.ListOfFilterValues

        storedFilters.ListOfColumnFilter.Add(columnFilter)
    Next

    Session(grid.ID) = storedFilters
End Sub

Private Sub RestoreFilters(ByVal grid As RadGrid)
    If Session(grid.ID) Is Nothing Then Return

    Dim storedFilters As GridFilters = TryCast(Session(grid.ID), GridFilters)

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

    'Session(grid.ID) = Nothing 'Only clear the session if you're sure the filters are no longer needed.
    grid.Rebind()
End Sub

Public Class GridFilters
    Public Property GridID As String
    Public Property FilterExpression As String
    Public Property ListOfColumnFilter As List(Of ColumnFilter)
End Class

Public Class ColumnFilter
    Public Property ColumnName As String
    Public Property CurrentFilterValue As String
    Public Property CurrentFilterFunction As GridKnownFunction
    Public Property AndCurrentFilterValue As String
    Public Property AndCurrentFilterFunction As GridKnownFunction
    Public Property ListOfFilterValues As String()
End Class
````

## See Also
* [Basic Filtering (Demo)](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/basic-filtering/defaultcs.aspx)
* [Excel-like Filtering (Demo)](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/excel-like-filtering/defaultcs.aspx)
* [CheckList Filtering (Docs)]({%slug grid/functionality/filtering/checklist-filtering%})
* [Known Filter functions (Docs)]({%slug grid/functionality/filtering/overview%}#filter-functions)
* [Accessing Values and Controls (Docs)]({%slug grid/accessing-values-and-controls/overview%})
 
