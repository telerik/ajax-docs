---
title: Telerik.Web.UI.RadFilterGroupExpression
page_title: Telerik.Web.UI.RadFilterGroupExpression
description: Telerik.Web.UI.RadFilterGroupExpression
---

# Telerik.Web.UI.RadFilterGroupExpression

Represents the group expressions in Telerik.Web.UI.RadFilter .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadFilterExpression
* Telerik.Web.UI.RadFilterGroupExpression

## Properties

###  GroupOperation `RadFilterGroupOperation`

Gets or sets a value from the RadFilterGroupOperation enumeration representing the currently used
            group operation.

###  Expressions `RadFilterExpressionsCollection`

Gets a collection of all RadFilterExpression objects belonging to the current group.

###  FilterFunction `RadFilterFunction`

Gets the filter function of the current expression.

###  IsEmpty `Boolean`

Returns a boolean value indicating whether the current group expression has no filter
            expressions added.

###  FilterFunction `RadFilterFunction`

Gets the filter function used in the current expression.

## Methods

###  FindByFieldName

Returns a RadFilterNonGroupExpression based on the field name provided.

#### Parameters

#### fieldName `System.String`

A string representing the field name of the expression.

#### Returns

`Telerik.Web.UI.RadFilterNonGroupExpression` A RadFilterNonGroupExpression having the provided field name.

###  AddExpression

Adds a passed RadFilterExpression to the Expressions collection of the group.

#### Parameters

#### expression `Telerik.Web.UI.RadFilterExpression`

The RadFilterExpression to add to the Expressions of the current group.

#### Returns

`System.Void` 

