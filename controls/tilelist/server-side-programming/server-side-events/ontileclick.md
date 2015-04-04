---
title: OnTileClick
page_title: OnTileClick | UI for ASP.NET AJAX Documentation
description: OnTileClick
slug: tilelist/server-side-programming/server-side-events/ontileclick
tags: ontileclick
published: True
position: 1
---

# OnTileClick



## 

The __TileClick__ server side event is triggered when a tile is clicked with the left mouse button(or is tapped on a touch device) and the __AutoPostBack__ property is set to __true__.[Navigation]({%slug tilelist/functionality/navigation%}) will not occur even if a NavigateUrl is provided in the given tile,but a postback will be invoked instead.

The event handler receives two arguments - of type __object__ that is a reference to theRadTileList control that fired the event and can be cast to it, and a __Telerik.Web.UI.TileListEventArgs__object that can be used to get a reference to the clicked [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}) throughits __Tile__ property. It returns an object of type *RadBaseTile*.

````ASPNET
		<telerik:RadTileList runat="server" ID="RadTileList1" AutoPostBack="true" OnTileClick="OnTileClick">
			<Groups>
				<telerik:TileGroup>
					<telerik:RadTextTile Name="First" NavigateUrl="http://www.telerik.com/" Title-Text="Telerik" Shape="Wide">
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
````VB.NET
		Protected Sub RadTileList1_TileClick(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileClick
			clickResult.InnerHtml = "Clicked tile name and URL: " & e.Tile.Name & "<br />" & e.Tile.NavigateUrl
			'note: e.Tile is of type RadBaseTile
		End Sub
	#End Region
	
	#Region "OnTileDataBound-access-data-vb-0"
		Protected Sub RadTileList1_TileDataBound(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileDataBound
			'first, check for the tile type if specific properties are going to be used
			Dim tile = TryCast(e.Tile, RadImageTile)
			If tile IsNot Nothing Then
				'The DataBinder.GetPropertyValue() is one way to obtain the data
				'This example points the image to a location that depends on the project structure
				tile.ImageUrl = String.Format("../../Img/Square/{0}.jpg", DataBinder.GetPropertyValue(e.Tile.DataItem, "CustomerID", Nothing))
	
				'the DataItem field in the Tile object can be cast to a DataRowView in order to access the information
				'This does exaclty the same as the above line
				tile.ImageUrl = String.Format("../../Img/Square/{0}.jpg", TryCast(e.Tile.DataItem, System.Data.DataRowView).Row("CustomerID").ToString())
	
				'A simple example of modifying an already bound property
				tile.Title.Text = "Contact: " + tile.Title.Text
	
				'building a property value dynamically based on data from the datasource
				tile.NavigateUrl = String.Format("mailto:{0}@myCompany.com", DataBinder.GetPropertyValue(e.Tile.DataItem, "ContactName", Nothing).Replace(" "c, "."c))
			End If
		End Sub
	#End Region
	
	#Region "OnTileCreated-set-peek-settings-vb-0"
		Protected Sub RadTileList1_TileCreated(sender As Object, e As Telerik.Web.UI.TileListEventArgs) Handles RadTileList1.TileCreated
			e.Tile.PeekTemplateSettings.ShowInterval = 0
			e.Tile.PeekTemplateSettings.CloseDelay = 0
			e.Tile.PeekTemplateSettings.ShowPeekTemplateOnMouseOver = True
			e.Tile.PeekTemplateSettings.HidePeekTemplateOnMouseOut = True
			e.Tile.PeekTemplateSettings.Animation = PeekTemplateAnimation.Slide
			e.Tile.PeekTemplateSettings.AnimationDuration = 800
		End Sub
	#End Region
	End Class



