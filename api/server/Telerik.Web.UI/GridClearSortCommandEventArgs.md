---
title: Telerik.Web.UI.GridClearSortCommandEventArgs
page_title: Telerik.Web.UI.GridClearSortCommandEventArgs
description: Telerik.Web.UI.GridClearSortCommandEventArgs
---

# Telerik.Web.UI.GridClearSortCommandEventArgs

The evernt arguments passed when Telerik.Web.UI.RadGrid fires a ClearSort command which clears a certain sort expression.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.GridCommandEventArgs : IGridCommandEvent
* Telerik.Web.UI.GridClearSortCommandEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

###  CommandSource `Object`

Gets the source of the command

###  Item `GridItem`

Gets the item containing the command source

###  SortExpression `String`

Gets the sort expression associated with the performed sorting.

###  SortOrder `GridSortOrder`

Gets the current sort order of the expression which will be cleared.

## Methods

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

