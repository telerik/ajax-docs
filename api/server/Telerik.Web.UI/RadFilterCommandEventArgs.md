---
title: Telerik.Web.UI.RadFilterCommandEventArgs
page_title: Telerik.Web.UI.RadFilterCommandEventArgs
description: Telerik.Web.UI.RadFilterCommandEventArgs
---

# Telerik.Web.UI.RadFilterCommandEventArgs

The arguments passed when Telerik.Web.UI.RadTreeList fires a command event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadFilterCommandEventArgs

## Properties

###  ExpressionItem `RadFilterExpressionItem`

Gets the RadFilterExpressionItem that fired the command, if there is such.

###  EventSource `Object`

Gets the control which was responsible for firing the event.

###  Canceled `Boolean`

Gets or sets a value indicating whether the current command is cancelled.

## Methods

###  ExecuteCommand

Forces the execution of the command that triggered the event.

#### Parameters

#### source `System.Object`

The owner RadFilter object

#### Returns

`System.Void` 

