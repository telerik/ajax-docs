---
title: Client-side
page_title: Client-side - RadMap
description: Check our Web Forms article about Client-side.
slug: map/data-binding/client-side
tags: client-side
published: True
position: 0
---

# Client-side

This article explains how to data bind [Shape]({%slug map/functionality/shapes%}) and [Marker]({%slug map/functionality/markers%}) layers of a **RadMap** control to a client-side data source.

## Getting Started with Client-side Data Binding

The **Shape** and **Marker** layers are created by using different Map Layers in the RadMap's **LayersCollection**. They must have the proper **Type** property (**Shape** or **Marker**) set.

Data binding the **MapLayer** can be achieved by using:

* a **RadClientDataSource** control by setting its **ID** to the **MapLayer’s ClientDataSourceID** property. You can examine **Example 1** and **Example 3** or a live example demonstrating client-side data binding of shapes and markers is available in the [Client-side Data Binding](https://demos.telerik.com/aspnet-ajax/map/examples/data-binding/client-side-data-binding/defaultcs.aspx) demo;

* the client-side **OnInitialize** event to set a JSON literal array to the appropriate options of the **RadMap**. You can examine **Example 2** and **Example 4**.

## Data Binding a Shape Layer

Binding a **Shape** layer requires using data built according to the [GeoJSON specifications](https://geojson.org/geojson-spec.html). The **RadMap** provides an out of the box functionality to render the shapes on the layer according to the provided data.**Example 1** demonstrates how to use a **RadClientDataSource** control to get the needed data and **Example 2** shows how you can use a simple array that you already have available.

To use the **RadClientDataSource** control for data binding you should configure it to request the appropriate data. It is important to set its **ServiceType** property to **GeoJSON**. Setting the **RadClientDataSource** server ID to the **ClientDataSourceID** property of the **MapLayer** is enough to configure the layer data binding. Optionally, you can further modify the shape appearance via the **ShapeSettings** property of the **LayerDefaultsSettings** tag.

In **Example 1** you can examine how the **Shape** layer is bound to a .json file. The used file is provided in the	[Shapes Layer](https://demos.telerik.com/aspnet-ajax/map/examples/functionality/shapes-layer/defaultcs.aspx) demo of the **RadMap**.

**Example 1**: Using **RadClientDataSource** control to bind a **Shape** layer.

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
	  <DataSource>
		   <WebServiceDataSourceSettings ServiceType="GeoJSON">
				<Select Url="https://demos.telerik.com/aspnet-ajax/map/examples/functionality/shapes-layer/Content/countries.json" DataType="JSON" />
		   </WebServiceDataSourceSettings>
	  </DataSource>
 </telerik:RadClientDataSource>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Zoom="3" Width="940" Height="500">
	<LayersCollection>
			<telerik:MapLayer Type="Shape" ClientDataSourceID="RadClientDataSource1">
			</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
````

In **Example 2** you can see how to use a simple data binding approach with an array as a data source.

**Example 2**: Using the **OnInitialize** event to bind **Shape** layer to an array of JSON literals.

````ASP.NET
<script type="text/javascript">
	var shapeData = [{
		"type": "Polygon",
		"coordinates": [
			[[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
		]
	}];


	function OnInitialize(sender, args) {
		var originalOptions = args.get_options();

		originalOptions.layers[0].dataSource = { data: shapeData };

		args.set_options(originalOptions);
	}
</script>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Zoom="2" Width="500" Height="200"> 
	<ClientEvents OnInitialize="OnInitialize" />
	<CenterSettings Latitude="30" Longitude="10" />
	<LayerDefaultsSettings>
		<ShapeSettings>
			<StyleSettings>
				<FillSettings Color="green" />
				<StrokeSettings Color="black" Width="2" />
			</StyleSettings>
		</ShapeSettings>
	</LayerDefaultsSettings>
	<LayersCollection>
		<telerik:MapLayer Type="Shape">
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
````

## Data Binding a Marker Layer

To bind a **Marker** layer to a **RadClientDataSource** you need to set its ID to the **MapLayer's ClientDataSourceID** property and use the **LocationField** attribute to specify the data field that represents the latitude and longitude position of the marker. The location must be an array of numbers in the format - **[ latitude, longitude ]**. You can see this approach in **Example 3**. You can find the used .json file in the[Markers](https://demos.telerik.com/aspnet-ajax/map/examples/functionality/markers/defaultcs.aspx) live demo.

**Example 3**: Using **RadClientDataSource** control to bind a **Marker** layer.

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
	<DataSource>
		<WebServiceDataSourceSettings>
			<Select DataType="JSON" Url="https://demos.telerik.com/aspnet-ajax/map/examples/functionality/markers/JSON/MarkersData.json" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Zoom="2" Width="940" Height="500">
	<CenterSettings Latitude="23" Longitude="10" />
	<LayersCollection>
		<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
				UrlTemplate="https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
				Attribution="&copy; <a href='https://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
		</telerik:MapLayer>
		<telerik:MapLayer Type="Marker" Shape="PinTarget" ClientDataSourceID="RadClientDataSource1" LocationField="location">
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
````

In **Example 4** you can see how to use simple data binding with a **Marker** layer.

**Example 4**: Using the **OnInitialize** event to bind **Marker** layer to an array of JSON literals.

````ASP.NET
<script type="text/javascript">
	var markerData = [{
		"location": [51.506421, -0.127215],
		"city": "London"
	}, {
		"location": [51.762152, -1.258430],
		"city": "Oxford"
	}];


	function OnInitialize(sender, args) {
		var originalOptions = args.get_options();

		originalOptions.layers[1].dataSource = { data: markerData };

		args.set_options(originalOptions);
	}
</script>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Zoom="7" Width="500" Height="200">
	<ClientEvents OnInitialize="OnInitialize"/> 
	<CenterSettings Latitude="51.506421" Longitude="-0.127215" />
	<LayersCollection>
		<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
			UrlTemplate="http://#= subdomain #.tile2.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png"
			Attribution="&copy; <a href='https://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
		</telerik:MapLayer>
		<telerik:MapLayer type="Marker" Shape="pinTarget">
			<TooltipSettings AutoHide="false" Template="#= marker.dataItem.city # <br/> #=  location.lat #, #=  location.lng #"></TooltipSettings>
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
````

# See Also

 * [Markers]({%slug map/functionality/markers%})

 * [Shapes]({%slug map/functionality/shapes%})

 * [Client-side Programming]({%slug map/client-side-programming%})

 * [Server-side Programming]({%slug map/server-side-programming%})

 * [Live demo: Client-side Data Binding](https://demos.telerik.com/aspnet-ajax/map/examples/data-binding/client-side-data-binding/defaultcs.aspx)

 * [Live demo: Shapes Layer](https://demos.telerik.com/aspnet-ajax/map/examples/functionality/shapes-layer/defaultcs.aspx)

 * [Live demo: Markers](https://demos.telerik.com/aspnet-ajax/map/examples/functionality/markers/defaultcs.aspx)

 * [Kendo Map Documentation](https://docs.telerik.com/kendo-ui/api/dataviz/map)
