---
title: OnClientAppointmentContextMenuItemClicking
page_title: OnClientAppointmentContextMenuItemClicking | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentContextMenuItemClicking
slug: scheduler/client-side-programming/events/onclientappointmentcontextmenuitemclicking
tags: onclientappointmentcontextmenuitemclicking
published: True
position: 37
---

# OnClientAppointmentContextMenuItemClicking



## 

The **OnClientAppointmentContextMenuItemClicking** client-side event is called when an appointment context menu item is clicked,before RadScheduler processes the click event.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()**, the instance of the appointment.

* **get_item()**, the clicked menu item.

* **set_cancel()**, used to cancel the event.

This event can be cancelled.
