---
title: OnClientRequestSuccess
page_title: OnClientRequestSuccess | UI for ASP.NET AJAX Documentation
description: OnClientRequestSuccess
slug: scheduler/client-side-programming/events/onclientrequestsuccess
tags: onclientrequestsuccess
published: True
position: 32
---

# OnClientRequestSuccess



## 

If specified, the __OnClientRequestSuccess__ client-side event handler is called when a request to the Web Service has succeeded.In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the scheduler client object;

* __eventArgs__ with one property:

* __get_result()-__the object received from the server.

This event cannot be cancelled.


