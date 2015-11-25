---
title: Telerik.Web.UI.TreeListTemplateColumn
page_title: Telerik.Web.UI.TreeListTemplateColumn
description: Telerik.Web.UI.TreeListTemplateColumn
---

# Telerik.Web.UI.TreeListTemplateColumn

Represents a Telerik.Web.UI.TreeListColumn which allows templating its content.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListColumn : IComparable
* Telerik.Web.UI.TreeListDataColumn
* Telerik.Web.UI.TreeListEditableColumn
* Telerik.Web.UI.TreeListTemplateColumn

## Properties

###  FooterTemplate `ITemplate`

Gets or sets an ITemplate implementation representing the footer template of the column.

###  ItemTemplate `ITemplate`

Gets or sets an ITemplate implementation representing the regular item template of the column.

###  HeaderTemplate `ITemplate`

Gets or sets an ITemplate implementation representing the header template of the column.

###  EditItemTemplate `ITemplate`

Gets or sets an ITemplate implementation representing the edit template of the column.

###  InsertItemTemplate `ITemplate`

Gets or sets an ITemplate implementation representing the insert template of the column.
            If not set, the EditItemTemplate is used for the insert form as well.

###  FooterAggregateFormatString `String`

Gets or sets a string that is used to format the footer cell of the column.

###  Aggregate `TreeListAggregateFunction`

Gets or sets the field name from the specified data source to bind to the
            TreeListBoundColumn.

###  ConvertEmptyStringToNull `Boolean`

Convert the emty string to null when extracting values during data editing operations.

###  ReadOnly `Boolean`

Gets or sets a value indicating whether the column is read-only. A read-only column
            will be shown in items in view mode, but will not appear in the edit form of edited items.

###  IsEditable `Boolean`

Gets a value indicating whether this column is currently editable. Use the column's 
            ReadOnly property if you want to change its editing capabilities.

###  ForceExtractValue `TreeListForceExtractValues`

Specifies how values for this column will be extracted when the column is read-only.

###  DefaultInsertValue `String`

Gets or sets the default value for this column's editor when a new item is inserted in RadTreeList.

###  EditFormHeaderTextFormat `String`

Gets or sets the format of the  that is set
            to the edit cell inside an auto-generated edit form.

###  EditFormColumnIndex `Int32`

Specifies the vertical column number where this column will appear when
            using EditForms editing mode and the form is auto-generated.

###  UseNativeEditorsInMobileMode `Boolean`

Gets or sets whether the column editor will be native when treelist's RenderMode is set to Mobile

###  DataField `String`

Gets or sets the field name from the specified data source to bind to the TreeListDataColumn.

###  AllowSorting `Boolean`

Gets or sets a whether the column data can be sorted.

###  DataType `Type`

Gets or sets (see the Remarks) the type of the data from the DataField as it
                was set in the DataSource.

#### Remarks
The DataType property supports the following base .NET Framework data
                types:BooleanByteCharDateTimeDecimalDoubleInt16Int32Int64SByteSingleStringTimeSpanUInt16UInt32UInt64

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

###  CreateDefaultColumnEditor

Creates the default column editor for the column.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` A TreeListTemplateColumnEditor representing the default editor for this column.

###  FillValues

Populates the passed values into the provided TreeListEditableItem.

#### Parameters

#### newValues `System.Collections.IDictionary`

An IDictionary collection of values.

#### editableItem `Telerik.Web.UI.TreeListEditableItem`

The TreeListEditableItem which should be populated with the provided values.

#### Returns

`System.Void` 

###  CreateDefaultColumnEditor

Create and return a default column editor for the current RadTreeList editable column.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` 

###  GetColumnEditor

Gets the editor of this column from the specified  instance.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` 

###  ShouldExtractValues

Gets or sets a value specifying whether RadTreeList should extract values from the specified 
             instance based on the item's editable state, 
            the current column's ReadOnly state and the value of ForceExtractValue property.

#### Returns

`System.Boolean` 

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

###  TryGetColumnValueFromDataKeys

Checks if the DataField of the current column is in the DataKeyNames or ParentDataKeyNames
            collection of  and tries to extract the data key value from
            the specified  instance.

#### Returns

`System.Boolean` 

###  GetColumnValueFromDataCell

Retrieves the data value of this column from the specified TableCell of a .

#### Returns

`System.Object` 

###  GetEditorValues

Extracts the editor values from the specified  instance.

#### Returns

`System.Collections.IEnumerable` 

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

