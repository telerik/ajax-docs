---
title: OnClientTimeSlotContextMenuItemClicking
page_title: OnClientTimeSlotContextMenuItemClicking | UI for ASP.NET AJAX Documentation
description: OnClientTimeSlotContextMenuItemClicking
slug: scheduler/client-side-programming/events/onclienttimeslotcontextmenuitemclicking
tags: onclienttimeslotcontextmenuitemclicking
published: True
position: 35
---

# OnClientTimeSlotContextMenuItemClicking



## 

The __OnClientTimeSlotContextMenuItemClicking__ client-side event is called when a time slotcontext menu item is clicked, before RadScheduler processes the click event.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_slot()__, the instance of the time slot.

* __get_item()__, the clicked menu item

* __set_cancel()__, used to cancel the event.

This event can be cancelled.
