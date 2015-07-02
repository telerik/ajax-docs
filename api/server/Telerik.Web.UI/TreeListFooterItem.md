---
title: Telerik.Web.UI.TreeListFooterItem
page_title: Telerik.Web.UI.TreeListFooterItem
description: Telerik.Web.UI.TreeListFooterItem
---

# Telerik.Web.UI.TreeListFooterItem

Represents the footer item in Telerik.Web.UI.RadTreeList .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem
* Telerik.Web.UI.TreeListFooterItem

## Properties

###  HierarchyIndex `TreeListHierarchyIndex`

Gets a value of type TreeListHierarchyIndex representing the nested level of the footer item.

###  Item `TableCell`

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

## Methods

###  Initialize

Initializes the footer item.

#### Parameters

#### columns `System.Collections.Generic.IList{Telerik.Web.UI.TreeListColumn}`

A collection containing the columns to which the footer cells should be added.

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

