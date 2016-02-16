---
title: Scale Map to Markers
page_title: Scale Map to Markers | RadMap for ASP.NET AJAX Documentation
description: How to programmatically scale RadMap to show all markers.
slug: map/how-to/scale-to-markers
tags: client-side,programming, scale, markers, view-port, view, map, zoom
published: True
position: 0
---


# Scale Map to Markers

You can see in this article how you can programmatically scale **RadMap** based on the **Markers** collection.

The approach showcased here is useful in data-binding scenarios, where the map should be zoomed and centered based on the bound markers. 

>caption Example 1: Scale RadMap to Markers collection.

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

<telerik:RadMap runat="server" ID="RadMap1">
	<ClientEvents OnLoad="OnLoad" />
	<CenterSettings Latitude="23" Longitude="10" />
	<LayersCollection>
		<telerik:MapLayer Type="Tile" Subdomains="a,b,c"
			UrlTemplate="http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png"
			Attribution="&copy; <a href='http://osm.org/copyright' title='OpenStreetMap contributors' target='_blank'>OpenStreetMap contributors</a>.">
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

## See Also

 * [Markers]({%slug map/functionality/markers%})

 * [Client-side Programming]({%slug map/client-side-programming%})

 * [Data Binding - Server-side]({%slug map/data-binding/server-side%})

 * [Data Binding - Client-side]({%slug map/data-binding/client-side%})
