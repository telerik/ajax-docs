---
title: Text Tile
page_title: Text Tile | RadTile for ASP.NET AJAX Documentation
description: Text Tile
slug: tilelist/tiles/text-tile
tags: text,tile
published: True
position: 7
---

# Text Tile





The **RadTextTile** is designed to only show some text as its primary content. The string is set through its **Text** property:

![tile List-text Tile-grid-example](images/tileList-textTile-grid-example.png)

>tip The examples below show specific functionality for the given tile type, for more information on the general options	for navigation and selecting please examine the additional resources at the end of the article.



**RadTileList** example:

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Skin="Glow">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Shape="Wide" Font-Size="18px" Font-Bold="true"
				Text="Paging, sorting, filtering, data editing, grouping and hierarchy with desktop-like performance.">
				<Title Text="RadGrid for ASP.NET AJAX"></Title>
			</telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````



Standalone **Tile** example:

````ASP.NET
<telerik:RadTextTile ID="Tile1" runat="server" Shape="Wide" Font-Size="18px" Font-Bold="true"
	Text="Paging, sorting, filtering, data editing, grouping and hierarchy with desktop-like performance.">
	<Title Text="RadGrid for ASP.NET AJAX"></Title>
</telerik:RadTextTile>
````



Where the standard properties inherited from the *WebControl* class can easily be used to change the appearance of the text, as explained in the [Tiles configuration overview]({%slug tilelist/tiles/overview%}) help article.

# See Also

 * [Tiles configuration overview]({%slug tilelist/tiles/overview%})

 * [Peek Template]({%slug tilelist/tiles/peek-template%})

 * [Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})

 * [Navigation]({%slug tilelist/functionality/navigation%})

 * [Selecting]({%slug tilelist/functionality/selecting%})
