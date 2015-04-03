---
title: DropDownSelectedIndexChanged
page_title: DropDownSelectedIndexChanged | UI for ASP.NET AJAX Documentation
description: DropDownSelectedIndexChanged
slug: ribbonbar/server-side-programming/events/dropdownselectedindexchanged
tags: dropdownselectedindexchanged
published: True
position: 10
---

# DropDownSelectedIndexChanged



## 

The server-side __OnDropDownSelectedIndexChanged__ event occurs when the user clicks on item in the DropDown, causing a postback.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar__ type.

1. An __EventArgs__ object.This object has a number of properties for handling the request for the items:

* __Index__ – index of the newly selected item.

* __Item__ – the newly selected item.

* __DropDown__ – the DropDown which fired the event.

* __Group__ – the group in which the DropDown is placed.
