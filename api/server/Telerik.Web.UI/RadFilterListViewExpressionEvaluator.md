---
title: Telerik.Web.UI.RadFilterListViewExpressionEvaluator
page_title: Telerik.Web.UI.RadFilterListViewExpressionEvaluator
description: Telerik.Web.UI.RadFilterListViewExpressionEvaluator
---

# Telerik.Web.UI.RadFilterListViewExpressionEvaluator

Represents a base for the RadFilterListViewExpression evaluator classes in 
            Telerik.Web.UI.RadFilter

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterListViewExpressionEvaluator

## Methods

###  Evaluate

Evaluates the passed non-group expression to create a new RadListViewFilterExpression object.

#### Parameters

#### expression `Telerik.Web.UI.RadFilterNonGroupExpression`

The RadFilterNonGroupExpression to evaluate.

#### Returns

`Telerik.Web.UI.RadListViewFilterExpression` A resulting RadListViewFilterExpression.

###  GetEvaluator

Based on a passed RadFilterFunction object returns a specific RadFilterListViewExpressionEvaluator object.

#### Parameters

#### function `Telerik.Web.UI.RadFilterFunction`

A RadFilterFunction instance representing the current filter function.

#### Returns

`Telerik.Web.UI.RadFilterListViewExpressionEvaluator` A RadFilterListViewExpressionEvaluator inherited object representing a specific evaluator, 
            based on the provided function.

