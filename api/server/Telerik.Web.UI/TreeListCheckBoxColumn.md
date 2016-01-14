---
title: Telerik.Web.UI.TreeListCheckBoxColumn
page_title: Telerik.Web.UI.TreeListCheckBoxColumn
description: Telerik.Web.UI.TreeListCheckBoxColumn
---

# Telerik.Web.UI.TreeListCheckBoxColumn

A column type for the RadTreeList control that displays a CheckBox 
            in each corresponding cell inside all rendered 
            Telerik.Web.UI.TreeListDataItem instances.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListColumn : IComparable
* Telerik.Web.UI.TreeListDataColumn
* Telerik.Web.UI.TreeListEditableColumn
* Telerik.Web.UI.TreeListCheckBoxColumn

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

###  DefaultInsertValue `String`

Gets or sets the default value for this column's editor when a new item is inserted in RadTreeList.

###  DesignMode `Boolean`

Indicates if the control is in design-mode.

###  Display `Boolean`

Gets or sets a value indicating whether the cells corresponding to a column would be rendered with a 'display:none' style attribute (end-user-not-visible).
            To completely prevent cells from rendering, set the  property to false, instead of the Display property.

###  EditFormColumnIndex `Int32`

Specifies the vertical column number where this column will appear when
            using EditForms editing mode and the form is auto-generated.

###  EditFormHeaderTextFormat `String`

Gets or sets the format of the  that is set
            to the edit cell inside an auto-generated edit form.

###  FooterText `String`

Use the FooterText property to specify your own or determine the current
            text for the footer section of the column.

###  ForceExtractValue `TreeListForceExtractValues`

Specifies how values for this column will be extracted when the column is read-only.

###  HeaderStyle `TableItemStyle`

Style of the cell in the header item of the RadTreeList, corresponding to the column.

###  HeaderText `String`

Gets or sets the text which will appear in the header cell of the column.

###  HeaderTooltip `String`

Gets or sets the tooltip of the header cell.

###  IsEditable `Boolean`

Gets a value indicating whether this column is currently editable. Use the column's 
            ReadOnly property if you want to change its editing capabilities.

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

###  ReadOnly `Boolean`

Gets or sets a value indicating whether the column is read-only. A read-only column
            will be shown in items in view mode, but will not appear in the edit form of edited items.

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

###  ToolTip `String`

Gets or sets the tooltip of each select checkbox

###  UniqueName `String`

Each column in Telerik RadTreeList has an UniqueName
            property (string). This property is assigned automatically by the designer (or the
            first time you want to access the columns if they are built dynamically).

###  UseNativeEditorsInMobileMode `Boolean`

Gets or sets whether the column editor will be native when treelist's RenderMode is set to Mobile

###  Visible `Boolean`

Gets or sets a value indicating if the column and all corresponding cells would be rendered.

## Methods

###  CreateDefaultColumnEditor

Creates the default editor for the TreeListCheckBox column.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` 

###  CreateDefaultColumnEditor

Create and return a default column editor for the current RadTreeList editable column.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` 

###  FillValues

Extracts the values from the specified  instance and
            fills the names/values pairs for each data-field edited by the column in the specified IDictionary instance.

#### Parameters

#### newValues `System.Collections.IDictionary`

Dictionary to fill. This param should not be null (Nothing in VB.NET)

#### editableItem `Telerik.Web.UI.TreeListEditableItem`

The GridEditableItem to extract values from

#### Returns

`System.Void` 

###  GetColumnEditor

Gets the editor of this column from the specified  instance.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` 

###  GetColumnValueFromDataCell

Retrieves the data value of this column from the specified TableCell of a .

#### Returns

`System.Object` 

###  GetEditorValues

Extracts the editor values from the specified  instance.

#### Returns

`System.Collections.IEnumerable` 

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

###  ShouldExtractValues

Gets or sets a value specifying whether RadTreeList should extract values from the specified 
             instance based on the item's editable state, 
            the current column's ReadOnly state and the value of ForceExtractValue property.

#### Returns

`System.Boolean` 

###  TryGetColumnValueFromDataKeys

Checks if the DataField of the current column is in the DataKeyNames or ParentDataKeyNames
            collection of  and tries to extract the data key value from
            the specified  instance.

#### Returns

`System.Boolean` 

