---
title: OnClientNodeExpanding
page_title: OnClientNodeExpanding | UI for ASP.NET AJAX Documentation
description: OnClientNodeExpanding
slug: navigation/client-side-programming/events/onclientnodeexpanding
tags: onclientnodeexpanding
published: True
position: 6
---

# OnClientNodeExpanding



The following article demonstrates how to use and subscribe to the __OnClientNodeExpanding__ client-side event of the __RadNavigation__ control.

## Optional section title

The client-side __OnClientNodeExpanding__ event of the __RadNavigation__ is raised when some Node is about be expanded. The expand of some node could appear when the mouse is moved on the node. In scenario when the __ClickToOpen__property of the RadNavigation is set to __true__, the expand will be fired when the node is clicked.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the __OnClientNodeExpanding__ property. This event could be canceled and the technique for achieving this is demonstrated in __Example 1__.

The client-side __OnClientNodeExpanding__ event handler receives two arguments:

* Sender — the RadNavigation object that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that is about to be expanded.|

__Example 1__: Handle the __RadNavigation__'s client-side__OnClientNodeExpanding__ event in order to cancel its propagation.

````JavaScript
	            <script type="text/javascript">
	                function OnClientNodeExpanding(sender, eventArgs) {
	                    var expandNodeText = eventArgs.get_node().get_text();
	
	                    if (expandNodeText == "Node1")
	                        eventArgs.set_cancel(true);
	                }
	            </script>
	
	            <telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeExpanding="OnClientNodeExpanding">
	                <Nodes>
	                    <telerik:NavigationNode Text="Node1">
	                        <Nodes>
	                            <telerik:NavigationNode Text="ChildNode1"></telerik:NavigationNode>
	                            <telerik:NavigationNode Text="ChildNode2"></telerik:NavigationNode>
	                            <telerik:NavigationNode Text="ChildNode3"></telerik:NavigationNode>
	                            <telerik:NavigationNode Text="ChildNode4"></telerik:NavigationNode>
	                        </Nodes>
	                    </telerik:NavigationNode>
	                    <telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
	                    <telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	                </Nodes>
	            </telerik:RadNavigation>
````


