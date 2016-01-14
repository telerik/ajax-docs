---
title: Telerik.Web.UI.TreeListSortEventArgs
page_title: Telerik.Web.UI.TreeListSortEventArgs
description: Telerik.Web.UI.TreeListSortEventArgs
---

# Telerik.Web.UI.TreeListSortEventArgs

A base class representing the event args passed when Telerik.Web.UI.RadTreeList fires the SortCommand event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.TreeListCommandEventArgs : ITreeListCommandEvent
* Telerik.Web.UI.TreeListSortEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Item `TreeListItem`

The item in which the command was triggered.

###  NewSortOrder `TreeListSortOrder`

Gets a value from the TreeListSortOrder enumeration representing the sort order of the column
            after the SortCommand event was fired.

###  OldSortOrder `TreeListSortOrder`

Gets a value from the TreeListSortOrder enumeration representing the sort order of the column
            before the SortCommand event was fired.

###  SortExpression `String`

A string representing the current sort expression.

## Methods

###  ExecuteCommand

Forces the execution of the sort command that riggered the event.

#### Returns

`System.Void` 

###  ExecuteCommand

Forces the execution of the command that triggered the event.

#### Parameters

#### source `System.Object`

The owner RadTreeList object

#### Returns

`System.Void` 

###  HandleSorting

Triggers the RadTreeList to handle the sorting operation.

#### Parameters

#### ownerTreeList `Telerik.Web.UI.RadTreeList`

The owner RadTreeList object.

#### commandSource `System.Object`

The object that was used to trigger the command.

#### commandArgument `System.String`

A string representing the command argument.

#### Returns

`System.Void` 

