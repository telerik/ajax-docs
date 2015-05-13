---
title: OnClientAppointmentContextMenuItemClicked
page_title: OnClientAppointmentContextMenuItemClicked | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentContextMenuItemClicked
slug: scheduler/client-side-programming/events/onclientappointmentcontextmenuitemclicked
tags: onclientappointmentcontextmenuitemclicked
published: True
position: 38
---

# OnClientAppointmentContextMenuItemClicked



## 

The **OnClientAppointmentContextMenuItemClicked** client-side event is called when an appointment context menu item is clicked, after RadScheduler has processed the event

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

	* **get_appointment()** - the instance of the appointment.

	* **get_item()** - the clicked menu item.

This event cannot be cancelled.


