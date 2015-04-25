---
title: OnClientDropDownClosing
page_title: OnClientDropDownClosing | RadDropDownTree for ASP.NET AJAX Documentation
description: OnClientDropDownClosing
slug: dropdowntree/client-side-programming/events/onclientdropdownclosing
tags: onclientdropdownclosing
published: True
position: 4
---

# OnClientDropDownClosing



## 

The **OnClientDropDownClosing** client-side event that is fired before the dropdown of the RadDropDownTree is closed.

The event handler receives two parameters:

1. The instance of the RadDropDownTree client-side object.

2. An Event argument parameter.

The event can be cancelled - simply set **args.set_cancel** to **true** - **args.set_cancel(true);** from the event handler and the RadDropDownTree dropdown will not be closed.
