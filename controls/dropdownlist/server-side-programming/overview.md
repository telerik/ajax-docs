---
title: Overview
page_title: Server-side Programming Overview - RadDropDownList
description: Check our Web Forms article about Telerik's ASP.NET RadDropDownList Server-side Programming Overview.
slug: dropdownlist/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

## 

For a detailed list with the server-side properties and methods of the control, see the [Server-Side API of the RadDropDownList class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadDropDownList).


**RadDropDownList** supports a number of server-side events that let you respond to events with complex actions that can't be performed in client-side code.

* [SelectedIndexChanged]({%slug dropdownlist/server-side-programming/events/selectedindexchanged%}) occurs when the SelectedIndex has just changed.

* [ItemSelected]({%slug dropdownlist/server-side-programming/events/itemselected%}) occurs when an item from the dropdownlist is selected.

* [ItemDataBound]({%slug dropdownlist/server-side-programming/events/itemdatabound%}) occurs for each item when it is being bound to a data value.

>note The **SelectedIndexChanged** and **ItemSelected** events do not fire unless you set the **AutoPostBack** property to **True** .
>

