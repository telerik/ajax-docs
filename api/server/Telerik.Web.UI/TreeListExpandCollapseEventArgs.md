---
title: Telerik.Web.UI.TreeListExpandCollapseEventArgs
page_title: Telerik.Web.UI.TreeListExpandCollapseEventArgs
description: Telerik.Web.UI.TreeListExpandCollapseEventArgs
---

# Telerik.Web.UI.TreeListExpandCollapseEventArgs

A base class representing the event args passed when Telerik.Web.UI.RadTreeList fires the ItemCommand event with an ExpandCollapse command.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.TreeListCommandEventArgs
* Telerik.Web.UI.TreeListExpandCollapseEventArgs

## Properties

###  Item `TreeListItem`

The item in which the command was triggered.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

## Methods

###  ExecuteCommand

Forces the control to execute the ExpandCollapse command.

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

