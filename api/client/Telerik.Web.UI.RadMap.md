---
title: Telerik.Web.UI.RadMap
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadMap : Telerik.Web.UI.RadWebControl

## Methods

### repaint

Causes the control to repaint (re-render).

#### Parameters

#### Returns

`None`

### get_kendoWidget

Returns the instance of the Kendo Map widget. 
To use the exposed Kendo methods make sure you have the kendo.dataviz.d.ts file and cast the returned object to kendo.dataviz.ui.Map.

#### Parameters

#### Returns

`Object`

### saveClientState

Saves the current zoom level and center value to preserve them between post backs.

#### Parameters

#### Returns

`String`

## Events

### load

This event is raised when the initialization of the Map is finished and all its elements are rendered on the client.

####  Event Data

##### sender `Telerik.Web.UI.RadMap`

The instance of the RadMap control raised the event.

##### args `Sys.EventArgs`

The event arguments.

### initialize

This event is raised before the initialization of the Map.

####  Event Data

##### sender `Telerik.Web.UI.RadMap`

The instance of the RadMap control raised the event.

##### args `Telerik.Web.UI.RadMapInitializeEventArgs`

The event arguments.






