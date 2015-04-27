---
title: OnClientAppointmentWebServiceDeleting
page_title: OnClientAppointmentWebServiceDeleting | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentWebServiceDeleting
slug: scheduler/client-side-programming/events/onclientappointmentwebservicedeleting
tags: onclientappointmentwebservicedeleting
published: True
position: 27
---

# OnClientAppointmentWebServiceDeleting



## 

If specified, the **OnClientAppointmentWebServiceDeleting** client-side event handler is called when an appointment is about to be deleted via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

* **get_appointment() -**the appointment that is about to be deleted.

* **get_editingRecurringSeries**() - indicates whether the recurring series are being deleted.

* **set_cancel() -** set to true cancel the operation.

This event can be cancelled.
