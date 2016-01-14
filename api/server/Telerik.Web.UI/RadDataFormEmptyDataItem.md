---
title: Telerik.Web.UI.RadDataFormEmptyDataItem
page_title: Telerik.Web.UI.RadDataFormEmptyDataItem
description: Telerik.Web.UI.RadDataFormEmptyDataItem
---

# Telerik.Web.UI.RadDataFormEmptyDataItem

Represents an item which is rendered when Telerik.Web.UI.RadDataForm 's data source is empty

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadDataFormItem : INamingContainer
* Telerik.Web.UI.RadDataFormEmptyDataItem

## Properties

###  IsInEditMode `Boolean`

Gets a value indicating whether the  item is in edit mode at the
            moment.

###  ItemType `RadDataFormItemType`

Gets or sets the type of the item which represents enumeration and
            determines for what the item is used.

###  OwnerDataForm `RadDataForm`

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

