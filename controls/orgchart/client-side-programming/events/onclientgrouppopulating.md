---
title: OnClientGroupPopulating
page_title: OnClientGroupPopulating | UI for ASP.NET AJAX Documentation
description: OnClientGroupPopulating
slug: orgchart/client-side-programming/events/onclientgrouppopulating
tags: onclientgrouppopulating
published: True
position: 2
---

# OnClientGroupPopulating



## 

If specified, the __OnClientGroupPopulating__ client-side event handler is called when the RadOrgChart is about to request the group items within a node. In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raised before the group items are retrieved from the data service. The event will be raised again each time new data is about to be retrieved from the web service.

Two parameters are passed to the handler:

* __sender__ - the RadOrgChart client object;

* __eventArgs__ with one properties:

* __get_context() -__ returns a context object (implements IDictionary) that is passed to the server-side code that handles the request for the group items within a node.

* __set_cancel() -__ used to cancel the event.

This event can be cancelled.


