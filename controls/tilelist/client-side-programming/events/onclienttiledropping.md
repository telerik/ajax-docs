---
title: OnClientTileDropping
page_title: OnClientTileDropping | RadTileList for ASP.NET AJAX Documentation
description: OnClientTileDropping
slug: tilelist/client-side-programming/client-side-events/onclienttiledropping
tags: onclienttiledropping
published: True
position: 7
---

# OnClientTileDropping





The **OnClientTileDropping** event is raised when the user drops a [tile]({%slug tilelist/tiles/overview%}) after dragging it,but before the [OnClientTileDropped]({%slug tilelist/client-side-programming/client-side-events/onclienttiledropped%}) event.This event can be cancelled. If it is cancelled the OnClientTileDropped will not fire.

This event can be used to check for a certain condition and prevent the drop of a tile.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileDropping event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_tile()|[RadBaseTile client-side object]({%slug tilelist/tiles/client-side-programming/basetile-object%})||Gets a reference to the tile that is clicked.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|

The following example shows how the drop operation can be prevented upon certain condition, e.g. that the user has been dragging the tile for too long which may indicate uncertainty on their part:

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" EnableDragAndDrop="true" ID="TileList2" runat="server" OnClientTileDropping="OnClientTileDroppingHandler"
	OnClientTileDragStart="OnClientTileDragStartHandler">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile ID="RadTextTile1" Text="First tile" runat="server"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile2" Text="Second tile" runat="server"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile3" Text="Third tile" runat="server"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile4" Text="Fourth tile" runat="server"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile5" Text="Fifth tile" runat="server"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````



````JavaScript
var dragStartTime = null;
function OnClientTileDroppingHandler(sender, args)
{
	var currTime = new Date();
	if (currTime.getSeconds() - dragStartTime.getSeconds() > 15 ||
	currTime.getMinutes() > dragStartTime.getMinutes())
	{
		//the user has been dragging the tile for too long
		args.set_cancel(true);
	}
}

function OnClientTileDragStartHandler(sender, args)
{
	dragStartTime = new Date();
}
````


