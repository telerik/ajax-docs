---
title: Telerik.Web.UI.TreeListSelectColumn
page_title: Telerik.Web.UI.TreeListSelectColumn
description: Telerik.Web.UI.TreeListSelectColumn
---

# Telerik.Web.UI.TreeListSelectColumn

Displays a Checkboxcontrol for each item in the column. This
            allows you to select TreeList items automatically when you change the status of
            the checkbox to checked.

#### Remarks
If you choose AllowMultiItemSelection = truefor the TreeList, a
            checkbox will be displayed in the column header to toggle the checked/selected stated
            of the items simultaneously (according to the state of that checkbox in the
            header).To enable this feature you need to turn on the client selection of the grid
            (ClientSettings -&gt; Selecting -&gt; AllowItemSelection = true).

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListColumn : IComparable
* Telerik.Web.UI.TreeListSelectColumn

## Properties

###  ToolTip `String`

Gets or sets the tooltip of each select checkbox

###  Owner `RadTreeList`

Gets a reference to the  object
            to which the column belongs

###  DesignMode `Boolean`

Indicates if the control is in design-mode.

###  ColumnType `String`

Returns a string which represents the type of the current column.

###  HeaderText `String`

Gets or sets the text which will appear in the header cell of the column.

###  HeaderTooltip `String`

Gets or sets the tooltip of the header cell.

###  FooterText `String`

Use the FooterText property to specify your own or determine the current
            text for the footer section of the column.

###  UniqueName `String`

Each column in Telerik RadTreeList has an UniqueName
            property (string). This property is assigned automatically by the designer (or the
            first time you want to access the columns if they are built dynamically).

###  HeaderStyle `TableItemStyle`

Style of the cell in the header item of the RadTreeList, corresponding to the column.

###  ItemStyle `TableItemStyle`

Style of the cell in the item of the RadTreeList, corresponding to the column.

###  Visible `Boolean`

Gets or sets a value indicating if the column and all corresponding cells would be rendered.

###  Sortable `Boolean`

Should override if sorting will be disabled

###  Resizable `Boolean`

Gets or sets a value indicating whether the column can be resized client-side.
            You can use this property, by setting it to false, to disable resizing for a particular
            column, while preserving this functionality for all the other columns.

###  Reorderable `Boolean`

Gets or sets a value indicating whether the column can be reordered client-side.

###  MinWidth `Unit`

Gets or sets minimum width of the column. Used when resizing.

###  MaxWidth `Unit`

Gets or sets maximum width of the column. Used when resizing.

###  Display `Boolean`

Gets or sets a value indicating whether the cells corresponding to a column would be rendered with a 'display:none' style attribute (end-user-not-visible).
            To completely prevent cells from rendering, set the  property to false, instead of the Display property.

###  OrderIndex `Int32`

Gets or sets the order index of column used when reordering the columns.

###  SortExpression `String`

The string representing a filed-name from the DataSource that should be used when grid sorts by this column.

## Methods

###  InitializeCell

Initializes one by one the cells which belong to the column. 
            These could be data, header and footer cells.

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

The cell which will be set up.

#### columnIndex `System.Int32`

The index of the column to which the cell belongs.

#### inItem `Telerik.Web.UI.TreeListItem`

The TreeListItem to which the cell will be added.

#### Returns

`System.Void` 

###  PrepareCell

Prepares the cell of the given item when the treelist is rendered.

#### Returns

`System.Void` 

###  CompareTo

#### Returns

`System.Int32` 

###  GetSortExpression

By default returns the SortExpression of the column. If the SortExpression is not set explicitly, it would be calculated, based on the
            DataField of the column.

#### Returns

`System.String` 

