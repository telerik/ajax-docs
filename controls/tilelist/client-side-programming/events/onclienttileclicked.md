---
title: OnClientTileClicked
page_title: OnClientTileClicked | RadTileList for ASP.NET AJAX Documentation
description: OnClientTileClicked
slug: tilelist/client-side-programming/client-side-events/onclienttileclicked
tags: onclienttileclicked
published: True
position: 3
---

# OnClientTileClicked





The **OnClientTileClicked** event is raised after a [tile]({%slug tilelist/tiles/overview%}) is clicked and therefore after the [OnClientTileClicking event]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%}) and before the [server-side OnTileClick event]({%slug tilelist/server-side-programming/server-side-events/ontileclick%}). It is *not* cancellable. If the OnClientTileClicking event is cancelled it will not be fired.

This event can be used to monitor navigation and postbacks and obtain information for the tile that is clicked. If AutoPostBack is true [navigation]({%slug tilelist/functionality/navigation%}) will not be performed.

The original URL of the tile and the current one can be obtained through the event arguments object, because the URL the browser will navigate to can be changed dynamically in the OnClientTileClicking event.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileClicked event arguments object

|  **Name**  |  **Return type**  |  **Description**  |
| ------ | ------ | ------ |
|get_newValue()|string|Gets the current URL the tile will navigate to. It could have been changed dynamically in the [OnClientTileClicking event]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%}).|
|get_oldValue()|string|Gets the original NavigateUrl of the clicked tile. It can be used to compare the current and original values.|
|get_tile()|[RadBaseTile client-side object]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Gets a reference to the tile that is clicked.|

The following example shows how to get and set the **navigateURL** property of a Tile in the **OnClientTileClicked** event.

````JavaScript
<telerik:RadTileList runat="server" ID="RadTileList1" OnClientTileClicked="OnClientTileClicked" AutoPostBack="false" SelectionMode="Single">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>

<script type="text/javascript">
	function OnClientTileClicked(tileList, args) {
		var tile = args.get_tile();
		var url = args.get_oldValue();

		//confirm navigation if url has been specified
		if (url != "") {
			confirm(String.format('Page will navigate to {0}', url));
		}
		//request navigation url to be set
		else {
			tile.set_navigateUrl(prompt("No url specified. Please enter a navigation url:"));
		}
	}
</script>
````



The code snippet below shows how to use the **OnClientClicked** event to check if the navigation URL of a Tile has been set to a new value.

````JavaScript
<telerik:RadTileList runat="server" ID="RadTileList1" SelectionMode="Single"
	OnClientTileClicking="OnClientTileClicking" OnClientTileClicked="OnClientTileClicked">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>

<script type="text/javascript">
	function OnClientTileClicking(tileList, args) {
		args.set_value("http://www.telerik.com");
		alert("New Navigation URL set to \'http//:www.telerik.com\'.");
	}

	function OnClientTileClicked(tileList, args) {
		var oldValue = args.get_oldValue();
		var newValue = args.get_newValue();
		if (oldValue != newValue) {
			alert(String.format("Navigation URL changed from \'{0}\' to \'{1}\'.", oldValue, newValue));
		}
	}
</script>
````


