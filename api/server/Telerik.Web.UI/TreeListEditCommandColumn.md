---
title: Telerik.Web.UI.TreeListEditCommandColumn
page_title: Telerik.Web.UI.TreeListEditCommandColumn
description: Telerik.Web.UI.TreeListEditCommandColumn
---

# Telerik.Web.UI.TreeListEditCommandColumn

Represents a column of buttons firing data-editing commands (Edit, InitInsert, PeformInsert, Update, Cancel).

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.TreeListColumn
* Telerik.Web.UI.TreeListEditCommandColumn

## Properties

###  ShowAddButton `Boolean`

Gets or sets a value indicating whether the Add Record button will be shown.

###  ShowEditButton `Boolean`

Gets or sets a value indicating whether the Edit button will be shown.

###  ButtonType `TreeListButtonColumnType`

Gets or sets a value indicating the type of the button that will be rendered. 
            The type should be one of the specified by the  enumeration.

###  UniqueName `String`

Gets or sets a unique name for this column. The unique name can be used to
            reference particular columns, or cells within grid rows.

###  CancelText `String`

Gets or sets the text of the Cancel button in the edited items.

###  EditText `String`

Gets or sets the text value of the Edit button in the column cells.

###  UpdateText `String`

Gets or sets the text of the Update button in the edited items.

###  AddRecordText `String`

Gets or sets the text of the Add New Record button in data items.

###  InsertText `String`

Gets or sets the text of the Insert button in the insert items.

###  AddRecordImageUrl `String`

Gets or sets the URL of the image for the Add Record button when 
             is set to ImageButton.

###  InsertImageUrl `String`

Gets or sets the URL of the image for the Insert button when 
             is set to ImageButton.

###  UpdateImageUrl `String`

Gets or sets the URL of the image for the Update button when 
             is set to ImageButton.

###  EditImageUrl `String`

Gets or sets the URL of the image for the Edit button when 
             is set to ImageButton.

###  CancelImageUrl `String`

Gets or sets the URL of the image for the Cancel button when 
             is set to ImageButton.

###  ToolTip `String`

Gets or sets the title attribute that will be applied to the buttons.

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

Initializes the cells of the edit command column.

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

A TableCell which will hold the content.

#### columnIndex `System.Int32`

An integer value representing the position of the column.

#### inItem `Telerik.Web.UI.TreeListItem`

A TreeListItem which will hold the current column cell.

#### Returns

`System.Void` 

###  InitializeEditItemCell

Initializes the cells of the edit command column when in edit mode.

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

A TableCell which will hold the content.

#### inItem `Telerik.Web.UI.TreeListEditableItem`

The TreeListEditableItem which will hold the current cell.

#### Returns

`System.Void` 

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

