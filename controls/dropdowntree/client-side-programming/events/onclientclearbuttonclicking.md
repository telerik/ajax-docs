---
title: OnClientClearButtonClicking
page_title: OnClientClearButtonClicking | UI for ASP.NET AJAX Documentation
description: OnClientClearButtonClicking
slug: dropdowntree/client-side-programming/events/onclientclearbuttonclicking
tags: onclientclearbuttonclicking
published: True
position: 13
---

# OnClientClearButtonClicking



## OnClientClearButtonClicking

The __OnClientClearButtonClicking__ client-side event immediately when the Clear button in the entry area of the RadDropDownTree is clicked.

The event handler receives two parameters:

1. The instance of the RadDropDownTree client-side object.

1. An Event argument parameter.

The event can be cancelled - simply set __args.set_cancel__ to __true__ -__args.set_cancel(true);__from the event handler and the RadDropDownTree dropdown will not be opened.
