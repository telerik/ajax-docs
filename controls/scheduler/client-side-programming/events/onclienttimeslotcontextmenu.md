---
title: OnClientTimeSlotContextMenu
page_title: OnClientTimeSlotContextMenu - RadScheduler
description: Check our Web Forms article about OnClientTimeSlotContextMenu.
slug: scheduler/client-side-programming/events/onclienttimeslotcontextmenu
tags: onclienttimeslotcontextmenu
published: True
position: 14
---

# OnClientTimeSlotContextMenu



The **OnClientTimeSlotContextMenu** client-side event is called when the user right-clicks on a Time Slot. It fires before the [built-in context menu]({%slug scheduler/context-menus/time-slot-context-menu%}) is shown (if it is enabled).

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_domEvent()** - returns the raw DOM event sent by the browser.

* **get_isAllDay()** - returns **True** if the Time Slot is the 'All Day' slot (Day and Week View only) or **False** if the Time Slot is a regular one.

* **get_targetSlot()** - returns the Time Slot which is right-clicked.

* **get_startSlot()** - returns the first time slot in the slot selection.

* **get_endSlot()** - returns the last time slot in the slot selection.

* **get_time()** - returns the time on which the user right-clicks in the Time Slot in Day View; returns Day Start Time in Week View.

# See Also

 * [RadScheduler for ASP.NET AJAX Context Menu](https://demos.telerik.com/aspnet-ajax/Scheduler/Examples/ContextMenu/DefaultCS.aspx)
