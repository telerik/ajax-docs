---
title: Telerik.Web.UI.RadFilterGridQueryProvider
page_title: Telerik.Web.UI.RadFilterGridQueryProvider
description: Telerik.Web.UI.RadFilterGridQueryProvider
---

# Telerik.Web.UI.RadFilterGridQueryProvider

Represents a query provider used to filter Telerik.Web.UI.RadGrid when it is assigned as a filter 
            container for Telerik.Web.UI.RadFilter .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterQueryProvider
* Telerik.Web.UI.RadFilterDynamicLinqQueryProvider
* Telerik.Web.UI.RadFilterGridQueryProvider

## Properties

###  IsCaseSensitive `Boolean`

Gets or sets a boolean value indicating whether the query will be case-sensitive.

###  OnExpressionEvaluated `Action`1`

Gets\sets a delegate that will be called after every expression evaluation.
            The property could be used to alter the result of the evaluation by changing
            the values or the format based on the expression.

###  Result `String`

Gets string value representing the result from the processed filter expression.

###  SupportedFilterFunctions `IList`1`

Gets an IList of the RadFilterFunction values supported by the query provider.

###  SupportedFilterFunctions `IList`1`

Gets a collection of the RadFilterFunction values supported by the current query provider.

###  SupportedGroupOperations `IList`1`

Gets an IList of the RadFilterGroupOperation values supported by the query provider.

###  SupportedGroupOperations `IList`1`

Gets a collection of the RadFilterGroupOperation supported by the current query provider.

## Methods

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

###  PrepareQuery

Prepares a string query using the RadFilterDynamicLinqExpressionEvaluator.

#### Parameters

#### expression `Telerik.Web.UI.RadFilterNonGroupExpression`

A RadFilterNonGroupExpression instance to build the query from.

#### Returns

`System.String` A string representation of the filter expression using Dynamic LINQ syntax.

###  ProcessGroup

Proccesses a RadFilterGroupExpression object to build a filter query.

#### Parameters

#### rootGroup `Telerik.Web.UI.RadFilterGroupExpression`

A RadFilterGroupExpression instance representing the current filter
            expression.

#### Returns

`System.Void` 

###  ProcessGroup

Processes the passed RadFilterGroupExpression to create the expressions for
            filtering .

#### Parameters

#### rootGroup `Telerik.Web.UI.RadFilterGroupExpression`

The RadFilterGroupExpression to process internally.

#### Returns

`System.Void` 

