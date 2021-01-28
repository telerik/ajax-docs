---
title: OnClientNavigationComplete
page_title: OnClientNavigationComplete - RadScheduler
description: Check our Web Forms article about OnClientNavigationComplete.
slug: scheduler/client-side-programming/events/onclientnavigationcomplete
tags: onclientnavigationcomplete
published: True
position: 33
---

# OnClientNavigationComplete



## 

If specified, the **OnClientNavigationComplete** client-side event handler is called when anavigation command has been completed. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with one property:

	* **get_command()** - the navigation command that is completed;

This event cannot be cancelled.


