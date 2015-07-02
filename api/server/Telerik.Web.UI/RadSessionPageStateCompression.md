---
title: Telerik.Web.UI.RadSessionPageStateCompression
page_title: Telerik.Web.UI.RadSessionPageStateCompression
description: Telerik.Web.UI.RadSessionPageStateCompression
---

# Telerik.Web.UI.RadSessionPageStateCompression

A class that overrides Telerik.Web.UI.RadCompression to provide viewstate compression in session.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Adapters.ControlAdapter
* System.Web.UI.Adapters.PageAdapter
* Telerik.Web.UI.RadCompression
* Telerik.Web.UI.RadSessionPageStateCompression

## Methods

###  GetStatePersister

If state compression is enabled returns  object which supports compressed state manipulation.
            Otherwise returns the default persister.

#### Returns

`System.Web.UI.PageStatePersister` 

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

