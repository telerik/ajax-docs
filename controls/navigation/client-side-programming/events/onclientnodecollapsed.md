---
title: OnClientNodeCollapsed
page_title: OnClientNodeCollapsed | UI for ASP.NET AJAX Documentation
description: OnClientNodeCollapsed
slug: navigation/client-side-programming/events/onclientnodecollapsed
tags: onclientnodecollapsed
published: True
position: 5
---

# OnClientNodeCollapsed

The following article demonstrates how to use and subscribe to the **OnClientNodeCollapsed** client-side event of the **RadNavigation** control.

## 

The client-side **OnClientNodeCollapsed** event of the **RadNavigation** is raised immediately after some expanded Node is collapsed. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientNodeClicked** property.The client-side **OnClientNodeCollapsed** event handler receives two arguments:

* sender — the RadNavigation object that fired the event.

* Event arguments — an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that has just been collapsed.|

**Example 1**: Handle the **RadNavigation**'s client-side **OnClientNodeCollapsed** event.

````JavaScript
<script type="text/javascript">
	function OnClientNodeCollapsed(sender, eventArgs) {
		alert("the Node that has just been collapsed has text: " + eventArgs.get_node().get_text());
	}
</script>

<telerik:RadNavigation runat="server" ID="RadNavigation1" OnClientNodeCollapsed="OnClientNodeCollapsed">
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


