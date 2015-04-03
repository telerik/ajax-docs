---
title: OnClientNavigationCommand
page_title: OnClientNavigationCommand | UI for ASP.NET AJAX Documentation
description: OnClientNavigationCommand
slug: scheduler/client-side-programming/events/onclientnavigationcommand
tags: onclientnavigationcommand
published: True
position: 34
---

# OnClientNavigationCommand



## 

If specified, the __OnClientNavigationCommand__ client-side event handler is called when the scheduleris about to execute a navigation command. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with three properties:

* __get_command() -__the navigation command that is being processed.

* __get_selectedDate()__ - the date that RadScheduler will navigate to.

* __set_cancel() -__ set to true to cancel the operation.

This event can be cancelled.


