---
title: Telerik.Web.UI.PivotGrid.Core.CalculatedField
page_title: Telerik.Web.UI.PivotGrid.Core.CalculatedField
description: Telerik.Web.UI.PivotGrid.Core.CalculatedField
---

# Telerik.Web.UI.PivotGrid.Core.CalculatedField

Represents an abstraction of a calculated field.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.CalculatedField : INamed

## Properties

###  Name `String`

Gets the name of the calculated field.

###  DisplayName `String`

## Methods

###  RequiredFields

Gets all fields used in calculation.

#### Returns

`System.Collections.Generic.IEnumerable`1` Enumerable of all property names used in calculation.

###  CalculateValue

Gets the calculated value.

#### Parameters

#### aggregateValues `Telerik.Web.UI.PivotGrid.Core.IAggregateValues`

Interface used to get summary aggregate values for all properties returned by  method.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.AggregateValue` The calculated values.

