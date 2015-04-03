---
title: OnClientAppointmentMoving
page_title: OnClientAppointmentMoving | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentMoving
slug: scheduler/client-side-programming/events/onclientappointmentmoving
tags: onclientappointmentmoving
published: True
position: 11
---

# OnClientAppointmentMoving



## 

The __OnClientAppointmenMoving__ client-side event is called as the user is moving an appointment.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* 

* __get_appointment()__ that returns the appointment instance.

* __get_targetSlot()__ returns the Time Slot on which the mouse is located at this moment.

* __set_cancel()__ lets you permit or block the moving of the appointment.Calling __set_cancel(true)__ aborts the moving operation,while __set_cancel(false)__ allows the scheduler to proceed with moving the appointment.
