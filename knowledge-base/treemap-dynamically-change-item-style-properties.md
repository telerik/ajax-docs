---
title: Dynamically Change Leaf Style Properties
description: It is possible to dynamically change the AJAX TreeMap control's style properties. Read this article for how to do this.
type: how-to
page_title: How to Change TreeMap Item Style Properties Dynamically
slug: treemap-dynamically-change-item-style-properties
position: 
tags: 
ticketid: 1459669
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2017.3.913</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadTreeMap for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

In some scenarios it may be desirable to change the style properties of a TreeMap item based on the value of other style properties.

Since the TreeMap is a wrapper around the [Kendo UI TreeMap API](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap) it includes a client-side event for itemCreated. This also maps to the AJAX [OnClientItemCreated](https://docs.telerik.com/devtools/aspnet-ajax/controls/treemap/client-side-programming/events/onclientitemcreated) client-side event.

## Solution

Use the AJAX client-side event argument to get the element and alter the style properties. See the below sample for more details.


````ASPNET
<telerik:RadTreeMap Skin="Metro" RenderMode="Lightweight" runat="server" ID="TreeMap1" Width="1000px" AlgorithmType="Squarified" OnClientItemCreated="OnClientItemCreated">
</telerik:RadTreeMap>
````
````JavaScript
function OnClientItemCreated(sender, args) {
    var el = args.get_element();
    switch (el.style.backgroundColor) {
        case "rgb(248, 157, 38)":
            el.style.color = "purple";
        case "rgb(195, 130, 45)":
            el.style.color = "green";
        default:
    }
}
````


## See Also

* [Kendo UI TreeMap API](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap)
* [OnClientItemCreated](https://docs.telerik.com/devtools/aspnet-ajax/controls/treemap/client-side-programming/events/onclientitemcreated)
