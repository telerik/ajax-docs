---
title: OnClientTileClicking
page_title: OnClientTileClicking | RadTileList for ASP.NET AJAX Documentation
description: OnClientTileClicking
slug: tilelist/client-side-programming/client-side-events/onclienttileclicking
tags: onclienttileclicking
published: True
position: 2
---

# OnClientTileClicking





The **OnClientTileClicking** event is raised just before a [tile]({%slug tilelist/tiles/overview%}) is clicked and therefore before the [server-side OnTileClick event]({%slug tilelist/server-side-programming/server-side-events/ontileclick%}) as well.It is cancellable and precedes the [OnClientTileClicked event]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicked%}). If it is cancelled the OnClientTileClicked event is not raised, nor is a postback initiated if AutoPostBack is true.

This event can be used to prevent navigation and postbacks based on certain criteria (e.g. information for the tile that is about to be clicked). Cancelling this event will prevent the postback and the navigation. The URL that the tile navigates to can also be changed dynamically.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileClicking event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_tile()|[RadBaseTile client-side object]({%slug tilelist/tiles/client-side-programming/basetile-object%})||Gets a reference to the tile that is about to be clicked.|
|get_value()|string||Returns the NavigateUrl of the tile.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|
|set_value(value)||string|Sets a new NavigateUrl for the tile. If there is not going to be a postback (AutoPostback is false) this is the new URL that the tile is going to navigate to. This new URL will not be persisted in the tile, so the next time the same tile is clicked it will retain its original URL.|

The example below demonstrates how to get a tile's **NavigateUrl** in the **OnClientTileClicking** event of	a **RadTileList**. Based on the returned Url, the clicking event is cancelled or allowed.

````JavaScript
<telerik:RadTileList runat="server" ID="RadTileList1" AutoPostBack="false" SelectionMode="Single" OnClientTileClicking="OnClientTileClicking">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample" NavigateUrl="http://www.telerik.com"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>

<script type="text/javascript">
	function OnClientTileClicking(titleList, args)
	{
		var shouldCancel = false;
		var url = args.get_value();
		var expectedUrl = "http://www.telerik.com";

		if (url == expectedUrl) {
			shouldCancel = false;
		}
		else {
			shouldCancel = true;
			alert("Event will be cancelled.");
		}
		args.set_cancel(shouldCancel);
	}
</script>
````



The following code snippet represents a simple example of how to use the **OnClientTileClicking** event to get a reference to the clicked tile's name and, on user request, cancel the execution of the event.

````JavaScript
<telerik:RadTileList runat="server" ID="RadTileList1" AutoPostBack="true" OnClientTileClicking="OnClientTileClicking" SelectionMode="Single">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>

<script type="text/javascript">
	function OnClientTileClicking(tileList, args) {
		var tileName = args.get_tile().get_name();	
		var response = confirm(String.format("Tile with name \"{0}\" has been clicked and PostBack will be initiated.", tileName));

		//cancel PostBack on user request and show an alert
		if (!response) {
			args.set_cancel(true);
			alert('PostBack was cancelled.');
		}
	}
</script>
````


