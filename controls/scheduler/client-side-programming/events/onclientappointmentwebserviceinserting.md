---
title: OnClientAppointmentWebServiceInserting
page_title: OnClientAppointmentWebServiceInserting - RadScheduler
description: Check our Web Forms article about OnClientAppointmentWebServiceInserting.
slug: scheduler/client-side-programming/events/onclientappointmentwebserviceinserting
tags: onclientappointmentwebserviceinserting
published: True
position: 26
---

# OnClientAppointmentWebServiceInserting



## 

If specified, the **OnClientAppointmentWebServiceInserting** client-side event handler is called when an appointment is about to be stored via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

	* **get_appointment()** -the appointment that is about to be inserted.

	* **set_cancel()** - set to true cancel the operation.

This event can be cancelled.
