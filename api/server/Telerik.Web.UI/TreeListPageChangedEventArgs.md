---
title: Telerik.Web.UI.TreeListPageChangedEventArgs
page_title: Telerik.Web.UI.TreeListPageChangedEventArgs
description: Telerik.Web.UI.TreeListPageChangedEventArgs
---

# Telerik.Web.UI.TreeListPageChangedEventArgs

The arguments passed when Telerik.Web.UI.TreeListDataItem fires the PageIndexChanged event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.TreeListCommandEventArgs
* Telerik.Web.UI.TreeListPageChangedEventArgs

## Properties

###  NewPageIndex `Int32`

Gets an integer value indicating the new page index that will be set to the RadTreeList object.

###  Item `TreeListItem`

The item in which the command was triggered.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

## Methods

###  ExecuteCommand

Forces the execution of the Page command.

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

