---
title: NumberFormat Client Object
page_title: NumberFormat Client Object | RadInput for ASP.NET AJAX Documentation
description: NumberFormat Client Object
slug: input/client-side-programming/numberformat-client-object
tags: numberformat,client,object
published: True
position: 7
---

# NumberFormat Client Object



## 

The NumberFormat client object determines how a **RadNumericTextBox** control formats its value when it does not have focus. It is returned by the **get_numberFormat()** method of the [RadNumericTextBox client-side object]({%slug input/client-side-programming/radnumerictextbox-client-object%}). The following table lists its properties:


>caption  

| Property | Type | Description |
| ------ | ------ | ------ |
| **AllowRounding** |boolean|Specifies whether values are rounded (true) or truncated (false) when not all the decimal places can be shown.|
| **DecimalDigits** |integer|Specifies the number of decimal places to show.|
| **DecimalSeparator** |character|Specifies the character that separates the whole number from the decimal places.|
| **GroupSeparator** |character|Specifies the character that divides groups of digits.|
| **GroupSizes** |integer|Specifies the number of digits in each group.|
| **NegativePattern** |string|Specifies the pattern for formatting negative values.|
| **NegativeSign** |character|Specifies the character to use as a minus sign.|
| **PositivePattern** |string|Specifies the pattern for formatting positive values.|

>caution RadNumericTextBox's **get_value()** method will return an empty string instead of a numeric value when the input is empty. Therefore, if you want to determine whether the entered value is zero, you should use "===" for comparison in order to prevent the confusion with the empty value.
>


# See Also

 * [Formatting Numeric Values]({%slug input/radnumerictextbox/formatting-numeric-values%})
