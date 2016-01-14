---
title: Telerik.Web.UI.RadListViewPageChangedEventArgs
page_title: Telerik.Web.UI.RadListViewPageChangedEventArgs
description: Telerik.Web.UI.RadListViewPageChangedEventArgs
---

# Telerik.Web.UI.RadListViewPageChangedEventArgs

The event arguments passed when Telerik.Web.UI.RadListView fires PageChanged event during paging.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadListViewCommandEventArgs : IRadListViewCommandEvent
* Telerik.Web.UI.RadListViewPageChangedEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

###  EventSource `Object`

Gets or sets the event source which represent the control which fired the event.

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

###  NewPageIndex `Int32`

Gets or sets the new PageIndex value.

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

