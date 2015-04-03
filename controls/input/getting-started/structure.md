---
title: Structure
page_title: Structure | UI for ASP.NET AJAX Documentation
description: Structure
slug: input/getting-started/structure
tags: structure
published: True
position: 1
---

# Structure



## 

The four types of __RadInput__ controls (__RadTextBox__, __RadNumericTextBox__, __RadMaskedTextBox__, and __RadDateInput__) all have the same basic structure except that only RadNumericTextBox has spin buttons. This structure is illustrated below for __RadNumericTextBox__:![Structure](images/Structure.png)

At a minimum, the __RadInput__ control has an input area, where the user can type in a value. Optionally, the __RadInput__ control can include up to three additional areas:

* If the __Label__ property is set, a text label appears to the left of the input area.

* If the __ShowSpinButtons__ property is __True__, a pair of spin buttons appear to the side of the input area.

>note The __ShowSpinButtons__ property is only available for __RadNumericTextBox__ .
>


* If the __ShowButton__ property is __True__, a generic button appears to the side of the input area.

# See Also

 * [Adding Buttons]({%slug input/getting-started/adding-buttons%})

 * [Adding Labels]({%slug input/appearance-and-styling/adding-labels%})
