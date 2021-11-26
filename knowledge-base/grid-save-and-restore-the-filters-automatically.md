---
title: Save and Restore the filters automatically
description: Easy yet powerful solution to Save and Restore the filters automatically
type: how-to
page_title: Save and Restore the filters Automatically - RadGrid
slug: grid-save-and-restore-the-filters-automatically
position:
tags: grid, radgrid, filter, preserve filter, navigate back, save filter, restore filter
ticketid: 1543352
res_type: kb
---

## DESCRIPTION

The Grid's state for Filtering is only preserved during PostBacks on the same page. However, often users need to navigate away and when they navigate back to this page, they would expect to see the Grid with the same filters applied.

This article will explain and show a solution that you can implement to Save/Restore the Grid filters automatically to preserve filtering when navigating away and back.

## SOLUTION

For Saving and Restoring the Filters, this Grid is using the Functions mentioned in the [Save and Restore RadGrid filters in the code behind]({%slug grid-save-and-restore-filters-programmatically%}) Knowledge Base article.


- **To Save the Filters** Automatically, create a Global flag that will be set in the [ItemCommand event]({%slug grid/server-side-programming/events/itemcommand%}). In the [PreRender event]({%slug grid/server-side-programming/events/prerender%}), use the Global Flag as a condition and call the `SaveFilters()` function respectively.
- **To Restore the Filters**, inside the [PreRender event]({%slug grid/server-side-programming/events/prerender%}) use the `!Page.IsPostBack` as a condition and call the `RestoreFilter()` function.

Example

````C#
// Create a Global Flag with its value set to False
private bool IsFiltering = false;

// When a Grid command is fired
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    // If the Command is for Filtering
    if (e.CommandName == RadGrid.FilterCommandName || e.CommandName == RadGrid.HeaderContextMenuFilterCommandName)
    {
        // Set the Flag's value to True
        IsFiltering = true;
    }
}

// Before Rendering the Grid
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var grid = (RadGrid)sender;
    // If the flag is True
    if (IsFiltering)
    {
        // Save the Filters
        SaveFilters(grid);
        // Clear the Flag by setting its value to False
        IsFiltering = false;
    }

    // At initial Load (when not is a PostBack)
    if (!IsPostBack)
    {
        // Restore the Filters
        RestoreFilters(grid);
    }
}
````
````VB
'Create a Global Flag with its value set to False
Private IsFiltering As Boolean = False

'When a Grid command is fired
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    'If the Command is for Filtering
    If e.CommandName = RadGrid.FilterCommandName OrElse e.CommandName = RadGrid.HeaderContextMenuFilterCommandName Then
        'Set the Flag's value to True
        IsFiltering = True
    End If
End Sub

'Before Rendering the Grid
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim grid = CType(sender, RadGrid)

    'If the flag is True
    If IsFiltering Then
        'Save the Filters
        SaveFilters(grid)
        'Clear the Flag by setting its value to False
        IsFiltering = False
    End If

    'At initial Load (when not is a PostBack)
    If Not IsPostBack Then
        'Restore the Filters
        RestoreFilters(grid)
    End If
End Sub
````

## Test this Solution

>caption RadGrid Markup Code

````ASP.NET
First <a href="https://www.google.com/">Navigate to Google</a> and then Navigate back to this page.
<br />
<br />
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" AllowFilteringByColumn="true" Width="800px"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnItemCommand="RadGrid1_ItemCommand"
    OnPreRender="RadGrid1_PreRender">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

>caption CodeBehind

````C#
// Data Binding
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}

// Create a Global Flag with its value set to False
private bool IsFiltering = false;

// When a Grid command is fired
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    // If the Command is for Filtering
    if (e.CommandName == RadGrid.FilterCommandName || e.CommandName == RadGrid.HeaderContextMenuFilterCommandName)
    {
        // Set the Flag's value to True
        IsFiltering = true;
    }
}

// Before Rendering the Grid
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var grid = (RadGrid)sender;
    // If the flag is True
    if (IsFiltering)
    {
        // Save the Filters
        SaveFilters(grid);
        // Clear the Flag by setting its value to False
        IsFiltering = false;
    }

    // At initial Load (when not is a PostBack)
    if (!IsPostBack)
    {
        // Restore the Filters
        RestoreFilters(grid);
    }
}

#region GridDataSource

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

#endregion

#region Save/Restore Functions

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

    GridFilters storedFilters = Session[grid.ID] as GridFilters;

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
#endregion

#region Models
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
#endregion
````
````VB
'Data Binding
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    CType(sender, RadGrid).DataSource = OrdersTable()
End Sub

'Create a Global Flag with its value set to False
Private IsFiltering As Boolean = False

'When a Grid command is fired
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    'If the Command is for Filtering
    If e.CommandName = RadGrid.FilterCommandName OrElse e.CommandName = RadGrid.HeaderContextMenuFilterCommandName Then
        'Set the Flag's value to True
        IsFiltering = True
    End If
End Sub

'Before Rendering the Grid
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim grid = CType(sender, RadGrid)

    'If the flag is True
    If IsFiltering Then
        'Save the Filters
        SaveFilters(grid)
        'Clear the Flag by setting its value to False
        IsFiltering = False
    End If

    'At initial Load (when not is a PostBack)
    If Not IsPostBack Then
        'Restore the Filters
        RestoreFilters(grid)
    End If
End Sub

#Region "GridDataSource"
Private Function OrdersTable() As DataTable
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dt.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
    dt.Columns.Add(New DataColumn("Freight", GetType(Decimal)))
    dt.Columns.Add(New DataColumn("ShipName", GetType(String)))
    dt.Columns.Add(New DataColumn("ShipCountry", GetType(String)))
    dt.PrimaryKey = New DataColumn() {dt.Columns("OrderID")}

    For i As Integer = 0 To 70 - 1
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

#End Region

#Region "Save/Restore Functions"

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

    grid.Rebind()
End Sub

#End Region

#Region "Models"
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

#End Region
````

## See Also
* [Basic Filtering (Demo)](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/basic-filtering/defaultcs.aspx)
* [Excel-like Filtering (Demo)](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/filtering/excel-like-filtering/defaultcs.aspx)
* [CheckList Filtering (Docs)]({%slug grid/functionality/filtering/checklist-filtering%})
* [Known Filter functions (Docs)]({%slug grid/functionality/filtering/overview%}#filter-functions)
* [Accessing Values and Controls (Docs)]({%slug grid/accessing-values-and-controls/overview%})
 
