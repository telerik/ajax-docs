---
title: Telerik.Web.UI.GridDataItem
page_title: Telerik.Web.UI.GridDataItem
description: Telerik.Web.UI.GridDataItem
---

# Telerik.Web.UI.GridDataItem

Summary description for GridDataItem.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.GridTableRow
* Telerik.Web.UI.GridItem
* Telerik.Web.UI.GridEditableItem
* Telerik.Web.UI.GridDataItem

## Properties

###  ChildItem `GridNestedViewItem`

Gets the  which represents the item holding any detail  tables.

###  EditFormItem `GridEditFormItem`

Gets the  which repsents the edit item below the current .

###  HasChildItems `GridNestedViewItem`

Gets a value indicating whether this item has child items - or items somehow
            related to this.

###  HasEditItem `Boolean`

Gets a boolean value indication if the current  does have a  below it.

###  DetailTemplateItemDataCell `TableCell`

Returns a reference to the cell where the DetailItemTemplate has been instantiated.

###  Display `Boolean`

Sets whether the GridItem will be visible or with style="display:none;"
            Note that visibility of the GridDataItem will affect the PreviewItem also.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.
            Note that visibility of the GridDataItem will affect the PreviewItem also.

###  SavedOldValues `IDictionary`

Gets the old value of the edited item

###  IsDataBound `Boolean`

Gets a value indicating whether the grid item is bound to a data source.

###  IsInEditMode `Boolean`

Gets a value indicating whether the grid item is in edit mode at the
            moment.

###  EditManager `GridEditManager`

Allows you to access the column editors

###  Item `TableCell`

###  Item `TableCell`

###  SavedOldValues `IDictionary`

Gets the old value of the edited item

###  CanExtractValues `Boolean`

###  KeyValues `String`

###  OwnerTableView `GridTableView`

Gets a reference to the GridTableView that owns this
            GridItem.

###  OwnerID `String`

Gets the ClientID of the GridTableView that
            owns this instance.

###  OwnerGridID `String`

Gets the ClientID of the RadGrid instance that
            owns the item.

#### Remarks
This would be useful if several controls use the same eventhandler and you need
            to diferentiate the Grid instances in the handler.

###  HasChildItems `Boolean`

Gets a value indicating whether this item has child items - or items somehow
            related to this.

###  CanExpand `Boolean`

Gets a value indicating whether the item can be "expanded" to show its child items

###  DataItem `Object`

The original DataItem from the DataSource. See
            examples section below.

###  DataSetIndex `Int32`

Gets the index of the GridDataItem in the underlying
            DataTable/specified table from a DataSet.

###  ItemIndex `Int32`

Gets the index of the grid item among the 
                collection. This index also can be used to get the DataKeyValues
                corresponding to this item from a GridTableView.

###  ClientRowIndex `Int32`

Gets the index of the row as in the html table object rendered on the client

###  RowIndex `Int32`

Gets the index of the item in the rows collection of the underlying Table server control

###  ItemIndexHierarchical `Int32`

Get the unique item index among all the item in the hierarchy. This index is used when setting item to selected, edited, etc

###  ItemType `GridItemType`

Gets the respective GridItemType of the grid item.

###  Expanded `Boolean`

Gets or sets a value indicating whether the grid item is expanded or
            collapsed.

###  ConditionalExpanded `Boolean`

Used in HierarchyLoadMode="Conditional"

###  Display `Boolean`

Sets whether the GridItem will be visible or with style="display:none;"

###  Selected `Boolean`

Gets or set a value indicating whether the grid item is selected

###  SelectableMode `GridItemSelectableMode`

Gets or sets a value determining if the  chould be selected
            either on the client or on the server.

###  Edit `Boolean`

Sets the Item in edit mode. Requires Telerik RadGrid to rebind.

#### Remarks
If  is set to InPlace, the grid column
                    editors will be displayed inline of this item.
                
                    If  is set to EditForms, a new
                    GridItem will be created, which will be child of this item
                    (GridEditFormItem). The new item will hold the edit form.

###  GroupIndex `String`

Gets the index of the Item in the group. This works only when grouping.

###  IsDataBound `Boolean`

Gets a value indicating whether the grid item is bound to a data source.

###  IsInEditMode `Boolean`

Gets a value indicating whether the grid item is in edit mode at the
            moment.

###  OriginalClientID `String`

###  ClientID `String`

Gets the server control identifier generated by ASP.NET.

## Methods

###  ClientFireCommandFunction

Generates a client-side function which fires a command with a given name and arguments

#### Parameters

#### commandName `System.String`

Command's name

#### commandArgument `System.String`

Command's argument

#### Returns

`System.String` 

###  SetVisibleChildren

Sets the visibility of the children items.

#### Remarks
This method is for Telerik RadGrid internal usage.

#### Returns

`System.Void` 

###  InitializeEditorInCell

#### Remarks
This method is for Telerik RadGrid internal usage.

#### Returns

`System.Void` 

###  InitializeEditorInCell

#### Returns

`System.Void` 

###  ExtractValues

Extracts values for each column, using

#### Parameters

#### newValues `System.Collections.IDictionary`

This dictionary to fill, this parameter should not be null

#### Returns

`System.Void` 

###  UpdateValues

Extracts values for each column, using  and updates values in provided object;

#### Parameters

#### objectToUpdate `System.Object`

The object that should be updated

#### Returns

`System.Void` 

###  GetDataKeyValue

Get the DataKeyValues from the owner GridTableView with the corresponding item ItemIndex and keyName.
            The keyName should be one of the specified in the   array

#### Parameters

#### keyName `System.String`

data key name

#### Returns

`System.Object` data key value

###  FireCommandEvent

Use this method to simulate item command event that bubbles to RadGrid and can be handeled automatically or in a custom manner,
            handling RadGrid.ItemCommand event.

#### Parameters

#### commandName `System.String`

command to bubble, for example 'Page'

#### commandArgument `System.Object`

command argument, for example 'Next'

#### Returns

`System.Void` 

###  RestoreDecorator

This method is not intended to be used directly from your code.

#### Returns

`System.Void` 

###  Initialize

This method is not intended to be used directly from your code

#### Returns

`System.Void` 

###  SetupItem

This method is not intended to be used directly from your code

#### Returns

`System.Void` 

###  PrepareItemStyle

Override this method to change the default logic for rendering the item

#### Returns

`System.Void` 

###  PrepareItemVisibility

Override this method to change the default logic for item visibility

#### Returns

`System.Void` 

###  SetTempIndexHierarchical

Used after postback before ViewState becomes available - 
            for example in ItemCreated and ItemDataBound events

#### Parameters

#### value `System.String`

#### Returns

`System.Void` 

###  RemoveChildSelectedItems

#### Returns

`System.Void` 

###  RemoveChildEditItems

#### Returns

`System.Void` 

###  SetChildrenVisible

#### Returns

`System.Void` 

###  SetVisibleChildren

#### Returns

`System.Void` 

###  ExpandHierarchyToTop

#### Returns

`System.Void` 

###  CalcColSpan

Calculate column-span value for a cell using column list, when the cell indicated
            with FromCellIndex should be spanned to ToCellIndex

#### Parameters

#### columns `Telerik.Web.UI.GridColumn`

columns - visible property is taken in count

#### FromCellIndex `System.Int32`

cell inbdex of spanned cell

#### ToCellIndex `System.Int32`

cell index of next not-spanned cell or -1 for the last cell index

#### Returns

`System.Int32` ColSpan number

