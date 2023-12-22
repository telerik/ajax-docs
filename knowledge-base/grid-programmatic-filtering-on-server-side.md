---
title: Programmatic filtering on Sever-side
description: the Telerik WebForms Grid programmatically on Sever-side (in CodeBehind) or apply a default filter on initial load.
type: how-to
page_title: Programmatic filtering on Server-side | RadGrid
slug: grid-programmatic-filtering-on-server-side
tags: grid, programmatic, filtering, server-side
previous_url: controls/grid/functionality/filtering/how-to/apply-default-filter-on-initial-load,controls/grid/how-to/filtering/apply-default-filter-on-initial-load
res_type: kb
---

## Environment

<table>
  <tr>
    <td>Product</td>
    <td>Telerik WebForms Grid for ASP.NET AJAX</td>
  </tr>
</table>

## Description

How can I filter the Telerik WebForms Grid programmatically on Sever-side (in CodeBehind) or apply a default filter on initial load?

## Solution

To filter the Grid programmatically on Server-side, you will need to populate the configure the Columns and trigger the **Filter** command by using the `FireCommandEvent()` method.

In this article, we will show examples for each Filter Type:
- [Classic](#classic)
- [CheckList](#checklist)
- [Combined](#combined)
- [HeaderContext](#headercontext)

Example to apply default filter at initial load
- [Apply Default Filter on Initial Load](#apply-default-filter-on-initial-load)

### Classic

When using the `FilterType="Classic"`, you will need to:
- Set the column's `CurrentFilterFunction` property to any function other than `NoFilter`
- Access the column's filter Control within the `GridHeaderItem` and set its value to the value you would like to filter.
- Trigger the filter command using the `FireCommandEvent(commandName, arguments)` method of the `GridFilteringItem` object.
  - The `commandName` parameter is the name of the command to be triggered, in this case `Filter`. You can also use the constant `RadGrid.FilterCommandName` which has the same value.
  - The `arguments` parameter is a `Pair` object where the `First` property requires the column's UniqueName and the `Second` the `string` representation of the column's filter function.

>note The Filter command can only be triggered for one column at a time, however, this will filter multiple columns if they are all prepared in the same way as described above.

Example

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridTableView tableView = RadGrid1.MasterTableView;

    GridFilteringItem filteringItem = tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault() as GridFilteringItem;

    if (filteringItem != null)
    {
        (filteringItem["OrderID"].Controls[0] as RadNumericTextBox).Value = 1;
        tableView.GetColumnSafe("OrderID").CurrentFilterFunction = GridKnownFunction.EqualTo;

        (filteringItem["ShipName"].Controls[0] as TextBox).Text = "Name 1";
        tableView.GetColumnSafe("ShipName").CurrentFilterFunction = GridKnownFunction.Contains;

        (filteringItem["ShipCountry"].Controls[0] as TextBox).Text = "Country 1";
        tableView.GetColumnSafe("ShipCountry").CurrentFilterFunction = GridKnownFunction.StartsWith;

        string columnUniqueName = "OrderID";
        string columnFilterFunction = GridKnownFunction.EqualTo.ToString();

        Pair filterArgs = new Pair()
        {
            First = columnUniqueName,
            Second = columnFilterFunction
        };

        filteringItem.FireCommandEvent(RadGrid.FilterCommandName, filterArgs);
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim tableView As GridTableView = RadGrid1.MasterTableView

    Dim filteringItem As GridFilteringItem = TryCast(tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault(), GridFilteringItem)

    If filteringItem IsNot Nothing Then

        CType(filteringItem("OrderID").Controls(0), RadNumericTextBox).Value = 1
        tableView.GetColumnSafe("OrderID").CurrentFilterFunction = GridKnownFunction.EqualTo

        CType(filteringItem("ShipName").Controls(0), TextBox).Text = "Name 1"
        tableView.GetColumnSafe("ShipName").CurrentFilterFunction = GridKnownFunction.Contains

        CType(filteringItem("ShipCountry").Controls(0), TextBox).Text = "Country 1"
        tableView.GetColumnSafe("ShipCountry").CurrentFilterFunction = GridKnownFunction.StartsWith

        Dim columnUniqueName As String = "OrderID"
        Dim columnFilterFunction As String = GridKnownFunction.EqualTo.ToString()

        Dim filterArgs As Pair = New Pair() With {
            .First = columnUniqueName,
            .Second = columnFilterFunction
        }

        filteringItem.FireCommandEvent(RadGrid.FilterCommandName, filterArgs)
    End If
End Sub
````

### CheckList

When using the `FilterType="CheckList"`, you will need to:

- Populate the column's `ListOfFilterValues` property with the desired values 
- Set the column's `CurrentFilterFunction` property to `GridKnownFunction.EqualTo`
  >important `FilterType="CheckList"` only works with the filter functions `GridKnownFunction.EqualTo` (to filter) and `GridKnownFunction.NoFilter` (to clear the filter).
- Trigger the Filter command using the `FireCommandEvent(commandName, arguments)` method of the `GridFilteringItem` object.
  - The `commandName` parameter is the name of the command to be triggered, in this case `Filter`. You can also use the constant `RadGrid.FilterCommandName` which has the same value.
  - The `arguments` parameter is a `Pair` object where the `First` property requires the column's UniqueName, the `Second` parameter requires the `string` representation of the column's filter function.

>note The Filter command can only be triggered for one column at a time, however, this will filter multiple columns if they are all prepared in the same way as described above.

Example

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridTableView tableView = RadGrid1.MasterTableView;

    tableView.GetColumnSafe("OrderID").ListOfFilterValues = new string[] { "1", "2", "3" };
    tableView.GetColumnSafe("OrderID").CurrentFilterFunction = GridKnownFunction.EqualTo;

    tableView.GetColumnSafe("ShipName").ListOfFilterValues = new string[] { "Name 1", "Name 2", "Name 3" };
    tableView.GetColumnSafe("ShipName").CurrentFilterFunction = GridKnownFunction.EqualTo;

    tableView.GetColumnSafe("ShipCountry").ListOfFilterValues = new string[] { "Country 1", "Country 2", "Country 3" };
    tableView.GetColumnSafe("ShipCountry").CurrentFilterFunction = GridKnownFunction.EqualTo;

    GridFilteringItem filteringItem = tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault() as GridFilteringItem;

    if (filteringItem != null)
    {
        string columnUniqueName = "ShipName";
        string columnFilterFunction = GridKnownFunction.EqualTo.ToString();

        Pair checkListFilterArgs = new Pair()
        {
            First = columnUniqueName,
            Second = columnFilterFunction
        };

        filteringItem.FireCommandEvent(RadGrid.FilterCommandName, checkListFilterArgs);
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim tableView As GridTableView = RadGrid1.MasterTableView

    tableView.GetColumnSafe("OrderID").ListOfFilterValues = New String() {"1", "2", "3"}
    tableView.GetColumnSafe("OrderID").CurrentFilterFunction = GridKnownFunction.EqualTo

    tableView.GetColumnSafe("ShipName").ListOfFilterValues = New String() {"Name 1", "Name 2", "Name 3"}
    tableView.GetColumnSafe("ShipName").CurrentFilterFunction = GridKnownFunction.EqualTo

    tableView.GetColumnSafe("ShipCountry").ListOfFilterValues = New String() {"Country 1", "Country 2", "Country 3"}
    tableView.GetColumnSafe("ShipCountry").CurrentFilterFunction = GridKnownFunction.EqualTo

    Dim filteringItem As GridFilteringItem = TryCast(tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault(), GridFilteringItem)

    If filteringItem IsNot Nothing Then
        Dim columnUniqueName As String = "ShipName"
        Dim columnFilterFunction As String = GridKnownFunction.EqualTo.ToString()

        Dim checkListFilterArgs As Pair = New Pair() With {
            .First = columnUniqueName,
            .Second = columnFilterFunction
        }

        filteringItem.FireCommandEvent(RadGrid.FilterCommandName, checkListFilterArgs)
    End If
End Sub
````

### Combined

The `FilterType="Combined"` is the combination of the `Classic` and `CheckList` filter types. Check out the [CheckList](#checklist) and [Classic](#classic) sections for details.

>note The Filter command can only be triggered for one column at a time, however, this will filter multiple columns if they are all prepared in the same way as described above.

Example

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridTableView tableView = RadGrid1.MasterTableView;
        
    GridFilteringItem filteringItem = tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault() as GridFilteringItem;

    if (filteringItem != null)
    {
        // CheckList
        GridColumn orderIdColumn = tableView.GetColumnSafe("OrderID");
        orderIdColumn.ListOfFilterValues = new string[] { "1", "2", "3" };
        orderIdColumn.CurrentFilterFunction = GridKnownFunction.EqualTo;

        // Classic
        GridColumn shipNameColumn = tableView.GetColumnSafe("ShipName");
        shipNameColumn.CurrentFilterFunction = GridKnownFunction.Contains;

        TextBox shipNameFilterControl = (TextBox) filteringItem[shipNameColumn.UniqueName].Controls[0];
        shipNameFilterControl.Text = "Name 1";

        // Filter Args
        Pair filterArgs = new Pair()
        {
            First = shipNameColumn.UniqueName,
            Second = shipNameColumn.CurrentFilterFunction.ToString()
        };

        // Trigger the Filter Command
        filteringItem.FireCommandEvent(RadGrid.FilterCommandName, filterArgs);
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)

    Dim tableView As GridTableView = RadGrid1.MasterTableView

    Dim filteringItem As GridFilteringItem = TryCast(tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault(), GridFilteringItem)

    If filteringItem IsNot Nothing Then

        'CheckList
        Dim orderIdColumn As GridColumn = tableView.GetColumnSafe("OrderID")
        orderIdColumn.ListOfFilterValues = New String() {"1", "2", "3"}
        orderIdColumn.CurrentFilterFunction = GridKnownFunction.EqualTo

        'Classic
        Dim shipNameColumn As GridColumn = tableView.GetColumnSafe("ShipName")
        shipNameColumn.CurrentFilterFunction = GridKnownFunction.Contains
        Dim shipNameFilterControl As TextBox = CType(filteringItem(shipNameColumn.UniqueName).Controls(0), TextBox)
        shipNameFilterControl.Text = "Name 1"
    
        'Filter Args
        Dim filterArgs As Pair = New Pair() With {
            .First = shipNameColumn.UniqueName,
            .Second = shipNameColumn.CurrentFilterFunction.ToString()
        }

        'Trigger the Filter Command
        filteringItem.FireCommandEvent(RadGrid.FilterCommandName, filterArgs)
    End If
End Sub
````

### HeaderContext

When using the `FilterType="HeaderContext"`, the ContextMenu provides two options for filtering:

- **Option 1**: the `CheckBoxList` with Filter Values
- **Option 2**: located below `CheckBoxList` where you can use two different values and filter functions to create different combinations of filtering with two values. 

To filter by the **Option 1**:
- Populate the column's `ListOfFilterValues` property with an array of `string`.  
- Trigger the Filter command using the `FireCommandEvent(commandName, arguments)` method of the `GridHeaderItem` object.

To filter by the **Option 2**:
- Set the column's `CurrentFilterValue` and `CurrentFilterFunction` properties (for the first filter option)
- Set the column's `AndCurrentFilterValue` and `AndCurrentFilterFunction` properties (for the first filter option)
- Trigger the Filter command using the `FireCommandEvent(commandName, arguments)` method of the `GridHeaderItem` object.

>important You can only filter a column by one of the two filtering options at a time, however, you can use different options on different columns.

The FireCommandEvent() method's parameters are the same in both scenarios:
  - The `commandName` parameter is the name of the command to be triggered, in this case `HeaderContextMenuFilter`. You can also use the constant `RadGrid.HeaderContextMenuFilterCommandName` which has the same value.
  - The `arguments` parameter is a `Triplet` object where:
    - `First` property requires the column's UniqueName
    - `Second` property is a `Pair` object where:
      - `First` property requires the string representation of the column's `CurrentFilterFunction` property value.
      - `Second` property requires column's `CurrentFilterValue` property value.
    - `Third` property is a `Pair` object where:
      - `First` property requires the string representation of the column's `AndCurrentFilterFunction` property value.
      - `Second` property requires column's `AndCurrentFilterValue` property value.

>note The Filter command can only be triggered for one column at a time, however, this will filter multiple columns if they are all prepared in the same way as described above.

Example

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridTableView tableView = RadGrid1.MasterTableView;

    // Filter the OrderID by Option 1
    tableView.GetColumnSafe("OrderID").ListOfFilterValues = new string[] { "1", "2", "3" };

    // Filter ShipName by Option 2
    GridColumn shipNameColumn = tableView.GetColumnSafe("ShipName");

    // First Filter Condition
    shipNameColumn.CurrentFilterValue = "Name 1";
    shipNameColumn.CurrentFilterFunction = GridKnownFunction.Contains;

    // Second Filter Condition
    shipNameColumn.AndCurrentFilterValue = "Name 2";
    shipNameColumn.AndCurrentFilterFunction = GridKnownFunction.Contains;

    GridHeaderItem headerItem = tableView.GetItems(GridItemType.Header).FirstOrDefault() as GridHeaderItem;

    if (headerItem != null)
    {
        string columnUniqueName = shipNameColumn.UniqueName;

        // First Filter Condition
        string currentFilterFunction = shipNameColumn.CurrentFilterFunction;
        string currentFilterValue = shipNameColumn.CurrentFilterValue;
        
        // Second Filter Condition
        string andCurrentFilterFunction = shipNameColumn.AndCurrentFilterFunction;
        string andCurrentFilterValue = shipNameColumn.AndCurrentFilterFunction;

        Triplet headerContextFilterArgs = new Triplet()
        {
            First = columnUniqueName,
            Second = new Pair()
            {
                First = currentFilterFunction,
                Second = currentFilterValue
            },
            Third = new Pair()
            {
                First = andCurrentFilterFunction,
                Second = andCurrentFilterValue
            }
        };
        headerItem.FireCommandEvent(RadGrid.HeaderContextMenuFilterCommandName, headerContextFilterArgs);
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)

    Dim tableView As GridTableView = RadGrid1.MasterTableView

    'Filter the OrderID by Option 1
    tableView.GetColumnSafe("OrderID").ListOfFilterValues = New String() {"1", "2", "3"}

    'Filter ShipName by Option 2
    Dim shipNameColumn As GridColumn = tableView.GetColumnSafe("ShipName")

    'First Filter Condition
    shipNameColumn.CurrentFilterValue = "Name 1"
    shipNameColumn.CurrentFilterFunction = GridKnownFunction.Contains

    'Second Filter Condition
    shipNameColumn.AndCurrentFilterValue = "Name 2"
    shipNameColumn.AndCurrentFilterFunction = GridKnownFunction.Contains

    Dim headerItem As GridHeaderItem = TryCast(tableView.GetItems(GridItemType.Header).FirstOrDefault(), GridHeaderItem)

    If headerItem IsNot Nothing Then
        Dim columnUniqueName As String = shipNameColumn.UniqueName
        'First Filter Condition
        Dim currentFilterFunction As String = shipNameColumn.CurrentFilterFunction
        Dim currentFilterValue As String = shipNameColumn.CurrentFilterValue
        'Second Filter Condition
        Dim andCurrentFilterFunction As String = shipNameColumn.AndCurrentFilterFunction
        Dim andCurrentFilterValue As String = shipNameColumn.AndCurrentFilterFunction

        Dim headerContextFilterArgs As Triplet = New Triplet() With {
            .First = columnUniqueName,
            .Second = New Pair() With {
                .First = currentFilterFunction,
                .Second = currentFilterValue
            },
            .Third = New Pair() With {
                .First = andCurrentFilterFunction,
                .Second = andCurrentFilterValue
            }
        }
        headerItem.FireCommandEvent(RadGrid.HeaderContextMenuFilterCommandName, headerContextFilterArgs)
    End If
End Sub
````

### Apply Default Filter on Initial Load

In case you would like to apply a default filter at initial load, you can take the code that filters the Grid and place it inside the Page's or the Grid's PreRender event.

Check out the following sections to learn how to filter the Grid depending on the selected `FilterType`
- [Classic](#classic)
- [CheckList](#checklist)
- [Combined](#combined)
- [HeaderContext](#headercontext)

>important Use the IsPostBack condition to limit code execution only when the page loads at the first time, so users change the filters without those being reset to the initial values.

Example

````C#
protected void RadGrid_PreRender(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadGrid grid = (RadGrid) sender;

        GridTableView tableView = grid.MasterTableView;

        tableView.GetColumnSafe("OrderID").ListOfFilterValues = new string[] { "1", "2", "3" };
        tableView.GetColumnSafe("OrderID").CurrentFilterFunction = GridKnownFunction.EqualTo;

        tableView.GetColumnSafe("ShipName").ListOfFilterValues = new string[] { "Name 1", "Name 2", "Name 3" };
        tableView.GetColumnSafe("ShipName").CurrentFilterFunction = GridKnownFunction.EqualTo;

        tableView.GetColumnSafe("ShipCountry").ListOfFilterValues = new string[] { "Country 1", "Country 2", "Country 3" };
        tableView.GetColumnSafe("ShipCountry").CurrentFilterFunction = GridKnownFunction.EqualTo;

        GridFilteringItem filteringItem = tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault() as GridFilteringItem;

        if (filteringItem != null)
        {
            string columnUniqueName = "ShipName";
            string columnFilterFunction = GridKnownFunction.EqualTo.ToString();

            Pair checkListFilterArgs = new Pair()
            {
                First = columnUniqueName,
                Second = columnFilterFunction
            };

            filteringItem.FireCommandEvent(RadGrid.FilterCommandName, checkListFilterArgs);
        }
    }
}
````
````VB
Protected Sub RadGrid_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then

        Dim grid As RadGrid = CType(sender, RadGrid)
        Dim tableView As GridTableView = grid.MasterTableView

        tableView.GetColumnSafe("OrderID").ListOfFilterValues = New String() {"1", "2", "3"}
        tableView.GetColumnSafe("OrderID").CurrentFilterFunction = GridKnownFunction.EqualTo

        tableView.GetColumnSafe("ShipName").ListOfFilterValues = New String() {"Name 1", "Name 2", "Name 3"}
        tableView.GetColumnSafe("ShipName").CurrentFilterFunction = GridKnownFunction.EqualTo

        tableView.GetColumnSafe("ShipCountry").ListOfFilterValues = New String() {"Country 1", "Country 2", "Country 3"}
        tableView.GetColumnSafe("ShipCountry").CurrentFilterFunction = GridKnownFunction.EqualTo

        Dim filteringItem As GridFilteringItem = TryCast(tableView.GetItems(GridItemType.FilteringItem).FirstOrDefault(), GridFilteringItem)

        If filteringItem IsNot Nothing Then
            Dim columnUniqueName As String = "ShipName"
            Dim columnFilterFunction As String = GridKnownFunction.EqualTo.ToString()

            Dim checkListFilterArgs As Pair = New Pair() With {
            .First = columnUniqueName,
            .Second = columnFilterFunction
        }

            filteringItem.FireCommandEvent(RadGrid.FilterCommandName, checkListFilterArgs)
        End If

    End If
End Sub
````

 