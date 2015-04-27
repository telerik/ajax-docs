---
title: Overview
page_title: RadXmlHttpPanel Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: xmlhttppanel/overview
tags: overview
published: True
position: 0
---

# XmlHttpPanel Overview



## 

Telerik **RadXmlHttpPanel**is a panel that can load content on demand using web services or ASP.NET callbacks. It can replace UpdatePanel, or RadAjaxPanel, in certain scenarios where no ViewState and control lifecycle execution is required. In these cases it will deliver much better performance compared to UpdatePanel or RadAjaxPanel.

Partial page updates with AJAX are flexible and can be used in just about any scenario. However, when AJAX is used, the server-side page goes through its full page lifecycle. The whole control tree is created, all event handlers are executed, the ViewState is processed and updated, and sent back to the client. On the other hand, callbacks and web services can also be used for partial page updates, but carry a much smaller (or even no additional) overhead.

There are two ways for loading data on the RadXmlHttpPanel - by using the ASP.NET Callback mechanisms and WebService.

* **Callback** - When a client callback is used, the server Page does not go through its whole lifecycle, but only a small part of it. The client state is not updated, and it is not sent back to the client-side. When Callbacks are used, a POST request is made from the client to the server, and the values of all FORM fields, such as hidden fields (including the view state field) are sent to the server. When the view state is large, this could mean increased overhead. On the other hand, no extra files are needed to use this mode (unlike when using a WebService).

* **WebService** - can be used to handle the data request of the RadXmlHttpPanel. The *WebMethodPath* and the *WebMethodName* properties should be set and the RadXmlHttpPanel automatically retrieves and loads the data. Similarly as in the Client Callback the client state is not affected. A web service requires a couple of extra files to set up, but it is the most efficient approach, as no data, other than the **Value** string is sent over from the client to the server.

In addition, when using **RadXmlHttpPanel** a partial page update request can be easily initiated from the client side using its **set_value** method.
