---
title: NumericTextBoxValueChanged 
page_title: NumericTextBoxValueChanged  | UI for ASP.NET AJAX Documentation
description: NumericTextBoxValueChanged 
slug: ribbonbar/server-side-programming/events/numerictextboxvaluechanged-
tags: numerictextboxvaluechanged,
published: True
position: 13
---

# NumericTextBoxValueChanged 



## 

The server-side __OnNumericTextBoxValueChanged__ event occurs when the user changes the value in the NumericTextBox, causing a postback.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar__ type.

1. An __EventArgs__ object.This object has a number of properties for handling the request for the items:

* __Value__– the new value of the NumericTextBox.

* __NumericTextBox__ – the NumericTextBox which fired the event.

* __Group__ – the group in which the DropDown is placed.
