---
title: Client-side
page_title: Client-side | UI for ASP.NET AJAX Documentation
description: Client-side
slug: map/data-binding/client-side
tags: client-side
published: True
position: 0
---

# Client-side



This article explains how to data bind[Shape]({%slug map/functionality/shapes%}) and [Marker]({%slug map/functionality/markers%})layers of a __RadMap__ control to a client-side data source.

## Getting Started with Client-side Data Binding

The __Shape__ and __Marker__ layers are created by using different Map Layers in the RadMap's __LayersCollection__.They must have the proper __Type__ property (__Shape__ or __Marker__) set.

Data binding the __MapLayer__ can be achieved by using:

* a __RadClientDataSource__ control by setting its __ID__ to the __MapLayer’s ClientDataSourceID__ property.You can examine __Example 1__ and __Example 3__ or a live example demonstrating client-side data binding of shapes and markers is available in the [Client-side Data Binding](http://demos.telerik.com/aspnet-ajax/map/examples/data-binding/client-side-data-binding/defaultcs.aspx) demo;

* the client-side __OnInitialize__ event to set a JSON literal array to the appropriate options of the __RadMap__. You can examine __Example 2__ and __Example 4__.

## Data Binding a Shape Layer

Binding a __Shape__ layer requires using data built according to the[GeoJSON specifications](http://geojson.org/geojson-spec.html). The __RadMap__ provides an out of the box functionality to render the shapes on the layer according to the provided data.__Example 1__ demonstrates how to use a __RadClientDataSource__ control to get the needed data and __Example 2__	shows how you can use a simple array that you already have available.

To use the __RadClientDataSource__ control for data binding you should configure it to request the appropriate data. It is important to set its __ServiceType__ property to __GeoJSON__.Setting the __RadClientDataSource__ server ID to the __ClientDataSourceID__ property of the __MapLayer__ is enough to configure the layer data binding.Optionally, you can further modify the shape appearance via the __ShapeSettings__ property of the __LayerDefaultsSettings__ tag.

In __Example 1__ you can examine how the __Shape__ layer is bound to a .json file. The used file is provided in the	[Shapes Layer](http://demos.telerik.com/aspnet-ajax/map/examples/functionality/shapes-layer/defaultcs.aspx) demo of the __RadMap__.

__Example 1__: Using __RadClientDataSource__ control to bind a __Shape__ layer

````ASPNET
			<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
				  <DataSource>
					   <WebServiceDataSourceSettings ServiceType="GeoJSON">
							<Select Url="http://demos.telerik.com/aspnet-ajax/map/examples/functionality/shapes-layer/Content/countries.json" DataType="JSON" />
					   </WebServiceDataSourceSettings>
				  </DataSource>
			 </telerik:RadClientDataSource>
	
			<telerik:RadMap runat="server" ID="RadMap1" Zoom="3" Width="940" Height="500">
				<LayersCollection>
						<telerik:MapLayer Type="Shape" ClientDataSourceID="RadClientDataSource1">
						</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



In __Example 2__ you can see how to use a simple data binding approach with an array as a data source.

__Example 2__: Using the __OnInitialize__ event to bind __Shape__ layer to an array of JSON literals

````ASPNET
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
	
			<telerik:RadMap runat="server" ID="RadMap1" Zoom="2" Width="500" Height="200"> 
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

To bind a __Marker__ layer to a __RadClientDataSource__ you need to set its ID to the __MapLayer's ClientDataSourceID__ propertyand use the __LocationField__ attribute to specify the data field that represents the latitude and longitude position of the marker. The location must be an array of numbers in the format - __[ latitude, longitude ]__.You can see this approach in __Example 3__.You can find the used .json file in the[Markers](http://demos.telerik.com/aspnet-ajax/map/examples/functionality/markers/defaultcs.aspx) live demo.

__Example 3__: Using __RadClientDataSource__ control to bind a __Marker__ layer

````ASPNET
			<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
				<DataSource>
					<WebServiceDataSourceSettings>
						<Select DataType="JSON" Url="http://demos.telerik.com/aspnet-ajax/map/examples/functionality/markers/JSON/MarkersData.json" />
					</WebServiceDataSourceSettings>
				</DataSource>
			</telerik:RadClientDataSource>
	
			<telerik:RadMap runat="server" ID="RadMap1" Zoom="2" Width="940" Height="500">
				<CenterSettings Latitude="23" Longitude="10" />
				<LayersCollection>
					<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
							UrlTemplate="http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
							Attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
					</telerik:MapLayer>
					<telerik:MapLayer Type="Marker" Shape="PinTarget" ClientDataSourceID="RadClientDataSource1" LocationField="location">
					</telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



In __Example 4__ you can see how to use simple data binding with a __Marker__ layer.

__Example 4__: Using the __OnInitialize__ event to bind __Marker__ layer to an array of JSON literals

````ASPNET
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
	
			<telerik:RadMap runat="server" ID="RadMap1" Zoom="7" Width="500" Height="200">
				<ClientEvents OnInitialize="OnInitialize"/> 
				<CenterSettings Latitude="51.506421" Longitude="-0.127215" />
				<LayersCollection>
					<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
						UrlTemplate="http://#= subdomain #.tile2.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png"
						Attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
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

 * [Live demo: Client-side Data Binding](http://demos.telerik.com/aspnet-ajax/map/examples/data-binding/client-side-data-binding/defaultcs.aspx)

 * [Live demo: Shapes Layer](http://demos.telerik.com/aspnet-ajax/map/examples/functionality/shapes-layer/defaultcs.aspx)

 * [Live demo: Markers](http://demos.telerik.com/aspnet-ajax/map/examples/functionality/markers/defaultcs.aspx)

 * [Kendo Map Documentation](http://docs.telerik.com/kendo-ui/api/dataviz/map)
