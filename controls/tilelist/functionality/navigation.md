---
title: Navigation
page_title: Navigation | RadTileList for ASP.NET AJAX Documentation
description: Navigation
slug: tilelist/functionality/navigation
tags: navigation
published: True
position: 0
---

# Navigation





The main purpose of the **RadTileList** control is to create a navigation menu. This is why all **Tile** types have the **NavigateUrl** and **Target** properties. They are used to set the URL to which each respective tile will navigate the browser and precisely how this is done.

The possible targets for the navigation are similar to those a standard *anchor* element offers:

* _blank - opens a new browser window with the designated URL.

* _parent - attempts to navigate the parent frame to the designated URL. If the current frame is the topmost frame it will be navigated.

* _search - uses the search pane, if supported by the browser. Use _blank instead.

* _self - navigates the current frame/window to the designated URL.

* _top - navigates the topmost frame to the designated URL

* any name - navigates the frame from the current window with the given name to the designated URL.

>note Navigation is done with JavaScript which means that all standard limitations apply:
* In order to navigate the topmost or parent frame both pages must come from the same domain to satisfy the same-origin policy.
* Popup blocker programs on the user's machine can prevent opening a new browser window.


>note If the **AutoPostBack** property of the **RadTileList** control is set to **true** a postback will occur instead of navigation. By default (AutoPostBack=false) each tile will act like a large hyperlink.
>To allow certain tiles to navigate to a page while keeping AutoPostBack=true for the TileList, examine the [Allow Tile Navigation with AutoPostBack=true in RadTileList](https://www.telerik.com/support/kb/aspnet-ajax/tilelist/details/allow-tile-navigation-with-autopostback=true-in-radtilelist) KB article.



The following code snippet examines the possible values of the the Tiles' **Target** property and the ways **NavigateUrl** paths can be specified.

````ASP.NET
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Width="1030px" TileRows="3"
	SelectionMode="Multiple">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadImageAndTextTile Shape="Wide" NavigateUrl="https://www.telerik.com/developer-productivity-tools.aspx"
				Target="_blank" Text="UI controls for ASP.NET AJAX, MVC, WPF, Silverlight, Windows 8 and Windows Phone"
				ImageUrl="../../DevTools.png">
			</telerik:RadImageAndTextTile>

			<telerik:RadContentTemplateTile NavigateUrl="https://www.telerik.com/community/forums/aspnet-ajax.aspx"
				Target="_blank" Shape="Wide">
				<ContentTemplate>
					<div style="padding: 10px;">
						<p>Peer-to-Peer Forums</p>
						<p>
							We've been developing controls for ASP.NET AJAX since the technology's inception
							&amp; the contributions from the community prove that.
						</p>
					</div>
				</ContentTemplate>
			</telerik:RadContentTemplateTile>

			<telerik:RadImageTile NavigateUrl="https://www.telerik.com/help/aspnet-ajax/introduction.html"
				 ImageUrl="../../img_documentation.png" Shape="Wide">
				<Title Text="Documentation"></Title>
			</telerik:RadImageTile>
		</telerik:TileGroup>

		<telerik:TileGroup>
			<telerik:RadIconTile Name="About" NavigateUrl="AboutUs.aspx"
				Shape="Square" ImageUrl="../images/AboutUs.png">
				<Title Text="About Us"></Title>
			</telerik:RadIconTile>

			<telerik:RadIconTile Name="Contacts" NavigateUrl="ContactUs.aspx"
				Shape="Square" ImageUrl="../ContactUs.png">
				<Title Text="Contact Us"></Title>
			</telerik:RadIconTile>
		</telerik:TileGroup>

		<telerik:TileGroup>
			<telerik:RadTextTile Name="Telerik" NavigateUrl="https://www.telerik.com" Shape="Wide">
				<Title Text="Visit Telerik"></Title>
			</telerik:RadTextTile>

			<telerik:RadTextTile Name="Empty" Shape="Square" Target="_top">
				<Title Text="I will not navigate"></Title>
			</telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````



The **OnClientTileClicking** event can be used to prevent navigation (according to given criteria) by cancelling the event itself:

````JavaScript
<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" OnClientTileClicking="OnClientTileClicking">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadIconTile NavigateUrl="somePage.aspx" Target="_blank"></telerik:RadIconTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
<script type="text/javascript">
	function OnClientTileClicking(sender, args)
	{
		var shouldCancel = true; //set according to the desired logic
		args.set_cancel(shouldCancel);
	}
</script>
````


