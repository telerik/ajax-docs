---
title: OnTileCreated
page_title: OnTileCreated | RadTileList for ASP.NET AJAX Documentation
description: OnTileCreated
slug: tilelist/server-side-programming/server-side-events/ontilecreated
tags: ontilecreated
published: True
position: 2
---

# OnTileCreated



## 

The **OnTileCreated** event is fired for each [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%})that is created from a [databound RadTileList]({%slug tilelist/data-binding/overview%}) when itscontrol instance is being created on the server.

It precedes the [OnTileDataBound]({%slug tilelist/server-side-programming/server-side-events/ontiledatabound%}) event.

The **OnTileCreated** event can be used to set common properties for the tiles, like the**PeekTemplateSettings** configuration.

If the ViewState on the page (or the control) is not disabled, these properties will be stored there as well.

The example below will demonstrate how some tile settings can be set:

````C#
		<telerik:RadTileList runat="server" DataSourceID="SqlDataSource1" ID="RadTileList1"
			Width="634px" TileRows="4" OnTileCreated="RadTileList1_TileCreated">
			<DataBindings>
				<CommonTileBinding TileType="RadTextTile" DataGroupNameField="ContactTitle" Shape="Square" />
				<TextTileBinding DataTextField="ContactName" />
				<TilePeekTemplate>
					<div class="squarePeek">
						Contact details:<br />
						<br />
						Phone:
						<%#DataBinder.Eval(Container.DataItem, "Phone")%>
						<br />
						City: <%#DataBinder.Eval(Container.DataItem, "City")%>
					</div>
				</TilePeekTemplate>
			</DataBindings>
		</telerik:RadTileList>
		<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
			ProviderName="System.Data.SqlClient" SelectCommand="SELECT [CustomerID], [ContactName], [ContactTitle], [Phone], [City] FROM [Customers] ORDER BY [ContactTitle] DESC">
		</asp:SqlDataSource>
````





````C#
		protected void RadTileList1_OnTileCreated(object sender, TileListEventArgs e)
		{
			e.Tile.PeekTemplateSettings.ShowInterval = 0;
			e.Tile.PeekTemplateSettings.CloseDelay = 0;
			e.Tile.PeekTemplateSettings.ShowPeekTemplateOnMouseOver = true;
			e.Tile.PeekTemplateSettings.HidePeekTemplateOnMouseOut = true;
			e.Tile.PeekTemplateSettings.Animation = PeekTemplateAnimation.Slide;
			e.Tile.PeekTemplateSettings.AnimationDuration = 800;
		}
````
````VB.NET
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


