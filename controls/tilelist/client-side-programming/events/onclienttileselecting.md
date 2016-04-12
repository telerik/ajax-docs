---
title: OnClientTileSelecting
page_title: OnClientTileSelecting | RadTileList for ASP.NET AJAX Documentation
description: OnClientTileSelecting
slug: tilelist/client-side-programming/client-side-events/onclienttileselecting
tags: onclienttileselecting
published: True
position: 8
---

# OnClientTileSelecting





The **OnClientTileSelecting** event is raised just before a [tile]({%slug tilelist/tiles/overview%})is [selected]({%slug tilelist/functionality/selecting%}). It is cancellable and precedes the [OnClientTileSelected event]({%slug tilelist/client-side-programming/client-side-events/onclienttileselected%}). If it is cancelled the OnClientTileSelected event is not raised.

This event can be used to prevent selection based on a certain criteria (e.g. information for the tile that is about to be selected). Cancelling this event will prevent the postback and the selection.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileSelecting event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_tile()|[RadBaseTile client-side object]({%slug tilelist/tiles/client-side-programming/basetile-object%})||Gets a reference to the tile that is about to be selected.|
|get_value()|bool||Returns true if the tile is selected.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|

The following example shows how to get information about a tile using the **OnClientTileSelecting** event of the **RadTileList**. Note that the event is cancellable and that selection is performed by right-clicking on a tile.

````JavaScript
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" AutoPostBack="false" SelectionMode="Single" OnClientTileSelecting="OnClientTileSelecting">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>

<script type="text/javascript">
	function OnClientTileSelecting(tileList, args) {
		var tile = args.get_tile();
		var response = confirm(String.format("Toggle the selection of {0}?", tile.get_name()));
		if (!response) {
			args.set_cancel(true);
		}
	}
</script>
````


