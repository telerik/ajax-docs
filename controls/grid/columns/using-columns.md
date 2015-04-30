---
title: Using Columns
page_title: Using Columns | RadGrid for ASP.NET AJAX Documentation
description: Using Columns
slug: grid/columns/using-columns
tags: using,columns
published: True
position: 1
---

# Using Columns



## Column elements

The columns in a **GridTableView** contain a header, a set of items, and a footer:

## Header

The Header (**GridHeaderItem**) is the cell on the top of each grid column. Header cells always appear for all grid columns unless the **ShowHeader** property of the grid (or table view) is **False**. By default, the **ShowHeader** property for the grid and all its table views is **True**.The Header remains persistent when the pages of the grid change.

From Q2 2012 on the grid column headers can be grouped together under a multi-column header. You can find more info here: [Multicolumn Headers]({%slug grid/columns/multicolumn-headers%}).

You can customize the appearance of the header using the [RadGrid property builder]({%slug grid/design-time-/overview%}) or the **HeaderStyle** section of the RadGrid property pane. From the Q3 2013 Beta release the headers text can be rotated by assigning a **rgRotateHeader** class as demonstrated below.

````ASP.NET
<HeaderStyle CssClass="rgRotateHeader" />
````



The column header allows the user to perform the following special functions:

* If the **AllowSorting** property is **True**, users can use the header for [sorting]({%slug grid/functionality/sorting/overview%}) data based on the column value.

* If the **ShowGroupPanel** property is **True**, users can drag the header to [group data]({%slug grid/functionality/grouping/overview%}) based on the column value.

* If the **ClientSettings.AllowColumnsReorder** property is **True**, users can [reorder columns]({%slug grid/columns/reordering%}) by dragging the column header and dropping it in a new location.

* If the **ClientSettings.Resizing.AllowColumnResize** property is **True**, users can [resize columns]({%slug grid/columns/resizing%}) by dragging on the sides of the column header.

## Items

Column **Items** are the regular data cells of the grid. Neighboring items form a single [row]({%slug grid/rows/data-items%}).

Each [column type]({%slug grid/columns/column-types%}) that displays data has a property which is responsible for formatting the values in the items section of the column, using the formatting rules defined in ASP.NET. For example, if you have a **GridBoundColumn** with a **DataType** of "DateTime", setting the **DataFormatString** property to "{0:d}" causes it to display its value using the short date representation format).

When using a bound column populated with values of type **System.Double**, the contents with precision above 15 digits are automatically rounded. This can produce erratic behavior, for example when filtering. If this is a problem for your grid, you can use the **DataFormatString** to increase the precision of the bound column. This is illustrated in the code sample below:

````ASP.NET
<telerik:GridBoundColumn DataField="Value" HeaderText="Value" UniqueName="Value"
  SortExpression="Value" DataType="System.Double" DataFormatString="{0:G17}">
</telerik:GridBoundColumn>
````


The following MSDN articals provide additional information about formatting, format strings, and DateTime formatting:

