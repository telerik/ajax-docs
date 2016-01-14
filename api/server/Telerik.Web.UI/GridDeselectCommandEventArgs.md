---
title: Telerik.Web.UI.GridDeselectCommandEventArgs
page_title: Telerik.Web.UI.GridDeselectCommandEventArgs
description: Telerik.Web.UI.GridDeselectCommandEventArgs
---

# Telerik.Web.UI.GridDeselectCommandEventArgs

For internal usage only

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.GridCommandEventArgs : IGridCommandEvent
* Telerik.Web.UI.GridDeselectCommandEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

###  CommandSource `Object`

Gets the source of the command

###  Item `GridItem`

Gets the item containing the command source

## Methods

###  ExecuteCommand

Fires RadGrid.SelectedIndexChanged event.

#### Returns

`System.Void` 

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

