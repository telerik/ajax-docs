---
title: Telerik.Web.UI.GridSortExpression
page_title: Telerik.Web.UI.GridSortExpression
description: Telerik.Web.UI.GridSortExpression
---

# Telerik.Web.UI.GridSortExpression

Class that is used to define sort field and sort order for RadGrid

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridSortExpression : IStateManager

## Properties

###  FieldName `String`

Gets or sets the name of the field to which sorting is applied.

###  SortOrder `GridSortOrder`

Sets or gets the current sorting order.

## Methods

###  SortOrderAsString

This method gives the string representation of the sorting order. It can be
            either "ASC" or "DESC"

#### Returns

`System.String` 

###  SortOrderFromString

Returns a GridSortOrder enumeration based on the string input. Takes either "ASC"
            or "DESC"

#### Returns

`Telerik.Web.UI.GridSortOrder` 

###  SortOrderAsString

This method gives the string representation of the sorting order. It can be
            either "ASC" or "DESC"

#### Returns

`System.String` 

###  Equals

#### Returns

`System.Boolean` 

###  GetHashCode

#### Returns

`System.Int32` 

###  SetSortOrder

Sets the sort order.The SortOrder paremeter should be either "Ascending", "Descending" or "None".

#### Returns

`System.Void` 

###  ToString

#### Returns

`System.String` 

###  Parse

Parses a string representation of the sort order and returns
            GirdSortExpression.

#### Returns

`Telerik.Web.UI.GridSortExpression` 

