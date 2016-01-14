---
title: Telerik.Web.UI.TreeListDataInsertItem
page_title: Telerik.Web.UI.TreeListDataInsertItem
description: Telerik.Web.UI.TreeListDataInsertItem
---

# Telerik.Web.UI.TreeListDataInsertItem

Represents an insert item when P:Telerik.Web.UI.RadTreeList.EditMode is set to F:Telerik.Web.UI.TreeListEditMode.InPlace .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem : INamingContainer
* Telerik.Web.UI.TreeListEditableItem
* Telerik.Web.UI.TreeListDataInsertItem : ITreeListInsertItem

## Properties

###  CanExtractValues `Boolean`

Gets a value indicating whether the current item can extract data values.

###  DataItem `Object`

Gets or sets the original data source object that the current treelist item is bound to.

###  Edit `Boolean`

Gets or sets a boolean value indicating whether the item should be put in edit mode.

###  Edit `Boolean`

Gets or sets a value indicating whether the current item should be edited.

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

###  IsInEditMode `Boolean`

Gets a boolean value indicating whether the item is in edit mode.

###  IsInEditMode `Boolean`

Gets a value indicating whether the current item is in edit mode.

###  IsRoot `Boolean`

Gets a value indicating whether the current item is inserted at the root level.

###  Item `TableCell`

An indexator used to get the TableCell corresponding to a column using its UniqueName.

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  ParentItem `TreeListDataItem`

Gets the parent  instance for which this edit form item is created.

###  SavedOldValues `IDictionary`

Gets the old values of the current edited item.

## Methods

###  ExtractValues

Extracts values for each column, using

#### Parameters

#### newValues `System.Collections.IDictionary`

This dictionary to fill, this parameter should not be null

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

###  Initialize

Initializes the footer item.

#### Parameters

#### columns `System.Collections.Generic.IList{Telerik.Web.UI.TreeListColumn}`

The columns to which the footer cells should be added.

#### Returns

`System.Void` 

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

###  UpdateValues

Extracts values for each column, using  and updates values in provided object;

#### Parameters

#### objectToUpdate `System.Object`

The object that should be updated

#### Returns

`System.Void` 

