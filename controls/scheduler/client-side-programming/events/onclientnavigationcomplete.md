---
title: OnClientNavigationComplete
page_title: OnClientNavigationComplete | UI for ASP.NET AJAX Documentation
description: OnClientNavigationComplete
slug: scheduler/client-side-programming/events/onclientnavigationcomplete
tags: onclientnavigationcomplete
published: True
position: 33
---

# OnClientNavigationComplete



## 

If specified, the __OnClientNavigationComplete__ client-side event handler is called when anavigation command has been completed. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with one property:

* __get_command() -__the navigation command that is completed;

This event cannot be cancelled.


