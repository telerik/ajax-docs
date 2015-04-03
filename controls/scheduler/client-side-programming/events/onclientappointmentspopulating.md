---
title: OnClientAppointmentsPopulating
page_title: OnClientAppointmentsPopulating | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentsPopulating
slug: scheduler/client-side-programming/events/onclientappointmentspopulating
tags: onclientappointmentspopulating
published: True
position: 18
---

# OnClientAppointmentsPopulating



## 

If specified, the __OnClientAppointmentsPopulating__ client-side event handler iscalled when the scheduler is about to request appointments. In the case of server-side binding, the event will not be raised.When client-side binding is used, the event will be raised before the appointments are retrieved from the data service.The event will be raised again each time new data is about to be retrieved from the web service.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_schedulerInfo() -__ the schedulerInfo object that will be passed to the web service method.

* __set_cancel() -__ used to cancel the event.

This event can be cancelled.


