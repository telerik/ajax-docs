---
title: Display custom shape layers using GeoJSON
description: Display custom shape layers using GeoJSON. Check it now!
type: how-to
page_title: Display custom map shape layers using GeoJSON. | RadMap
slug: map-display-custom-shape-layers-using-GeoJSON
position: 
tags: map, radmap, ajax, telerik, custom, shape, pollygon
ticketid: 1638945
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadMap for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

In this article you will see how to display custom shape layers using GeoJSON in RadMap.

![Polygon shape using GeoJSON](images/map-geojson-polygoin%20.png "Polygon shape using GeoJSON")

## Solution

- Add a `HiddenField` which will be used for storing the GeoJSON coordinates. Additioanlly, attach the [OnInitialize]({%slug map/client-side-programming %}) client-side event to the Map and employ an event handler to it.

````ASPX
<asp:HiddenField runat="server" ID="HiddenGeoJSON" />

<telerik:RadMap runat="server" ID="RadMap1" Zoom="2" Width="1000" Height="500">
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
        <telerik:MapLayer Type="Shape" ZIndex="999999">
        </telerik:MapLayer>
        <telerik:MapLayer Type="bing"
            UrlTemplate="http://a.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png">
        </telerik:MapLayer>
    </LayersCollection>
</telerik:RadMap>
````

- In the event handler, set the data source of the layer to the value of the hidden field. 

````JS
function OnInitialize(sender, args) {
    var originalOptions = args.get_options();
    var geoJSON = document.getElementById("<%=HiddenGeoJSON.ClientID%>").value;

    originalOptions.layers[0].dataSource = { 
        data: JSON.parse(geoJSON) 
    };

    args.set_options(originalOptions);
}
````

- In the code-behind, add the lattitude/longtitude coordinates for the points.

````C#
protected void Page_Load(object sender, EventArgs e)
{
    HiddenGeoJSON.Value = "[{\"type\": \"Polygon\",\"coordinates\": [[[20, 10], [40, 40], [10, 40], [10, 20], [20, 10]]]}]";
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        HiddenGeoJSON.Value = "[{""type"": ""Polygon"",""coordinates"": [[[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]]}]"
    End If
End Sub
````

    