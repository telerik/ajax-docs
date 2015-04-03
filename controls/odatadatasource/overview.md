---
title: ODataDataSource Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: odatadatasource/overview
tags: overview
published: True
position: 0
---

# ODataDataSource Overview



## 

__RadODataDataSource__ is a client data source component that allows querying of local and remote services. The purpose of the control is to allow user to easily create data model for their applications. To facilitate the configuration of the data model further, we implemented a specially designed wizard. Using it, you can visually configure the data model. With the__RadODataDataSource__ one can easily configure not only one but several models and bind each of them to a different control. It is also important to note that these controls should support such binding.

>important Note that services used for the __RadODataDataSource__ should expose __OData__ feed.
>


Once you have created the model you can either bind it directly to a control or use any of the client-side events to further process the data:

* Direct binding to a control - With the navigation controls you should set Text/Value fields. For the Scheduler, in particular, you will need to set the appointments related fields. For this purpose you can use the smart tag of the corresponding control.

* Using the client side events - __OnRequesting__, __OnRequestSucceeded__, __OnRequestFail__ events enable you to further alter the processing ofdata. In addition to that you can use the design-time wizard to enable/disable sorting, paging and filtering of the data.
