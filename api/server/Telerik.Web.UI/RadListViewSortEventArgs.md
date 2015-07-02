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
* Telerik.Web.UI.RadListViewCommandEventArgs
* Telerik.Web.UI.RadListViewSortEventArgs

## Properties

###  SortExpression `String`

Gets the sort expression associated with the sort command.

###  OldSortOrder `RadListViewSortOrder`

Gets the old sort order.

###  NewSortOrder `RadListViewSortOrder`

Gets the new sort order.

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

###  EventSource `Object`

Gets or sets the event source which represent the control which fired the event.

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

Executes the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

###  HandleSorting

#### Returns

`System.Void` 

###  ExecuteCommand

Override to fire the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

