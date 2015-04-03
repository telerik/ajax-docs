---
title: OnClientRecurrenceExceptionsRemoving
page_title: OnClientRecurrenceExceptionsRemoving | UI for ASP.NET AJAX Documentation
description: OnClientRecurrenceExceptionsRemoving
slug: scheduler/client-side-programming/events/onclientrecurrenceexceptionsremoving
tags: onclientrecurrenceexceptionsremoving
published: True
position: 31
---

# OnClientRecurrenceExceptionsRemoving



## 

If specified, the __OnClientRecurrenceExceptionsRemoving__ client-side event handler is called when recurrence exceptions are about to be removed via Web Service call. In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raised when the user chooses to remove the recurrence exceptions of a given series through the advanced form.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_appointment() -__the master appointment that represents the recurrence series.

* __set_cancel() -__ set to true cancel the operation.

This event can be cancelled.


