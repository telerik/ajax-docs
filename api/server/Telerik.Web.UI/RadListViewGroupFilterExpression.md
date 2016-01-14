---
title: Telerik.Web.UI.RadListViewGroupFilterExpression
page_title: Telerik.Web.UI.RadListViewGroupFilterExpression
description: Telerik.Web.UI.RadListViewGroupFilterExpression
---

# Telerik.Web.UI.RadListViewGroupFilterExpression

Represents a group of filter expressions

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadListViewFilterExpression : IEquatable`1, IHideObjectMembers, IStateManager
* Telerik.Web.UI.RadListViewGroupFilterExpression : IRadListViewFilterExpressionContainer

## Properties

###  Expressions `IList`1`

Gets the collection holding all  filter expressions.

###  ExpressionType `String`

Gets the type of the current filter expression object

###  FieldName `String`

Gets or sets the name of the field on which the filter expression should be applied

###  FieldType `Type`

Gets the type of the field.

###  FieldType `Type`

Gets the type of the field

###  FilterFunction `RadListViewFilterFunction`

Gets the type of filter function.

###  FilterFunction `RadListViewFilterFunction`

Gets the type of filter function

###  GroupOperator `RadListViewGroupFilterOperator`

Gets logical operator which is connects the inner filterexpression

###  IllegalStrings `String[]`

Gets or sets the illegal strings array. These values indicate which strings could not be entered as a part of the filtering value.
            Excluding values from the array will allow these values to be entered in the filtering value. However, it is not recommended
            because possible security vulnerabilities could arise.

## Methods

###  Add

Adds a given filter expression of the group

#### Parameters

#### filterExpression `Telerik.Web.UI.RadListViewFilterExpression`

fitlerexpression to be added

#### Returns

`System.Void` 

###  FindByFieldName

Finds the  by specified field name.

#### Parameters

#### fieldName `System.String`

The field name to be searched for.

#### Returns

`Telerik.Web.UI.RadListViewFilterExpression` 

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

Returns a string representation of the filter expressions 
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

`System.Predicate`1` delegate instance

###  ToPredicate

Returns a representation of the current filter expression as a delegate

#### Remarks
Not intended  for external usage

#### Returns

`System.Predicate`1` 

