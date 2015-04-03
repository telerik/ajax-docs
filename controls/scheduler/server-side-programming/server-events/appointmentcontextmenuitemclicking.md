---
title: AppointmentContextMenuItemClicking
page_title: AppointmentContextMenuItemClicking | UI for ASP.NET AJAX Documentation
description: AppointmentContextMenuItemClicking
slug: scheduler/server-side-programming/server-events/appointmentcontextmenuitemclicking
tags: appointmentcontextmenuitemclicking
published: True
position: 20
---

# AppointmentContextMenuItemClicking



## 

The __AppointmentContextMenuItemClicking__ event occurs when an appointment context menu item is clicked, before processing default commands.

AppointmentContextMenuItemClicking has two parameters:

* __sender__ is the scheduler control

* __e__ is an object of type AppointmentContextMenuItemClickingEventArgs. It has three properties:

* __MenuItem__

* __Appointment__

* __Cancel__

This event can be cancelled.
