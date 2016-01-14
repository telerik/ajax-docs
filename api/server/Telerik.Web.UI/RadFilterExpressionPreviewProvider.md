---
title: Telerik.Web.UI.RadFilterExpressionPreviewProvider
page_title: Telerik.Web.UI.RadFilterExpressionPreviewProvider
description: Telerik.Web.UI.RadFilterExpressionPreviewProvider
---

# Telerik.Web.UI.RadFilterExpressionPreviewProvider

Represents a query provider which builds a string expression used for visual preview of the filter expression.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterQueryProvider
* Telerik.Web.UI.RadFilterExpressionPreviewProvider

## Properties

###  OnExpressionEvaluated `Action`1`

Gets\sets a delegate that will be called after every expression evaluation.
            The property could be used to alter the result of the evaluation by changing
            the values or the format based on the expression.

###  OwnerFilter `RadFilter`

Gets a reference to the owner  object.

###  Result `String`

Gets string value representing the result from the processed filter expression.

###  SupportedFilterFunctions `IList`1`

Gets List of the filter functions supported by this provider.

###  SupportedFilterFunctions `IList`1`

Gets a collection of the RadFilterFunction values supported by the current query provider.

###  SupportedGroupOperations `IList`1`

Gets List of the group operations supported by this provider.

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

###  ProcessGroup

Processes the passed RadFilterGroupExpression object to build a filter expression.

#### Parameters

#### rootGroup `Telerik.Web.UI.RadFilterGroupExpression`

A RadFilterGroupExpression object that will be used to extract the 
            filter expression.

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

