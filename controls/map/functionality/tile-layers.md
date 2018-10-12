---
title: Tile Layers
page_title: Tile Layers | RadMap for ASP.NET AJAX Documentation
description: Tile Layers
slug: map/functionality/tile-layers
tags: tile,layers
published: True
position: 1
---

# Tile Layers

In this article you will find detailed information about the **Tile** and **Bing**	layer types of the **RadMap** control.

The images used to render the actual map are requested from third-party services that conform to the [Tile Map Service standard](https://en.wikipedia.org/wiki/Tile_Map_Service) and support the [WGS 84 projection standards](https://en.wikipedia.org/wiki/World_Geodetic_System). The built-in configuration options of the **MapLayer** allow you to set an URL template	via the **UrlTemplate** property that will access the service and provide the needed images.

>note Licenses and Official Author rights to the Tile Layer Images are determined by the used Web Map Service. The **Telerik Map** only provides an UI control that allows you to setup and place a map in a web application, built via ASP.NET AJAX techniques. You need to provide proper attribution with the correct copyright notice and, if needed, establish an account with the map owner to ensure unlimited/fast access.

## Configuration of the MapLayer

To generate a map, you must first configure the service it is going to use. The most important option is the **UrlTemplate** that defines the provider you are going to use. It is built by combining the following parameters RadMap provides:

* **SubDomain** — the Subdomains property lets you configure an array of strings that are placed in the subdomain of the URL that is generated. By having more than one, you can let the browser have more active requests for map pieces at any given time, because usually browsers limit the maximum number of active requests per domain. This setting is optional.

* **URL to the service** — this is the actual site that provides maps. You can examine some URL examples listed below.

* **Zoom level** — controls the scale of the map. The larger the value, the larger the scale.

* **X coordinate** — the X coordinate (longitude) for the map piece. It is provided by RadMap.

* **Y coordinate** — the Y coordinate (latitude) of the map piece. It is provided by RadMap.

* **Culture** — The culture to be used for the bing map tiles.

* **TileSize** — The size of the image tile in pixels.


**Example 1** shows how the **MapLayer** configuration is achieved with markup and **Example 2** - via code-behind.

Here is an example that combines these parameters to request maps from opencyclemap.org:

`http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png`

And here is an example with openstreetmap.org:

`https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png`

>note If your site is running under HTTPS, ensure that the same protocol is used for the map tile service and that it is supported by the provider.

You can find more details about Web Map Services the following public pages:

* [Web Map Service](https://en.wikipedia.org/wiki/Web_Map_Service)

* [Tile Map Service](https://en.wikipedia.org/wiki/Tile_Map_Service)

* [Open Source Geospatial Foundation](https://en.wikipedia.org/wiki/Open_Source_Geospatial_Foundation)

>caption **Example 1**: Configuring **MapLayer** with ASP.NET markup.

````ASP.NET
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
	<LayersCollection>
		<telerik:MapLayer Type="Tile" 
			Subdomains="a,b,c"
			UrlTemplate="http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png">
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
````

>caption **Example 2**: Programmatic configuration of the **MapLayer**.

````ASP.NET
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
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

The **MapLayer** appearance consists of two types of UI elements – **Attribution** and **Tiles**. The attribution element is a footer-like box with predefined HTML content which is shown when a value is set to the **Attribution** property. You can change the transparency of the tiles by using the **Opacity** attribute.

In **Example 3** you can see how these attributes can be used in the Map control.

>caption **Example 3**: Setting attribution to the map and changing the opacity.

````ASP.NET
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
	<LayersCollection>
		<telerik:MapLayer Type="Tile" 
			Subdomains="a,b,c"
			UrlTemplate="http://#= subdomain #.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png" 
			Opacity="0.2" 
			Attribution="&copy; <a href='https://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
````

## Using Bing Service with RadMap

The Telerik Map provides a simplified setup for	[Bing Map Tile](https://msdn.microsoft.com/en-us/library/ff428643.aspx) service.	This option will let you render a Bing-like map only by adding a **MapLayer** with	**Type Bing** and the **Key** attribute set with the provided	[key in your Microsoft account](https://www.microsoft.com/maps/create-a-bing-maps-key.aspx).

In **Example 4** you can examine a sample setup of a **RadMap** with a Bing layer configured.

>caption **Example 4**: Using Bing service for map layer

````ASP.NET
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
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

 * [Bing Map Tile Service](https://msdn.microsoft.com/en-us/library/ff428643.aspx)

 * [Open Source Geospatial Foundation](https://en.wikipedia.org/wiki/Open_Source_Geospatial_Foundation)
