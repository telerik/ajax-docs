---
title: OnClientTileDragStart
page_title: OnClientTileDragStart | UI for ASP.NET AJAX Documentation
description: OnClientTileDragStart
slug: tilelist/client-side-programming/client-side-events/onclienttiledragstart
tags: onclienttiledragstart
published: True
position: 5
---

# OnClientTileDragStart



## 

The __OnClientTileDragStart__ event is raised when the user starts dragging a[tile]({%slug tilelist/tiles/overview%}). It is the first event related to draggingthat is fired and can be cancelled. If it is cancelled no other dragging-related event will be fired.

This event can be used to check for a certain condition and prevent drag and drop. For example, the developermay want only certain tiles to be draggable, so this event can be cancelled for the rest.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileDragStart event arguments object

|  __Name__  |  __Return type__  |  __Arguments__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_tile()|[RadBaseTile client-side object]({%slug tilelist/tiles/client-side-programming/basetile-object%})||Gets a reference to the tile that is clicked.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|

The following example shows how a certain condition can be used to preven the user from dragging certain tiles.In this case the tiles' Name properties contain an indicator whether dragging should be allowed.

````ASPNET
			<telerik:RadTileList EnableDragAndDrop="true" ID="TileList1" runat="server" OnClientTileDragStart="OnClientTileDragStartHandler">
			<Groups>
				<telerik:TileGroup>
					<telerik:RadTextTile Name="First" Text="First tile, draggable" runat="server"></telerik:RadTextTile>
					<telerik:RadTextTile Name="SecondNoDrag" Text="Second tile, not draggable" runat="server"></telerik:RadTextTile>
					<telerik:RadTextTile Name="ThirdNoDrag" Text="Third tile, not draggable" runat="server"></telerik:RadTextTile>
					<telerik:RadTextTile Name="Fourth" Text="Fourth tile, draggable" runat="server"></telerik:RadTextTile>
					<telerik:RadTextTile Name="Fifth" Text="Fifth tile, draggable" runat="server"></telerik:RadTextTile>
				</telerik:TileGroup>
			</Groups>
		</telerik:RadTileList>
````



````JavaScript
				function OnClientTileDragStartHandler(sender, args)
				{
					var tileName = args.get_tile().get_name();
					if (tileName.indexOf("NoDrag") > -1) args.set_cancel(true);
				}
````


