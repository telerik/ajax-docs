---
title: OnClientNodeMouseLeave
page_title: OnClientNodeMouseLeave | RadNavigation for ASP.NET AJAX Documentation
description: OnClientNodeMouseLeave
slug: navigation/client-side-programming/events/onclientnodemouseleave
tags: onclientnodemouseleave
published: True
position: 9
---

# OnClientNodeMouseLeave

The following article demonstrates how to use and subscribe to the **OnClientNodeMouseLeave** client-side event of the **RadNavigation** control.

## 

The client-side **OnClientNodeMouseLeave** event of the **RadNavigation** is raised when the mouse leaves a Node. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientNodeMouseLeave** property. 

The client-side **OnClientNodeMouseLeave** event handler receives two arguments:

1. sender — the RadNavigation object that fired the event.

1. Event arguments — an event arguments object that exposes the following methods:

* **get_node()** returns a reference NavigationNode that the mouse just left.

* **get_domEvent()** returns a reference to the DOM event object for the mouse movement.


**Example 1**: Handle the **RadNavigation**'s client-side **OnClientNodeMouseLeave** event.

````JavaScript
<script type="text/javascript">
    var timeOut;
	function OnClientNodeMouseLeave(sender, eventArgs) {
		 var $ = $telerik.$,
                  node = args.get_node(),
                  event = args.get_domEvent();
 
        if (node.get_hidden()) {
            return;
        }
 
        isMouseOverNode = false;
 
        if ($(event.relatedTarget).closest(node.get_animationContainer()).length > 0) {
            return;
        }
 
        timeOut = setTimeout(function() {
            if (!isMouseOverNode) {
                if (sender.get_expandedNode()) {
                    sender.get_expandedNode().collapse();
                }
            }
        }, 300);
	}
</script>

<telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeMouseLeave="OnClientNodeMouseLeave">
	<Nodes>
		<telerik:NavigationNode Text="Node1"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	</Nodes>
</telerik:RadNavigation>
````

## See Also

 * [Demo: Navigation - Expand On Hover](http://demos.telerik.com/aspnet-ajax/navigation/functionality/expand-on-hover/defaultcs.aspx)

 
 