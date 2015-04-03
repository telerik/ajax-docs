---
title: ComboBoxSelectedIndexChanged
page_title: ComboBoxSelectedIndexChanged | UI for ASP.NET AJAX Documentation
description: ComboBoxSelectedIndexChanged
slug: ribbonbar/server-side-programming/events/comboboxselectedindexchanged
tags: comboboxselectedindexchanged
published: True
position: 11
---

# ComboBoxSelectedIndexChanged



## 

The server-side __OnComboBoxSelectedIndexChanged__ event occurs when the user clicks on item in the Combobox, causing a postback.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar__ type.

1. An __EventArgs__ object.This object has a number of properties for handling the request for the items:

* __Index__ – index of the newly selected item.

* __Item__ – the newly selected item.

* __DropDown__ – the DropDown which fired the event.

* __Group__ – the group in which the DropDown is placed.
