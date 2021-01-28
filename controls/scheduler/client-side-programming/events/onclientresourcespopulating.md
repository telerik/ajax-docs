---
title: OnClientResourcesPopulating
page_title: OnClientResourcesPopulating - RadScheduler
description: Check our Web Forms article about OnClientResourcesPopulating.
slug: scheduler/client-side-programming/events/onclientresourcespopulating
tags: onclientresourcespopulating
published: True
position: 22
---

# OnClientResourcesPopulating



## 

If specified, the **OnClientResourcesPopulating** client-side event handler is called when the scheduleris about to request resources.In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raisedbefore the resources are retrieved from the data service. The event will be raised only once, at the time of the initial load.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

* **get_schedulerInfo() -** the schedulerInfo object that will be passed to the web service method.

* **set_cancel() -** used to cancel the event.

This event can be cancelled.
