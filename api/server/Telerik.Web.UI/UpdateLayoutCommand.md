---
title: Telerik.Web.UI.UpdateLayoutCommand
page_title: Telerik.Web.UI.UpdateLayoutCommand
description: Telerik.Web.UI.UpdateLayoutCommand
---

# Telerik.Web.UI.UpdateLayoutCommand

The class represents one command which is one client-side
            operation when the Telerik.Web.UI.PivotGridConfigurationPanel DeferLayoutUpdate is enabled.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.UpdateLayoutCommand

## Properties

###  OwnerPivotGrid `RadPivotGrid`

Gets the owner pivot grid.

###  Type `UpdateLayoutCommandType`

Gets the type of the command which determines
            what operation will be made on 
            .

###  Arguments `List`1`

Gets the arguments of the command which determines
            the operation values.

## Methods

###  Execute

Executes the command and depending on the Type
            and Arguments properties it performs different operations.

#### Returns

`System.Void` 

