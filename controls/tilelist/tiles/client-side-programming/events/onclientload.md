---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: tilelist/tiles/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 2
---

# OnClientLoad



## 

The __OnClientLoad__ event is raised when the client-side object of a	[Tile]({%slug tilelist/tiles/overview%}) is initialized and it can be used. This event was added in__Q3 2013 SP2__.

The event can be used to apply some customization or to store a reference to the control so it can be used in external JavaScript files.

The event handler receives one argument - the control instance that fired the event.

__Example 1: Storing a reference to a tile when it loads.__

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


