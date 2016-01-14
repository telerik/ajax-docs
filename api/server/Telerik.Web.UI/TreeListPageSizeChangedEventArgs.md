---
title: Telerik.Web.UI.TreeListPageSizeChangedEventArgs
page_title: Telerik.Web.UI.TreeListPageSizeChangedEventArgs
description: Telerik.Web.UI.TreeListPageSizeChangedEventArgs
---

# Telerik.Web.UI.TreeListPageSizeChangedEventArgs

The arguments passed when Telerik.Web.UI.TreeListDataItem fires the PageSizeChanged event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.TreeListCommandEventArgs : ITreeListCommandEvent
* Telerik.Web.UI.TreeListPageSizeChangedEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Item `TreeListItem`

The item in which the command was triggered.

###  NewPageSize `Int32`

Gets an integer value representing the new page size set for the control.

## Methods

###  ExecuteCommand

Forces the execution of the command that triggered the event.

#### Parameters

#### source `System.Object`

The owner RadTreeList object

#### Returns

`System.Void` 

###  ExecuteCommand

Forces the execution of the command that triggered the event.

#### Parameters

#### source `System.Object`

The owner RadTreeList object

#### Returns

`System.Void` 

