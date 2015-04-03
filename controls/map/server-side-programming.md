---
title: Server-side Programming
page_title: Server-side Programming | UI for ASP.NET AJAX Documentation
description: Server-side Programming
slug: map/server-side-programming
tags: server-side,programming
published: True
position: 7
---

# Server-side Programming



__RadMap__ provides a set of server-side properties and events that can help you configure thelook and behaviour of the control.

## General RadMap Properties

__Table 1__ demonstrates some general properties of the __RadMap__:


| Property | Description |
| ------ | ------ |
| __CenterSettings__ Inner properties

*  __Latitude__ 

*  __Longitude__ |The map center. Coordinates are listed as [Latitude, Longitude].Inner properties

* Gets or sets the Latitude of the map center.

* Gets or sets the Longitude of the map center.|
| __ClientDataSourceID__ |Gets or sets ID of ClientDataSource control that is used for client side binding.|
| __ControlsSettings__ |The configuration of built-in map controls.|
| __DataSource__ |Gets or sets the object from which the data-bound control retrieves its list of data items..|
| __DataSourceID__ |Gets or sets the ID of the control from which the data-bound control retrieves its list of data items.|
| __LayerDefaultsSettings__ |The default configuration for map layers by type.|
| __LayersCollection__ |Gets the layers collection.|
| __LayersDataSource__ |Gets or sets the object from which RadMap retrieves its layers.|
| __LayersDataSourceID__ |Gets or sets the ID of the control from which the map control retrieves its list of layers.|
| __MarkerDefaultsSettings__ |The default options for all markers.|
| __MarkersCollection__ |Gets the MapMarkersCollection with the static markers to be displayed on the map.|
| __MaxZoom__ |The maximum zoom level. The default value is 19.|
| __MinSize__ |The size of the map in pixels at zoom level 0. The default value is 256.|
| __MinZoom__ |The minimum zoom level. The default value is 1.|
| __Pannable__ |Controls whether the user can pan the map.|
| __Wraparound__ |Specifies whether the map should wrap around the east-west edges.|
| __Zoom__ |Gets or sets the initial zoom level.Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features). The map size is derived from the zoom level and minScale options: size = (2 ^ zoom) * minSize.|
| __Zoomable__ |Controls whether the map zoom level can be changed by the user.|

## ControlsSettings Properties

For configuring the built-in RadMap controls through ControlsSettings, you can use the properties listed in __Table 2__:


| RadMap.ControlsSettings Properties | Description |
| ------ | ------ |
| __Attribution__ |Configures or disables the built-in attribution control.|
| __AttributionSettings__ Inner properties

*  __Position__ |Configures or disables the built-in attribution control.Inner properties

* The position of the attribution control. Predefined values are "topLeft", "topRight", "left", "bottomRight", "bottomLeft".|
| __Navigator__ |Configures or disables the built-in navigator control.|
| __NavigatorSettings__ Inner properties

*  __Position__ |Configures or disables the built-in navigator control.Inner properties

* The position of the navigator control. Predefined values are "topLeft", "topRight", "left", "bottomRight", "bottomLeft".|
| __Zoom__ |Configures or disables the built-in zoom control (+/- button).|
| __ZoomSettings__ Inner properties

*  __Position__ |Configures or disables the built-in zoom control (+/- button).Inner properties

* The position of the zoom control. Predefined values are "topLeft", "topRight", "left", "bottomRight", "bottomLeft".|

## RadMap Events

__Table 3__ lists common RadMap events to which you can subscribe.


| Event | Description |
| ------ | ------ |
| __DataBinding__ |Fired when the server control binds to a data source.|
| __DataBound__ |Fired after the server control binds to a data source.|
| __ItemCreated__ |Fired when item is created during data binding.|
| __ItemDataBound__ |Fired when item is data bound during data binding.|

# See Also

 * [Overview]({%slug map/overview%})

 * [Overview]({%slug map/getting-started/overview%})
