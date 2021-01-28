---
title: RibbonBarNumericTextBox
page_title: RibbonBarNumericTextBox - RadRibbonBar
description: Check our Web Forms article about RibbonBarNumericTextBox.
slug: ribbonbar/radribbonbar-items/ribbonbarnumerictextbox
tags: ribbonbarnumerictextbox
published: True
position: 13
---

# RibbonBarNumericTextBox



## 

The **RibbonBarNumericTextBox** has a few important properties, which are listed below:

* **Value**

* **Step** - gets or sets the value which is used to increment/decrement the value with when using the buttons of the spinbox.

* **Prefix** - gets or sets a string that is prepended to the value of the NumericTextBox in the input element.

* **Suffix** - gets or sets a string that is appended to the value of the NumericTextBox in the input element.

>note The **Prefix** and **Suffix** values can be used simultaneously.
>


## Working with RibbonBarNumericTextBox on the Client-Side

**RadRibbonBar** provides a client-side API for working with **RibbonBarNumericTextBox**. Below you can find an list of with their detailed description:

* **get_prefix()** - gets a string that is prepended to the value of the NumericTextBox in the input element.

* **set_prefix()** - sets a string that is prepended to the value of the NumericTextBox in the input element.

* **get_suffix()** - gets a string that is appended to the value of the NumericTextBox in the input element.

* **set_suffix()** - sets a string that is appended to the value of the NumericTextBox in the input element.

* **get_step(float)** - gets the value which is used to increment/decrement the value (usually applied when using the buttons of the spinbox).

* **set_step(float)** - sets the value which is used to increment/decrement the value (usually applied when using the buttons of the spinbox).

* **get_value(float)** – gets the value to the input element in the NumericTextbox.

* **set_value(float)** – sets value to the input element in the NumericTextbox.

* **increment()** – increments the value by the number set using the* set_step(3)*. If none is set with the *set_step()*, **one** is used by default.

* **decrement()** – decrements the value by the number set using the *set_step(3)*. If none is set with the *set_step()*, **one** is used by default.
