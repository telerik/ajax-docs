---
title: OnClientNodeCollapsing
page_title: OnClientNodeCollapsing | UI for ASP.NET AJAX Documentation
description: OnClientNodeCollapsing
slug: navigation/client-side-programming/events/onclientnodecollapsing
tags: onclientnodecollapsing
published: True
position: 4
---

# OnClientNodeCollapsing

The following article demonstrates how to use and subscribe to the __OnClientNodeCollapsing__ client-side event of the __RadNavigation__ control.

## 

The client-side __OnClientNodeCollapsing__ event of the __RadNavigation__ is raised when some expanded Node is about be collapsed. The collapse of some node could appear when the mouse is moved out from the node. In scenario when the __ClickToOpen__ property of the RadNavigation is set to __true__, the collapse will be fired when the expandednode is clicked or when you click on the document.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value ofthe __OnClientNodeCollapsing__ property. This event could be canceled and the technique for achieving this is demonstrated in __Example 1__.

The client-side __OnClientNodeCollapsing__ event handler receives two arguments:

* Sender — the RadNavigation object that fired the event.

* Event arguments — an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that is about to be collapsed.|

__Example 1__: Handle the __RadNavigation__'s client-side __OnClientNodeCollapsing__ event.

````JavaScript
<script type="text/javascript">
	function OnClientNodeCollapsing(sender, eventArgs) {
		eventArgs.set_cancel(true);
	}
</script>

<telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeCollapsing="OnClientNodeCollapsing">
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


