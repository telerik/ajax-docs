---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: tilelist/client-side-programming/client-side-events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



## 

The __OnClientLoad__ event is raised when the RadTileList object is initialized. It can notify the developer that the control isavailable (e.g. to store a reference to its client-side object for later use). For example, event handlers can be attached dynamically through the[Client-side API]({%slug tilelist/client-side-programming/tilelist-object%}) of the RadTileList.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an empty event arguments object

The following example shows how to set the __SelectionMode__ of a RadTileList in its __OnClientLoad__ event.

````JavaScript
		<telerik:RadTileList runat="server" ID="RadTileList1" OnClientLoad="OnClientLoad" AutoPostBack="true">
			<Groups>
				<telerik:TileGroup>
					<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"></telerik:RadTextTile>
				</telerik:TileGroup>
			</Groups>
		</telerik:RadTileList>
	
		<telerik:RadCodeBlock runat="server" ID="RadCodeBlock1">
			<script type="text/javascript">
				function OnClientLoad(sender, args) {
					var tileList = $find("<%= RadTileList1.ClientID %>");
	
					tileList.set_selectionMode(Telerik.Web.UI.TileList.TileListSelectionMode.Single);
					//equivalent to tileList.set_selectionMode(2);
				
					//tileList.set_selectionMode(Telerik.Web.UI.TileList.TileListSelectionMode.None);
					//equivalent to tileList.set_selectionMode(1); 
				
					//tileList.set_selectionMode(Telerik.Web.UI.TileList.TileListSelectionMode.Multiple);
					//equivalent to tileList.set_selectionMode(4);
	
					alert(String.format("Selection Mode set to: Single, ({0})", tileList.get_selectionMode()));
				}
			</script>
		</telerik:RadCodeBlock>
````



The code snippet below demonstrates how an event handler can be attached in the __OnClientLoad__ event of the __RadTileList__.

````JavaScript
		<telerik:RadTileList runat="server" ID="RadTileList1" OnClientLoad="OnClientLoad" AutoPostBack="false">
			<Groups>
				<telerik:TileGroup>
					<telerik:RadTextTile Name="Sample Text Tile" Text="Lorem ipsum dolor sit amet" Title-Text="Sample"></telerik:RadTextTile>
				</telerik:TileGroup>
			</Groups>
		</telerik:RadTileList>
	
		<script type="text/javascript">
			function OnClientLoad(tileList, args) {
				tileList.add_tileClicked(OnTileClickHandler);
			}
	
			function OnTileClickHandler() {
				alert('A Tile is clicked.');
			}
		</script>
````


