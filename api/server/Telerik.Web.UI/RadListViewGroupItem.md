---
title: Telerik.Web.UI.RadListViewGroupItem
page_title: Telerik.Web.UI.RadListViewGroupItem
description: Telerik.Web.UI.RadListViewGroupItem
---

# Telerik.Web.UI.RadListViewGroupItem

Represents an item for the single group container

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadListViewItem : INamingContainer
* Telerik.Web.UI.RadListViewGroupItem

## Properties

###  IsInEditMode `Boolean`

Gets a value indicating whether the  item is in edit mode at the
            moment.

###  ItemType `RadListViewItemType`

Gets or sets the type of the item which represents enumeration and
            determines for what the item is used.

###  OwnerListView `RadListView`

Gets or sets the owner  of the item.

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

