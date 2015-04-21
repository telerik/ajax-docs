---
title: Formatting Numeric Values
page_title: Formatting Numeric Values | UI for ASP.NET AJAX Documentation
description: Formatting Numeric Values
slug: input/radnumerictextbox/formatting-numeric-values
tags: formatting,numeric,values
published: True
position: 1
---

# Formatting Numeric Values



The **NumberFormat** property controls how **RadNumericTextBox** formats its value. The format that you specify in this way is applied when the numeric text box does not have focus. During editing, **RadNumericTextBox** always uses the actual number.

>note The value of **NumberFormat** takes precedence over both the **Type** property and the **Culture** property.
>


**NumberFormat** is a composite property with the following sub-properties:


>caption  

|  **Sub-property**  |  **Type**  |  **Description**  |
| ------ | ------ | ------ |
|AllowRounding|Boolean|Specifies whether the value is rounded ( **when set to true** ) or truncated ( **when set to false** ) when the number of decimal places exceeds the value of DecimalDigits.|
|KeepNotRoundedValue|Boolean|Specifies whether the control will keep its not rounded value ( **when set to true** ) and show it when it is focused. Otherwise ( **when set to false** ) the old behavior is preserved, where theactual value of the control is the rounded value. By default this property is set to **false** .|
|KeepTrailingZerosOnFocus|Boolean|Specifies whether the control will keep its zero numbers( **when set to true** ) and show them when it is focused, according to the DecimalDigits setting. Otherwise ( **when set to false** ) the old behavior is preserved - the control will not display decimal zeros when focused. By default this property is set to **false** .|
|DecimalDigits|Integer|Specifies the number of digits that are displayed after the decimal separator.|
|DecimalSeparator|Character|Specifies the character that separates the fractional portion of a number.|
|GroupSeparator|Character|Specifies the character that separates each group of digits.|
|GroupSizes|Integer|Specifies the number of digits in each group, starting from the decimal separator.|
|NegativePattern|String|Specifies the pattern for formatting negative values. (See below for details on formatting patterns.)|
|PositivePattern|String|Specifies the pattern for formatting positive values. (See below for details on formatting patterns.)|
|ZeroPattern|String|Specifies the pattern for formatting the value when it equals zero. (See below for details on formatting patterns.)|

## Formatting patterns

Formatting patterns are strings that control the placement of elements when formatting a numeric value. A Formatting pattern consists of the special symbol **n**, which represents the number, plus any literal characters that are part of the formatted value. Typically, the literal values are characters such as the negative sign ("-"), a currency symbol ("$"), parentheses, and so on.

>note The characters other than n in a formatting pattern are literal symbols. If you use the dollar sign ("$") as a currency symbol, for example, currency values are formatted using that symbol regardless of the value of the **Culture** property.
>


For a live example of different NumberFormat settings, see [Formatting Value](http://demos.telerik.com/aspnet-ajax/Input/Examples/RadNumericTextBox/Formatting/DefaultCS.aspx).

## Numeric value precision

Since the **RadNumericTextBox** operates on both client and server side, it is limited by the data types used in C# and JavaScript. Although it could be bound to Decimal type using its DbValue property, its precision will be limited to JavaScript’s [Number](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number) type.Therefore, it is recommended to use only numbers within range of [Double](http://msdn.microsoft.com/en-us/library/678hzkk9%28v=vs.80%29.aspx) type, which means that you will get only 15-16 digit precision.

## Number Seperators

**GroupSeparator** and **DecimalSeparator** should not be set as the samecharacter. By default they are culture depended meaning that in “en-US” culture the default group separator would be ‘,’ (comma) and thedefault decimal separator would be ‘.’ (dot). If you decide to change one of the seperators to the character which is already assignedto the other seperator, you should also modify the character for the latter seperator.

# See Also

 * [Overview]({%slug input/radnumerictextbox/overview%})
