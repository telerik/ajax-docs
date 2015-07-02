---
title: Telerik.Web.UI.TreeListDataItem
page_title: Telerik.Web.UI.TreeListDataItem
description: Telerik.Web.UI.TreeListDataItem
---

# Telerik.Web.UI.TreeListDataItem

Represents the items bound to entries from the data source in Telerik.Web.UI.RadTreeList .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem
* Telerik.Web.UI.TreeListEditableItem
* Telerik.Web.UI.TreeListDataItem

## Properties

###  CanExpand `Boolean`

Gets a boolean value indicating whether the current item can be expanded.

###  Expanded `Boolean`

Gets a boolean value indicating whether the item is expanded.

###  HierarchyIndex `TreeListHierarchyIndex`

Gets an object of type  
            representing the nested level and level index of the item.

###  IsInEditMode `Boolean`

Returns a boolean value indicating whether the item is in edit mode.

###  Edit `Boolean`

Gets or sets a value indicating whether the current item should be edited.

###  IsChildInserted `Boolean`

Gets or sets a value indicating whether a child item should be inserted into the current item.

###  EditFormItem `Boolean`

Gets the  instance that is used to edit values from the
            current  when the current item is in edit mode 
            and  is set to .

###  InsertItem `TreeListEditableItem`

Gets the  instance that is used to insert 
            a new data item as a child of the current .

###  Item `TableCell`

###  DataItemIndex `TableCell`

Gets an integer value indicating the index of the current 
            item's corresponding record inside the treelist datasource.

###  DisplayIndex `Int32`

Gets an integer value indicating the index of the current 
            item in the treelist, regardless of the items hierarchy.

###  Selected `Boolean`

Gets or sets a boolean value indicating whether the item is selected.

###  DetailItem `TableCell`

Gets a reference to the TreeListDetailTemplate item corresponding to the current item.

###  ParentItem `TableCell`

Returns the parent item (if resolved) of the current item. This property is readonly.

###  ChildItems `TableCell`

Returns a collection of the visible child items of the current item. This property is readonly.

###  DataItem `Object`

Gets or sets the original data source object that the current treelist item is bound to.

###  IsInEditMode `Boolean`

Gets a value indicating whether the current item is in edit mode.

###  Edit `Boolean`

Gets or sets a value indicating whether the current item should be edited.

###  SavedOldValues `IDictionary`

Gets the old values of the current edited item.

###  CanExtractValues `Boolean`

Gets a value indicating whether the current item can extract data values.

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

## Methods

###  InsertChildItem

Inserts a new item as a child item of the current  instance.

#### Returns

`System.Void` 

###  InsertChildItem

Inserts a new item as a child item of the current  instance.
            The insert item will be databound to the specified object.

#### Returns

`System.Void` 

###  Initialize

#### Returns

`System.Void` 

###  InitializeInEditMode

#### Returns

`System.Void` 

###  GetColumnEditor

Returns the column editor for the passed column.

#### Parameters

#### editableColumn `Telerik.Web.UI.TreeListEditableColumn`

A TreeListEditableColumn object.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` The TreeListColumnEditor corresponding to the passed column.

###  GetDataKeyValue

Gets the key value of the item, corresponding to a predefined key name.
            The key should be listed in the DataKeyNames collection of the control.

#### Parameters

#### keyName `System.String`

The name of the field.

#### Returns

`System.Object` The object from the data item which corresponds to the given key.

###  GetParentDataKeyValue

Gets the key value of the item's parent item, corresponding to a predefined key name.
            The key should be listed in the ParentDataKeyNames collection of the control.

#### Parameters

#### keyName `System.String`

The name of the field.

#### Returns

`System.Object` The object from the data item which corresponds to the given key.

###  GetParentItemByHierarchyIndex

Returns the parent item (if resolved) for the item with the given parent hierarchy index

#### Parameters

#### index `Telerik.Web.UI.TreeListHierarchyIndex`

the parent hierarchical index of the child item

#### Returns

`Telerik.Web.UI.TreeListDataItem` 

###  GetChildItems

Gets the resolved child items of the item

#### Returns

`System.Collections.Generic.List`1` List of

###  GetChildItemsRecursive

Returns a flat list of all existing child items (recursively) of the current item.
            Items are listed as a result of depth-dirst search.

#### Returns

`System.Collections.Generic.List`1` 

###  HasKeys

Gets or sets a value indicating whether the current item contains the specified keys.
            Used to identify a TreeListDataItem by its keys

#### Returns

`System.Boolean` 

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

###  GetColumnEditor

Returns a reference to the column editor for the column using its UniqueName.

#### Parameters

#### columnUniqueName `System.String`

A string value representing the UniqueName of the column.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` The ITreeListColumnEditor object containing the editor control.

###  GetColumnEditor

Returns a reference to the column editor for the passed TreeListEditableColumn.

#### Parameters

#### editableColumn `Telerik.Web.UI.TreeListEditableColumn`

The TreeListEditableColumn which editor should be returned.

#### Returns

`Telerik.Web.UI.ITreeListColumnEditor` Te ITreeListColumnEditor object containing the editor control.

###  InitializeColumnEditor

Initializes the editor for a column at given position.

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

A TableCell in which the editor should be added.

#### columnIndex `System.Int32`

An integer value representing the column index.

#### column `Telerik.Web.UI.TreeListEditableColumn`

The TreeListEditableColumn for which the editor is initialized.

#### Returns

`System.Void` 

###  Initialize

Initializes the footer item.

#### Parameters

#### columns `System.Collections.Generic.IList{Telerik.Web.UI.TreeListColumn}`

The columns to which the footer cells should be added.

#### Returns

`System.Void` 

###  PrepareItemStyle

Override this method to change the default logic for rendering the item

#### Returns

`System.Void` 

###  FireCommandEvent

Use this method to simulate item command event that bubbles to 
             and can be handled automatically or in a
            custom manner, handling .ItemCommand event.

#### Parameters

#### commandName `System.String`

command to bubble, for example 'Page'

#### commandArgument `System.Object`

command argument, for example 'Next'

#### Returns

`System.Void` 

