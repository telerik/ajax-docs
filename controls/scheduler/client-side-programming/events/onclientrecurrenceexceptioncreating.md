---
title: OnClientRecurrenceExceptionCreating
page_title: OnClientRecurrenceExceptionCreating | RadScheduler for ASP.NET AJAX Documentation
description: OnClientRecurrenceExceptionCreating
slug: scheduler/client-side-programming/events/onclientrecurrenceexceptioncreating
tags: onclientrecurrenceexceptioncreating
published: True
position: 30
---

# OnClientRecurrenceExceptionCreating



## 

If specified, the **OnClientRecurrenceExceptionCreating** client-side event handler is called when arecurrence exception is about to be created via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

* **get_appointment() -**the appointment that represents the recurrence exception that is about to be stored.

* **set_cancel() -** set to true cancel the operation.

This event can be cancelled.


