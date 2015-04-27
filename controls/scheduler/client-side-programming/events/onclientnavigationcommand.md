---
title: OnClientNavigationCommand
page_title: OnClientNavigationCommand | RadScheduler for ASP.NET AJAX Documentation
description: OnClientNavigationCommand
slug: scheduler/client-side-programming/events/onclientnavigationcommand
tags: onclientnavigationcommand
published: True
position: 34
---

# OnClientNavigationCommand



## 

If specified, the **OnClientNavigationCommand** client-side event handler is called when the scheduleris about to execute a navigation command. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with three properties:

* **get_command() -**the navigation command that is being processed.

* **get_selectedDate()** - the date that RadScheduler will navigate to.

* **set_cancel() -** set to true to cancel the operation.

This event can be cancelled.


