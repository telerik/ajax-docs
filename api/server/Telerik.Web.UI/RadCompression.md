---
title: Telerik.Web.UI.RadCompression
page_title: Telerik.Web.UI.RadCompression
description: Telerik.Web.UI.RadCompression
---

# Telerik.Web.UI.RadCompression

RadCompression is a HttpModule that is designed to automatically compress AJAX and Web Service responses.
            It also supports some additional features such as state compression, postback compression and excluding particular handlers from compression.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Adapters.ControlAdapter
* System.Web.UI.Adapters.PageAdapter
* Telerik.Web.UI.RadCompression

## Methods

###  IsHttpCompressionEnabled

Gets value indicating if the HTTP compression is activated

#### Returns

`System.Boolean` 

###  GetConfigurationSection

Retrieves RadCompression's configuration section from the webconfig.

#### Returns

`Telerik.Web.UI.RadCompressionConfigurationSection` 

###  ShouldApplyOnPostback

Gets value indicating if the compression filter should be applied on full page postbacks.

#### Returns

`System.Boolean` 

###  IsStateCompressionEnabled

Gets value indicating whether State compression is activated.

#### Returns

`System.Boolean` 

###  Init

Initializes the RadCompression module and prepares it to handle requests.

#### Parameters

#### application `System.Web.HttpApplication`

A  that provides access to the methods, properties, 
            and events common to all application objects within an ASP.NET application

#### Returns

`System.Void` 

###  IsResponseCompressed

Determines whether the response is already compressed.

#### Returns

`System.Boolean` 

###  ShouldExplicitlyAddContentEncoding

Indicates if compression type should be explicitly added to content encoding header

#### Returns

`System.Boolean` 

