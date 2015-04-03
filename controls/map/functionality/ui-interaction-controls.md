---
title: UI Interaction Controls
page_title: UI Interaction Controls | UI for ASP.NET AJAX Documentation
description: UI Interaction Controls
slug: map/functionality/ui-interaction-controls
tags: ui,interaction,controls
published: True
position: 0
---

# UI Interaction Controls



In this article you can examine the RadMap’s UI elements the end user can interact with.	The Telerik Map provides the following distinct controls – __Navigator__, __Zoom__ and __Attribution__.

## End User Experience with the UI Controls

The __Navigator__ and the __Zoom__ controls allow the user to pan and zoom the map. Their value are persisted through the server post back.The __Attribution__ is the map footer where additional information about the Map Tile Service rights could be provided to the end user.

In __Figure 1__ you can examine the distinct controls in a simple __RadMap__ setup, provided in __Example 1__.
>caption Figure 1: Illustration of the Navigator, Zoom and Attribution UI elements

![Rad Map-UI-Controls-with-Pointers](images/RadMap-UI-Controls-with-Pointers.png)

__Example 1__:UI elements enabled by default in the __RadMap__ control

````ASPNET
			<telerik:RadMap runat="server" ID="RadMap1" Width="500" Height="200">
				<CenterSettings Latitude="1" Longitude="1" />
				<LayersCollection>
					<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
						UrlTemplate="http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
						Attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
					</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



## Controlling the Visibility of the UI Controls

In the __RadMap__ you can easily enable or disable the UI controls using the __ControlsSetting__ inner tag and set the desired controls to __true__ or __false__.If such options are not set, the controls are enabled by default.

__Example 2__ demonstrates how to create a Map with disabled __Navigator__, __Zoom__ and __Attribution__ elements.

__Example 2__: Disabling the __UI Controls__ of the __RadMap__

````ASPNET
			 <telerik:RadMap runat="server" ID="RadMap1">
				<ControlsSettings Attribution="false" Navigator="false" Zoom="false"></ControlsSettings>
				<LayersCollection>
					<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
						UrlTemplate="http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
						Attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
					</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



## Repositioning the UI Controls

In __Example 3__ you can see how the __AttributionSettings__, __NavigatorSettings__ and __ZoomSettings__ inner tags and their __Position__property are used to change the controls’ position.The result is illustrated in __Figure 2__.
>caption Figure 2: RadMap with repositioned UI controls



__Example 3__:How to reposition the Map’s UI controls

````ASPNET
			 <telerik:RadMap runat="server" ID="RadMap1" Width="500" Height="200">
				<CenterSettings Latitude="1" Longitude="1" />
				<ControlsSettings>
					<AttributionSettings Position="BottomLeft" />
					<NavigatorSettings Position="TopRight" />
					<ZoomSettings Position="BottomRight" />
				</ControlsSettings>
				<LayersCollection>
					<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
						UrlTemplate="http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
						Attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
					</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



# See Also

 * [Overview]({%slug map/overview%})

 * [Server-side Programming]({%slug map/server-side-programming%})
