---
title: OnClientReminderTriggering
page_title: OnClientReminderTriggering | RadScheduler for ASP.NET AJAX Documentation
description: OnClientReminderTriggering
slug: scheduler/client-side-programming/events/onclientremindertriggering
tags: onclientremindertriggering
published: True
position: 39
---

# OnClientReminderTriggering



## 

The OnClientReminderTriggering client-side event handler is called when an appointment reminder is about to be triggered,before the pop-up dialog is shown.

Two parameters are passed to the handler:

* **sender**, the scheduler client object;

* **eventArgs**, with three properties:

	* **get_appointment()** - the instance of the appointment.

	* **get_reminder()** - the reminder.

	* **set_cancel()** - used to cancel the event.

This event can be cancelled. Doing so effectively ignores the reminder.
