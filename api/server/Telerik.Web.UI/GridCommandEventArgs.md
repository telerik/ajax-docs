---
title: Telerik.Web.UI.GridCommandEventArgs
page_title: Telerik.Web.UI.GridCommandEventArgs
description: Telerik.Web.UI.GridCommandEventArgs
---

# Telerik.Web.UI.GridCommandEventArgs

Provides data for Command events including CancelCommand, DeleteCommand,
            EditCommand, InsertCommand, ItemCommand, SortCommand and UpdateCommand.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.GridCommandEventArgs : IGridCommandEvent

## Properties

###  CommandSource `Object`

Gets the source of the command

###  Item `GridItem`

Gets the item containing the command source

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

