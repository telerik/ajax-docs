---
title: Telerik.Web.UI.RadFilterItemBuilder
page_title: Telerik.Web.UI.RadFilterItemBuilder
description: Telerik.Web.UI.RadFilterItemBuilder
---

# Telerik.Web.UI.RadFilterItemBuilder

Represents a builder for Telerik.Web.UI.RadFilterExpressionItem objects belonging to a certain
            Telerik.Web.UI.RadFilterGroupExpression .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterItemBuilder

## Methods

###  AddItem

Adds an item to the current RadFilterGroupExpressionItem.

#### Parameters

#### item `Telerik.Web.UI.RadFilterExpressionItem`

A RadFilterExpressionItem to add to the RadFilterGroupExpressionItem.

#### Returns

`System.Void` 

###  BuildNextItem

Creates a new collection of RadFilterExpressionItem objects based on the provided parameter.

#### Parameters

#### groupExpression `Telerik.Web.UI.RadFilterGroupExpression`

The RadFilterGroupExpression the current item will be part of
            the representation for.

#### inContext `Telerik.Web.UI.RadFilterGroupExpressionItem`

The RadFilterGroupExpressionItem to which the current item will be 
            added.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

