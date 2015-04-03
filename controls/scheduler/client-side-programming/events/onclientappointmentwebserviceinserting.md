---
title: OnClientAppointmentWebServiceInserting
page_title: OnClientAppointmentWebServiceInserting | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentWebServiceInserting
slug: scheduler/client-side-programming/events/onclientappointmentwebserviceinserting
tags: onclientappointmentwebserviceinserting
published: True
position: 26
---

# OnClientAppointmentWebServiceInserting



## 

If specified, the __OnClientAppointmentWebServiceInserting__ client-side event handler is called when an appointment is about to be stored via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_appointment() -__the appointment that is about to be inserted.

* __set_cancel() -__ set to true cancel the operation.

This event can be cancelled.
