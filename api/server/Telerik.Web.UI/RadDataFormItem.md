---
title: Telerik.Web.UI.RadDataFormItem
page_title: Telerik.Web.UI.RadDataFormItem
description: Telerik.Web.UI.RadDataFormItem
---

# Telerik.Web.UI.RadDataFormItem

Represents an individual item in a Telerik.Web.UI.RadDataForm control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadDataFormItem

## Properties

###  ItemType `RadDataFormItemType`

Gets or sets the type of the item which represents enumeration and
            determines for what the item is used.

###  OwnerDataForm `RadDataForm`

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

