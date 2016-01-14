---
title: Telerik.Web.UI.ClientDataSourceClientEvents
page_title: Telerik.Web.UI.ClientDataSourceClientEvents
description: Telerik.Web.UI.ClientDataSourceClientEvents
---

# Telerik.Web.UI.ClientDataSourceClientEvents

Represents the client events of Telerik.Web.UI.RadClientDataSource .
            Allows setting the names of client-side functions which will be called 
            when the given events are raised on the client.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.ClientDataSourceClientEvents

## Properties

###  OnChange `String`

Gets or sets the  client-side event which will be fired when a change in the data is applied.

###  OnCommand `String`

Gets or sets the client-side event which will be fired when a  command occurs.

###  OnCustomParameter `String`

Gets or sets the  client-side event which will be fired when a custom mapping of the request parameters can be perfomred.

###  OnDataParse `String`

Gets or sets the  client-side event which can be used to additionally parse the response before it is further processed by the control

###  OnDataRequested `String`

Gets or sets the  client-side event which will be fired after the data has been requested from the service

###  OnRequestEnd `String`

Gets or sets the client-side event which will be fired when a  request finished and success handler is called.

###  OnRequestFailed `String`

Gets or sets the  client-side event which will be fired when the remote request has failed.

###  OnRequestStart `String`

Gets or sets the client-side event which will be fired when a  remote service or page request is started.

###  OnSync `String`

Gets or sets the  client-side event which will be fired after the data source saves all data item changes. Used in batch editing

