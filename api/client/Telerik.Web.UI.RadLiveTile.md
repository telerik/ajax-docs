---
title: Telerik.Web.UI.RadLiveTile
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadLiveTile
---

# Telerik.Web.UI.RadLiveTile : Telerik.Web.UI.RadBaseTile 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadBaseTile]({%slug Telerik.Web.UI.RadBaseTile%})
* *[Telerik.Web.UI.RadLiveTile]({%slug Telerik.Web.UI.RadLiveTile%})*

## Methods

### set_updateInterval

Sets the interval (in milliseconds) after which the tile will automatically update the content.

#### Parameters

##### value `Number`

#### Returns

`None` 

### Name

Parameters

#### Parameters

#### Returns

`None` 

### get_animationManager

Returns the AnimationManager responsible for showing / hiding the client template

#### Parameters

#### Returns

`None` 

### get_clientTemplate

Gets the HTML template that will be instantiated in the tile after live data request

#### Parameters

#### Returns

`None` 

### set_clientTemplate

Sets the HTML template that will be instantiated in the tile after live data request

#### Parameters

##### value `String`

#### Returns

`None` 

### get_updateInterval

Returns the interval (in milliseconds) after which the tile will automatically update the content

#### Parameters

#### Returns

`String` 

## Events

### templateDataBound

The templateDataBound client-side event occurs after the client template is data bound.

#### Event Data

##### sender `Telerik.Web.UI.RadLiveTile`

Reference of the RadLiveTile instance raised the event.

##### args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The event arguments.

### dataLoaded

The dataLoaded event occurs after the data request returns the data successfully.

#### Event Data

##### sender `Telerik.Web.UI.RadLiveTile`

Reference of the RadLiveTile instance raised the event.

##### args `Telerik.Web.UI.LiveTileDataEventArgs`

The event arguments.

### dataLoadingError

The dataLoadingError event occurs after the data request returns error.

#### Event Data

##### sender `Telerik.Web.UI.RadLiveTile`

Reference of the RadLiveTile instance raised the event.

##### args `Telerik.Web.UI.LiveTileErrorEventArgs`

The event arguments.

### dataLoading

The dataLoading client-side event occurs before the data request is executed.

#### Event Data

##### sender `Telerik.Web.UI.RadLiveTile`

Reference of the RadLiveTile instance raised the event.

##### args `Telerik.Web.UI.LiveTileCancelEventArgs`

The event arguments.

