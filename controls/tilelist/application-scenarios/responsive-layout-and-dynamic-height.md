---
title: Responsive Layout and Dynamic Height
page_title: Responsive Layout and Dynamic Height | UI for ASP.NET AJAX Documentation
description: Responsive Layout and Dynamic Height
slug: tilelist/application-scenarios/responsive-layout-and-dynamic-height
tags: responsive,layout,and,dynamic,height
published: True
position: 0
---

# Responsive Layout and Dynamic Height



__RadTileList__ offers [responsive layout]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) that lets it react to the	viewport width. This is achieved via [CSS and media queries]({%slug tilelist/appearance-and-styling/css-for-responsive-layout%}) for smaller viewports.

This article explains several key points you need to keep in mind when employing the control's responsive capabilities and offers examples	that show how to achieve some of the scenarios:

* __A responsive RadTileList must be able to use to entire viewport width__	because the layout of the control changes in correlation to the viewport size. This is usually achieved by placing it in a high-level container (e.g., directly under the form tag	with as few parents as possible). Deeper nesting may limit the width the control can use and result in clipped content, for example.

* __The Height property does not support values in percent__.	In some scenarios, however, the developer may want to change the number of rows that are shown dynamically (e.g., with a viewport height change).	This is possible (see the examples below), but it is not	done out of the box, because it requires a call to the __set_height()__ and __repaint()__[client-side methods]({%slug tilelist/client-side-programming/tilelist-object%})	, which is an expensive operation and must not be called unnecessarily.The second reason for this is that the standard (desktop) layout scrolls the tiles to the left and right. The number of rows is controlled via the __Height__	or __TileRows__ property of the __RadTileList__.	Thus, the change in the layout to the tablet- and phone-oriented layouts is based on the width and the height is controlled explicitly by the developer.

* __The parent HTML element must allow for scrolling for the tablet- and phone-oriented layouts__.	In these modes the tiles flow downward and the __RadTileList__ does not have __height__	or __scrolling__ specified. This means that, usually, its parent HTML element	is must have a __specified height__ and its __overflow-y__ CSS property can be set to __auto__.

## Responsive Layout and Dynamic Height

To react to the height of the parent element in desktop mode, you need to:

1. Explicitly provide the new height in pixels via the __set_height()__ client-side method.

1. Call the __repaint()__ method to update the tiles arrangement.

1. Use an appropriate event to call this logic again. This can be window.resize or any business logic that changes the parent element's height.

You can see a basic sample in __Example 1__. For simplicity, tiles are generated in the code-behind (__Example 2__).The __window.resize__ event is used to change the dimensions and a simple logic is added to ensure resizing willbe executed only once per browser resize. The Sys.Application.Load event provides the hook for the initial resize.

The tablet- and phone-oriented layouts will take the height of their parent HTML element, so you only need to make sure it does not have scrolling disabled.

__Example 1: Changing the height of a responsive RadTileList.__

````JavaScript
	<head id="Head1" runat="server">
		<title></title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			html, body, form
			{
				margin: 0;
				padding: 0;
				height: 100%;
				overflow: hidden;
			}
			
			/* the element that holds the TileList has dimensions from its parents and allows vertical scrolling */
			.TileListResponsiveContainer
			{
				overflow-y: auto;
				height: 100%;
			}
		</style>
	</head>
	<body>
		<form id="form1" runat="server">
			<asp:ScriptManager ID="Scriptmanager1" runat="server" />
			<div class="TileListResponsiveContainer">
				<telerik:RadTileList runat="server" ID="RadTileList1" RenderMode="Mobile">
				</telerik:RadTileList>
			</div>
			<script type="text/javascript">
				function repaintTileList(sender, args) {
					var tileList = getTileList();
					var viewPortSize = $telerik.getClientBounds();
					//check if we have a tileList and whether the viewport width is sufficient to put it in desktop mode
					//you can also add a check whether the container is visible in case you plan to hide it
					if (tileList && viewPortSize.width > 768)
					{
						//set the available height to the TileList
						tileList.set_height(viewPortSize.height);
						tileList.repaint();
					}
					Sys.Application.remove_load(repaintTileList);
				}
	
				//the window resize handling is needed for viewport height changes in desktop mode if you need the tile rows to change
				var TO = false;
	
				$telerik.$(window).resize(function () {
					if (TO !== false)
						clearTimeout(TO);
					TO = setTimeout(repaintTileList, 200); //200 is time in milliseconds that will pass before repaintTileList is called
				});
	
				//update the TileList on the initial load
				Sys.Application.add_load(repaintTileList);
	
				function getTileList() {
					return $find("<%= RadTileList1.ClientID %>");
				}
			</script>
			</form>
	</body>
````



__Example 2: Generating some tiles in the code-behind to populate the RadTileList from Example1 and Example 3.__

>tabbedCode

````C#
		protected void Page_Init(object sender, EventArgs e)
		{
			TileGroup group1 = new TileGroup();
			group1.Name = "first";
			RadTileList1.Groups.Add(group1);
			for (int i = 0; i < 15; i++)
			{
				CreateTile(group1.Name + i, group1);
			}
			TileGroup group2 = new TileGroup();
			group2.Name = "second";
			RadTileList1.Groups.Add(group2);
			for (int i = 0; i < 15; i++)
			{
				CreateTile(group2.Name + i, group2);
			}
		}
	
		protected void CreateTile(string tileId, TileGroup group)
		{
			RadTextTile tile = new RadTextTile();
			tile.ID = "tile_" + tileId;
			tile.Text = "This is tile: " + tileId;
			group.Tiles.Add(tile);
		}
````
````VB.NET
		Protected Sub Page_Init(sender As Object, e As System.EventArgs) Handles Me.Init
			Dim group1 As New TileGroup()
			group1.Name = "first"
			RadTileList1.Groups.Add(group1)
			For i As Integer = 0 To 14
				CreateTile(group1.Name & i, group1)
			Next
			Dim group2 As New TileGroup()
			group2.Name = "second"
			RadTileList1.Groups.Add(group2)
			For i As Integer = 0 To 14
				CreateTile(group2.Name & i, group2)
			Next
		End Sub
	
	
		Protected Sub CreateTile(tileId As String, group As TileGroup)
			Dim tile As New RadTextTile()
			tile.ID = Convert.ToString("tile_") & tileId
			tile.Text = Convert.ToString("This is tile: ") & tileId
			group.Tiles.Add(tile)
		End Sub
	#End Region
	End Class


>end

When __RadTileList__ is nested in other controls/elements,you may need to use events they offer to recalculate the height (e.g., when they are shown or resized),or override some of their default CSS settings to make sure scrolling is enabled. It is still important that they provide the entire viewport widthso the desktop mode can use it.

# See Also

 * [RadTileList Responsive Layout: Overview]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

 * [RadTileList Responsive Layout: CSS Rules]({%slug tilelist/appearance-and-styling/css-for-responsive-layout%})

 * [RadTileList Responsive Layout: Live Demo](http://demos.telerik.com/responsive-web-design-aspnet/samples/responsive/tilelist.aspx)

 * [RadTileList Client-side API]({%slug tilelist/client-side-programming/tilelist-object%})
