---
title: OnClientNodeClicking
page_title: OnClientNodeClicking | UI for ASP.NET AJAX Documentation
description: OnClientNodeClicking
slug: navigation/client-side-programming/events/onclientnodeclicking
tags: onclientnodeclicking
published: True
position: 2
---

# OnClientNodeClicking

The following article demonstrates how to use and subscribe to the __OnClientNodeClicking__ client-side event of the __RadNavigation__ control.

## 

The client-side __OnClientNodeClicking__ event of the __RadNavigation__ is raised when the user attempts to click on a Node. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the __OnClientNodeClicked__ property. This event could be canceled and the technique for achieving this is demonstrated in __Example 1__.

The client-side __OnClientNodeClicking__ event handler receives two arguments:

* sender — the RadNavigation object that fired the event.

* Event arguments — an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that has just been clicked.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|

__Example 1__: Handle the __RadNavigation__'s client-side __OnClientNodeClicked__ event.

````JavaScript
<script type="text/javascript">
	function OnClientNodeClicking(sender, eventArgs) {
		var clickedNodeText = eventArgs.get_node().get_text();
		if (clickedNodeText == "Node2") {
			eventArgs.set_cancel(true);
		}
	}
</script>

<telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeClicking="OnClientNodeClicking">
	<Nodes>
		<telerik:NavigationNode Text="Node1"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	</Nodes>
</telerik:RadNavigation>
````


