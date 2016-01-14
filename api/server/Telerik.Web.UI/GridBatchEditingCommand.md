---
title: Telerik.Web.UI.GridBatchEditingCommand
page_title: Telerik.Web.UI.GridBatchEditingCommand
description: Telerik.Web.UI.GridBatchEditingCommand
---

# Telerik.Web.UI.GridBatchEditingCommand

A class holding data and functions associated with a batch editing command.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridBatchEditingCommand

## Properties

###  Canceled `Boolean`

Set to true to cancel the default command execution.

###  Item `GridDataItem`

Gets the  object which the command
            will operate on. Note that the value could be null if the
            Type equals GridBatchEditingCommandType.Insert.

###  NewValues `Hashtable`

Gets a  with the new values which
            represents a merge between the  and
            the newly entered data.

###  OldValues `Hashtable`

Gets a  with the old values.

###  OwnerTableView `GridTableView`

Gets the owner .

###  Type `GridBatchEditingCommandType`

Gets the type of the command determining if the current operation
            is Insert, Update or Delete operation.

## Methods

###  Execute

Executes the command and depending on the  
            and  properties it performs different operations.

#### Returns

`System.Void` 

