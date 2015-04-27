---
title: OnClientAppointmentDataBound
page_title: OnClientAppointmentDataBound | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentDataBound
slug: scheduler/client-side-programming/events/onclientappointmentdatabound
tags: onclientappointmentdatabound
published: True
position: 20
---

# OnClientAppointmentDataBound



## 

If specified, the **OnClientAppointmentDataBound** client-side event handler is called when an appointmentis received and is about to be rendered. In the case of server-side binding, the event will not be raised. When client-side binding is used,the event will be raised after the appointments are retrieved from the data service.The event will be raised for each appointment that has been retrieved from the web service.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** has one method:

* **get_appointment() -** returns the appointment instance

This event cannot be cancelled.
