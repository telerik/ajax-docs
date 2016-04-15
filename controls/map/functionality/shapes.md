---
title: Shapes
page_title: Shapes | RadMap for ASP.NET AJAX Documentation
description: Shapes
slug: map/functionality/shapes
tags: shapes
published: True
position: 3
---

# Shapes

This help article demonstrates how to bind, display and customize shapes with **RadMap** from JSON files in **GeoJSON** format.

## Shape Layer Overview

For displaying shapes in a **RadMap** layer, the **Type** property of the **MapLayer** should be set to **Shape:**

````ASP.NET
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
	<LayersCollection>
		<telerik:MapLayer Type="Shape"></telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
````

For binding **GeoJSON** data to a **Shape** layer, the **ClientDataSourceID** property of the **MapLayer** should be set to a properly configured **RadClientDataSource**	control, where the data could be retrieved from a local file or a web service.	Following is a simple example demonstrating such configuration:

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
	 <DataSource>
		  <WebServiceDataSourceSettings ServiceType="GeoJSON">
			   <Select Url="Content/countries.json" DataType="JSON" />
		  </WebServiceDataSourceSettings>
	 </DataSource>
</telerik:RadClientDataSource>
	
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
	 <LayersCollection>
		  <telerik:MapLayer ClientDataSourceID="RadClientDataSource1" Type="Shape"></telerik:MapLayer>
	 </LayersCollection>
</telerik:RadMap>
````

*An online demo for binding to local JSON file with RadClientDataSource, where the countries.json files from the above example could be downloaded, is available at the following link: [RadMap – Shapes Layer](http://demos.telerik.com/aspnet-ajax/Map/Examples/Functionality/shapes-layer/defaultcs.aspx).*

## Customizing Shapes

**RadMap** allows you to customize all shapes in a layer by setting the **MapLayer**’s **StyleSettings** and the **FillSettings** and **StrokeSettings** in particular. The **FillSettings** could be used for	setting the fill **Color** and **Opacity** of the shapes, where the **StrokeSettings** could specify **Color**, **Opacity**, **Width** and **DashType**.

In scenarios, where each shape in a layer should be styled differently, all of the above fill and stroke settings could be set in any of the client-side events, where the shape is available as an argument.

Following is an example for handling the client-side **OnShapeCreated** event and changing some fill and stroke properties of the shape:

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
	<DataSource>
		<WebServiceDataSourceSettings ServiceType="GeoJSON">
			<Select Url="Content/countries.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Width="800px" Height="500px">
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

**RadMap** supports all **Geometry** and **Feature Objects**, as well as the **Geometry** and **Feature Collections** from the GeoJSON Specification (which could be found at	[http://geojson.org](http://geojson.org/geojson-spec.html#introduction)).

One thing to have in mind, when working with **Point** objects, is that by default, each **Point** object in the Shape	layer is automatically converted to a Marker. For preventing this behavior, the client-side **OnMarkerCreated**	event should be canceled, which will generate a **Circle** object instead of a marker.

The Circle objects then could be customized within the client-side **OnShapeCreated** event, where the radius could be altered.	Following is a simple example for such implementation:

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
	<DataSource>
		<WebServiceDataSourceSettings ServiceType="GeoJSON">
			<Select Url="Content/points.json" DataType="JSON" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Width="800px" Height="500px">
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
		if (e.shape._geometry && e.shape._geometry.setRadius) {
			e.shape.options.set("stroke.color", "#999999");
			e.shape.options.set("fill.color", "#666666");
			e.shape._geometry.setRadius(10);
		}
	}
</script>
````

# See Also

 * [Client-side]({%slug map/data-binding/client-side%})

 * [Kendo Map documentation](http://docs.telerik.com/kendo-ui/api/dataviz/map)
