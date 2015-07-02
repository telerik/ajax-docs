---
title: Telerik.Web.UI.PivotGrid.Core.CalculatedItem
page_title: Telerik.Web.UI.PivotGrid.Core.CalculatedItem
description: Telerik.Web.UI.PivotGrid.Core.CalculatedItem
---

# Telerik.Web.UI.PivotGrid.Core.CalculatedItem

Represents an abstraction of a calculated item.

#### Remarks
These items are added to GroupDescription and they create a new group with summary returned by the M:Telerik.Web.UI.PivotGrid.Core.CalculatedItem.GetValue(Telerik.Web.UI.PivotGrid.Core.IAggregateSummaryValues) method.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.CalculatedItem

## Properties

###  SolveOrder `Int32`

Gets or sets the solve order of the calculated item.

#### Remarks
The summary for coordinate participating in calculated items in both row and column will be calculated based on the calculated item with larger solve order.

###  GroupName `Object`

Gets or sets the name of groups generated for this calculated item.

## Methods

###  ToString

#### Returns

`System.String` 

###  GetValue

Gets the value for this calculated item.

#### Parameters

#### aggregateSummaryValues `Telerik.Web.UI.PivotGrid.Core.IAggregateSummaryValues`

Interface used to get aggregate value based on group name.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.AggregateValue` for this calculated item.