* [Formatting Overview](http://msdn2.microsoft.com/en-us/library/26etazsy(vs.71).aspx)

* [Date and Time Format Strings](http://msdn2.microsoft.com/en-us/library/97x6twsz(vs.71).aspx)

## Footer

The Footer element of a column is similar to the Header element, but it is placed at the bottom of the grid. It cannot provide header-specific functions like reordering, resizing and sorting of columns. Rather, you can set the **FooterText** property of the column to display information about the column (such as summary information).

If you are using [column aggregates](http://demos.telerik.com/aspnet-ajax/grid/examples/groupby/groupfooter/defaultcs.aspx), these are automatically displayed in the footer.

To have a Footer row in your grid, set the **ShowFooter** property to **true**. Then you can customize the Footer appearance using the [RadGrid property builder]({%slug grid/design-time-/overview%}) or **FooterStyle** section of the **RadGrid** property pane.

## Column Operations

## Sorting

**RadGrid** supports sorting of column item elements. To enable sorting, you must set the **AllowSorting** property of the grid to **True**. You can disable the sorting feature for individual columns by setting their **AllowSorting** property to **False**.

Sorting is controlled by [sorting expressions]({%slug grid/functionality/sorting/sort-expressions%}) on the **GridTableView** object. You can specify the **SortExpressions** property collection declaratively to provide an initial sort order or manipulate the sorting expressions at runtime to alter the sort order of columns.

## Grouping

**RadGrid** can group its items based on the value of the items in a column. In addition to (or instead of) letting users group data using **GridGroupPanel**, you can group the data in the grid by setting the **GroupByExpressions** property of a table view in the grid. You can set the group-by expressions [declaratively]({%slug grid/functionality/grouping/group-by-expressions/declarative-definition%}) at design time, or [programatically]({%slug grid/functionality/grouping/group-by-expressions/programmatic-definition%}) in the code-behind.

## Filtering

**RadGrid** natively supports filtering of table columns for its master and detail tables. To enable or disable filtering, set the **AllowFilteringByColumn** property of the **RadGrid** or **GridTableView** control.

When filtering is enabled, each column displays an independent filter menu that allows filtering over all records in the table view. You can disable filtering for individual grid columns by setting their **AllowFiltering** property to **False**.

The available filtering expressions depend on the **DataType** property for each column. This property is set automatically based on the data source for each column.

For more information about filtering, see [Basic filtering]({%slug grid/functionality/filtering/overview%}).

## Aggregates

**RadGrid** can calculate aggregated values based on the values in the grid items. Use the **Aggregate** property of the column to specify the function that should be used to aggregate the column values. The aggregated value is displayed in the footer of the column when you set the **ShowFooter** property to **True**.

For more information about column aggregates, see [Column Aggregates](http://demos.telerik.com/aspnet-ajax/grid/examples/groupby/groupfooter/defaultcs.aspx).

## Client-side Operations

Some of the operations related to grid columns are performed client-side (without postback to the server). This can significantly optimize the grid performance. Client-side operations include [Resizing columns]({%slug grid/columns/resizing%}) and [Reordering columns]({%slug grid/columns/reordering%}) operations.

>note If you are enabling reordering and resizing functionality in the grid, the **ShowHeader** property must be **True** .
>


## Visibility and rendering of columns

The **Display**, **Visible**, and **ReadOnly** properties of a column let you control its visibility and rendering, as described below:

* **Display** concerns only the client-side appearance the column in browser mode. When **Display** is **False**, the column is rendered in the browser, but all the cells are styled with *display: none*. The **Display** property does not affect the appearance of the column editor in an edit form, but if the grid uses in-place editors, the column editor will not appear.

* **Visible** determines whether the column's cells are rendered in browser mode. When **Visible** is **False**, the column is not visible in browser mode because it is not rendered at all. The visible property does not affect the appearance of the column editor in an edit form, but if the grid uses in-place editors, the column editor will not appear.

* **ReadOnly** concerns whether the column editor is visible in edit mode. This property is only available for column types that allow editing. The ReadOnly property has no effect on whether the column appears in browser mode.

>note None of these properties can prevent you from accessing the column cells' contents server-side using the **UniqueName** of the column.
>


## Columns in Edit Mode

When the grid is in edit mode, users can edit the data in the columns in one of two ways:

* If the table view's **EditMode** property is "InPlace", the ;content of all cells in editable columns (columns that represent editable data that do not have **ReadOnly** set to **True**), changes into a column editor. For example, a cell in **GridBoundColumn** becomes a text box so that users can edit the text. For more information about in-place editing, see [In place]({%slug grid/data-editing/edit-mode/in-place%}).

* If the table view's Edit Mode is not "InPlace", the content of the cells remains the same, but an edit form that contains the column editors appears. For information about edit forms, see [Edit forms]({%slug grid/data-editing/edit-mode/edit-forms%}).

## Adding Columns Programmatically

You can programmatically add columns in the code-behind by adding column objects to the **Columns** property collection of **GridTableView**.

>caution When creating columns programatically, use the **Columns** property of the **GridTableView** , *NOT* its **RenderColumns** or **AutoGeneratedColumns** property. Adding columns to one of the latter two collections will not affect the appearance of the grid.
>


When adding columns programmatically, you must add the created columns to the **Columns** collection at a different point, depending on whether you are instantiating the column on **PageInit** or **PageLoad**.

When adding columns using on **PageInit**, you must add the columns to the **Columns** collection *after* their properties have been set:



````C#
GridBoundColumn boundColumn = new GridBoundColumn();
boundColumn.UniqueName = "CustomerID";
boundColumn.DataField = "CustomerID";
boundColumn.HeaderText = "CustomerID";
RadGrid1.MasterTableView.Columns.Add(boundColumn);
````
````VB
Dim boundColumn As GridBoundColumnboundColumn = New GridBoundColumn()
boundColumn.UniqueName = "CustomerID"
boundColumn.DataField = "CustomerID"
boundColumn.HeaderText = "CustomerID"
RadGrid1.MasterTableView.Columns.Add(boundColumn)
````


When adding columns on **PageLoad** (when **IsPostBack** is **False**), the columns should be added to the **Columns** collection *before* setting their properties:



````C#
GridBoundColumn boundColumn = new GridBoundColumn();
RadGrid1.MasterTableView.Columns.Add(boundColumn);
boundColumn.UniqueName = "CustomerID";
boundColumn.DataField = "CustomerID";
boundColumn.HeaderText = "CustomerID";
````
````VB
Dim boundColumn As GridBoundColumnboundColumn = New GridBoundColumn()
RadGrid1.MasterTableView.Columns.Add(boundColumn)
boundColumn.UniqueName = "CustomerID"
boundColumn.DataField = "CustomerID"
boundColumn.HeaderText = "CustomerID"
````


For more information about creating columns dynamically, see [Programmatic creation]({%slug grid/defining-structure/creating-a-radgrid-programmatically%}).[Creating a RadGrid Programmatically]({%slug grid/defining-structure/creating-a-radgrid-programmatically%})

>note The **Columns** properties of the **RadGrid** control and of the grids **MasterTableView** are equivalent. Accessing or modifying either of these collections has the same effect as accessing or modifying the other.
>


## Customizing columns programmatically

You can change the properties of columns that are added at design time. How you do this depends on whether the columns are auto-generated, or added declaratively.

## Auto-generated columns

You can customize the properties of auto-generated columns at runtime by providing a handler for the grid's **ColumnCreated** event. In the event handler, cast the column to the appropriate type and set its attributes. The following example shows this technique used to set the **ReadOnly** and **DataFormatString** properties for a column with a **UniqueName** of "BirthDate" which has DateTime **DataType**:



````C#
protected void RadGrid1_ColumnCreated(object sender, Telerik.Web.UI.GridColumnCreatedEventArgs e)
{
    if (e.Column.UniqueName == "BirthDate")
    {
        GridBoundColumn boundColumn = e.Column as GridBoundColumn;
        boundColumn.ReadOnly = true;
        boundColumn.DataFormatString = "{0:d}";
    }
}
````
````VB
Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridColumnCreatedEventArgs) Handles RadGrid1.ColumnCreated
    If e.Column.UniqueName = "BirthDate" Then
        Dim boundColumn As GridBoundColumn = CType(e.Column, GridBoundColumn)
        boundColumn.ReadOnly = True
        boundColumn.DataFormatString = "{0:d}"
    End If
End Sub
````


>note Note that by default the header text of the auto generated columns is the name of the data field split by capital letters. To control this behavior you can use the **EnableSplitHeaderText** property. Its default value is true. If you set it to false, the header text will be the same as the name of the data field.
>


## Declarative columns

To change the settings for declarative columns at runtime, write a handler for the **PreRender** event of the grid, traverse the **Columns** collection to locate the column of interest, and alter its properties. You must then rebind the grid by calling its **Rebind**() method to reflect the changes:



````C#
protected void RadGrid1_PreRender(object sender, System.EventArgs e)
{
    foreach (GridColumn column in RadGrid1.Columns)
    {
        if (column.UniqueName == "BirthDate")
        {
            (column as GridBoundColumn).ReadOnly = true;
            (column as GridBoundColumn).DataFormatString = "{0:D}";
            break;
        }
    }
    RadGrid1.Rebind();
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadGrid1.PreRender
    For Each column As GridColumn In RadGrid1.Columns
        If (column.UniqueName = "BirthDate") Then
            CType(column, GridBoundColumn).ReadOnly = True
            CType(column, GridBoundColumn).DataFormatString = "{0:D}"
            Exit For
        End If
    Next
    RadGrid1.Rebind()
End Sub
````


For more information about the auto-generated and declarative columns collections, see [Getting familiar with server-side API]({%slug grid/server-side-programming/overview%}).

## See Also

 * [Creating a RadGrid Programmatically]({%slug grid/defining-structure/creating-a-radgrid-programmatically%})
