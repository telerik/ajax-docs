---
title: Telerik.Web.UI.TreeListCommandEventArgs
page_title: Telerik.Web.UI.TreeListCommandEventArgs
description: Telerik.Web.UI.TreeListCommandEventArgs
---

# Telerik.Web.UI.TreeListCommandEventArgs

The arguments passed when Telerik.Web.UI.RadTreeList fires a command event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.TreeListCommandEventArgs : ITreeListCommandEvent

## Properties

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Item `TreeListItem`

The item in which the command was triggered.

## Methods

###  ExecuteCommand

Forces the execution of the command that triggered the event.

#### Parameters

#### source `System.Object`

The owner RadTreeList object

#### Returns

`System.Void` 

