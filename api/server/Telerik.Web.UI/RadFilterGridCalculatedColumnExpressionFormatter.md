---
title: Telerik.Web.UI.RadFilterGridCalculatedColumnExpressionFormatter
page_title: Telerik.Web.UI.RadFilterGridCalculatedColumnExpressionFormatter
description: Telerik.Web.UI.RadFilterGridCalculatedColumnExpressionFormatter
---

# Telerik.Web.UI.RadFilterGridCalculatedColumnExpressionFormatter

Represents a formatter that creates a string representation of a filter expression 
            using the passed field name and data type. The expression is useful when Telerik.Web.UI.RadGrid is pointed as a filter container.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterGridCalculatedColumnExpressionFormatter

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

