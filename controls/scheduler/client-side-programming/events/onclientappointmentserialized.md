---
title: OnClientAppointmentSerialized
page_title: OnClientAppointmentSerialized | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentSerialized
slug: scheduler/client-side-programming/events/onclientappointmentserialized
tags: onclientappointmentserialized
published: True
position: 29
---

# OnClientAppointmentSerialized



## 

If specified, the __OnClientAppointmentSerialized__ client-side event handler allows you to populate appointments with custom data before sending them to the Web Service. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_appointment() -__the appointment that is about to be updated.

* __set_data() -__ the appointment data such as Subject, Start and End properties.

This event cannot be cancelled.


