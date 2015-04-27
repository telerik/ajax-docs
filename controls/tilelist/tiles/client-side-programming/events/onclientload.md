---
title: OnClientLoad
page_title: OnClientLoad | RadTileList for ASP.NET AJAX Documentation
description: OnClientLoad
slug: tilelist/tiles/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad



## 

The **OnClientLoad** event is raised when the client-side object of a	[Tile]({%slug tilelist/tiles/overview%}) is initialized and it can be used. This event was added in**Q3 2013 SP2**.

The event can be used to apply some customization or to store a reference to the control so it can be used in external JavaScript files.

The event handler receives one argument - the control instance that fired the event.

**Example 1: Storing a reference to a tile when it loads.**

````ASPNET
		<telerik:RadTextTile runat="server" ID="RadTextTile1" Text="I am a text tile" OnClientLoad="storeReference">
		</telerik:RadTextTile>
		<script type="text/javascript">
			var tiles = [];
			function storeReference(sender, args) {
				tiles.push(sender);
				alert(tiles.length);
			}
		</script>
````


