---
title: OnClientAppointmentCreated
page_title: OnClientAppointmentCreated | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentCreated
slug: scheduler/client-side-programming/events/onclientappointmentcreated
tags: onclientappointmentcreated
published: True
position: 21
---

# OnClientAppointmentCreated



## 

If specified, the __OnClientAppointmentCreated__ client-side event handler is called when anappointment is received and has been rendered. In the case of__server-side____binding__, the event will not be raised. When client-side binding is used,the event will be raised afterthe appointments are retrieved from the data service.The event will be raised for each appointment that has been retrieved from the web service.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with one property:

* __get_appointment() -__the appointment that has been rendered.

This event cannot be cancelled.
