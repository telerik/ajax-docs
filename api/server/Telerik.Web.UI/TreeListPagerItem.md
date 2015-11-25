---
title: Telerik.Web.UI.TreeListPagerItem
page_title: Telerik.Web.UI.TreeListPagerItem
description: Telerik.Web.UI.TreeListPagerItem
---

# Telerik.Web.UI.TreeListPagerItem

Represents the pager item in Telerik.Web.UI.RadTreeList .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem : INamingContainer
* Telerik.Web.UI.TreeListPagerItem

## Properties

###  TableSection `TableRowSection`

Returns a value of type TableRowSection indicating where the pager item row is placed in the 
            Table control rendered by RadTreeList.

###  PagerContentCell `TableCell`

Gets a reference to the TableCell that holds the pager item content.

###  Paging `TreeListPagingManager`

Gets a reference to the TreeListPagingManager object for the current RadTreeList object.

###  IsTopItem `Boolean`

Gets a boolean value indicating whether the pager item is placed on top or bottom of the 
            rendered treelist control.

###  NumericPager `Control`

Gets a reference to the numeric pager Control object.

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

## Methods

###  Initialize

Initializes the TreeListPagerItem.

#### Parameters

#### columns `System.Collections.Generic.IList{Telerik.Web.UI.TreeListColumn}`

#### Returns

`System.Void` 

###  GetButtonForArgument

Creates copy of button used for the pager in RadTreeList control.

#### Parameters

#### commandArgument `System.String`

must be on of the following: 
                FirstPageCommandArgument,
                NextPageCommandArgument,
                PrevPageCommandArgument,
                LastPageCommandArgument

#### Returns

`System.Web.UI.Control` 

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

