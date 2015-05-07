---
title: ComboBoxTextChanged 
page_title: ComboBoxTextChanged  | RadRibbonBar for ASP.NET AJAX Documentation
description: ComboBoxTextChanged 
slug: ribbonbar/server-side-programming/events/comboboxtextchanged-
tags: comboboxtextchanged,
published: True
position: 12
---

# ComboBoxTextChanged 



## 

The server-side **OnComboBoxTextChanged** event occurs when the text in the ComboBox changes.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar** type.

1. An **EventArgs** object.This object has a number of properties for handling the request for the items:

	* **Text** – the new text of the ComboBox.

	* **DropDown** – the DropDown which fired the event.

	* **Group** – the group in which the DropDown is placed.
