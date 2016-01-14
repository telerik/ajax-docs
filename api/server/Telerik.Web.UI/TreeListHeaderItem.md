---
title: Telerik.Web.UI.TreeListHeaderItem
page_title: Telerik.Web.UI.TreeListHeaderItem
description: Telerik.Web.UI.TreeListHeaderItem
---

# Telerik.Web.UI.TreeListHeaderItem

Represents the header item of the Telerik.Web.UI.RadTreeList .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem : INamingContainer
* Telerik.Web.UI.TreeListHeaderItem

## Properties

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  TableSection `TableRowSection`

Gets the location for the TreeListHeaderItem object in the Table control
            created by .

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

