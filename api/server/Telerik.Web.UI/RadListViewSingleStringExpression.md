---
title: Telerik.Web.UI.RadListViewSingleStringExpression
page_title: Telerik.Web.UI.RadListViewSingleStringExpression
description: Telerik.Web.UI.RadListViewSingleStringExpression
---

# Telerik.Web.UI.RadListViewSingleStringExpression

Abstract class holding all filter expression which use single string for a filter value.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadListViewFilterExpression : IEquatable`1, IHideObjectMembers, IStateManager
* Telerik.Web.UI.RadListViewSingleValueExpression`1 : IEquatable`1, IRadListViewSingleValueExpression
* Telerik.Web.UI.RadListViewSingleStringExpression

## Properties

###  CurrentValue `T`

Value to be filter on

###  FieldType `Type`

Get the type of the field

###  FieldName `String`

Gets or sets the name of the field on which the filter expression should be applied

###  IllegalStrings `String[]`

Gets or sets the illegal strings array. These values indicate which strings could not be entered as a part of the filtering value.
            Excluding values from the array will allow these values to be entered in the filtering value. However, it is not recommended
            because possible security vulnerabilities could arise.

###  FilterFunction `RadListViewFilterFunction`

Gets the type of filter function

###  FieldType `Type`

Gets the type of the field

###  ExpressionType `String`

Gets the type of the current filter expression object

## Methods

###  ToDynamicLinq

Returns a string representation of the filter expression
            in format suitable for LinqDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` LinqDataSource string representation

###  ToEntitySQL

Returns a string representation of the filter expression
            in format suitable for EntityDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` EntityDataSource string representation

###  Equals

Determines if the specified single value expression equals this instance expression.

#### Parameters

#### other `Telerik.Web.UI.RadListViewSingleValueExpression{`0}`

The other filter expression which will be used for comprasion.

#### Returns

`System.Boolean` 

###  Equals

#### Returns

`System.Boolean` 

###  GetHashCode

#### Returns

`System.Int32` 

###  ToDynamicLinq

Returns a string representation of the filter expression
            in format suitable for LinqDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` LinqDataSource string representation

###  ToOql

Returns a string representation of the filter expression
            in format suitable for OpenAccessDataSource control usage.

#### Remarks
Not intended for external usage

#### Returns

`System.String` OpenAccessDataSource string representation

###  ToEntitySQL

Returns a string representation of the filter expression
            in format suitable for EntityDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` EntityDataSource string representation

###  ToPredicate

Returns a representation of the current filter expression as a delegate

#### Remarks
Not intended  for external usage

#### Returns

`System.Predicate`1` 

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

###  Equals

#### Returns

`System.Boolean` 

###  Equals

#### Returns

`System.Boolean` 

###  GetHashCode

#### Returns

`System.Int32` 

