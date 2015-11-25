---
title: Telerik.Web.UI.RadListViewPageSizeChangedEventArgs
page_title: Telerik.Web.UI.RadListViewPageSizeChangedEventArgs
description: Telerik.Web.UI.RadListViewPageSizeChangedEventArgs
---

# Telerik.Web.UI.RadListViewPageSizeChangedEventArgs

The event arguments passed when Telerik.Web.UI.RadListView fires PageSizeChanged event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadListViewCommandEventArgs : IRadListViewCommandEvent
* Telerik.Web.UI.RadListViewPageSizeChangedEventArgs

## Properties

###  NewPageSize `Int32`

Gets or sets the new PageSize value.

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

###  ExecuteCommand

Override to fire the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

