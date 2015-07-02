---
title: Telerik.Web.UI.TreeListSortExpression
page_title: Telerik.Web.UI.TreeListSortExpression
description: Telerik.Web.UI.TreeListSortExpression
---

# Telerik.Web.UI.TreeListSortExpression

Class that is used to define sort field and sort order for RadTreeList

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.TreeListSortExpression

## Properties

###  FieldName `String`

Gets or sets the name of the field to which sorting is applied.

###  SortOrder `TreeListSortOrder`

Sets or gets the current sorting order.

## Methods

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

`Telerik.Web.UI.TreeListSortOrder` 

###  Parse

Parses a string representation of the sort order and returns RadTreeListSortExpression.

#### Returns

`Telerik.Web.UI.TreeListSortExpression` 

