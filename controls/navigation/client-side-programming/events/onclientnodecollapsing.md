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

The following article demonstrates how to use and subscribe to the **OnClientNodeCollapsing** client-side event of the **RadNavigation** control.

## 

The client-side **OnClientNodeCollapsing** event of the **RadNavigation** is raised when some expanded Node is about be collapsed. The collapse of some node could appear when the mouse is moved out from the node. In scenario when the **ClickToOpen** property of the RadNavigation is set to **true**, the collapse will be fired when the expandednode is clicked or when you click on the document.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value ofthe **OnClientNodeCollapsing** property. This event could be canceled and the technique for achieving this is demonstrated in **Example 1**.

The client-side **OnClientNodeCollapsing** event handler receives two arguments:

* Sender — the RadNavigation object that fired the event.

* Event arguments — an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that is about to be collapsed.|

**Example 1**: Handle the **RadNavigation**'s client-side **OnClientNodeCollapsing** event.

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


