---
title: Telerik.Web.UI.GridPageChangedEventArgs
page_title: Telerik.Web.UI.GridPageChangedEventArgs
description: Telerik.Web.UI.GridPageChangedEventArgs
---

# Telerik.Web.UI.GridPageChangedEventArgs

The event arguments passed when the grid performs pagging and fires PageChanged event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.GridCommandEventArgs : IGridCommandEvent
* Telerik.Web.UI.GridPageChangedEventArgs

## Properties

###  NewPageIndex `Int32`

Gets the new page index the grid will go on.

###  CommandSource `Object`

Gets the source of the command

###  Item `GridItem`

Gets the item containing the command source

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

#### Returns

`System.Void` 

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

