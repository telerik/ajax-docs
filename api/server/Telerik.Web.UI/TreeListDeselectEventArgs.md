---
title: Telerik.Web.UI.TreeListDeselectEventArgs
page_title: Telerik.Web.UI.TreeListDeselectEventArgs
description: Telerik.Web.UI.TreeListDeselectEventArgs
---

# Telerik.Web.UI.TreeListDeselectEventArgs

A base class representing the event args passed when Telerik.Web.UI.RadTreeList fires the ItemCommand event with a Deselect command.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.TreeListCommandEventArgs : ITreeListCommandEvent
* Telerik.Web.UI.TreeListDeselectEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Item `TreeListItem`

The item in which the command was triggered.

## Methods

###  ExecuteCommand

Forces the execution of the Deselect command.

#### Parameters

#### source `System.Object`

The RadTreeList object.

#### Returns

`System.Void` 

###  ExecuteCommand

Forces the execution of the command that triggered the event.

#### Parameters

#### source `System.Object`

The owner RadTreeList object

#### Returns

`System.Void` 

