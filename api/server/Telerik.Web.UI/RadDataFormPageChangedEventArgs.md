---
title: Telerik.Web.UI.RadDataFormPageChangedEventArgs
page_title: Telerik.Web.UI.RadDataFormPageChangedEventArgs
description: Telerik.Web.UI.RadDataFormPageChangedEventArgs
---

# Telerik.Web.UI.RadDataFormPageChangedEventArgs

The event arguments passed when Telerik.Web.UI.RadDataForm fires PageChanged event during paging.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.RadDataFormCommandEventArgs : IRadDataFormCommandEvent
* Telerik.Web.UI.RadDataFormPageChangedEventArgs

## Properties

###  NewPageIndex `Int32`

Gets or sets the new PageIndex value.

###  DataFormItem `RadDataFormItem`

Gets or sets the  which was responsible for firing the event.

###  EventSource `Object`

Gets or sets the event source which represent the control which fired the event.

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

Executes the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

###  ExecuteCommand

Override to fire the corresponding command.

#### Parameters

#### source `System.Object`

The source control which fires the command.

#### Returns

`System.Void` 

