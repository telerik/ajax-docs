---
title: Telerik.Web.UI.TreeListDetailTemplateItem
page_title: Telerik.Web.UI.TreeListDetailTemplateItem
description: Telerik.Web.UI.TreeListDetailTemplateItem
---

# Telerik.Web.UI.TreeListDetailTemplateItem

Represents the template item rendered under each Telerik.Web.UI.TreeListDataItem when a DetailTemplate is declared for Telerik.Web.UI.RadTreeList

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem : INamingContainer
* Telerik.Web.UI.TreeListDetailTemplateItem

## Properties

###  DataItem `Object`

Gets or sets the original data source object that the current treelist item is bound to.

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  ParentItem `TreeListDataItem`

Gets a reference to the TreeListDataItem for which the detail item is rendered.

###  TemplateContentCell `TableCell`

Gets a reference to the TableCell which holds the template item content.

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

