---
title: Overview
page_title: Overview | RadNumericTextBox for ASP.NET AJAX Documentation
description: Overview
slug: input/radnumerictextbox/overview
tags: overview
published: True
position: 0
---

# RadNumericTextBox Overview



**RadNumericTextBox** restricts user input to numeric values. It shares the [common properties of all RadInput controls]({%slug input/server-side-programming/overview%}), including support for skins, styles for different states, empty message support, conditional postback on text change, flexible caret and button positioning, labels, and so on.

## Specifying the Numeric Type

**RadNumericTextBox** support three numeric types that can be switched via its **Type** property. The numeric type controls the formatting of the numeric text box's value when it does not have focus. When the text box has focus (during editing), it displays the actual number, without any special formatting.

* **Number**: When the **Type** property is "Number", the value is formatted as a simple number when the numeric text box does not have focus:
![Number Type](images/NumberType.png)

* **Currency**: When the **Type** property is "Currency", the value is formatted as a currency value when the numeric text box does not have focus:
![Currency type](images/CurrencyType.png)

* **Percent**: When the **Type** property is "Percent", the value is formatted as a percentage when the numeric text box does not have focus:
![Percent Type](images/PercentType.png)

## Formatting Numeric Values

Two properties let you specify how the numeric text box formats values of a given numeric type.

* The **Culture** property lets you specify that the numeric text box conforms to a specific regional format:
![Numeric culture](images/numericculture.png)

* The **NumberFormat** property lets you specify the formatting of numeric values in greater detail by controlling the specific positioning of elements and the characters to use. The value of **NumberFormat** takes precedence over any formatting imposed by the **Culture** or **Type** property. For details on using **NumberFormat**, see [Formatting Numeric Values]({%slug input/radnumerictextbox/formatting-numeric-values%}).

## Representing Negative Values

When the numeric text box contains a negative value, it can notify the user of this in two ways.

* The representation of the negative value is usually formatted in a special way, such as using the minus sign ("-") or enclosing the value in parentheses. This representation is determined by the **Type** and **Culture** properties, but can be overridden by the **NumberFormat.NegativePattern** property.

* The numeric text box can change the display to signal a negative number (for example, the text is red instead of black).To change the display for negative numbers, use the **NegativeStyle** property.**NegativeStyle** is one of the [RadInput style properties]({%slug input/appearance-and-styling/styles%}), but it is only available for **RadNumericTextBox**.

## Increment Controls

In addition to typing numbers directly into the numeric text box, you can also allow users to increment or decrement the current value using the arrow keys, mouse wheel, or spin buttons.

* To add spin buttons to the control, set the **ShowSpinButtons** property to **True**. You can use the **ButtonsPosition** property to position the spin buttons on the left or the right side of the text area:
	![Spin buttons position](images/SpinButtonPosition.png)

>note When rounding is not enabled, the spin buttons may not add or remove exactly 1.0 from the value. Since in most browsers 1.9 - 1 = 0.89999, the value without rounding will be cut to 0.89.Therefore, if the user has entered 1.9 and clicks the down arrow key, he will get 0.89. It is recommended to set **AllowRounding="true"** , or **KeepNotRoundedValue="true"** when you use spin buttons.
>


* The **IncrementSettings** property specifies how the control changes its value in response to the arrow keys, mouse wheel, and spin buttons. **IncrementSettings** is a composite property with the following sub-properties:

	* **InterceptArrowKeys**: When **InterceptArrowKeys** is **True**, the user can use the arrow keys to change the value.

	* **InterceptMouseWheel**: When **InterceptMouseWheel** is **True**, the user can use the mouse wheel to change the value.

	* **Step**: Step specifies the magnitude by which the value changes with each click of an arrow key, movement of the mouse wheel, or click of the spin button.

## Limiting the Range

Use the **MaxValue** and **MinValue** properties to specify a range for the numeric text box. If the user tries to enter a value that is greater than the value of the **MaxValue** property, the numeric text box automatically changes the value to **MaxValue**. Similarly, if the user tries to enter a value that is less than the value of the **MinValue** property, the numeric text box automatically changes the value to **MinValue**.

>caution  **RadNumericTextBox** does not support maximum and minimum values with a greater magnitude than +/- 2^46. Setting the **MaxValue** property to more than 2^46 or the **MinValue** property to less than -2^46 can cause abnormalities in the **RadNumericTextBox** behavior.
>


## Numeric Text Box Value

**RadNumericTextBox** uses the **Value** property to represent its value.

## DataType

The **DataType** property defines the type of object that is used to wrap the **DbValue** property.This property is designed to be used when **RadNumericTextBox** is embedded into a grid or other data-bound control.By default, its value is set to Double.

# See Also

 * [RadNumericTextBox Client Object]({%slug input/client-side-programming/radnumerictextbox-client-object%})
