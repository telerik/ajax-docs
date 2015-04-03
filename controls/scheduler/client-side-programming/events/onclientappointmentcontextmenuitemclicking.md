---
title: OnClientAppointmentContextMenuItemClicking
page_title: OnClientAppointmentContextMenuItemClicking | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentContextMenuItemClicking
slug: scheduler/client-side-programming/events/onclientappointmentcontextmenuitemclicking
tags: onclientappointmentcontextmenuitemclicking
published: True
position: 37
---

# OnClientAppointmentContextMenuItemClicking



## 

The __OnClientAppointmentContextMenuItemClicking__ client-side event is called when an appointment context menu item is clicked,before RadScheduler processes the click event.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__, the instance of the appointment.

* __get_item()__, the clicked menu item.

* __set_cancel()__, used to cancel the event.

This event can be cancelled.
