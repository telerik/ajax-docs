---
title: OnClientNodePopulating
page_title: OnClientNodePopulating | UI for ASP.NET AJAX Documentation
description: OnClientNodePopulating
slug: orgchart/client-side-programming/events/onclientnodepopulating
tags: onclientnodepopulating
published: True
position: 5
---

# OnClientNodePopulating



## 

If specified, the __OnClientNodePopulating__ client-side event handler is called when the RadOrgChart is about to request the child nodes of the expanded node. In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raised before the nodes are retrieved from the data service. The event will be raised again each time new data is about to be retrieved from the web service.

Two parameters are passed to the handler:

* __sender__ - the RadOrgChart client object;

* __eventArgs__ with two properties:

* __get_context() -__ returns a context object (implements IDictionary) that is passed to the server-side code that handles the request for the child nodes of the expanded node.

* __get_node() -__ the expanded node client object.

* __set_cancel() -__ used to cancel the event.

This event can be cancelled.


