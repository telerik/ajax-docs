---
title: RibbonBarNumericTextBox
page_title: RibbonBarNumericTextBox | UI for ASP.NET AJAX Documentation
description: RibbonBarNumericTextBox
slug: ribbonbar/radribbonbar-items/ribbonbarnumerictextbox
tags: ribbonbarnumerictextbox
published: True
position: 13
---

# RibbonBarNumericTextBox



## 

The __RibbonBarNumericTextBox__ has a few important properties, which are listed below:

* __Value__

* __Step__ - gets or sets the value which is used to increment/decrement the value with when using the buttons of the spinbox.

* __Prefix__ - gets or sets a string that is prepended to the value of the NumericTextBox in the input element.

* __Suffix__ - gets or sets a string that is appended to the value of the NumericTextBox in the input element.

>note The __Prefix__ and __Suffix__ values can be used simultaneously.
>


## Working with RibbonBarNumericTextBox on the Client-Side

__RadRibbonBar__ provides a client-side API for working with __RibbonBarNumericTextBox__. Below you can find an list of with their detailed description:

* __get_prefix()__ - gets a string that is prepended to the value of the NumericTextBox in the input element.

* __set_prefix()__ - sets a string that is prepended to the value of the NumericTextBox in the input element.

* __get_suffix()__- gets a string that is appended to the value of the NumericTextBox in the input element.

* __set_suffix()__- sets a string that is appended to the value of the NumericTextBox in the input element.

* __get_step(float)__- gets the value which is used to increment/decrement the value (usually applied when using the buttons of the spinbox).

* __set_step(float)__- sets the value which is used to increment/decrement the value (usually applied when using the buttons of the spinbox).

* __get_value(float)__ – gets the value to the input element in the NumericTextbox.

* __set_value(float)__ – sets value to the input element in the NumericTextbox.

* __increment()__ – increments the value by the number set using the* set_step(3)*. If none is set with the *set_step()*, __one__ is used by default.

* __decrement()__ – decrements the value by the number set using the *set_step(3)*. If none is set with the *set_step()*, __one__ is used by default.
