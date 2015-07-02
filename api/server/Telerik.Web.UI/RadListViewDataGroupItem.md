---
title: Telerik.Web.UI.RadListViewDataGroupItem
page_title: Telerik.Web.UI.RadListViewDataGroupItem
description: Telerik.Web.UI.RadListViewDataGroupItem
---

# Telerik.Web.UI.RadListViewDataGroupItem

Represents a data group item for the single data group container

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadListViewItem
* Telerik.Web.UI.RadListViewDataGroupItem

## Properties

###  DataGroupKey `Object`

holds the key of the current data group

###  FieldName `String`

holds the name of the group field

###  AggregatesValues `IDictionary`

Gets a key-value collection of all aggregate values in the data group.

###  ItemType `RadListViewItemType`

Gets or sets the type of the item which represents enumeration and
            determines for what the item is used.

###  OwnerListView `RadListView`

Gets or sets the owner  of the item.

###  IsInEditMode `Boolean`

Gets a value indicating whether the  item is in edit mode at the
            moment.

## Methods

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

