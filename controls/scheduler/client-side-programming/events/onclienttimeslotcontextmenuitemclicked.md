---
title: OnClientTimeSlotContextMenuItemClicked
page_title: OnClientTimeSlotContextMenuItemClicked | RadScheduler for ASP.NET AJAX Documentation
description: OnClientTimeSlotContextMenuItemClicked
slug: scheduler/client-side-programming/events/onclienttimeslotcontextmenuitemclicked
tags: onclienttimeslotcontextmenuitemclicked
published: True
position: 36
---

# OnClientTimeSlotContextMenuItemClicked



## 

The **OnClientTimeSlotContextMenuItemClicked** client-side event is called when a timeslot context menu item is clicked, after RadScheduler has processed the event

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

	* **get_slot()** - the instance of the time slot.

	* **get_item()** - the clicked menu item

This event cannot be cancelled.
