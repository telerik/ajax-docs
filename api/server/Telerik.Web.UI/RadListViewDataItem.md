---
title: Telerik.Web.UI.RadListViewDataItem
page_title: Telerik.Web.UI.RadListViewDataItem
description: Telerik.Web.UI.RadListViewDataItem
---

# Telerik.Web.UI.RadListViewDataItem

Represents an individual data item in a Telerik.Web.UI.RadListView control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadListViewItem : INamingContainer
* Telerik.Web.UI.RadListViewDataItem : IDataItemContainer

## Properties

###  DataItem `Object`

When implemented, gets an object that is used in simplified data-binding
            operations.

###  DataItemIndex `Object`

Gets the index of the data item bound to a control.

###  DisplayIndex `Int32`

Gets the position of the data item as displayed in a control.

###  Edit `Boolean`

Sets the Item in edit mode.

#### Remarks
Requires  to rebind.

###  IsInEditMode `Boolean`

Gets a value indicating whether the  item is in edit mode at the
            moment.

###  ItemType `RadListViewItemType`

Gets or sets the type of the item which represents enumeration and
            determines for what the item is used.

###  OwnerListView `RadListView`

Gets or sets the owner  of the item.

###  SavedOldValues `IDictionary`

Gets the old value of the edited item

###  Selected `Boolean`

Gets or set value indicating whether the 
             item is selected

## Methods

###  ExtractValues

Extracts values from this  instance
            and appends them to passed  collection

#### Parameters

#### newValues `System.Collections.IDictionary`

This is dictionary to fill, this parameter
            should not be null

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

###  GetDataKeyValue

Get the DataKeyValues from the owner  with the corresponding item  and .
            The  should be one of the specified in the   array

#### Parameters

#### keyName `System.String`

data key name

#### Returns

`System.Object` data key value

###  UpdateValues

Updates properties of the passed object instance from current 
            's extracted values

#### Parameters

#### objectToUpdate `System.Object`

object to be updated

#### Returns

`System.Void` 

