---
title: RadNumericTextBox Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: input/radnumerictextbox/overview
tags: overview
published: True
position: 0
---

# RadNumericTextBox Overview



__RadNumericTextBox__ restricts user input to numeric values. It shares the [common properties of all RadInput controls]({%slug input/server-side-programming/overview%}), including support for skins, styles for different states, empty message support, conditional postback on text change, flexible caret and button positioning, labels, and so on.

## Specifying the Numeric Type

__RadNumericTextBox__ support three numeric types that can be switched via its __Type__ property. The numeric type controls the formatting of the numeric text box's value when it does not have focus. When the text box has focus (during editing), it displays the actual number, without any special formatting.

* __Number__: When the __Type__ property is "Number", the value is formatted as a simple number when the numeric text box does not have focus:![Number Type](images/NumberType.png)

* __Currency__: When the __Type__ property is "Currency", the value is formatted as a currency value when the numeric text box does not have focus:![Currency type](images/CurrencyType.png)

* __Percent__: When the __Type__ property is "Percent", the value is formatted as a percentage when the numeric text box does not have focus:![Percent Type](images/PercentType.png)

## Formatting Numeric Values

Two properties let you specify how the numeric text box formats values of a given numeric type.

* The __Culture__ property lets you specify that the numeric text box conforms to a specific regional format:![Numeric culture](images/numericculture.png)

* The __NumberFormat__ property lets you specify the formatting of numeric values in greater detail by controlling the specific positioning of elements and the characters to use. The value of __NumberFormat__ takes precedence over any formatting imposed by the __Culture__ or __Type__ property. For details on using __NumberFormat__, see [Formatting Numeric Values]({%slug input/radnumerictextbox/formatting-numeric-values%}).

## Representing Negative Values

When the numeric text box contains a negative value, it can notify the user of this in two ways.

* The representation of the negative value is usually formatted in a special way, such as using the minus sign ("-") or enclosing the value in parentheses. This representation is determined by the __Type__ and __Culture__ properties, but can be overridden by the __NumberFormat.NegativePattern__ property.

* The numeric text box can change the display to signal a negative number (for example, the text is red instead of black).To change the display for negative numbers, use the __NegativeStyle__ property.__NegativeStyle__ is one of the [RadInput style properties]({%slug input/appearance-and-styling/styles%}),but it is only available for __RadNumericTextBox__.

## Increment Controls

In addition to typing numbers directly into the numeric text box, you can also allow users to increment or decrement the current value using the arrow keys, mouse wheel, or spin buttons.

* To add spin buttons to the control, set the __ShowSpinButtons__ property to __True__. You can use the __ButtonsPosition__ property to position the spin buttons on the left or the right side of the text area:![Spin buttons position](images/SpinButtonPosition.png)

>note When rounding is not enabled, the spin buttons may not add or remove exactly 1.0 from the value. Since in most browsers 1.9 - 1 = 0.89999, the value without rounding will be cut to 0.89.Therefore, if the user has entered 1.9 and clicks the down arrow key, he will get 0.89. It is recommended to set __AllowRounding="true"__ , or __KeepNotRoundedValue="true"__ when you use spin buttons.
>


* The __IncrementSettings__ property specifies how the control changes its value in response to the arrow keys, mouse wheel, and spin buttons. __IncrementSettings__ is a composite property with the following sub-properties:

* __InterceptArrowKeys__: When __InterceptArrowKeys__ is __True__, the user can use the arrow keys to change the value.

* __InterceptMouseWheel__: When __InterceptMouseWheel__ is __True__, the user can use the mouse wheel to change the value.

* __Step__: Step specifies the magnitude by which the value changes with each click of an arrow key, movement of the mouse wheel, or click of the spin button.

## Limiting the Range

Use the __MaxValue__ and __MinValue__ properties to specify a range for the numeric text box. If the user tries to enter a value that is greater than the value of the __MaxValue__ property, the numeric text box automatically changes the value to __MaxValue__. Similarly, if the user tries to enter a value that is less than the value of the __MinValue__ property, the numeric text box automatically changes the value to __MinValue__.

>caution  __RadNumericTextBox__ does not support maximum and minimum values with a greater magnitude than +/- 2^46. Setting the __MaxValue__ property to more than 2^46 or the __MinValue__ property to less than -2^46 can cause abnormalities in the __RadNumericTextBox__ behavior.
>


## Numeric Text Box Value

__RadNumericTextBox__ uses the __Value__ property to represent its value.

## DataType

The __DataType__ property defines the type of object that is used to wrap the __DbValue__ property.This property is designed to be used when __RadNumericTextBox__ is embedded into a grid or other data-bound control.By default, its value is set to Double.

# See Also

 * [RadNumericTextBox Client Object]({%slug input/client-side-programming/radnumerictextbox-client-object%})
