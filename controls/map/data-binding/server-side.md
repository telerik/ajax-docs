---
title: Server-side
page_title: Server-side | RadMap for ASP.NET AJAX Documentation
description: Server-side
slug: map/data-binding/server-side
tags: server-side
published: True
position: 1
---

# Server-side

The markers and layers of the **ASP.NET AJAX Map** control can be bound both [client-side]({%slug map/data-binding/client-side%}) client-side and server-side, as the way to achieve the later is described in this article.	In **Example 1** you will see how to bind RadMap with a server-side collection, as the result from this sample is shown in **Figure 1**.	You can also use the RadMap's **OnItemCreared** and **OnItemDataBound** server-side events to additionally manipulate the data.

**RadMap** can use the standard data sources for binding an ASP.NET control:

* Declarative ASP.NET data sources (SqlDatasource, ObjectDataSource, LinqDataSource, etc.)

* Server-side collections that implement the **IEnumerable** interface.

>caption **Figure 1**: Binding layers and markers in RadMap to a collection of custom objects.

![map-server-side-binding](images/map-server-side-binding.png)

## Binding Markers

Similar to setting a data source for an ASP.NET control, you should either use the **DataSourceID** property when data binding markers declaratively or **DataSource** when the data source of the control is set on the server (such is the case in **Example 1**).

The data source should have columns for each of the map fields that you want to specify. For example, if you want to pull the title of the markers from the data source, this will require a separate column that contains the titles of each marker.

The columns of the data source are attached to their corresponding data fields in the markers via the properties with the structure **Data[*field name*]Name** in **RadMap > DataBindings > MarkerBinding**. For example: **DataShapeField**, **DataTitleField**, etc. You can find the full set of the MapMarker object's properties in the [Server-Side API of RadMap](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_radmap.html).

Binding the **Marker**'s **Shape** value can enable you to create an optional, custom look of the bound markers. You can examine the [Customizing Markers in RadMap]({%slug map/appearance-and-styling/customizing-markers-in-radmap%}) article.

## Binding Layers

Following the same logic, when binding layers you should use either the **LayersDataSourceID** property when data binding layers declaratively or **LayersDataSource** when the data source of the control is set on the server (you can refer **Example 1** for a sample configuration).

The columns of the data source here are also attached to their corresponding data fields in the layers via the properties with the structure **Data[*field name*]Name** in **RadMap > DataBindings > LayerBinding**. For example: **DataTypeField**, **DataUrlTemplateField**, etc. You can find the full set of the MapLayer object's properties in the [Server-Side API of RadMap](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_radmap.html).

## Examples

In the example below you will see a way to databind the layers and the markers of a RadMap control to a server-side object. The result of this code is shown in **Figure 1**.

>caption **Example 1**: Data binding layers and markers in a map to a collection of custom objects.

````ASP.NET
<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1" Zoom="3" Width="800" Height="400">
	<CenterSettings Latitude="40" Longitude="30" />
	<DataBindings>
		<LayerBinding
			DataTypeField="type"
			DataUrlTemplateField="urlTemplate"
			DataAttributionField="attribution"
			DataSubdomainsField="subdomains"
			DataMaxZoomField="maxZoom"
			DataMinZoomField="minZoom"
			DataOpacityField="opacity" />
		<MarkerBinding
			DataShapeField="shape"
			DataTitleField="title"
			DataLocationLatitudeField="locationLatitude"
			DataLocationLongitudeField="locationLongitude"
			DataTooltipTemplateField="tooltipTemplate" />
	</DataBindings>
</telerik:RadMap>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		RadMap1.LayersDataSource = GetLayers();
		RadMap1.DataSource = GetMarkers();
		RadMap1.DataBind();
	}
}

private IEnumerable GetLayers()
{
	return new[] {
		new {type=Telerik.Web.UI.Map.LayerType.Tile,
			urlTemplate="http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
			attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.",
			subdomains="a,b,c",
			maxZoom="3",
			minZoom="1",
			opacity="1"
		}
	};
}

private IEnumerable GetMarkers()
{
	return new[] {
		new {shape="pinTarget", title="Sofia",   locationLatitude=42.650613, locationLongitude=23.379025, tooltipTemplate="#= location.lat # #= marker.options.title #"},
		new {shape="pinTarget", title="Munich",  locationLatitude=48.117227, locationLongitude=11.601990, tooltipTemplate="#= location.lat # #= marker.options.title #"},
		new {shape="pinTarget", title="London",  locationLatitude=51.515986, locationLongitude=-0.085798, tooltipTemplate="#= location.lat # #= marker.options.title #"},
		new {shape="pinTarget", title="Gurgaon", locationLatitude=28.410139, locationLongitude=77.042439, tooltipTemplate="#= location.lat # #= marker.options.title #"}
	};
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	If Not IsPostBack Then
		RadMap1.LayersDataSource = GetLayers()
		RadMap1.DataSource = GetMarkers()
		RadMap1.DataBind()
	End If
End Sub

Private Function GetLayers() As IEnumerable
	Return New Object() {New With { _
		.type = Telerik.Web.UI.Map.LayerType.Tile, _
		.urlTemplate = "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png", _
		.attribution = "&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.", _
		.subdomains = "a,b,c", _
		.maxZoom = "3", _
		.minZoom = "1", _
		.opacity = "1" _
	}}
End Function

Private Function GetMarkers() As IEnumerable
	Return New Object() {
		New With {.shape = "pinTarget", .title = "Sofia", .locationLatitude = 42.650613, .locationLongitude = 23.379025, .tooltipTemplate = "#= location.lat # #= marker.options.title #"},
		New With {.shape = "pinTarget", .title = "Munich", .locationLatitude = 48.117227, .locationLongitude = 11.60199, .tooltipTemplate = "#= location.lat # #= marker.options.title #"},
		New With {.shape = "pinTarget", .title = "London", .locationLatitude = 51.515986, .locationLongitude = -0.085798, .tooltipTemplate = "#= location.lat # #= marker.options.title #"},
		New With {.shape = "pinTarget", .title = "Gurgaon", .locationLatitude = 28.410139, .locationLongitude = 77.042439, .tooltipTemplate = "#= location.lat # #= marker.options.title #"}
	}
End Function
````

# See Also

 * [RadMap Server-Side API](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_radmap.html)
