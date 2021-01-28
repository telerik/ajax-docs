---
title: OnTileClick
page_title: OnTileClick - RadTileList
description: Check our Web Forms article about OnTileClick.
slug: tilelist/server-side-programming/server-side-events/ontileclick
tags: ontileclick
published: True
position: 1
---

# OnTileClick





The **TileClick** server side event is triggered when a tile is clicked with the left mouse button (or is tapped on a touch device) and the **AutoPostBack** property is set to **true**. [Navigation]({%slug tilelist/functionality/navigation%}) will not occur even if a NavigateUrl is provided in the given tile, but a postback will be invoked instead.

The event handler receives two arguments - of type **object** that is a reference to the RadTileList control that fired the event and can be cast to it, and a **Telerik.Web.UI.TileListEventArgs** object that can be used to get a reference to the clicked [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}) through its **Tile** property. It returns an object of type *RadBaseTile*.

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" AutoPostBack="true" OnTileClick="OnTileClick">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile Name="First" NavigateUrl="https://www.telerik.com/" Title-Text="Telerik" Shape="Wide">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Second" NavigateUrl="http://www.google.com/" Title-Text="Google" Shape="Wide">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Third" NavigateUrl="http://www.bing.com" Text="Bing">
			</telerik:RadTextTile>
			<telerik:RadTextTile Name="Fourth" NavigateUrl="http://www.wikipedia.org/" Text="Wikipedia">
			</telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
<div runat="server" id="clickResult">
</div>
````





````C#
protected void OnTileClick(object sender, TileListEventArgs e)
{
	clickResult.InnerHtml = "Clicked tile name and URL: " + e.Tile.Name + "<br />" + e.Tile.NavigateUrl;
	//note: e.Tile is of type RadBaseTile
}
````
````VB
Protected Sub RadTileList1_TileClick(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileClick
	clickResult.InnerHtml = "Clicked tile name and URL: " & e.Tile.Name & "<br />" & e.Tile.NavigateUrl
	'note: e.Tile is of type RadBaseTile
End Sub
````


