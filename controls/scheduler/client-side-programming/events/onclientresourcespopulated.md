---
title: OnClientResourcesPopulated
page_title: OnClientResourcesPopulated | UI for ASP.NET AJAX Documentation
description: OnClientResourcesPopulated
slug: scheduler/client-side-programming/events/onclientresourcespopulated
tags: onclientresourcespopulated
published: True
position: 23
---

# OnClientResourcesPopulated



## 

If specified, the __OnClientResourcesPopulated__ client-side event handler is called when the scheduler has received resources. In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raisedafterthe resources have been retrieved from the data service. The event will be raised only once, at the time of the initial load.

One parameter is passed to the handler:

* __sender__ - the scheduler client object;

This event cannot be cancelled.
