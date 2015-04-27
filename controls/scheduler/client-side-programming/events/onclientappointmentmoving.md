---
title: OnClientAppointmentMoving
page_title: OnClientAppointmentMoving | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentMoving
slug: scheduler/client-side-programming/events/onclientappointmentmoving
tags: onclientappointmentmoving
published: True
position: 11
---

# OnClientAppointmentMoving



## 

The **OnClientAppointmenMoving** client-side event is called as the user is moving an appointment.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* 

* **get_appointment()** that returns the appointment instance.

* **get_targetSlot()** returns the Time Slot on which the mouse is located at this moment.

* **set_cancel()** lets you permit or block the moving of the appointment.Calling **set_cancel(true)** aborts the moving operation,while **set_cancel(false)** allows the scheduler to proceed with moving the appointment.
