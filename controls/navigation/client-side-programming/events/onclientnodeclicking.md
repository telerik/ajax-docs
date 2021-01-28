---
title: OnClientNodeClicking
page_title: OnClientNodeClicking - RadNavigation
description: Check our Web Forms article about OnClientNodeClicking.
slug: navigation/client-side-programming/events/onclientnodeclicking
tags: onclientnodeclicking
published: True
position: 2
---

# OnClientNodeClicking

The following article demonstrates how to use and subscribe to the **OnClientNodeClicking** client-side event of the **RadNavigation** control.

## 

The client-side **OnClientNodeClicking** event of the **RadNavigation** is raised when the user attempts to click on a Node. To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientNodeClicked** property. This event could be canceled and the technique for achieving this is demonstrated in **Example 1**.

The client-side **OnClientNodeClicking** event handler receives two arguments:

* sender — the RadNavigation object that fired the event.

* Event arguments — an event arguments object that exposes the following methods:


>caption ButtonClicking Event Arguments Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|get_node()||Telerik.Web.UI.NavigationNode|Returns an instance of NavigationNode that has just been clicked.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|

**Example 1**: Handle the **RadNavigation**'s client-side **OnClientNodeClicked** event.

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


