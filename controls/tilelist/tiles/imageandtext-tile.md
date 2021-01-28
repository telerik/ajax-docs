---
title: ImageAndText Tile
page_title: ImageAndText Tile - RadTile
description: Check our Web Forms article about ImageAndText Tile.
slug: tilelist/tiles/imageandtext-tile
tags: imageandtext,tile
published: True
position: 4
---

# ImageAndText Tile



A **RadImageAndTextTile** consists of an **image** that starts from the top left corner of the tile and may reach the tile's borders and a **text** string that is placed **between** the **Title** and the **Badge**.

The image is chosen through the **ImageUrl** property of the tile and the text string is set in the	**Text** property.

To accommodate the text the title is narrowed down and is designed to be used with an image instead of text. There are 44 pixels available to the left of the text and 2x10 of them are padding for the title, so the title image that will fit best is 24x24 pixels.

To the right, towards the badge, there are 35 pixels left available and the badge itself has a 10px offset from the end of the tile.

![tilelist-image And Text Tile-swimming-example](images/tilelist-imageAndTextTile-swimming-example.png)

>note The examples below show specific functionality for the given tile type, for more information on the general options	for navigation and selecting please examine the additional resources at the end of the article.



**RadTileList** example:

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadImageAndTextTile Shape="Wide" BackColor="Orange" ImageUrl="images/swim.png"
				Text="Join the ammateur swimming competition today and win amazing prizes!"
				Title-ImageUrl="images/titleImageSports.png">
				<Badge PredefinedType="Playing" />
			</telerik:RadImageAndTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````



Standalone **Tile** example:

````ASP.NET
<telerik:RadImageAndTextTile ID="Tile1" runat="server" Shape="Wide" BackColor="Orange" ImageUrl="images/swim.png"
	Text="Join the ammateur swimming competition today and win amazing prizes!"
	Title-ImageUrl="images/titleImageSports.png">
	<Badge PredefinedType="Playing" />
</telerik:RadImageAndTextTile>
````



Where *swim.png* is 310x105px so the bottom of the tile is visible - the orange background is used to increase the contrast with the white text. The *titleImageSports.png* image is 24x24 pixels.

# See Also

 * [Tiles configuration overview]({%slug tilelist/tiles/overview%})

 * [Peek Template]({%slug tilelist/tiles/peek-template%})

 * [Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})

 * [Navigation]({%slug tilelist/functionality/navigation%})

 * [Selecting]({%slug tilelist/functionality/selecting%})
