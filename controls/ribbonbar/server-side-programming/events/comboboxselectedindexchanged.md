---
title: ComboBoxSelectedIndexChanged
page_title: ComboBoxSelectedIndexChanged | RadRibbonBar for ASP.NET AJAX Documentation
description: ComboBoxSelectedIndexChanged
slug: ribbonbar/server-side-programming/events/comboboxselectedindexchanged
tags: comboboxselectedindexchanged
published: True
position: 11
---

# ComboBoxSelectedIndexChanged



## 

The server-side **OnComboBoxSelectedIndexChanged** event occurs when the user clicks on item in the Combobox, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar** type.

1. An **EventArgs** object.This object has a number of properties for handling the request for the items:

* **Index** – index of the newly selected item.

* **Item** – the newly selected item.

* **DropDown** – the DropDown which fired the event.

* **Group** – the group in which the DropDown is placed.
