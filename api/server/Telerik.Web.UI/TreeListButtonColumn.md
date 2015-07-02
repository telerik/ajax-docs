---
title: Telerik.Web.UI.TreeListButtonColumn
page_title: Telerik.Web.UI.TreeListButtonColumn
description: Telerik.Web.UI.TreeListButtonColumn
---

# Telerik.Web.UI.TreeListButtonColumn

A column type for the RadTreeList control that displays a button 
            in each corresponding cell inside all rendered 
            Telerik.Web.UI.TreeListDataItem instances.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.TreeListColumn
* Telerik.Web.UI.TreeListButtonColumn

## Properties

###  ButtonType `TreeListButtonColumnType`

Gets or sets a value indicating the type of the button that will be rendered. 
            The type should be one of the specified by the  enumeration.

###  CommandName `String`

Gets or sets a value defining the name of the command that will be fired when a button in this column is clicked.

###  CommandArgument `String`

Gets or sets an optional parameter passed to the Command event along with the
            associated

###  ConfirmTextFormatString `String`

Gets or sets a string, specifying the FormatString of the ConfirmText.

###  ConfirmTitle `String`

Gets or sets the title that will be shown on the RadWindow confirmation dialog when a button
            in this column is clicked.

###  ConfirmText `String`

Gets or sets the text that will be shown on the confirmation dialog when a button
            in this column is clicked. The prompt is automatically enabled when this property is
            set.

###  ConfirmTextFields `String`

Gets or sets a string, representing a comma-separated enumeration of DataFields
            from the data source, which will be applied to the formatting specified in the ConfirmTextFormatString property.

###  ConfirmDialogType `TreeListConfirmDialogType`

Gets or sets what kind of confirm dialog will be used in a .

###  ConfirmDialogWidth `Unit`

Gets or sets the width of the Confirm Dialog (if it is a RadWindow)

###  ConfirmDialogHeight `Unit`

Gets or sets the height of the Confirm Dialog (if it is a RadWindow)

###  Text `String`

Gets or sets a value indicating the text that will be shown for a button.

###  ImageUrl `String`

Gets or sets a value indicating the URL for the image that will be used in a
            Image button.  should be set to
            ImageButton.

###  ButtonCssClass `String`

Gets or sets the CssClass of the button

###  DataTextField `String`

Gets or sets a value representing a field from the specified data source. 
            The Text property of the rendered button will then be bound to this field.

###  DataTextFormatString `String`

Gets or sets the string that specifies the formatting applied to the value bound to the Text property.

###  ToolTip `String`

Gets or sets the tooltip for each of buttons.

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

