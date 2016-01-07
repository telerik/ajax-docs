---
title: Telerik.Web.UI.RadListViewFilterExpression
page_title: Client-side API Reference
description: Telerik.Web.UI.RadListViewFilterExpression
slug: Telerik.Web.UI.RadListViewFilterExpression
---

# Telerik.Web.UI.RadListViewFilterExpression  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadListViewFilterExpression]({%slug Telerik.Web.UI.RadListViewFilterExpression%})*

## Methods

###  get_fieldName

Gets the field name of the expression

#### Parameters

#### Returns

`String` 

###  get_filterFunction

Gets the filter function of the expression

#### Parameters

#### Returns

`String` 

###  get_value

Gets the filter value of the expression

#### Parameters

#### Returns

`Object` 

###  isEqualTo

Returns a boolean value indicating whether the current expression is equal to or contains the specified parameters.

#### Parameters

##### fieldName `Telerik.Web.UI.RadListViewFilterExpression`

The field name 

##### filterFunction `String`

Optional

##### filterValue `Object`

Optional

#### Returns

`None` 

###  set_fieldName

Sets the field name of this expression

#### Parameters

##### value `String`

The field name of the expression

#### Returns

`None` 

###  set_filterFunction

Sets the filter function of this expression

#### Parameters

##### value `String`

One of the Telerik.Web.UI.RadListViewFilterFunction enumeration values

#### Returns

`None` 

###  set_value

Sets the filter value of this expression

#### Parameters

##### value `Object`

The filter value of this expression

#### Returns

`None` 

###  toLinq

Returns a Dynamic LINQ string representation of this expression

#### Parameters

#### Returns

`None` 

###  toOData

Returns an OData string representation of this expression

#### Parameters

#### Returns

`None` 

###  toObject

Returns a JSON object representing this field expression The object has the following fields: {field: "ID", filter: "EqualTo", value: 7}.

#### Parameters

#### Returns

`None` 

###  toSql

Returns an SQL string representation of this expression

#### Parameters

#### Returns

`None` 


