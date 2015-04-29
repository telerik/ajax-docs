---
title: Client-side Programming
page_title: Client-side Programming | RadMap for ASP.NET AJAX Documentation
description: Client-side Programming
slug: map/client-side-programming
tags: client-side,programming
published: True
position: 8
---

# Client-side Programming

This article explains how to reference and use the **RadMap** client-side object (**Examples 1-3**) and	its events (**Example 4**).

**RadMap** for ASP.NET AJAX is based on the [Kendo Map Widget](http://demos.telerik.com/kendo-ui/map/index). Thus, it exposes the [client-side API and methods offered by the widget](http://docs.telerik.com/kendo-ui/api/dataviz/map) and mainly provides a wrapper and API for working with the map	on the server (programmatic creation, data binding, declaring in the markup).

## Get Client-side Object Reference

There are two ways to get a reference to the Kendo Map widget in order to use its API:

* Use the **get_kendoWidget** method the **RadMap** client-side object exposes. You can get the **RadMap** object through the **$find()** MS AJAX method. 

	>caption **Example 1:** Get the Kendo Map object through the get_kendoWidget method:

	**JavaScript**

		var radMapObject = $find("<%=RadMap1.ClientID %>"); //the standard script control object
		var kendoMap = radMapObject.get_kendoWidget(); //the Kendo widget

* Use the standard Kendo approach for getting the widget through the data-attributes of the DOM element:

	>caption **Example 2:** Get the Kendo Map object through the data attribute of the DOM object:

	**JavaScript**

		var kendoMap = $telerik.$("#<%=RadMap1.ClientID %>").data("kendoMap");//the jQuery selector must get the RadMap wrapping div element

>note  **RadMap** is an IScriptControl based on MS AJAX and so it instantiates its client-side object (i.e., the Kendo Map)	during the`Sys.Application.Init`event. This means that the earliest event in which you can reference the map widget is **Sys.Application.Load** .

## Client-side Methods

**RadMap** for ASP.NET AJAX, through the Kendo widget, exposes the [Kendo Map client-side methods](http://docs.telerik.com/kendo-ui/api/dataviz/map#methods). You can also find an example of the basics in the [RadMap Client-side API online demo](http://demos.telerik.com/aspnet-ajax/map/examples/client-side-api/defaultcs.aspx).

>caption **Example 3**: Center the map on a pair of coordinates:

````ASP.NET
<telerik:RadMap runat="server" ID="RadMap1" Zoom="6" Width="500" Height="500">
	<CenterSettings Latitude="51.525619" Longitude="-0.111802" />
	<LayersCollection>
		<telerik:MapLayer Type="Tile"
			UrlTemplate="http://a.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png">
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
<asp:Button ID="Button1" Text="Center the Map on 30 degrees north and 20 degrees east" OnClientClick="centerMap(); return false;" runat="server" />
<script type="text/javascript">
	function centerMap() {
		var map = $find("<%=RadMap1.ClientID%>").get_kendoWidget();
		var latitude = 30; //this can be a float number. Negative values are south of the equator
		var longitude = 20; //this can be a float number. Negative values are west of the Greenwich meridian
		map.center([latitude, longitude]); //a simple array is used as argument
	}
</script>
````

## Client-side Events

**RadMap** exposes the [Kendo Map client-side events](http://docs.telerik.com/kendo-ui/api/dataviz/map#events) in its markup (and, respectively, code-behind), via the **<ClientEvents>** inner tag (class). The event name is constructed by concatenating **On** with the **Kendo Map event name** in PascalCase.

The server property only takes the handler function name as a string. The handler receives the Kendo Map event arguments. You can find examples of attaching and using the events in **Example 4**.

There are two additional events that are specific to the nature of the ISciptControl. They receive two arguments - the RadMap and event arguments objects.

* **OnInitialize**—fires before the serialized settings from the server are passed to the kendoMap() constructor as options. You can use it to apply modifications to the options JSON object. The methods and events of the map are not available yet because the Kendo Map is not yet created. You can find a simple demonstration in **Example 5**.

* **OnLoad**—fires when the RadMap client-side object is instantiated. Its full API and events are available at this point.

**Example 4:**: Attach client-side Map events in the markup and in the code-behind.

````ASP.NET
The Click handler is attached from the code-behind
<telerik:RadMap runat="server" ID="RadMap1" Zoom="4" Width="500" Height="500">
	<ClientEvents OnPanEnd="OnPanEndHandler" />
	<CenterSettings Latitude="51.525619" Longitude="-0.111802" />
	<LayersCollection>
		<telerik:MapLayer Type="Tile"
			UrlTemplate="http://a.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png">
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
<script type="text/javascript">
	function OnPanEndHandler(eventArgs) {
		alert("Current map center is: " + eventArgs.center.toString());
	}

	function OnClickHandler(eventArgs) {
		alert("Current map center is: " + eventArgs.center.toString());
	}
</script>
````

````C#
protected void Page_Load(object sender, System.EventArgs e)
{
	if (!IsPostBack)
	{
		RadMap1.ClientEvents.OnClick = "OnClickHandler";
	}
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
	If Not Page.IsPostBack Then
		RadMap1.ClientEvents.OnClientClick = "OnClientClickHandler"
	End If
End Sub
````

You can find an example of several of the map's events being handled in the	[Client-side API online demo](http://demos.telerik.com/aspnet-ajax/map/examples/client-side-api/defaultcs.aspx).

## Get Options Object Passed to the kendoMap() Constructor

You can use the **OnInitialize** event **RadMap** exposes to get the JSON literal that will be passed to the Kendo Map widget and modify it according to some custom logic (e.g., some configuration that has not been done on the server for any reason).You can utilize the full Kendo Map API to build the desired options object according to your needs.This object is only available through the event arguments object of this event and is not available in later events.

**Example 5:** Add a new markers layer to the map options before the widget initializes.

````ASP.NET
<telerik:RadMap runat="server" ID="RadMap1" Zoom="4" Width="500" Height="500">
	<ClientEvents OnInitialize="OnInitializeHandler" />
	<CenterSettings Latitude="15" Longitude="10" />
	<LayersCollection>
		<telerik:MapLayer Type="Tile"
			UrlTemplate="http://a.tile.opencyclemap.org/transport/#= zoom #/#= x #/#= y #.png">
		</telerik:MapLayer>
	</LayersCollection>
</telerik:RadMap>
<script type="text/javascript">
	function OnInitializeHandler(sender, eventArgs)
	{
		var currOptions = eventArgs._options;
		var markersData = [{
			myLocation: [10, 10]
		}, {
			myLocation: [15, 10]
		}, {
			myLocation: [20, 10]
		}
		];
		var theNewLayer = {
			type: "marker",
			shape: "pin",
			locationField: "myLocation",
			dataSource: {
				data: markersData
			}
		}
		currOptions.layers.push(theNewLayer);
	}
</script>
````

# See Also

 * [Kendo Map Widget First Look](http://demos.telerik.com/kendo-ui/map/index)

 * [Kendo Map Client-side API Reference](http://docs.telerik.com/kendo-ui/api/dataviz/map)

 * [Kendo Map Client-side Events](http://docs.telerik.com/kendo-ui/api/dataviz/map#events)

 * [Kendo Map Client-side Methods](http://docs.telerik.com/kendo-ui/api/dataviz/map#methods)

 * [RadMap Client-side API Online Demo](http://demos.telerik.com/aspnet-ajax/map/examples/client-side-api/defaultcs.aspx)
