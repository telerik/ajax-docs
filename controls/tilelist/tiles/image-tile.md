---
title: Image Tile
page_title: Image Tile - RadTile
description: Check our Web Forms article about Image Tile.
slug: tilelist/tiles/image-tile
tags: image,tile
published: True
position: 5
---

# Image Tile





A **RadImageTile** uses an image as the primary content of the tile. It begins from 0,0 and can be as large as the tile. If it is larger it will be clipped. Unlike the [ImageAndText tile]({%slug tilelist/tiles/imageandtext-tile%})  it has no text and the Title element is not limited to a smaller size.

![tilelist-image Tile-documentation-example](images/tilelist-imageTile-documentation-example.png)

>note The examples below show specific functionality for the given tile type, for more information on the general options	for navigation and selecting please examine the additional resources at the end of the article.



**RadTileList** example:

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Skin="Metro">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadImageTile ImageUrl="img_documentation.png" Shape="Wide">
				<Title Text="Documentation"></Title>
			</telerik:RadImageTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````



Standalone **Tile** example:

````ASP.NET
<telerik:RadImageTile ID="Tile1" runat="server" ImageUrl="img_documentation.png" Shape="Wide">
	<Title Text="Documentation"></Title>
</telerik:RadImageTile>
````



Where *img_documentation.png* is 310x150px.

# See Also

 * [Tiles configuration overview]({%slug tilelist/tiles/overview%})

 * [Peek Template]({%slug tilelist/tiles/peek-template%})

 * [Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})

 * [Navigation]({%slug tilelist/functionality/navigation%})

 * [Selecting]({%slug tilelist/functionality/selecting%})
