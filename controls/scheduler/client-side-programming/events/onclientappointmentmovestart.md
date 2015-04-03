---
title: OnClientAppointmentMoveStart
page_title: OnClientAppointmentMoveStart | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentMoveStart
slug: scheduler/client-side-programming/events/onclientappointmentmovestart
tags: onclientappointmentmovestart
published: True
position: 10
---

# OnClientAppointmentMoveStart



## 

The __OnClientAppointmenMoveStart__ client-side event is called when the user starts to move an appointment.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ that returns the appointment instance.

* __set_cancel()__ lets you permit or block the moving of the appointment. Calling __set_cancel(true)__ aborts the moving operation, while __set_cancel(false)__
