---
title: OnClientResourcesPopulating
page_title: OnClientResourcesPopulating | UI for ASP.NET AJAX Documentation
description: OnClientResourcesPopulating
slug: scheduler/client-side-programming/events/onclientresourcespopulating
tags: onclientresourcespopulating
published: True
position: 22
---

# OnClientResourcesPopulating



## 

If specified, the __OnClientResourcesPopulating__ client-side event handler is called when the scheduleris about to request resources.In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raisedbefore the resources are retrieved from the data service. The event will be raised only once, at the time of the initial load.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with two properties:

* __get_schedulerInfo() -__ the schedulerInfo object that will be passed to the web service method.

* __set_cancel() -__ used to cancel the event.

This event can be cancelled.
