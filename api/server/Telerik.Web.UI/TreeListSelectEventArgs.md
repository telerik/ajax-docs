---
title: Telerik.Web.UI.TreeListSelectEventArgs
page_title: Telerik.Web.UI.TreeListSelectEventArgs
description: Telerik.Web.UI.TreeListSelectEventArgs
---

# Telerik.Web.UI.TreeListSelectEventArgs

A base class representing the event args passed when Telerik.Web.UI.RadTreeList fires the ItemCommand event with a Select command.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.TreeListCommandEventArgs : ITreeListCommandEvent
* Telerik.Web.UI.TreeListSelectEventArgs

## Properties

###  Item `TreeListItem`

The item in which the command was triggered.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

## Methods

###  ExecuteCommand

Forces the execution of the Select command.

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

