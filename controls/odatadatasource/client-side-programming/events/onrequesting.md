---
title: OnRequesting
page_title: OnRequesting - RadODataDataSource
description: Check our Web Forms article about OnRequesting.
slug: odatadatasource/client-side-programming/events/onrequesting
tags: onrequesting
published: True
position: 1
---

# OnRequesting

## 

The **OnRequesting** client-side event occurs when data is requested form the web service.

The event handler receives two parameters:

* **sender** - an instance of the datasource;

* **args** -containing the following methods:

* **get_modelName()**- returns the model for which the event is fired;

* **get_options()** - returns the parameters object that will be sent to the service.

* **set_filterExpression()** - sets filters for the request;

* **set_pageIndex()** - sets the page index;

* **set_pageSize()** - sets the page size;
