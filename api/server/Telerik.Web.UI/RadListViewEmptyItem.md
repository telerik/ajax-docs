---
title: Telerik.Web.UI.RadListViewEmptyItem
page_title: Telerik.Web.UI.RadListViewEmptyItem
description: Telerik.Web.UI.RadListViewEmptyItem
---

# Telerik.Web.UI.RadListViewEmptyItem

Telerik.Web.UI.RadListViewItem representing empty item which will be shown when no records
            are returned as DataSource for Telerik.Web.UI.RadListView .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadListViewItem : INamingContainer
* Telerik.Web.UI.RadListViewEmptyItem

## Properties

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

