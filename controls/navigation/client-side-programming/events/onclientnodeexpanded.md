---
title: OnClientNodeExpanded
page_title: OnClientNodeExpanded - RadNavigation
description: Check our Web Forms article about OnClientNodeExpanded.
slug: navigation/client-side-programming/events/onclientnodeexpanded
tags: onclientnodeexpanded
published: True
position: 7
---

# OnClientNodeExpanded

The following article demonstrates how to use and subscribe to the **OnClientNodeExpanded** client-side event of the **RadNavigation** control.

## 

The client-side **OnClientNodeExpanded** event of the **RadNavigation** is raised immediately after some Node is expanded. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientNodeClicked** property.The client-side **OnClientNodeExpanded** event handler receives two arguments:

* sender — the RadNavigation object that fired the event.

* Event arguments — an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that has just been expanded.|

**Example 1**: Handle the **RadNavigation**'s client-side **OnClientNodeExpanded** event.

````JavaScript
<script type="text/javascript">
	function OnClientNodeExpanded(sender, eventArgs) {
		alert("the Node that has just been expanded has text: " + eventArgs.get_node().get_text());
	}
</script>

<telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeExpanded="OnClientNodeExpanded">
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


