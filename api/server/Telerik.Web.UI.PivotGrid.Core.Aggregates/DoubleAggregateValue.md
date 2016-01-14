---
title: Telerik.Web.UI.PivotGrid.Core.Aggregates.DoubleAggregateValue
page_title: Telerik.Web.UI.PivotGrid.Core.Aggregates.DoubleAggregateValue
description: Telerik.Web.UI.PivotGrid.Core.Aggregates.DoubleAggregateValue
---

# Telerik.Web.UI.PivotGrid.Core.Aggregates.DoubleAggregateValue

Represents Telerik.Web.UI.PivotGrid.Core.AggregateValue with double value.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.AggregateValue
* Telerik.Web.UI.PivotGrid.Core.Aggregates.DoubleAggregateValue : IConvertibleAggregateValue`1

## Methods

###  AccumulateOverride

#### Returns

`System.Void` 

###  AccumulateOverride

Add the  to the results in the current  instance.

#### Parameters

#### value `System.Object`

The value to accumulate.

#### Returns

`System.Void` 

###  GetValue

Gets a presentation friendly value of the results in the current .

#### Returns

`System.Object` Returns an object containing a formatted value or error object.

###  GetValueOverride

#### Returns

`System.Object` 

###  GetValueOverride

Gets a presentation friendly value of the results in the current  instance to be returned in .
            If an error occurred during calculations the  will not call  but return the error instead.

#### Returns

`System.Object` A result object.

###  MergeOverride

#### Returns

`System.Void` 

###  MergeOverride

Merge the results of an  with the results in the current  instance.

#### Parameters

#### childAggregate `Telerik.Web.UI.PivotGrid.Core.AggregateValue`

The  to merge.

#### Returns

`System.Void` 

###  ToString

#### Returns

`System.String` 

