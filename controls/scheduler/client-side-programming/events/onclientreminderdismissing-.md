---
title: OnClientReminderDismissing 
page_title: OnClientReminderDismissing  | UI for ASP.NET AJAX Documentation
description: OnClientReminderDismissing 
slug: scheduler/client-side-programming/events/onclientreminderdismissing-
tags: onclientreminderdismissing,
published: True
position: 41
---

# OnClientReminderDismissing 



## 

The OnClientReminderTriggering client-side event handler is called when an appointment reminder has been dismissed by the user,before the command is sent to the server.

Two parameters are passed to the handler:

* __sender__, the scheduler client object;

* __eventArgs__, with three properties:

* get_appointment(), the instance of the appointment.

* get_reminder(), the reminder.

* set_cancel(), used to cancel the event.

This event can be cancelled.
