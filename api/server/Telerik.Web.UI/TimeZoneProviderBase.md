---
title: Telerik.Web.UI.TimeZoneProviderBase
page_title: Telerik.Web.UI.TimeZoneProviderBase
description: Telerik.Web.UI.TimeZoneProviderBase
---

# Telerik.Web.UI.TimeZoneProviderBase

This abstract class defines the TimeZoneProviderBase.

## Inheritance Hierarchy

* System.Object
* System.Configuration.Provider.ProviderBase
* Telerik.Web.UI.TimeZoneProviderBase

## Properties

###  OperationTimeZone `ITimeZoneModel`

Gets or sets the operation time zone.

## Methods

###  GetAllTimeZones

Gets list of all time zones available on the system.

#### Returns

`System.Collections.Generic.List`1` Returns list of all time zones available on the system.

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

