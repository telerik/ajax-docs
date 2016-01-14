---
title: Telerik.Web.UI.RadFilterGridBindableTypeExpressionEvaluator
page_title: Telerik.Web.UI.RadFilterGridBindableTypeExpressionEvaluator
description: Telerik.Web.UI.RadFilterGridBindableTypeExpressionEvaluator
---

# Telerik.Web.UI.RadFilterGridBindableTypeExpressionEvaluator

Represents an expression evaluator used for building filter expressions for 
            Telerik.Web.UI.RadGrid .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterExpressionEvaluatorBase
* Telerik.Web.UI.RadFilterDynamicLinqExpressionEvaluator
* Telerik.Web.UI.RadFilterGridBindableTypeExpressionEvaluator

## Properties

###  IsCaseSensitive `Boolean`

Gets or sets a value indicating whether the formatted field name and value are case sensitive

###  OnExpressionEvaluated `Action`1`

Gets\sets a delegate that will be called after every expression evaluation.
            The property could be used to alter the result of the evaluation by changing
            the values or the format based on the expression.

## Methods

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

###  GetEvaluator

Returns a reference to the RadFilterDynamicLinqExpressionEvaluator instance.

#### Parameters

#### function `Telerik.Web.UI.RadFilterFunction`

The RadFilterFunction used in the evaluated filter expression.

#### Returns

`Telerik.Web.UI.RadFilterDynamicLinqExpressionEvaluator` The RadFilterDynamicLinqExpressionEvaluator for the specific function provided.

###  GetEvaluator

Returns a reference to the RadFilterDynamicLinqExpressionEvaluator instance.

#### Parameters

#### function `Telerik.Web.UI.RadFilterFunction`

The RadFilterFunction used in the evaluated filter expression.

#### Returns

`Telerik.Web.UI.RadFilterDynamicLinqExpressionEvaluator` The RadFilterDynamicLinqExpressionEvaluator for the specific function provided.

