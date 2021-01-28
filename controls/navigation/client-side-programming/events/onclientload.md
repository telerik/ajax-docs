---
title: OnClientLoad
page_title: OnClientLoad - RadNavigation
description: Check our Web Forms article about OnClientLoad.
slug: navigation/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad

The following article demonstrates how to use and subscribe to the **OnClientLoad** client-side event of the **RadNavigation** control.

## 

The **OnClientLoad** event occurs after the **RadNavigation** has been fully initialized at the client-side.The event handler receives one parameter:

* sender - the RadNavigation object that fired the event.

**Example 1**: Handle the **RadNavigation**'s client-side **OnClientLoad** event.

````JavaScript
<script type="text/javascript">
	function OnClientLoad(sender) {
		var navigation = sender;
		var nodesNumber = navigation.get_nodes().get_count();
		alert("The RadNavigation client-side object is fully loaded and the number of nodes is " + nodesNumber);
	}
</script>

<telerik:radnavigation runat="server" id="RadNavigation1" onclientload="OnClientLoad">
	<Nodes>
		<telerik:NavigationNode Text="Node1"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node2"></telerik:NavigationNode>
		<telerik:NavigationNode Text="Node3"></telerik:NavigationNode>
	</Nodes>
</telerik:radnavigation>
````


