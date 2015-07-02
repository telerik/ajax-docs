---
title: Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder
page_title: Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder
description: Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder
---

# Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder

Intended for internal use only

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder

## Properties

###  IsBuild `Boolean`

Gets value indicating if current expression hierarchy is build

## Methods

###  EqualTo

Adds an EqualTo filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue ```0`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  NotEqualTo

Adds an NotEqualTo filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue ```0`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  GreaterThan

Adds an GreaterThan filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue ```0`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  GreaterThanOrEqualTo

Adds an GreaterThanOrEqualTo filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue ```0`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  Contains

Adds an Contains filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue `System.String`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  StartsWith

Adds an StartsWith filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue `System.String`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  EndsWith

Adds an EndsWith filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue `System.String`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  LessThan

Adds an LessThen filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue ```0`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  LessThanOrEqualTo

Adds an LessThanOrEqualTo filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### currentValue ```0`

value to be filter on

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  IsNull

Adds an IsNull filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  IsNotNull

Adds an IsNotNull filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  IsEmpty

Adds an IsEmpty filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  IsNotEmpty

Adds an IsNotEmpty filter expression

#### Parameters

#### fieldName `System.String`

name of the field which will be filtered

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  Group

Adds a group of filter expressions

#### Parameters

#### groupBuilder `System.Action{Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder}`

inner group instance

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionLogicalBuilder` instance of the RadListViewFilterExpressionLogicalBuilder

###  Build

Builds current expressions hierarchy

#### Remarks
expressions hierarchy can be build only once

#### Returns

`System.Void` 

###  Equals

#### Returns

`System.Boolean` 

###  GetHashCode

#### Returns

`System.Int32` 

###  ToString

#### Returns

`System.String` 

###  GetType

#### Returns

`System.Type` 

