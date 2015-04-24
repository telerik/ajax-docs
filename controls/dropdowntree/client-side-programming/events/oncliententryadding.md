---
title: OnClientEntryAdding
page_title: OnClientEntryAdding | RadDropDownTree for ASP.NET AJAX Documentation
description: OnClientEntryAdding
slug: dropdowntree/client-side-programming/events/oncliententryadding
tags: oncliententryadding
published: True
position: 6
---

# OnClientEntryAdding



## 

The **OnClientEntryAdding** client-side event is fired when an entry is about to be added to the entry area.

>note When the **CheckBoxes** property of the control is set to either the *TriState* or the *CheckChildNodes* , the event will fire only for thenode that is being checked.
>


The event handler receives two parameters:

1. The instance of the RadDropDownTree client-side object.

1. An Event argument parameter.

The event can be cancelled - simply calling **args.set_cancel(true)**from the event handler and the entry from dropdown will not be added.
