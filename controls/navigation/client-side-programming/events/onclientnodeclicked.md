---
title: OnClientNodeClicked
page_title: OnClientNodeClicked - RadNavigation
description: Check our Web Forms article about OnClientNodeClicked.
slug: navigation/client-side-programming/events/onclientnodeclicked
tags: onclientnodeclicked
published: True
position: 3
---

# OnClientNodeClicked

The following article demonstrates how to use and subscribe to the **OnClientNodeClicked** client-side event of the **RadNavigation** control.

## 

The client-side **OnClientNodeClicked** event of the **RadNavigation** is raised immediately after the user clicks on a Node. To handle this event, simply write a JavaScript function that can be called when the event occurs.Then assign the name of this function as the value of the **OnClientNodeClicked** property.The client-side **OnClientNodeClicked** event handler receives two arguments:

* sender — the RadNavigation object that fired the event.

* Event arguments—an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that has just been clicked.|

**Example 1**: Handle the **RadNavigation**'s client-side **OnClientNodeClicked** event.

````JavaScript
<script type="text/javascript">
	function OnClientNodeClicked(sender, eventArgs) {
		var clickedNodeText = eventArgs.get_node().get_text();
		alert("You have just clicked on node with text " + clickedNodeText);
	}
</script>

<telerik:radnavigation runat="server" id="RadNavigation1" onclientnodeclicked="OnClientNodeClicked">
	<Nodes>
		<telerik:NavigationNode Text="Node1"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	</Nodes>
</telerik:radnavigation>
````


