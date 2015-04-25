---
title: OnClientClearButtonClicking
page_title: OnClientClearButtonClicking | RadDropDownTree for ASP.NET AJAX Documentation
description: OnClientClearButtonClicking
slug: dropdowntree/client-side-programming/events/onclientclearbuttonclicking
tags: onclientclearbuttonclicking
published: True
position: 13
---

# OnClientClearButtonClicking



## OnClientClearButtonClicking

The **OnClientClearButtonClicking** client-side event immediately when the Clear button in the entry area of the RadDropDownTree is clicked.

The event handler receives two parameters:

1. The instance of the RadDropDownTree client-side object.

2. An Event argument parameter.

The event can be cancelled - simply set **args.set_cancel** to **true** - **args.set_cancel(true);** from the event handler and the RadDropDownTree dropdown will not be opened.
