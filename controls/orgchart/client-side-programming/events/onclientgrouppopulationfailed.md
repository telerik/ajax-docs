---
title: OnClientGroupPopulationFailed
page_title: OnClientGroupPopulationFailed | RadOrgChart for ASP.NET AJAX Documentation
description: OnClientGroupPopulationFailed
slug: orgchart/client-side-programming/events/onclientgrouppopulationfailed
tags: onclientgrouppopulationfailed
published: True
position: 3
---

# OnClientGroupPopulationFailed



## 

If specified, the **OnClientGroupPopulationFailed** client-side event handler is called when a request to the Web Service has failed. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* **sender** - the RadOrgChart client object;

* **eventArgs** with two properties:

* **get_errorMessage() -** the error message sent from the server.

* **set_cancel() -** set to true to suppress the default action (alert message).

This event can be cancelled.


