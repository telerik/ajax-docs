---
title: Telerik.Web.UI.TimeZoneInfoProvider
page_title: Telerik.Web.UI.TimeZoneInfoProvider
description: Telerik.Web.UI.TimeZoneInfoProvider
---

# Telerik.Web.UI.TimeZoneInfoProvider

This Class defines the TimeZoneInfoProvider that
            implements the TimeZoneProviderBase and IDisposable.

## Inheritance Hierarchy

* System.Object
* System.Configuration.Provider.ProviderBase
* Telerik.Web.UI.TimeZoneProviderBase
* Telerik.Web.UI.TimeZoneInfoProvider : IDisposable

## Properties

###  OperationTimeZone `ITimeZoneModel`

Gets or sets the operation time zone.

## Methods

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

###  GetAllTimeZones

Gets list of all time zones available on the system.

#### Returns

`System.Collections.Generic.List`1` Returns list of all time zones available on the system.

###  GetAllTimeZones

Gets list of all time zones available on the system.

#### Returns

`System.Collections.Generic.List`1` Returns list of all time zones available on the system.

###  Initialize

Initializes the provider.

#### Parameters

#### name `System.String`

The friendly name of the provider.

#### config `System.Collections.Specialized.NameValueCollection`

A collection of the name/value pairs representing the provider-specific
            attributes specified in the configuration for this provider.

#### Returns

`System.Void` 

###  LocalToUtc

Locals to UTC.

#### Parameters

#### local `System.DateTime`

The local.

#### Returns

`System.DateTime` 

###  LocalToUtc

Locals to UTC.

#### Parameters

#### local `System.DateTime`

The local.

#### Returns

`System.DateTime` 

###  UtcToLocal

UTCs to local.

#### Parameters

#### utc `System.DateTime`

The UTC.

#### Returns

`System.DateTime` 

###  UtcToLocal

UTCs to local.

#### Parameters

#### utc `System.DateTime`

The UTC.

#### Returns

`System.DateTime` 

