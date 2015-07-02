---
title: Telerik.Web.UI.RadListViewCommandEventArgs
page_title: Telerik.Web.UI.RadListViewCommandEventArgs
description: Telerik.Web.UI.RadListViewCommandEventArgs
---

# Telerik.Web.UI.RadListViewCommandEventArgs

The event arguments passed when Telerik.Web.UI.RadListView fires Command event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadListViewCommandEventArgs

## Properties

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

###  EventSource `Object`

Gets or sets the event source which represent the control which fired the event.

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

Override to fire the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

