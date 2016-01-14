---
title: Telerik.Web.UI.PivotGrid.Core.AggregateValueExtensions
page_title: Telerik.Web.UI.PivotGrid.Core.AggregateValueExtensions
description: Telerik.Web.UI.PivotGrid.Core.AggregateValueExtensions
---

# Telerik.Web.UI.PivotGrid.Core.AggregateValueExtensions

Extension methods for the Telerik.Web.UI.PivotGrid.Core.AggregateValue class.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.AggregateValueExtensions

## Methods

###  ContainsError

Check if any of the s contains error.

#### Parameters

#### aggregateValues `System.Collections.Generic.IEnumerable{Telerik.Web.UI.PivotGrid.Core.AggregateValue}`

#### Returns

`System.Boolean` 

###  ConvertOrDefault

Convert the given aggregate value to specified type.

#### Parameters

#### aggregateValue `Telerik.Web.UI.PivotGrid.Core.AggregateValue`

The aggregate value to convert.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.T` The value associated, if conversion is possible;
            otherwise, the default value for the type of the value parameter.

###  IsError

Check if the value of the  is error.

#### Parameters

#### aggregateValue `Telerik.Web.UI.PivotGrid.Core.AggregateValue`

The aggregate value to check.

#### Returns

`System.Boolean` True if the actual value is , otherwise false.

###  TryConvertValue

Tries to convert the given aggregate value to specified type.

#### Parameters

#### aggregateValue `Telerik.Web.UI.PivotGrid.Core.AggregateValue`

The aggregate value to convert.

#### value ```0@`

When this method returns, contains the value associated, if conversion is possible;
            otherwise, the default value for the type of the value parameter. This parameter is passed uninitialized.

#### Returns

`System.Boolean` True if conversion succeeded, otherwise false.

