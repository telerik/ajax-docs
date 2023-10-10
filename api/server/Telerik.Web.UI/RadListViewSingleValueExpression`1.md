---
title: Telerik.Web.UI.RadListViewSingleValueExpression`1
page_title: Telerik.Web.UI.RadListViewSingleValueExpression`1
description: Telerik.Web.UI.RadListViewSingleValueExpression`1
---

# Telerik.Web.UI.RadListViewSingleValueExpression`1

Abstract class representing basic single value filter expressions.
            Examples for single value expressions are: "EqualTo", "EndsWith",
            "Contains", "GreaterThan", "IsEmpty", "IsNotNull", "IsNull", "LessThan",
            "StartsWith", etc.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadListViewFilterExpression : IEquatable`1, IHideObjectMembers, IStateManager
* Telerik.Web.UI.RadListViewSingleValueExpression`1 : IEquatable`1, IRadListViewSingleValueExpression

## Properties

###  CurrentValue `T`

Value to be filter on

###  ExpressionType `String`

Gets the type of the current filter expression object

###  FieldName `String`

Gets or sets the name of the field on which the filter expression should be applied

###  FieldType `Type`

Get the type of the field

###  FieldType `Type`

Gets the type of the field

###  FilterFunction `RadListViewFilterFunction`

Gets the type of filter function

###  IllegalStrings `String[]`

Gets or sets the illegal strings array. These values indicate which strings could not be entered as a part of the filtering value.
            Excluding values from the array will allow these values to be entered in the filtering value. However, it is not recommended
            because possible security vulnerabilities could arise.

## Methods

###  Equals

Determines if the specified single value expression equals this instance expression.

#### Parameters

#### other `Telerik.Web.UI.RadListViewSingleValueExpression{`0}`

The other filter expression which will be used for comprasion.

#### Returns

`System.Boolean` 

###  ToDynamicLinq

Returns a string representation of the filter expression
            in format suitable for LinqDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` LinqDataSource string representation

###  ToDynamicLinq

Returns a string representation of the filter expression
            in format suitable for LinqDataSource usage.

#### Remarks
Not intended for external usage

#### Returns

`System.String` LinqDataSource string representation

###  ToEntitySQL

Returns a string representation of the filter expression
            in format suitable for EntityDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` EntityDataSource string representation

###  ToEntitySQL

Returns a string representation of the filter expression
            in format suitable for EntityDataSource usage.

#### Remarks
Not intended for external usage

#### Returns

`System.String` EntityDataSource string representation

###  ToOql

Returns a string representation of the filter expression
            in format suitable for OpenAccessDataSource control usage.

#### Remarks
Not intended for external usage

#### Returns

`System.String` OpenAccessDataSource string representation

###  ToOql

Returns a string representation of the filter expression
            in format suitable for OpenAccessDataSource control usage.

#### Remarks
Not intended for external usage

#### Returns

`System.String` OpenAccessDataSource string representation

###  ToPredicate

Returns a representation of the current filter expression as a delegate

#### Remarks
Not intended  for external usage

#### Returns

`System.Predicate`1` 

