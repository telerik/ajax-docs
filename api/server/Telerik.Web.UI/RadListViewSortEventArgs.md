---
title: Telerik.Web.UI.RadListViewSortEventArgs
page_title: Telerik.Web.UI.RadListViewSortEventArgs
description: Telerik.Web.UI.RadListViewSortEventArgs
---

# Telerik.Web.UI.RadListViewSortEventArgs

The event arguments passed when Telerik.Web.UI.RadListView sorting is performed.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadListViewCommandEventArgs : IRadListViewCommandEvent
* Telerik.Web.UI.RadListViewSortEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

###  EventSource `Object`

Gets or sets the event source which represent the control which fired the event.

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

###  NewSortOrder `RadListViewSortOrder`

Gets the new sort order.

###  OldSortOrder `RadListViewSortOrder`

Gets the old sort order.

###  SortExpression `String`

Gets the sort expression associated with the sort command.

## Methods

###  ExecuteCommand

Executes the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

###  ExecuteCommand

Override to fire the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

