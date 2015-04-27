---
title: OnClientAppointmentsPopulated
page_title: OnClientAppointmentsPopulated | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentsPopulated
slug: scheduler/client-side-programming/events/onclientappointmentspopulated
tags: onclientappointmentspopulated
published: True
position: 19
---

# OnClientAppointmentsPopulated



## 

If specified, the **OnClientAppointmentsPopulated** client-side event handler is called when the scheduler has received appointments from the Web Service. In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raised after the appointments are retrieved from the data service. The event will be raised again each time new data has been retrieved from the web service.

One parameter is passed to the handler:

* **sender** - the scheduler client object;

This event cannot be cancelled.
