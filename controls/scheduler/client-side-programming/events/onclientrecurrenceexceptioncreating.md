---
title: OnClientRecurrenceExceptionCreating
page_title: OnClientRecurrenceExceptionCreating | UI for ASP.NET AJAX Documentation
description: OnClientRecurrenceExceptionCreating
slug: scheduler/client-side-programming/events/onclientrecurrenceexceptioncreating
tags: onclientrecurrenceexceptioncreating
published: True
position: 30
---

# OnClientRecurrenceExceptionCreating



## 

If specified, the __OnClientRecurrenceExceptionCreating__ client-side event handler is called when arecurrence exception is about to be created via Web Service call. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_appointment() -__the appointment that represents the recurrence exception that is about to be stored.

* __set_cancel() -__ set to true cancel the operation.

This event can be cancelled.


