---
title: Telerik.Web.UI.RadListViewDeselectCommandEventArgs
page_title: Telerik.Web.UI.RadListViewDeselectCommandEventArgs
description: Telerik.Web.UI.RadListViewDeselectCommandEventArgs
---

# Telerik.Web.UI.RadListViewDeselectCommandEventArgs

For internal usage only.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadListViewCommandEventArgs : IRadListViewCommandEvent
* Telerik.Web.UI.RadListViewDeselectCommandEventArgs

## Properties

###  ListViewDataItem `RadListViewDataItem`

Gets or sets the deselected  item.

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

###  EventSource `Object`

Gets or sets the event source which represent the control which fired the event.

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

Fires .SelectedIndexChanged event.

#### Returns

`System.Void` 

###  ExecuteCommand

Override to fire the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

