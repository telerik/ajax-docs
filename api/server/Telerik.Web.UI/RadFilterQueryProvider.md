---
title: Telerik.Web.UI.RadFilterQueryProvider
page_title: Telerik.Web.UI.RadFilterQueryProvider
description: Telerik.Web.UI.RadFilterQueryProvider
---

# Telerik.Web.UI.RadFilterQueryProvider

Represents a base class for all query providers in Telerik.Web.UI.RadFilter .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterQueryProvider

## Properties

###  SupportedFilterFunctions `IList`1`

Gets a collection of the RadFilterFunction values supported by the current query provider.

###  SupportedGroupOperations `IList`1`

Gets a collection of the RadFilterGroupOperation supported by the current query provider.

###  Result `String`

Gets string value representing the result from the processed filter expression.

###  OnExpressionEvaluated `Action`1`

Gets\sets a delegate that will be called after every expression evaluation.
            The property could be used to alter the result of the evaluation by changing
            the values or the format based on the expression.

## Methods

###  ProcessGroup

Processes the passed RadFilterGroupExpression to create the expressions for
            filtering .

#### Parameters

#### rootGroup `Telerik.Web.UI.RadFilterGroupExpression`

The RadFilterGroupExpression to process internally.

#### Returns

`System.Void` 

###  IsValidFilterFunction

Checks whether a given filter function is supported by the current query provider.

#### Parameters

#### filterFunction `Telerik.Web.UI.RadFilterFunction`

A member of the RadFilterFunction representing a filter function
            in RadFilter.

#### Returns

`System.Boolean` true if the filter function is among the supported functions; otherwise returns false.

###  IsValidGroupOperation

Checks whether a given group operation is supported by the current query provider.

#### Parameters

#### groupOperation `Telerik.Web.UI.RadFilterGroupOperation`

A member of the RadFilterGroupOperation representing a group operation
            in RadFilter.

#### Returns

`System.Boolean` true if the filter function is among the supported operations; otherwise returns false.

