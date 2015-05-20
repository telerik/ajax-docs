---
title: Server-side Programming
page_title: Server-side Programming | RadMap for ASP.NET AJAX Documentation
description: Server-side Programming
slug: map/server-side-programming
tags: server-side,programming
published: True
position: 7
---

# Server-side Programming

**RadMap** provides a set of server-side properties and events that can help you configure the look and behaviour of the control.

## General RadMap Properties

**Table 1** demonstrates some general properties of the **RadMap**:


| Property | Description |
| ------ | ------ |
| **CenterSettings** - Inner properties: **Latitude**, **Longitude** |The map center. Coordinates are listed as [Latitude, Longitude]. Inner properties - Gets or sets the Latitude of the map center; Gets or sets the Longitude of the map center.|
| **ClientDataSourceID** |Gets or sets ID of ClientDataSource control that is used for client side binding.|
| **ControlsSettings** |The configuration of built-in map controls.|
| **DataSource** |Gets or sets the object from which the data-bound control retrieves its list of data items..|
| **DataSourceID** |Gets or sets the ID of the control from which the data-bound control retrieves its list of data items.|
| **LayerDefaultsSettings** |The default configuration for map layers by type.|
| **LayersCollection** |Gets the layers collection.|
| **LayersDataSource** |Gets or sets the object from which RadMap retrieves its layers.|
| **LayersDataSourceID** |Gets or sets the ID of the control from which the map control retrieves its list of layers.|
| **MarkerDefaultsSettings** |The default options for all markers.|
| **MarkersCollection** |Gets the MapMarkersCollection with the static markers to be displayed on the map.|
| **MaxZoom** |The maximum zoom level. The default value is 19.|
| **MinSize** |The size of the map in pixels at zoom level 0. The default value is 256.|
| **MinZoom** |The minimum zoom level. The default value is 1.|
| **Pannable** |Controls whether the user can pan the map.|
| **Wraparound** |Specifies whether the map should wrap around the east-west edges.|
| **Zoom** |Gets or sets the initial zoom level.Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features). The map size is derived from the zoom level and minScale options: size = (2 ^ zoom) * minSize.|
| **Zoomable** |Controls whether the map zoom level can be changed by the user.|

## ControlsSettings Properties

For configuring the built-in RadMap controls through ControlsSettings, you can use the properties listed in **Table 2**:

| RadMap.ControlsSettings Properties | Description |
| ------ | ------ |
| **Attribution** |Configures or disables the built-in attribution control.|
| **AttributionSettings** - Inner properties: **Position** |Configures or disables the built-in attribution control. Inner properties - The position of the attribution control. Predefined values are "topLeft", "topRight", "left", "bottomRight", "bottomLeft".|
| **Navigator** |Configures or disables the built-in navigator control.|
| **NavigatorSettings** - Inner properties: **Position** |Configures or disables the built-in navigator control. Inner properties - The position of the navigator control. Predefined values are "topLeft", "topRight", "left", "bottomRight", "bottomLeft".|
| **Zoom** |Configures or disables the built-in zoom control (+/- button).|
| **ZoomSettings** - Inner properties: **Position** |Configures or disables the built-in zoom control (+/- button). Inner properties - The position of the zoom control. Predefined values are "topLeft", "topRight", "left", "bottomRight", "bottomLeft".|

## RadMap Events

**Table 3** lists common RadMap events to which you can subscribe.

| Event | Description |
| ------ | ------ |
| **DataBinding** |Fired when the server control binds to a data source.|
| **DataBound** |Fired after the server control binds to a data source.|
| **ItemCreated** |Fired when item is created during data binding.|
| **ItemDataBound** |Fired when item is data bound during data binding.|

# See Also

 * [Overview]({%slug map/overview%})

 * [Getting Started with RadMap]({%slug map/getting-started/overview%})
