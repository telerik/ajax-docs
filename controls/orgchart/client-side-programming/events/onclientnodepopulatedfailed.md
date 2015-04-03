---
title: OnClientNodePopulatedFailed
page_title: OnClientNodePopulatedFailed | UI for ASP.NET AJAX Documentation
description: OnClientNodePopulatedFailed
slug: orgchart/client-side-programming/events/onclientnodepopulatedfailed
tags: onclientnodepopulatedfailed
published: True
position: 6
---

# OnClientNodePopulatedFailed



## 

If specified, the __OnClientNodePopulationFailed__ client-side event handler is called when a request to the Web Service has failed. In the case of server-side binding, the event will not be raised.

Two parameters are passed to the handler:

* __sender__ - the RadOrgChart client object;

* __eventArgs__ with two properties:

* __get_errorMessage() -__ the error message sent from the server.

* __set_cancel() -__ set to true to suppress the default action (alert message).

This event can be cancelled.


