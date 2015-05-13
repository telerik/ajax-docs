---
title: OnClientTimeSlotContextMenuItemClicking
page_title: OnClientTimeSlotContextMenuItemClicking | RadScheduler for ASP.NET AJAX Documentation
description: OnClientTimeSlotContextMenuItemClicking
slug: scheduler/client-side-programming/events/onclienttimeslotcontextmenuitemclicking
tags: onclienttimeslotcontextmenuitemclicking
published: True
position: 35
---

# OnClientTimeSlotContextMenuItemClicking



## 

The **OnClientTimeSlotContextMenuItemClicking** client-side event is called when a time slotcontext menu item is clicked, before RadScheduler processes the click event.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

	* **get_slot()** - the instance of the time slot.

	* **get_item()** - the clicked menu item

	* **set_cancel()** - used to cancel the event.

This event can be cancelled.
