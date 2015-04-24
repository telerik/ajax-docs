---
title: OnClientNodePopulated
page_title: OnClientNodePopulated | RadOrgChart for ASP.NET AJAX Documentation
description: OnClientNodePopulated
slug: orgchart/client-side-programming/events/onclientnodepopulated
tags: onclientnodepopulated
published: True
position: 4
---

# OnClientNodePopulated



## 

If specified, the **OnClientNodePopulated** client-side event handler is called when the RadOrgChart has received from the Web Service the child nodes of the expanded node. In the case of server-side binding, the event will not be raised. When client-side binding is used, the event will be raised after the nodes are retrieved from the data service. The event will be raised again each time new data has been retrieved from the web service.

Two parameters are passed to the handler:

* **sender** - the RadOrgChart client object;

* **eventArgs** with two properties:

* **get_node() -** retrieves the expanded node client object.

This event cannot be cancelled.


