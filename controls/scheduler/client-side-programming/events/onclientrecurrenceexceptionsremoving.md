---
title: OnClientRecurrenceExceptionsRemoving
page_title: OnClientRecurrenceExceptionsRemoving - RadScheduler
description: Check our Web Forms article about OnClientRecurrenceExceptionsRemoving.
slug: scheduler/client-side-programming/events/onclientrecurrenceexceptionsremoving
tags: onclientrecurrenceexceptionsremoving
published: True
position: 31
---

# OnClientRecurrenceExceptionsRemoving



## 

If specified, the **OnClientRecurrenceExceptionsRemoving** client-side event handler is called when recurrence exceptions are about to be removed via Web Service call. In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raised when the user chooses to remove the recurrence exceptions of a given series through the advanced form.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

	* **get_appointment()** -the master appointment that represents the recurrence series.

	* **set_cancel()** - set to true cancel the operation.

This event can be cancelled.


