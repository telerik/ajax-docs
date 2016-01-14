---
title: Telerik.Web.UI.GridBatchEditingEventArgs
page_title: Telerik.Web.UI.GridBatchEditingEventArgs
description: Telerik.Web.UI.GridBatchEditingEventArgs
---

# Telerik.Web.UI.GridBatchEditingEventArgs

The event arguments passed when the E:Telerik.Web.UI.RadGrid.BatchEditCommand event is fired.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridBatchEditingEventArgs : IGridCommandEvent

## Properties

###  Canceled `Boolean`

Set to true to cancel the default command execution.

###  Commands `List`1`

The collection of commands which will be executed.

###  Item `GridItem`

The  which initialized the event.

## Methods

###  ExecuteCommand

Fires the default command execution. The execution could be canceled by canceling it in the 
             event.

#### Parameters

#### source `System.Object`

The source control which triggers the event.

#### Returns

`System.Void` 

