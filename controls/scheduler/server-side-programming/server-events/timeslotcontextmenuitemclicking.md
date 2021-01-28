---
title: TimeSlotContextMenuItemClicking
page_title: TimeSlotContextMenuItemClicking - RadScheduler
description: Check our Web Forms article about TimeSlotContextMenuItemClicking.
slug: scheduler/server-side-programming/server-events/timeslotcontextmenuitemclicking
tags: timeslotcontextmenuitemclicking
published: True
position: 18
---

# TimeSlotContextMenuItemClicking



## 

The **TimeSlotContextMenuItemClicking** event occurs when a time slotcontext menu item is clicked, before processing default commands. The event is not triggered in Web Service binding scernarios. 

TimeSlotContextMenuItemClicking has two parameters:

* **sender** is the scheduler control

* **e** is an object of type **TimeSlotContextMenuItemClickingEventArgs**.It has three properties:

* **MenuItem**

* **TimeSlot**

* **Cancel**

This event can be cancelled.
