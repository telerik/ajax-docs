---
title: Telerik.Web.UI.TreeListDataColumn
page_title: Telerik.Web.UI.TreeListDataColumn
description: Telerik.Web.UI.TreeListDataColumn
---

# Telerik.Web.UI.TreeListDataColumn

The base abstract class representing the bindable columns in Telerik.Web.UI.RadTreeList

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListColumn : IComparable
* Telerik.Web.UI.TreeListDataColumn

## Properties

###  AllowSorting `Boolean`

Gets or sets a whether the column data can be sorted.

###  ColumnType `String`

Returns a string which represents the type of the current column.

###  DataField `String`

Gets or sets the field name from the specified data source to bind to the TreeListDataColumn.

###  DataType `Type`

Gets or sets (see the Remarks) the type of the data from the DataField as it
                was set in the DataSource.

#### Remarks
The DataType property supports the following base .NET Framework data
                types:BooleanByteCharDateTimeDecimalDoubleInt16Int32Int64SByteSingleStringTimeSpanUInt16UInt32UInt64

###  DesignMode `Boolean`

Indicates if the control is in design-mode.

###  Display `Boolean`

Gets or sets a value indicating whether the cells corresponding to a column would be rendered with a 'display:none' style attribute (end-user-not-visible).
            To completely prevent cells from rendering, set the  property to false, instead of the Display property.

###  FooterText `String`

Use the FooterText property to specify your own or determine the current
            text for the footer section of the column.

###  HeaderStyle `TableItemStyle`

Style of the cell in the header item of the RadTreeList, corresponding to the column.

###  HeaderText `String`

Gets or sets the text which will appear in the header cell of the column.

###  HeaderTooltip `String`

Gets or sets the tooltip of the header cell.

###  ItemStyle `TableItemStyle`

Style of the cell in the item of the RadTreeList, corresponding to the column.

###  MaxWidth `Unit`

Gets or sets maximum width of the column. Used when resizing.

###  MinWidth `Unit`

Gets or sets minimum width of the column. Used when resizing.

###  OrderIndex `Int32`

Gets or sets the order index of column used when reordering the columns.

###  Owner `RadTreeList`

Gets a reference to the  object
            to which the column belongs

###  Reorderable `Boolean`

Gets or sets a value indicating whether the column can be reordered client-side.

###  Resizable `Boolean`

Gets or sets a value indicating whether the column can be resized client-side.
            You can use this property, by setting it to false, to disable resizing for a particular
            column, while preserving this functionality for all the other columns.

###  Sortable `Boolean`

Should override if sorting will be disabled

###  SortExpression `String`

The string representing a filed-name from the DataSource that should be used when grid sorts by this column.

###  UniqueName `String`

Each column in Telerik RadTreeList has an UniqueName
            property (string). This property is assigned automatically by the designer (or the
            first time you want to access the columns if they are built dynamically).

###  Visible `Boolean`

Gets or sets a value indicating if the column and all corresponding cells would be rendered.

## Methods

###  GetSortExpression

By default returns the SortExpression of the column. If the SortExpression is not set explicitly, it would be calculated, based on the
            DataField of the column.

#### Returns

`System.String` 

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

