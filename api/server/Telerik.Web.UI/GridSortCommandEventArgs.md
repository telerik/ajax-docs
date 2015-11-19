---
title: Telerik.Web.UI.GridSortCommandEventArgs
page_title: Telerik.Web.UI.GridSortCommandEventArgs
description: Telerik.Web.UI.GridSortCommandEventArgs
---

# Telerik.Web.UI.GridSortCommandEventArgs

The event arguments passed when Telerik.Web.UI.RadGrid sorts happens.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.GridCommandEventArgs : IGridCommandEvent
* Telerik.Web.UI.GridSortCommandEventArgs

## Properties

###  SortExpression `String`

Gets the sort expression associated with the performed sorting.

###  OldSortOrder `GridSortOrder`

Gets the old sort order of the current sort expression.

###  NewSortOrder `GridSortOrder`

Gets the new sort order of the current sort expression.

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

