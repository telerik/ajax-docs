---
title: Telerik.Web.UI.PivotGridExpandCollapseLevelEventArgs
page_title: Telerik.Web.UI.PivotGridExpandCollapseLevelEventArgs
description: Telerik.Web.UI.PivotGridExpandCollapseLevelEventArgs
---

# Telerik.Web.UI.PivotGridExpandCollapseLevelEventArgs

The event arguments passed when Telerik.Web.UI.RadPivotGrid fires Expand\Collapse of a Rows or Columns group level.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.PivotGridCommandEventArgs : IPivotGridCommandEvent
* Telerik.Web.UI.PivotGridExpandCollapseLevelEventArgs

## Properties

###  GroupType `PivotGridGroupType`

Gets the group which will be expanded or collapsed.

###  Level `Int32`

Get a value indicating which level will be expanded or collapsed.

###  OperationType `PivotGridExpandCollapseOperationType`

Gets a value indicating if a expand or collapse operation will be performed.

###  OwnerPivotGrid `RadPivotGrid`

Gets the owner pivot grid.

## Methods

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

