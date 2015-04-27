---
title: OnClientRequestSuccess
page_title: OnClientRequestSuccess | RadScheduler for ASP.NET AJAX Documentation
description: OnClientRequestSuccess
slug: scheduler/client-side-programming/events/onclientrequestsuccess
tags: onclientrequestsuccess
published: True
position: 32
---

# OnClientRequestSuccess



## 

If specified, the **OnClientRequestSuccess** client-side event handler is called when a request to the Web Service has succeeded.In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with one property:

* **get_result()-**the object received from the server.

This event cannot be cancelled.


