---
title: Telerik.Web.UI.RadFilterOqlExpressionFormatter
page_title: Telerik.Web.UI.RadFilterOqlExpressionFormatter
description: Telerik.Web.UI.RadFilterOqlExpressionFormatter
---

# Telerik.Web.UI.RadFilterOqlExpressionFormatter

Represents a formatter that creates a string representation of a filter expression 
            using the passed field name and data type. The expression uses OQL syntax.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterOqlExpressionFormatter : IRadFilterExpressionFormatter

## Methods

###  FormatFieldName

Creates a formatted string using the respective syntax that is populated with the 
            provided field name and data type parameters.

#### Parameters

#### fieldName `System.String`

The name of the field the expression is built for.

#### dataType `System.Type`

The data type of the field the expression is built for.

#### isCaseSensitive `System.Boolean`

A boolean value indicating whether the formatted expression
            should be case-sensitive.

#### Returns

`System.String` A formatted string representing the filter expression.

###  FormatFieldValue

Formats the string expression using the passed filter value(s).

#### Parameters

#### values `System.Collections.ArrayList`

An ArrayList with the expression values.

#### forType `System.Type`

The data type of the expression.

#### isCaseSensitive `System.Boolean`

A boolean value indicating whether the formatted expression
            should be case-sensitive.

#### Returns

`System.Collections.ArrayList` A formatted string representing the filter expression.

###  FormatDateTime

Creates a formatted string representing a DateTime value, using invariant DateFormatInfo.

#### Parameters

#### value `System.DateTime`

The DateTime value to create a formatted string from.

#### Returns

`System.String` The resulting string that represents the DateTime value.

