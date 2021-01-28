---
title: OnClientAppointmentSerialized
page_title: OnClientAppointmentSerialized - RadScheduler
description: Check our Web Forms article about OnClientAppointmentSerialized.
slug: scheduler/client-side-programming/events/onclientappointmentserialized
tags: onclientappointmentserialized
published: True
position: 29
---

# OnClientAppointmentSerialized



## 

If specified, the **OnClientAppointmentSerialized** client-side event handler allows you to populate appointments with custom data before sending them to the Web Service. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

	* **get_appointment()** - the appointment that is about to be updated.

	* **set_data()** - the appointment data such as Subject, Start and End properties.

This event cannot be cancelled.


