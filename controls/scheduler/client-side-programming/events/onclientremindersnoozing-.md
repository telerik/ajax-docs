---
title: OnClientReminderSnoozing 
page_title: OnClientReminderSnoozing - RadScheduler
description: Check our Web Forms article about OnClientReminderSnoozing.
slug: scheduler/client-side-programming/events/onclientremindersnoozing-
tags: onclientremindersnoozing,
published: True
position: 40
---

# OnClientReminderSnoozing 



## 

The OnClientReminderTriggering client-side event handler is called when an appointment reminder has been snoozed by the user,before the command is sent to the server.

Two parameters are passed to the handler:

* **sender**, the scheduler client object;

* **eventArgs**, with three properties:

	* **get_appointment()** - the instance of the appointment.

	* **get_reminder()** - the reminder.

	* **set_cancel()** - used to cancel the event.

This event can be cancelled.
