---
title: OnClientAppointmentCreated
page_title: OnClientAppointmentCreated | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentCreated
slug: scheduler/client-side-programming/events/onclientappointmentcreated
tags: onclientappointmentcreated
published: True
position: 21
---

# OnClientAppointmentCreated



## 

If specified, the **OnClientAppointmentCreated** client-side event handler is called when anappointment is received and has been rendered. In the case of**server-side binding**, the event will not be raised. When client-side binding is used,the event will be raised afterthe appointments are retrieved from the data service.The event will be raised for each appointment that has been retrieved from the web service.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with one property:

* **get_appointment() -**the appointment that has been rendered.

This event cannot be cancelled.
