---
title: Scale Map to Markers
page_title: Scale Map to Markers - RadMap
description: Check our Web Forms article about How to programmatically scale RadMap to show all markers.
slug: map/how-to/scale-to-markers
previous_url: map/how-to/layer-clustering-on-zoom
tags: client-side,programming, scale, markers, view-port, view, map, zoom, cluster
published: True
position: 0
---


# Scale Map to Markers

You can see in this article how you can programmatically scale **RadMap** based on the **Markers** collection.

The approach showcased here is useful in data-binding scenarios where the map should be zoomed and centered based on the bound markers. 

There are two different approaches:
	- [For Server-side Data Binding](#approach-for-server-side-data-binding)
	- [For Client-side Data Binding](#approach-for-client-side-data-binding)


## Approach for Server-side Data Binding

Although **Example 1** shows a basic usage of the **MarkersCollection** tag, the approach to achieve the scale-to-markers functionality with [server-side data binding]({%slug map/data-binding/server-side%}) is the same:

1. Use the client-side [OnLoad]({%slug map/client-side-programming%}#client-side-events) event in order to start the scaling;
1. Get the markers from the `markers.items` collection of the Kendo widget.
1. Create an [kendo.dataviz.map.Extent](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/map/extent) based on the markers' location.
1. Pass the extent to the map (using the [extent()](https://docs.telerik.com/KENDO-UI/api/javascript/dataviz/ui/map#methods-extent) method) so that **RadMap** get centered to the [extent's bounds](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/map/extent).

>caption Example 1: Scale RadMap to Markers collection bound from the server.

````ASP.NET
<script type="text/javascript">
	function OnLoad(sender, args) {
		var $ = $telerik.$;
		var kendoMap = sender.get_kendoWidget();
		var Extent = kendo.dataviz.map.Extent;
		
		// Get the Markers collection
		var markers = kendoMap.markers.items;
		var markerLocations = [];

		// Extract the markers' locations.
		for (var i = 0; i < markers.length; i++) {
			markerLocations.push(markers[i].location());
		}

		// Create an extent based on the first marker
		var myExtent = Extent.create(markerLocations[0], markerLocations[0]);

		// Extend the extent with all markers
		myExtent.includeAll(markerLocations);

		// Center RadMap based on the created extent.
		kendoMap.extent(myExtent);

		// You may need to zoom out to show all markers properly. 
		// This can be furtehr adjusted based on your own preferences.
		kendoMap.zoom(kendoMap.zoom() - 1)
	}
</script>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
	<ClientEvents OnLoad="OnLoad" />
	<LayersCollection>
		<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
			UrlTemplate="https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
			Attribution="&copy; <a href='https://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
		</telerik:MapLayer>
	</LayersCollection>
	<MarkersCollection>
		<telerik:MapMarker Shape="PinTarget" Title="Palo Alto">
			<TooltipSettings Content="US - Palo Alto, CA"></TooltipSettings>
			<LocationSettings Latitude="37.444610" Longitude="-122.163283" />
		</telerik:MapMarker>

		<telerik:MapMarker Shape="PinTarget" Title="Boston">
			<TooltipSettings Content="US - Boston, MA"></TooltipSettings>
			<LocationSettings Latitude="42.375067" Longitude="-71.272233" />
		</telerik:MapMarker>

		 <telerik:MapMarker Shape="PinTarget" Title="Austin">
			<TooltipSettings Content="US - Austin, TX"></TooltipSettings>
			<LocationSettings Latitude="30.268162" Longitude="-97.744873" />
		</telerik:MapMarker>

		<telerik:MapMarker Shape="PinTarget" Title="Sydney">
			<TooltipSettings Content="Australia - Sydney"></TooltipSettings>
			<LocationSettings Latitude="-33.838707" Longitude="151.207959" />
		</telerik:MapMarker>

		<telerik:MapMarker Shape="PinTarget" Title="Gurgaon">
			<TooltipSettings Content="India - Gurgaon"></TooltipSettings>
			<LocationSettings Latitude="28.410139" Longitude="77.042439" />
		</telerik:MapMarker>

		<telerik:MapMarker Shape="PinTarget" Title="London">
			<TooltipSettings Content="UK - London"></TooltipSettings>
			<LocationSettings Latitude="51.515986" Longitude="-0.085798" />
		</telerik:MapMarker>

		<telerik:MapMarker Shape="PinTarget" Title="Copenhagen">
			<TooltipSettings Content="Denmark - Copenhagen"></TooltipSettings>
			<LocationSettings Latitude="55.670312" Longitude="12.538266" />
		</telerik:MapMarker>

		<telerik:MapMarker Shape="PinTarget" Title="Munich">
			<TooltipSettings Content="Germany - Munich"></TooltipSettings>
			<LocationSettings Latitude="48.117227" Longitude="11.601990" />
		</telerik:MapMarker>

		<telerik:MapMarker Shape="PinTarget" Title="Sofia">
			<TooltipSettings Content="Bulgaria - Sofia"></TooltipSettings>
			<LocationSettings Latitude="42.650613" Longitude="23.379025" />
		</telerik:MapMarker>
	</MarkersCollection>
</telerik:RadMap>
````

## Approach for Client-side Data Binding

**Example 2** follows a [client-side data binding]({%slug map/data-binding/server-side%}) technique by integrating the **RadClientDataSource** control. (You can find the used .json file in the [Markers](https://demos.telerik.com/aspnet-ajax/map/examples/functionality/markers/defaultcs.aspx) demo.) In order to implement the scale-to-markers functionality:

1. Use the client-side [OnLoad]({%slug map/client-side-programming%}#client-side-events) event in order to start the scaling.
1. Use the markers' layer to get the bound markers by using the `layers[index].items` collection. (Note that you should use a polling technique because data is requested via AJAX).
1. Create a [kendo.dataviz.map.Extent](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/map/extent) based on the markers' location. 
1. Pass the extent to the map (using the [extent()](https://docs.telerik.com/KENDO-UI/api/javascript/dataviz/ui/map#methods-extent) method) so that **RadMap** get centered to the [extent's bounds](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/map/extent).

````ASP.NET 
<script type="text/javascript">
    function OnLoad() {
        var kendoMap = $find("<%= RadMap1.ClientID %>").get_kendoWidget();

        // Get the Markers collection by polling
        var interval = window.setInterval(function () {
            var markers = kendoMap.layers[1].items;
            if (markers.length > 0) {
                window.clearInterval(interval);
                startScaling(kendoMap, markers);
            }
        }, 10);
    }

    function startScaling(map, markers) {
        var $ = $telerik.$;
        var Extent = kendo.dataviz.map.Extent;

        var markerLocations = [];
        
        // Extract the markers' locations.
        for (var i = 0; i < markers.length; i++) {
            markerLocations.push(markers[i].location());
        }
        // Create an extent based on the first marker
        var myExtent = Extent.create(markerLocations[0], markerLocations[0]);

        // Extend the extent with all markers
        myExtent.includeAll(markerLocations);

        // Center RadMap based on the created extent.
        map.extent(myExtent);

        // You may need to zoom out to show all markers properly. 
        // This can be further adjusted based on your own preferences.
        map.zoom(map.zoom() - 1);
    }
</script>

<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
    <DataSource>
        <WebServiceDataSourceSettings>
            <Select DataType="JSON" Url="/JSON/MarkersData.json" />
        </WebServiceDataSourceSettings>
    </DataSource>
</telerik:RadClientDataSource>

<telerik:RadMap RenderMode="Lightweight" runat="server" ID="RadMap1">
    <ClientEvents OnLoad="OnLoad" />
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

## See Also

 * [Markers]({%slug map/functionality/markers%})

 * [Client-side Programming]({%slug map/client-side-programming%})

 * [Data Binding - Server-side]({%slug map/data-binding/server-side%})

 * [Data Binding - Client-side]({%slug map/data-binding/client-side%})

 * [Kendo Map API](https://docs.telerik.com/KENDO-UI/api/javascript/dataviz/ui/map)

 * [kendo.dataviz.map.Extent](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/map/extent)
