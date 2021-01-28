---
title: OnClientAppointmentMoveStart
page_title: OnClientAppointmentMoveStart - RadScheduler
description: Check our Web Forms article about OnClientAppointmentMoveStart.
slug: scheduler/client-side-programming/events/onclientappointmentmovestart
tags: onclientappointmentmovestart
published: True
position: 10
---

# OnClientAppointmentMoveStart



## 

The **OnClientAppointmenMoveStart** client-side event is called when the user starts to move an appointment.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** that returns the appointment instance.

* **set_cancel()** lets you permit or block the moving of the appointment. Calling **set_cancel(true)** aborts the moving operation, while **set_cancel(false)**
