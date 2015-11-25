---
title: Telerik.Web.UI.RadListViewSortExpression
page_title: Telerik.Web.UI.RadListViewSortExpression
description: Telerik.Web.UI.RadListViewSortExpression
---

# Telerik.Web.UI.RadListViewSortExpression

Class that is used to define sort field and sort order for RadListView

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadListViewSortExpression : IStateManager

## Properties

###  FieldName `String`

Gets or sets the name of the field to which sorting is applied.

###  SortOrder `RadListViewSortOrder`

Sets or gets the current sorting order.

## Methods

###  SortOrderAsString

This method gives the string representation of the sorting order. It can be
            either "ASC" or "DESC"

#### Returns

`System.String` 

###  SortOrderFromString

Returns a  enumeration based on the string input. Takes either "ASC"
            or "DESC"

#### Returns

`Telerik.Web.UI.RadListViewSortOrder` 

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

`Telerik.Web.UI.RadListViewSortExpression` 

