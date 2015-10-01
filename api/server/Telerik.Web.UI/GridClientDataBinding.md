---
title: Telerik.Web.UI.GridClientDataBinding
page_title: Telerik.Web.UI.GridClientDataBinding
description: Telerik.Web.UI.GridClientDataBinding
---

# Telerik.Web.UI.GridClientDataBinding

Provides properties related to setting the client-side data-binding in
            Telerik RadGrid.

#### Remarks
You can get a reference to this class using
                P:Telerik.Web.UI.GridClientSettings.DataBinding property.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridClientDataBinding

## Properties

###  DataService `GridClientDataService`

Gets a reference to  class providing properties
                related to client-side ADO.NET DataService data-binding.

###  Location `String`

Gets or sets url for the WebService or Page which will be requested to get data.

###  SelectMethod `String`

Gets or sets method name in the WebService or Page which will be requested to get data.

###  SelectCountMethod `String`

Gets or sets method name in the WebService or Page which will be requested to get total records count.

###  MaximumRowsParameterName `String`

Gets or sets maximum rows parameter name for the SelectMethod in the WebService or Page which will be requested to get data.

###  StartRowIndexParameterName `String`

Gets or set start row index parameter name for the SelectMethod in the WebService or Page which will be requested to get data.

###  SortParameterName `String`

Gets or set sort parameter name for the SelectMethod in the WebService or Page which will be requested to get data.

###  FilterParameterName `String`

Gets or set filter parameter name for the SelectMethod in the WebService or Page which will be requested to get data.

###  FilterParameterType `GridClientDataBindingParameterType`

Gets or set filter parameter type for the SelectMethod in the WebService or Page which will be requested to get data. Default value is List.

###  SortParameterType `GridClientDataBindingParameterType`

Gets or set sort parameter type for the SelectMethod in the WebService or Page which will be requested to get data. Default value is List.

###  EnableCaching `Boolean`

Gets or set a value indicating whether the client-side caching should be enabled or not.

###  DataPropertyName `String`

Gets or set data property name for the SelectMethod in the WebService or Page which will be requested to get data and count. Default is "Data"!

###  CountPropertyName `String`

Gets or set data property total records count for the SelectMethod in the WebService or Page which will be requested to get data and count. Default is "Count"!

###  ResponseType `GridClientDataResponseType`

Gets or sets the type of the data requested from a data service. A value of 
            GridClientDataResponseType.JSONP allows for cross-domain JSONP requests.
            Default value is GridClientDataResponseType.JSON.

###  ShowEmptyRowsOnLoad `Boolean`

Gets or sets a value indicating whether empty data rows are shown in
             when client-side databinding is setup. Defalut value is true.

###  IsSet `Boolean`

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

