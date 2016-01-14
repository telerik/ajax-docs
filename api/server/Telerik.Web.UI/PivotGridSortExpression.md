---
title: Telerik.Web.UI.PivotGridSortExpression
page_title: Telerik.Web.UI.PivotGridSortExpression
description: Telerik.Web.UI.PivotGridSortExpression
---

# Telerik.Web.UI.PivotGridSortExpression

Class that is used to define sort field and sort order for RadPivotGrid

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGridSortExpression : IStateManager

## Properties

###  FieldName `String`

Gets or sets the name of the field to which sorting is applied.

###  SortOrder `PivotGridSortOrder`

Sets or gets the current sorting order.

## Methods

###  Parse

Parses a string representation of the sort order and returns RadPivotGridSortExpression.

#### Returns

`Telerik.Web.UI.PivotGridSortExpression` 

###  SetSortOrder

Sets the sort order.The SortOrder paremeter should be either "Ascending" or "Descending".

#### Returns

`System.Void` 

###  SortOrderAsString

This method gives the string representation of the sorting order. It can be
            either "ASC" or "DESC"

#### Returns

`System.String` 

###  SortOrderAsString

This method gives the string representation of the sorting order. It can be
            either "ASC" or "DESC"

#### Returns

`System.String` 

###  SortOrderFromString

Returns a  enumeration based on the string input. Takes either "ASC"
            or "DESC"

#### Returns

`Telerik.Web.UI.PivotGridSortOrder` 

