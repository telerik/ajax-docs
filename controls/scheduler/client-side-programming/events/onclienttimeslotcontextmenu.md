---
title: OnClientTimeSlotContextMenu
page_title: OnClientTimeSlotContextMenu | UI for ASP.NET AJAX Documentation
description: OnClientTimeSlotContextMenu
slug: scheduler/client-side-programming/events/onclienttimeslotcontextmenu
tags: onclienttimeslotcontextmenu
published: True
position: 14
---

# OnClientTimeSlotContextMenu



The __OnClientTimeSlotContextMenu__ client-side event is called when the user right-clicks on a Time Slot. It fires before the [built-in context menu]({%slug scheduler/context-menus/time-slot-context-menu%}) is shown (if it is enabled).

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_domEvent()__ - returns the raw DOM event sent by the browser.

* __get_isAllDay()__ - returns __True__ if the Time Slot is the 'All Day' slot (Day and Week View only) or__False__ if the Time Slot is a regular one.

* __get_targetSlot()__ - returns the Time Slot which is right-clicked.

* __get_time()__ - returns the time on which the user right-clicks in the Time Slot in Day View; returns Day Start Time in Week View.

# See Also

 * [RadScheduler for ASP.NET AJAX Context Menu](http://demos.telerik.com/aspnet-ajax/Scheduler/Examples/ContextMenu/DefaultCS.aspx)
