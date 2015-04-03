---
title: OnClientAppointmentWebServiceUpdating
page_title: OnClientAppointmentWebServiceUpdating | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentWebServiceUpdating
slug: scheduler/client-side-programming/events/onclientappointmentwebserviceupdating
tags: onclientappointmentwebserviceupdating
published: True
position: 28
---

# OnClientAppointmentWebServiceUpdating



## 

If specified, the __OnClientAppointmentWebServiceUpdating__ client-side event handler is called when an appointment is about to be updated via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_appointment() -__the appointment that is about to be updated.

* __set_cancel() -__ set to true cancel the operation.

This event can be cancelled.
