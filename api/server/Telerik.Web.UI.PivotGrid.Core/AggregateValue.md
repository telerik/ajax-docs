---
title: Telerik.Web.UI.PivotGrid.Core.AggregateValue
page_title: Telerik.Web.UI.PivotGrid.Core.AggregateValue
description: Telerik.Web.UI.PivotGrid.Core.AggregateValue
---

# Telerik.Web.UI.PivotGrid.Core.AggregateValue

Holds a value presentation of an aggregate function accumulated during pivot grouping.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.AggregateValue

## Methods

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

Gets a presentation friendly value of the results in the current  instance to be returned in .
            If an error occurred during calculations the  will not call  but return the error instead.

#### Returns

`System.Object` A result object.

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

