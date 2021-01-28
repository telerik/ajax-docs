---
title: Icon Tile
page_title: Icon Tile - RadTile
description: Check our Web Forms article about Icon Tile.
slug: tilelist/tiles/icon-tile
tags: icon,tile
published: True
position: 3
---

# Icon Tile




A **RadIconTile** has an image centered in its content area that is called an icon. Its URL is set through the **ImageUrl** of the tile:

>note The examples below show specific functionality for the given tile type, for more information on the general options	for navigation and selecting please examine the additional resources at the end of the article.



**RadTileList** example:

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadIconTile ImageUrl="icon_ajax.png" Shape="Wide">
				<Title Text="Telerik® UI for ASP.NET AJAX"></Title>
				<PeekTemplate>
					<div style="padding: 20px; width: 290px; height: 110px; background-color: #007D33; color: White; font-size: 18px;">
						Cut your development time while building awesome apps with the performance you desire.
					</div>
				</PeekTemplate>
			</telerik:RadIconTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````



Standalone **Tile** example:

````ASP.NET
<telerik:RadIconTile ID="Tile1" runat="server" ImageUrl="icon_ajax.png" Shape="Wide">
	<Title Text="Telerik® UI for ASP.NET AJAX"></Title>
	<PeekTemplate>
		<div style="padding: 20px; width: 290px; height: 110px; background-color: #007D33; color: White; font-size: 18px;">
			Cut your development time while building awesome apps with the performance you desire.
		</div>
	</PeekTemplate>
</telerik:RadIconTile>
````



This is how this tile looks before and after the peek template is shown. The green rectangle in the middle of the left picture is the *icon_ajax.png* image.

![tilelist-icontile-ajax](images/tilelist-icontile-ajax.png)

# See Also

 * [Tiles configuration overview]({%slug tilelist/tiles/overview%})

 * [Peek Template]({%slug tilelist/tiles/peek-template%})

 * [Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})

 * [Navigation]({%slug tilelist/functionality/navigation%})

 * [Selecting]({%slug tilelist/functionality/selecting%})
