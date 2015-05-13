---
title: Select a Tile with Left Click
page_title: Select a Tile with Left Click | RadTileList for ASP.NET AJAX Documentation
description: Select a Tile with Left Click
slug: tilelist/how-to/select-a-tile-with-left-click
tags: select,a,tile,with,left,click
published: True
position: 1
---

# Select a Tile with Left Click



This article demonstrates how to let the users [select]({%slug tilelist/functionality/selecting%}) a **Tile** with a left click instead of the default right click.



The code in **Example 1** shows how to use the [OnClientTileClicking]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%})	event and the [Client-side API]({%slug tilelist/tiles/client-side-programming/basetile-object%}) of the **Tile** to cancel the default click event and toggle its selection state. This approach will prevent the [Click]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%}) event	(and subsequent post back) and/or [navigation]({%slug tilelist/functionality/navigation%}).	A single user action should cause one effect and in this case it will toggle the selected state of the tile.

**Example 1**: Select a tile with left click inside a **RadTileList**.

````ASP.NET
<telerik:RadTileList runat="server" ID="RadTileList1" OnClientTileClicking="toggleTileSelection"
	SelectionMode="Multiple">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Text="first"></telerik:RadTextTile>
			<telerik:RadTextTile Text="second"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
<script type="text/javascript">
	function toggleTileSelection(sender, args) {
		args.set_cancel(true);
		args.get_tile().toggleSelection();
	}
</script>
````



**Example 2**: Select a standalone **Tile** with left click.

````ASP.NET
<telerik:RadTextTile runat="server" ID="RadTextTile1" OnClientClicking="toggleSelection" EnableSelection="true">
</telerik:RadTextTile>

<script type="text/javascript">
	function toggleSelection(sender, args) {
		args.set_cancel(true);
		sender.toggleSelection();
	}
</script>
````



# See Also

 * [Selecting]({%slug tilelist/functionality/selecting%})

 * [Navigation]({%slug tilelist/functionality/navigation%})

 * [OnClientTileClicking event]({%slug tilelist/client-side-programming/client-side-events/onclienttileclicking%})

 * [OnClientClicking event]({%slug tilelist/tiles/client-side-programming/events/onclientclicking%})

 * [BaseTile Object]({%slug tilelist/tiles/client-side-programming/basetile-object%})

 * [Overview]({%slug tilelist/client-side-programming/client-side-events/overview%})
