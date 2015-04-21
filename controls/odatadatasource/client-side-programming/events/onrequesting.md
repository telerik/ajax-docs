---
title: OnRequesting
page_title: OnRequesting | UI for ASP.NET AJAX Documentation
description: OnRequesting
slug: odatadatasource/client-side-programming/events/onrequesting
tags: onrequesting
published: True
position: 1
---

# OnRequesting

## 

The __OnRequesting__ client-side event occurs when data is requested form the web service.

The event handler receives two parameters:

* __sender__ - an instance of the datasource;

* __args__ -containing the following methods:

* __get_modelName()__- returns the model for which the event is fired;

* __get_options()__ - returns the parameters object that will be sent to the service.

* __set_filterExpression()__ - sets filters for the request;

* __set_pageIndex()__ - sets the page index;

* __set_pageSize()__ - sets the page size;
