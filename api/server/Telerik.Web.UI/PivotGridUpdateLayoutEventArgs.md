---
title: Telerik.Web.UI.PivotGridUpdateLayoutEventArgs
page_title: Telerik.Web.UI.PivotGridUpdateLayoutEventArgs
description: Telerik.Web.UI.PivotGridUpdateLayoutEventArgs
---

# Telerik.Web.UI.PivotGridUpdateLayoutEventArgs

The arguments passed when Telerik.Web.UI.RadPivotGrid fires UpdateLayout event which is fired when
            Telerik.Web.UI.PivotGridConfigurationPanel DeferLayoutUpdate
            is enabled and then the Telerik.Web.UI.RadButton is pressed.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.PivotGridCommandEventArgs
* Telerik.Web.UI.PivotGridUpdateLayoutEventArgs

## Properties

###  UpdateLayoutCommands `List`1`

Gets the update layout commands which will be executed in order for the
             to be updated depending on
            the operations made client-side.

## Methods

###  ExecuteCommand

Fires the command stored in 
            property

#### Parameters

#### source `System.Object`

The source control which triggers the event

#### Returns

`System.Void` 

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

