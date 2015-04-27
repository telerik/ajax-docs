---
title: OnClientAppointmentWebServiceUpdating
page_title: OnClientAppointmentWebServiceUpdating | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentWebServiceUpdating
slug: scheduler/client-side-programming/events/onclientappointmentwebserviceupdating
tags: onclientappointmentwebserviceupdating
published: True
position: 28
---

# OnClientAppointmentWebServiceUpdating



## 

If specified, the **OnClientAppointmentWebServiceUpdating** client-side event handler is called when an appointment is about to be updated via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

* **get_appointment() -**the appointment that is about to be updated.

* **set_cancel() -** set to true cancel the operation.

This event can be cancelled.
