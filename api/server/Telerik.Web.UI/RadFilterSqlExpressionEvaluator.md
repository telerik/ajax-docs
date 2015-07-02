---
title: Telerik.Web.UI.RadFilterSqlExpressionEvaluator
page_title: Telerik.Web.UI.RadFilterSqlExpressionEvaluator
description: Telerik.Web.UI.RadFilterSqlExpressionEvaluator
---

# Telerik.Web.UI.RadFilterSqlExpressionEvaluator

Represents a base for the SQL expression evaluator classes in Telerik.Web.UI.RadFilter

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterExpressionEvaluatorBase
* Telerik.Web.UI.RadFilterSqlExpressionEvaluator

## Properties

###  IsCaseSensitive `Boolean`

Gets or sets a value indicating whether the formatted field name and value are case sensitive

###  OnExpressionEvaluated `Action`1`

Gets\sets a delegate that will be called after every expression evaluation.
            The property could be used to alter the result of the evaluation by changing
            the values or the format based on the expression.

## Methods

###  GetEvaluator

Based on a passed RadFilterFunction object returns a specific RadFilterSqlExpressionEvaluator object.

#### Parameters

#### function `Telerik.Web.UI.RadFilterFunction`

A RadFilterFunction instance representing the current filter function.

#### Returns

`Telerik.Web.UI.RadFilterSqlExpressionEvaluator` A RadFilterSqlEvaluator inherited object representing a specific evaluator, based on the 
            provided function.

###  Evaluate

Evaluates the passes expression

#### Parameters

#### expression `Telerik.Web.UI.RadFilterNonGroupExpression`

A RadFilterNonGroupExpression object representing the expression
            to be evaluated.

#### Returns

`System.String` The string representation of the expression.

###  GetEvaluationData

Evaluates an expression and returns its evaluation data.

#### Parameters

#### expression `Telerik.Web.UI.RadFilterNonGroupExpression`

A RadFilterNonGroupExpression object representing the expression
            to be evaluated.

#### Returns

`Telerik.Web.UI.RadFilterEvaluationData` The evaluation data for the expression.

