---
title: AppointmentContextMenuItemClicking
page_title: AppointmentContextMenuItemClicking | RadScheduler for ASP.NET AJAX Documentation
description: AppointmentContextMenuItemClicking
slug: scheduler/server-side-programming/server-events/appointmentcontextmenuitemclicking
tags: appointmentcontextmenuitemclicking
published: True
position: 20
---

# AppointmentContextMenuItemClicking



## 

The **AppointmentContextMenuItemClicking** event occurs when an appointment context menu item is clicked, before processing default commands.

AppointmentContextMenuItemClicking has two parameters:

* **sender** is the scheduler control

* **e** is an object of type AppointmentContextMenuItemClickingEventArgs. It has three properties:

* **MenuItem**

* **Appointment**

* **Cancel**

This event can be cancelled.
