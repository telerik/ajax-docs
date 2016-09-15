---
title: Telerik.Web.UI.TreeListCommandItem
page_title: Telerik.Web.UI.TreeListCommandItem
description: Telerik.Web.UI.TreeListCommandItem
---

# Telerik.Web.UI.TreeListCommandItem

Represents the command item of the Telerik.Web.UI.RadTreeList .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem : INamingContainer
* Telerik.Web.UI.TreeListCommandItem

## Properties

###  CommandItemContentCell `TableCell`

Used for accessing the command item content cell

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

###  IsTopItem `Boolean`

Gets a boolean value indicating whether the command item is placed on top or bottom of the 
            rendered treelist control.

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  TableSection `TableRowSection`

Returns a value of type TableRowSection indicating where the command item row is placed in the 
            Table control rendered by RadTreeList.

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

###  Initialize

Initializes the footer item.

#### Parameters

#### columns `System.Collections.Generic.IList{Telerik.Web.UI.TreeListColumn}`

The columns to which the footer cells should be added.

#### Returns

`System.Void` 

