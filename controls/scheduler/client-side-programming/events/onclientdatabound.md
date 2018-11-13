---
title: OnClientDataBound
page_title: OnClientDataBound | RadScheduler for ASP.NET AJAX Documentation
description: OnClientDataBound
slug: scheduler/client-side-programming/events/onclientdatabound
tags: onclientdatabound
published: True
position: 24
---

# OnClientDataBound



## 

**OnClientDataBound** client-side event is called when RadScheduler has been populated with data.The event will be raised when both the appointments and the resources are retrieved fromthe data service. It raises each time new data is retrieved from the web service.

One parameter is passed to the handler:

* **sender** - RadScheduler client object;

This event cannot be cancelled.

>note This event is **not** raised in case of server-side binding.
>

