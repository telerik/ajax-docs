---
title: Telerik.Web.UI.TreeListNoRecordsItem
page_title: Telerik.Web.UI.TreeListNoRecordsItem
description: Telerik.Web.UI.TreeListNoRecordsItem
---

# Telerik.Web.UI.TreeListNoRecordsItem

Represents the item shown in Telerik.Web.UI.RadTreeList when its assigned datasource has no records.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.TableRow
* Telerik.Web.UI.TreeListTableRow
* Telerik.Web.UI.TreeListItem
* Telerik.Web.UI.TreeListNoRecordsItem

## Properties

###  NoRecordContentCell `TableCell`

Gets a reference to the TableCell that holds the no records item content.

###  ItemType `TreeListItemType`

Gets a value from the TreeListItemType enumeration indicating what role the items has in the treelist.

###  OwnerTreeList `RadTreeList`

Gets a reference to the owner RadTreeList object.

###  IsDataBinding `Boolean`

Gets or sets a value indicating whether the control is currently being bound.

## Methods

###  Initialize

Initializes the TreeListNoRecordsItem.

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

