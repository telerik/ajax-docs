---
title: OnClientTileDropped
page_title: OnClientTileDropped | UI for ASP.NET AJAX Documentation
description: OnClientTileDropped
slug: tilelist/client-side-programming/client-side-events/onclienttiledropped
tags: onclienttiledropped
published: True
position: 6
---

# OnClientTileDropped



## 

The __OnClientTileDropped__ event is raised after a [tile]({%slug tilelist/tiles/overview%})is dropped by the user in the browser. It is *not* cancellable.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileDropped event arguments object

|  __Name__  |  __Return type__  |  __Description__  |
| ------ | ------ | ------ |
|get_tile()|[RadBaseTile client-side object]({%slug tilelist/tiles/client-side-programming/basetile-object%})|Gets a reference to the tile that is clicked.|

The following example will show how the __OnClientTileDropped__ event can be used to	__prompt the user to save the changes__ that aremade to the layout. The full version would require a __RadWindowManager__ for the confirmation dialog, a__RadAjaxManager__ for the request to the server and a __RadPersistenceManager__ to save the state.

````ASPNET
		<telerik:RadTileList EnableDragAndDrop="true" ID="TileList2" runat="server" OnClientTileDropped="OnClientTileDroppedHandler">
			<Groups>
				<telerik:TileGroup>
					<telerik:RadIconTile ImageUrl="Settings.png" runat="server">
					</telerik:RadIconTile>
					<telerik:RadIconTile ImageUrl="Emails.png" runat="server">
					</telerik:RadIconTile>
					<telerik:RadIconTile ImageUrl="Messages.png" runat="server">
					</telerik:RadIconTile>
					<telerik:RadIconTile ImageUrl="Friends.png" runat="server">
					</telerik:RadIconTile>
					<telerik:RadIconTile ImageUrl="Requests.png" runat="server">
					</telerik:RadIconTile>
					<telerik:RadIconTile ImageUrl="Search.png" runat="server">
					</telerik:RadIconTile>
					<telerik:RadIconTile ImageUrl="Account.png" runat="server">
					</telerik:RadIconTile>
				</telerik:TileGroup>
			</Groups>
		</telerik:RadTileList>
		<telerik:RadWindowManager ID="RadWindowManager1" runat="server">
		</telerik:RadWindowManager>
		<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="OnAjaxRequestHandler">
		</telerik:RadAjaxManager>
		<telerik:RadPersistenceManager runat="server" ID="RadPersistenceManager1">
		</telerik:RadPersistenceManager>
````



````JavaScript
				function OnClientTileDroppedHandler(sender, args)
				{
					var msg = "You have modified the order of your control panel. Would you like to save the changes?";
					radconfirm(msg, confirmCallBackFn);
				}
````



>tabbedCode

````C#
		protected void OnAjaxRequestHandler(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
		{
			if (e.Argument == "storeTileOrder")
			{
				RadPersistenceManager1.SaveState();
			}
		}
````
````VB.NET
		Protected Sub OnAjaxRequestHandler(sender As Object, e As Telerik.Web.UI.AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
			If e.Argument = "storeTileOrder" Then
				RadPersistenceManager1.SaveState()
			End If
		End Sub
	#End Region
	End Class


>end
