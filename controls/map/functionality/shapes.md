---
title: Shapes
page_title: Shapes | UI for ASP.NET AJAX Documentation
description: Shapes
slug: map/functionality/shapes
tags: shapes
published: True
position: 3
---

# Shapes



This help article demonstrates how to bind, display and customize shapes with __RadMap__ fromJSON files in __GeoJSON__ format.

## Shape Layer Overview

For displaying shapes in a __RadMap__ layer, the __Type__ property of the__MapLayer__ should be set to __Shape:__

````ASPNET
			<telerik:RadMap runat="server" ID="RadMap1">
				<LayersCollection>
					<telerik:MapLayer Type="Shape"></telerik:MapLayer>
				</LayersCollection>
			</telerik:RadMap>
````



For binding __GeoJSON__ data to a __Shape__ layer, the __ClientDataSourceID__	property of the __MapLayer__ should be set to a properly configured __RadClientDataSource__	control, where the data could be retrieved from a local file or a web service.	Following is a simple example demonstrating such configuration:

````ASPNET
			<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
			     <DataSource>
			          <WebServiceDataSourceSettings ServiceType="GeoJSON">
			               <Select Url="Content/countries.json" DataType="JSON" />
			          </WebServiceDataSourceSettings>
			     </DataSource>
			</telerik:RadClientDataSource>
			    
			<telerik:RadMap runat="server" ID="RadMap1">
			     <LayersCollection>
			          <telerik:MapLayer ClientDataSourceID="RadClientDataSource1" Type="Shape"></telerik:MapLayer>
			     </LayersCollection>
			</telerik:RadMap>
````



* An online demo for binding to local JSON file with RadClientDataSource, where the __countries.json__ files from the	above example could be downloaded, is available at the following link:[RadMap – Shapes Layer](http://demos.telerik.com/aspnet-ajax/Map/Examples/Functionality/shapes-layer/defaultcs.aspx)*.

## Customizing Shapes

__RadMap__ allows you to customize all shapes in a layer by setting the __MapLayer__’s __StyleSettings__	and the __FillSettings__ and __StrokeSettings__ in particular. The __FillSettings__ could be used for	setting the fill __Color__ and __Opacity__ of the shapes, where the __StrokeSettings__ could specify	__Color__, __Opacity__, __Width__ and __DashType__.

In scenarios, where each shape in a layer should be styled differently, all of the above	fill and stroke settings could be set in any of the client-side events, where the shape is available as an argument.

Following is an example for handling the client-side __OnShapeCreated__ event and changing some fill and stroke properties of the shape:

````ASPNET
		<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
			<DataSource>
				<WebServiceDataSourceSettings ServiceType="GeoJSON">
					<Select Url="Content/countries.json" DataType="JSON" />
				</WebServiceDataSourceSettings>
			</DataSource>
		</telerik:RadClientDataSource>
		
		<telerik:RadMap runat="server" ID="RadMap1" Width="800px" Height="500px">
			<LayersCollection>
				<telerik:MapLayer ClientDataSourceID="RadClientDataSource1" Type="Shape"></telerik:MapLayer>
			</LayersCollection>
			<ClientEvents OnShapeCreated="shapeCreated" />
		</telerik:RadMap>
		
		<script type="text/javascript">
			function shapeCreated(e) {
				e.shape.options.set("fill.color", "#999999");
				e.shape.options.set("stroke.color", "#555555");
				e.shape.options.set("stroke.width", "2");
			}
		</script>
````



## GeoJSON specifics in the context of RadMap

__RadMap__ supports all __Geometry__ and __Feature Objects__, as well as the __Geometry__and __Feature Collections__ from the GeoJSON Specification (which could be found at	[http://geojson.org](http://geojson.org/geojson-spec.html#introduction)).

One thing to have in mind, when working with __Point__ objects, is that by default, each __Point__ object in the Shape	layer is automatically converted to a Marker. For preventing this behavior, the client-side __OnMarkerCreated__	event should be canceled, which will generate a __Circle__ object instead of a marker.

The Circle objects then could be customized within the client-side __OnShapeCreated__ event, where the radius could be altered.	Following is a simple example for such implementation:

````ASPNET
			<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
				<DataSource>
					<WebServiceDataSourceSettings ServiceType="GeoJSON">
						<Select Url="Content/points.json" DataType="JSON" />
					</WebServiceDataSourceSettings>
				</DataSource>
			</telerik:RadClientDataSource>
	
			<telerik:RadMap runat="server" ID="RadMap1" Width="800px" Height="500px">
				<LayersCollection>
					<telerik:MapLayer ClientDataSourceID="RadClientDataSource1" Type="Shape"></telerik:MapLayer>
				</LayersCollection>
				<ClientEvents OnMarkerCreated="markerCreated" OnShapeCreated="shapeCreated"/>
			</telerik:RadMap>
	
			<script type="text/javascript">
				//Preventing the Point objects to be represented as markers.
				function markerCreated(e) {
					e.preventDefault();
					//Circle object will be generated instead of the marker
				}
	
				//Customizing the Circle
				function shapeCreated(e) {
					//the radius will be available for altering only for Circle objects
					if (e.shape.geometry && e.shape.geometry.radius) {
						e.shape.options.set("stroke.color", "#999999");
						e.shape.options.set("fill.color", "#666666");
						e.shape.geometry.radius = 10;
					}
				}
			</script>
````



# See Also

 * [Client-side]({%slug map/data-binding/client-side%})

 * [Kendo Map documentation](http://docs.telerik.com/kendo-ui/api/dataviz/map)
