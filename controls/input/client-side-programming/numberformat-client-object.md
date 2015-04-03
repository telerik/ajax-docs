---
title: NumberFormat Client Object
page_title: NumberFormat Client Object | UI for ASP.NET AJAX Documentation
description: NumberFormat Client Object
slug: input/client-side-programming/numberformat-client-object
tags: numberformat,client,object
published: True
position: 7
---

# NumberFormat Client Object



## 

The NumberFormat client object determines how a __RadNumericTextBox__ control formats its value when it does not have focus. It is returned by the __get_numberFormat()__ method of the [RadNumericTextBox client-side object]({%slug input/client-side-programming/radnumerictextbox-client-object%}). The following table lists its properties:


>caption  

| Property | Type | Description |
| ------ | ------ | ------ |
| __AllowRounding__ |boolean|Specifies whether values are rounded (true) or truncated (false) when not all the decimal places can be shown.|
| __DecimalDigits__ |integer|Specifies the number of decimal places to show.|
| __DecimalSeparator__ |character|Specifies the character that separates the whole number from the decimal places.|
| __GroupSeparator__ |character|Specifies the character that divides groups of digits.|
| __GroupSizes__ |integer|Specifies the number of digits in each group.|
| __NegativePattern__ |string|Specifies the pattern for formatting negative values.|
| __NegativeSign__ |character|Specifies the character to use as a minus sign.|
| __PositivePattern__ |string|Specifies the pattern for formatting positive values.|

>caution RadNumericTextBox's __get_value()__ method will return an empty string instead of a numeric value when the input is empty. Therefore, if you want to determine whether the entered value is zero, you should use "===" for comparison in order to prevent the confusion with the empty value.
>


# See Also

 * [Formatting Numeric Values]({%slug input/radnumerictextbox/formatting-numeric-values%})
