---
title: Telerik.Web.UI.GridFilterCommandEventArgs
page_title: Telerik.Web.UI.GridFilterCommandEventArgs
description: Telerik.Web.UI.GridFilterCommandEventArgs
---

# Telerik.Web.UI.GridFilterCommandEventArgs

For internal usage only.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.GridCommandEventArgs
* Telerik.Web.UI.GridFilterCommandEventArgs

## Properties

###  CommandSource `Object`

Gets the source of the command

###  Item `GridItem`

Gets the item containing the command source

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

Calculates and sets the  to the corresponding
                 and rebinds the grid.

#### Returns

`System.Void` 

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

