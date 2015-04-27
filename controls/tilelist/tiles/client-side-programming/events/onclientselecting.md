---
title: OnClientSelecting
page_title: OnClientSelecting | RadTileList for ASP.NET AJAX Documentation
description: OnClientSelecting
slug: tilelist/tiles/client-side-programming/events/onclientselecting
tags: onclientselecting
published: True
position: 3
---

# OnClientSelecting



## 

The **OnClientSelecting** event is raised just before a [Tile]({%slug tilelist/tiles/overview%}) is [selected]({%slug tilelist/functionality/selecting%}). It is cancellable and precedes the [OnClientSelected event]({%slug tilelist/tiles/client-side-programming/events/onclientselected%}). If it is cancelled the **OnClientSelected** event is not raised.

This event can be used to prevent selection based on a certain criteria (e.g. information for the tile that is about to be selected). Cancelling this event will prevent the postback and the selection.

The event handler receives two arguments:

1. the [Tile]({%slug tilelist/tiles/client-side-programming/basetile-object%}) object that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientSelecting event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the event is cancelled.|
|get_value()|bool||Returns true if the tile is selected.|
|set_cancel(value)||bool|Sets whether the event will be cancelled (if true is passed).|
|set_value(value)||bool|Sets the select value of the tile to true or false (if false the **OnClientSelected** event will not be canceled)|

The following example shows how to get information about a tile using the **OnClientSelecting** event of the **Tile**. Note that the event is cancellable and that selection is performed by right-clicking on a tile.

````JavaScript
	        <telerik:RadTextTile ID="Tile1" runat="server" Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"
	             OnClientSelecting="OnClientSelecting" EnableSelection="true">
	        </telerik:RadTextTile>
	
	        <script type="text/javascript">
	            function OnClientSelecting(tile, args) {
	                var response = confirm(String.format("Toggle the selection of {0}?", tile.get_name()));
	                if (!response) {
	                    args.set_cancel(true);
	                }
	            }
	        </script>
````


