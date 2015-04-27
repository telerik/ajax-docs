---
title: OnTileDataBound
page_title: OnTileDataBound | RadTileList for ASP.NET AJAX Documentation
description: OnTileDataBound
slug: tilelist/server-side-programming/server-side-events/ontiledatabound
tags: ontiledatabound
published: True
position: 3
---

# OnTileDataBound



## 

The **OnTileDataBound** event is fired for each [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%})that is created from a [databound RadTileList]({%slug tilelist/data-binding/overview%}) when it is receiving the necessaryproperties from the datasource.

It is subsequent to the [OnTileCreated event]({%slug tilelist/server-side-programming/server-side-events/ontilecreated%}).

The **OnTileDataBound** event can be used to fine tune settings for the tiles that are related to data that comes fromthe datasource, for example changing URLs to images, generating navigation URLs, adding formatting to strings.

The entire **DataRowView** object from the datasource that is related to the given tile is passed to the**DataItem** property the tile exposes. The **Tile** reference is passed in the**event arguments** object.

The example below shows two different ways of obtaining data from the datasource in order to modify certain tile properties:

````C#
		<telerik:RadTileList runat="server" DataSourceID="SqlDataSource1" ID="RadTileList1" Width="634px" TileRows="4"
			OnTileDataBound="RadTileList1_TileDataBound">
			<DataBindings>
				<CommonTileBinding TileType="RadImageTile" DataTitleTextField="ContactName" DataGroupNameField="ContactTitle" Shape="Square" />
			</DataBindings>
		</telerik:RadTileList>
	
		<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
			ProviderName="System.Data.SqlClient" SelectCommand="SELECT [CustomerID], [ContactName], [ContactTitle], [Phone], [City] FROM [Customers] ORDER BY [ContactTitle] DESC">
		</asp:SqlDataSource>
````





````C#
		protected void RadTileList1_TileDataBound(object sender, TileListEventArgs e)
		{
			//first, check for the tile type if specific properties are going to be used
			var tile = (e.Tile as RadImageTile);
			if (tile != null)
			{
				//The DataBinder.GetPropertyValue() is one way to obtain the data
				//This example points the image to a location that depends on the project structure
				tile.ImageUrl = string.Format("../../Img/Square/{0}.jpg", DataBinder.GetPropertyValue(e.Tile.DataItem, "CustomerID", null));
	
				//the DataItem field in the Tile object can be cast to a DataRowView in order to access the information
				//This does exaclty the same as the above line
				tile.ImageUrl = string.Format("../../Img/Square/{0}.jpg", (e.Tile.DataItem as System.Data.DataRowView).Row["CustomerID"].ToString());
	
				//A simple example of modifying an already bound property
				tile.Title.Text = "Contact: " + tile.Title.Text;
	
				//building a property value dynamically based on data from the datasource
				tile.NavigateUrl = string.Format("mailto:{0}@myCompany.com", DataBinder.GetPropertyValue(e.Tile.DataItem, "ContactName", null).Replace(' ', '.'));
			}
		}
````
````VB.NET
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
````


