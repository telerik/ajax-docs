---
title: Telerik.Web.UI.RadListViewSelectCommandEventArgs
page_title: Telerik.Web.UI.RadListViewSelectCommandEventArgs
description: Telerik.Web.UI.RadListViewSelectCommandEventArgs
---

# Telerik.Web.UI.RadListViewSelectCommandEventArgs

For internal usage only.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadListViewCommandEventArgs : IRadListViewCommandEvent
* Telerik.Web.UI.RadListViewSelectCommandEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

###  EventSource `Object`

Gets or sets the event source which represent the control which fired the event.

###  ListViewDataItem `RadListViewDataItem`

Gets or sets the  which
            was selected.

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

###  ListViewItem `RadListViewItem`

Gets or sets the  which was responsible for firing the event.

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

