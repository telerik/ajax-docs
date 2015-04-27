---
title: NumericTextBoxValueChanged 
page_title: NumericTextBoxValueChanged  | RadRibbonBar for ASP.NET AJAX Documentation
description: NumericTextBoxValueChanged 
slug: ribbonbar/server-side-programming/events/numerictextboxvaluechanged-
tags: numerictextboxvaluechanged,
published: True
position: 13
---

# NumericTextBoxValueChanged 



## 

The server-side **OnNumericTextBoxValueChanged** event occurs when the user changes the value in the NumericTextBox, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar** type.

1. An **EventArgs** object.This object has a number of properties for handling the request for the items:

* **Value**– the new value of the NumericTextBox.

* **NumericTextBox** – the NumericTextBox which fired the event.

* **Group** – the group in which the DropDown is placed.
