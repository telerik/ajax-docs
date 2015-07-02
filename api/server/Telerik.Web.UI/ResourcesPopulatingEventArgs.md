---
title: Telerik.Web.UI.ResourcesPopulatingEventArgs
page_title: Telerik.Web.UI.ResourcesPopulatingEventArgs
description: Telerik.Web.UI.ResourcesPopulatingEventArgs
---

# Telerik.Web.UI.ResourcesPopulatingEventArgs

Provides data for the E:Telerik.Web.UI.RadScheduler.ResourcesPopulating event of the Telerik.Web.UI.RadScheduler control.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.ComponentModel.CancelEventArgs
* Telerik.Web.UI.ResourcesPopulatingEventArgs

## Properties

###  SchedulerInfo `ISchedulerInfo`

Gets or sets the ISchedulerInfo object
            that will be passed to the provider/web service.

#### Remarks
You can replace this object with your own implementation of
            ISchedulerInfo in order
            to pass additional information to the provider/web service.

###  ServicePath `String`

Gets or sets the URI for the request that is about to be made by a RadScheduler.

#### Remarks
This property contains the absolute URI for the request, as resolved
            by RadScheduler. You might need to modify this URI to accommodate for
            URL rewriters and other scenarios.

###  Headers `WebHeaderCollection`

Gets a collection of header name/value pairs associated with the request.

#### Remarks
The Headers property contains a WebHeaderCollection
            instance containing header information that RadScheduler sends with the request.

###  Credentials `ICredentials`

Gets or sets the network credentials that are sent to the host and used to authenticate the request.

#### Remarks
Typically, you would set this property to the credentials of the client on whose behalf the request is made.

###  Proxy `IWebProxy`

Gets or sets the proxy to be used to connect to the Web Service.

