---
title: OnClientAppointmentWebServiceDeleting
page_title: OnClientAppointmentWebServiceDeleting | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentWebServiceDeleting
slug: scheduler/client-side-programming/events/onclientappointmentwebservicedeleting
tags: onclientappointmentwebservicedeleting
published: True
position: 27
---

# OnClientAppointmentWebServiceDeleting



## 

If specified, the __OnClientAppointmentWebServiceDeleting__ client-side event handler is called when an appointment is about to be deleted via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_appointment() -__the appointment that is about to be deleted.

* __get_editingRecurringSeries__() - indicates whether the recurring series are being deleted.

* __set_cancel() -__ set to true cancel the operation.

This event can be cancelled.
