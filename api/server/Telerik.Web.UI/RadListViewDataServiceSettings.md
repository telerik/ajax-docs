---
title: Telerik.Web.UI.RadListViewDataServiceSettings
page_title: Telerik.Web.UI.RadListViewDataServiceSettings
description: Telerik.Web.UI.RadListViewDataServiceSettings
---

# Telerik.Web.UI.RadListViewDataServiceSettings

Class containing data service settings for the client-bound Telerik.Web.UI.RadListView .
            These allow the control to automatically connect to a data service.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadListViewDataServiceSettings

## Properties

###  Location `String`

Gets or sets the base URL of the web service.

###  DataPath `String`

Gets or sets the table, method or entity path that gets appended to the base location
            of the web service. The result URL is used for requesting the data.

###  CountPath `String`

Gets or sets the count method name that gets appended to the base location
            of the web service. The result URL is used for requesting the total item count.

###  HttpMethod `RadListViewDataServiceHttpMethod`

Gets or sets the HTTP method that  will use 
            to access the data service URL. Default is POST.

###  EnableCaching `Boolean`

Enables or disables client-side data caching in . Caching is disabled by default.

###  DataPropertyName `String`

Gets or sets the name of the property in the result object returned by the data service 
            that contains the data objects  will bind to.

###  CountPropertyName `String`

Gets or sets the name of the property in the result object returned by the data service 
            that contains the total item count in the data source.

###  FilterParameterName `String`

Gets or sets the name of the filter parameter that will be used with the data service.

###  FilterParameterType `RadListViewClientDataBindingParameterType`

Gets or sets the format in which the filter expressions will be sent to the web service. Default is List.

###  SortParameterName `String`

Gets or sets the name of the sort parameter that will be used with the data service. Default is List.

###  SortParameterType `RadListViewClientDataBindingParameterType`

Gets or sets the format in which the sort expressions will be sent to the web service. Default is List.

###  StartRowIndexParameterName `String`

Gets or sets the name of the start row index parameter that will be used with the data service.

###  MaximumRowsParameterName `String`

Gets or sets the name of the maximum rows parameter that will be used with the data service.

###  ResponseType `RadListViewDataServiceResponseType`

Gets or sets the response type that is expected from the data service.

