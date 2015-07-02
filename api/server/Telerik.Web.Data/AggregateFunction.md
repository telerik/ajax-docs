---
title: Telerik.Web.Data.AggregateFunction
page_title: Telerik.Web.Data.AggregateFunction
description: Telerik.Web.Data.AggregateFunction
---

# Telerik.Web.Data.AggregateFunction

Represents the basic class that supports creating functions that provide statistical information about a set of items.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.AggregateFunction

## Properties

###  Caption `String`

Gets or sets the informative message to display as an illustration of the aggregate function.

###  FunctionName `String`

Gets or sets the name of the aggregate function, which appears as a property of the group record on which records the function works.

###  ResultFormatString `String`

Gets or sets a string that is used to format the result value.

## Methods

###  CreateAggregateExpression

Creates the aggregate expression that is used for constructing expression 
            tree that will calculate the aggregate result.

#### Parameters

#### enumerableExpression `System.Linq.Expressions.Expression`

The grouping expression.

#### Returns

`System.Linq.Expressions.Expression` 

###  GenerateFunctionName

Generates default name for this function using this type's name.

#### Returns

`System.String` Function name generated with the following pattern: 
            {.}_{}

