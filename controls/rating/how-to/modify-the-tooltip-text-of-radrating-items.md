---
title: Modify the Tooltip Text of RadRating Items
page_title: Modify the Tooltip Text of RadRating Items - RadRating
description: Check our Web Forms article about Modify the Tooltip Text of RadRating Items.
slug: rating/how-to/modify-the-tooltip-text-of-radrating-items
tags: modify,the,tooltip,text,of,radrating,items
published: True
position: 1
---

# Modify the Tooltip Text of RadRating Items

By default the text that appears in the tooltips of the RadRating items is determined by the value of the hovered item. There is a way to modify this text via the [client-side API of the control]({%slug rating/client-side-programming/overview%}).

The following approach can be used for changing the tooltip text of the items:

1. The data of the rating items is retrieved on the client-side by calling the function **get_itemData()** of RadRating.

1. The collection, returned from the function is iterated through and the **tooltip** field of each item in the collection (which corresponds to an item of the rating) is set with the new text that should appear in the tooltip.

The code sample below demonstrates how to configure the rating to show textual representation of each item when hovered:

````ASP.NET
<script type="text/javascript">
	var rating = ["Bad", "Fair", "Average", "Good", "Excellant"];

	function OnClientLoad(sender, args) {
		var itemData = sender.get_itemData();
		for (i in itemData) {
			itemData[i].tooltip = rating[itemData[i].index];
		}
	}
</script>
<telerik:RadRating RenderMode="Lightweight" ID="RadRating1" runat="server" Precision="Item" SelectionMode="Continuous"
	OnClientLoad="OnClientLoad" ItemCount="5">
</telerik:RadRating>
````

# See Also

 * [RadRating Client-Side API]({%slug rating/client-side-programming/overview%})
