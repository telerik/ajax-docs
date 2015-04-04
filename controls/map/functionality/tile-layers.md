---
title: Tile Layers
page_title: Tile Layers | UI for ASP.NET AJAX Documentation
description: Tile Layers
slug: map/functionality/tile-layers
tags: tile,layers
published: True
position: 1
---

# Tile Layers



In this article you will find detailed information about the __Tile__ and __Bing__	layer types of the __RadMap__ control.

The images used to render the actual map are requested from third-party services that conform to the	[Tile Map Service standard](https://en.wikipedia.org/wiki/Tile_Map_Service).	The built-in configuration options of the __MapLayer__ allow you to set an URL template	via the __UrlTemplate__ property that will access the service and provide the needed images.

>note Licenses and Official Author rights to the Tile Layer Images are determined by the used Web Map Service.The __Telerik Map__ only provides an UI control that allows you to setup and place a map in aweb application, built via ASP.NET AJAX techniques. You need to provide proper attribution with the correct copyright notice and,if needed, establish an account with the map owner to ensure unlimited/fast access.
>


## Configuration of the MapLayer

To generate a map, you must first configure the service it is going to use. The most important option is the__UrlTemplate__ that defines the provider you are going to use. It is built by combining the following parameters RadMap provides:

* __SubDomain__ — the Subdomains property lets you configure an array of strings that are placed in the subdomain of the URL that is generated. By having more than one, you can let the browser have more active requests for map pieces at any given time, because usually browsers limit the maximum number of active requests per domain. This setting is optional.

* __URL to the service__ — this is the actual site that provides maps. You can examine some URL examples listed below.

* __Zoom level__ — controls the scale of the map. The larger the value, the larger the scale.

* __X coordinate__ — the X coordinate (longitude) for the map piece. It is provided by RadMap.

* __Y coordinate__ — the Y coordinate (latitude) of the map piece. It is provided by RadMap.

__Example 1__ shows how the __MapLayer__ configuration is achieved with markup and __Example 2__ - via code-behind.

Here is an example that combines these parameters to request maps from opencyclemap.org:

`http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png`

And here is an example with openstreetmap.org:

`http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png`

You can find more details about Web Map Services the following public pages:

* [Web Map Service](https://en.wikipedia.org/wiki/Web_Map_Service)

* [Tile Map Service](https://en.wikipedia.org/wiki/Tile_Map_Service)

* [Open Source Geospatial Foundation](https://en.wikipedia.org/wiki/Open_Source_Geospatial_Foundation)

__Example 1__: Configuring __MapLayer__ with ASP.NET markup

````ASPNET
			<telerik:RadMap runat="server" ID="RadMap1">
				<LayersCollection>
					<telerik:MapLayer Type="Tile" 
						Subdomains="a,b,c"
						UrlTemplate="http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png">
					</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



__Example 2__: Programmatic configuration of the __MapLayer__



````ASPNET
			<telerik:RadMap runat="server" ID="RadMap1">
			</telerik:RadMap>
````
````C#
			MapLayer myLayer = new MapLayer();
			myLayer.Type = Telerik.Web.UI.Map.LayerType.Tile;
			myLayer.Subdomains = new string[] { "a", "b", "c" };
			myLayer.UrlTemplate = "http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png";
	
			RadMap1.LayersCollection.Add(myLayer);
````
````VB
			Dim myLayer As MapLayer = New MapLayer
			myLayer.Type = Telerik.Web.UI.Map.LayerType.Tile
			myLayer.Subdomains = New String() {"a", "b", "c"}
			myLayer.UrlTemplate = "http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png"
	
			RadMap1.LayersCollection.Add(myLayer)
````


## Controlling the Visual Appearance of the MapLayer

The __MapLayer__ appearance consists of two types of UI elements – __Attribution__ and __Tiles__.The attribution element is afooter-like box with predefined HTML content which is shown when a value is set to the __legacyBold__ attribute. You canchange the transparency of the tiles by using the __Opacity__ attribute.

In __Example 3__ you can see how these attributes can be used in the Map control.

__Example 3__: Setting attribution to the map and changing the opacity

````ASPNET
			<telerik:RadMap runat="server" ID="RadMap1">
				<LayersCollection>
					<telerik:MapLayer Type="Tile" 
						Subdomains="a,b,c"
						UrlTemplate="http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png" 
						Opacity="0.2" 
						Attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
					</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



## Using Bing Service with RadMap

The Telerik Map provides a simplified setup for	[Bing Map Tile](http://msdn.microsoft.com/en-us/library/ff428643.aspx) service.	This option will let you render a Bing-like map only by adding a __MapLayer__ with	__Type Bing__ and the __Key__ attribute set with the provided	[key in your Microsoft account](http://www.microsoft.com/maps/create-a-bing-maps-key.aspx).

In __Example 4__ you can examine a sample setup of a __RadMap__ with a Bing layer configured.

__Example 4__: Using Bing service for map layer

````ASPNET
			<telerik:RadMap runat="server" ID="RadMap1">
				<LayersCollection>
					<telerik:MapLayer Type="Bing"
						Key="SET A VALID KEY PROVIDED BY MICROSOFT">
					</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



# See Also

 * [Overview]({%slug map/getting-started/overview%})

 * [Markers]({%slug map/functionality/markers%})

 * [Tile Map Service Basics](https://en.wikipedia.org/wiki/Tile_Map_Service)

 * [Bing Map Tile Service](http://msdn.microsoft.com/en-us/library/ff428643.aspx)

 * [Open Source Geospatial Foundation](https://en.wikipedia.org/wiki/Open_Source_Geospatial_Foundation)
