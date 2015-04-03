---
title: OnClientTimeSlotContextMenuItemClicked
page_title: OnClientTimeSlotContextMenuItemClicked | UI for ASP.NET AJAX Documentation
description: OnClientTimeSlotContextMenuItemClicked
slug: scheduler/client-side-programming/events/onclienttimeslotcontextmenuitemclicked
tags: onclienttimeslotcontextmenuitemclicked
published: True
position: 36
---

# OnClientTimeSlotContextMenuItemClicked



## 

The __OnClientTimeSlotContextMenuItemClicked__ client-side event is called when a timeslot context menu item is clicked, after RadScheduler has processed the event

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_slot()__, the instance of the time slot.

* __get_item()__, the clicked menu item

This event cannot be cancelled.
