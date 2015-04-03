---
title: ComboBoxTextChanged 
page_title: ComboBoxTextChanged  | UI for ASP.NET AJAX Documentation
description: ComboBoxTextChanged 
slug: ribbonbar/server-side-programming/events/comboboxtextchanged-
tags: comboboxtextchanged,
published: True
position: 12
---

# ComboBoxTextChanged 



## 

The server-side __OnComboBoxTextChanged__ event occurs when the text in the ComboBox changes.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar__ type.

1. An __EventArgs__ object.This object has a number of properties for handling the request for the items:

* __Text__ – the new text of the ComboBox.

* __DropDown__ – the DropDown which fired the event.

* __Group__ – the group in which the DropDown is placed.
