---
title: OnClientNodeMouseEnter
page_title: OnClientNodeMouseEnter | RadNavigation for ASP.NET AJAX Documentation
description: OnClientNodeMouseEnter
slug: navigation/client-side-programming/events/onclientnodemouseenter
tags: onclientnodemouseenter
published: True
position: 8
---

# OnClientNodeMouseEnter

The following article demonstrates how to use and subscribe to the **OnClientNodeMouseEnter** client-side event of the **RadNavigation** control.

## 

The client-side **OnClientNodeMouseEnter** event of the **RadNavigation** is raised when the mouse enters a Node. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientNodeMouseEnter** property.

The client-side **OnClientNodeMouseEnter** event handler receives two arguments:

1. sender — the RadNavigation object that fired the event.

1. Event arguments — an event arguments object that exposes the following methods:

* **get_node()** returns a reference NavigationNode that the mouse just entered.

* **get_domEvent()** returns a reference to the DOM event object for the mouse movement.

**Example 1**: Handle the **RadNavigation**'s client-side **OnClientNodeMouseEnter** event.

````JavaScript
<script type="text/javascript">
    var timeOut;
	function OnClientNodeMouseEnter(sender, eventArgs) {
		var node = args.get_node(),
                  expandedSubling = node.get_parent().get_expandedNode();
 
        if (node.get_hidden()) {
            return;
        }
 
        clearTimeout(timeOut);
 
        if (node.get_expandedNode()) {
            node.get_expandedNode().collapse();
            return;
        }
 
        if (expandedSubling && expandedSubling !== node) {
            expandedSubling.collapse(true);
        }
 
        if (!node.get_expanded()) {
 
            node.expand();
        }
		
        isMouseOverNode = true;
	}
</script>

<telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeMouseEnter="OnClientNodeMouseEnter">
	<Nodes>
		<telerik:NavigationNode Text="Node1"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	</Nodes>
</telerik:RadNavigation>
````

## See Also

* [Demo: Navigation - Expand On Hover](http://demos.telerik.com/aspnet-ajax/navigation/functionality/expand-on-hover/defaultcs.aspx)

* [Expand and collapse delay on hover in RadNavigation](https://www.telerik.com/support/code-library/expand-and-collapse-delay-on-hover-in-radnavigation) Code Library project

