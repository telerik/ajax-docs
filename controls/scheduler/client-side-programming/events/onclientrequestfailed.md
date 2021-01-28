---
title: OnClientRequestFailed
page_title: OnClientRequestFailed - RadScheduler
description: Check our Web Forms article about OnClientRequestFailed.
slug: scheduler/client-side-programming/events/onclientrequestfailed
tags: onclientrequestfailed
published: True
position: 25
---

# OnClientRequestFailed



## 

If specified, the **OnClientRequestFailed** client-side event handler is called when a request to the Web Service has failed.In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the scheduler client object;

* **eventArgs** with two properties:

* **get_errorMessage() -** the error message sent from the server.

* **set_cancel() -** set to true to suppress the default action (alert message).

This event can be cancelled.


