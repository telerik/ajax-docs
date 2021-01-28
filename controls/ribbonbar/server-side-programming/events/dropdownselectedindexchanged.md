---
title: DropDownSelectedIndexChanged
page_title: DropDownSelectedIndexChanged - RadRibbonBar
description: Check our Web Forms article about DropDownSelectedIndexChanged.
slug: ribbonbar/server-side-programming/events/dropdownselectedindexchanged
tags: dropdownselectedindexchanged
published: True
position: 10
---

# DropDownSelectedIndexChanged



## 

The server-side **OnDropDownSelectedIndexChanged** event occurs when the user clicks on item in the DropDown, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar** type.

1. An **EventArgs** object.This object has a number of properties for handling the request for the items:

	* **Index** – index of the newly selected item.

	* **Item** – the newly selected item.

	* **DropDown** – the DropDown which fired the event.

	* **Group** – the group in which the DropDown is placed.
