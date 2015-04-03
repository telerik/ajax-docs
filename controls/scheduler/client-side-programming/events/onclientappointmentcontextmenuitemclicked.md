---
title: OnClientAppointmentContextMenuItemClicked
page_title: OnClientAppointmentContextMenuItemClicked | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentContextMenuItemClicked
slug: scheduler/client-side-programming/events/onclientappointmentcontextmenuitemclicked
tags: onclientappointmentcontextmenuitemclicked
published: True
position: 38
---

# OnClientAppointmentContextMenuItemClicked



## 

The __OnClientAppointmentContextMenuItemClicked__ client-side event is called when an appointment context menu item is clicked, after RadScheduler has processed the event

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__, the instance of the appointment.

* __get_item()__, the clicked menu item.

This event cannot be cancelled.


