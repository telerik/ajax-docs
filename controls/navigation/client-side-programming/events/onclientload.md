---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: navigation/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad

The following article demonstrates how to use and subscribe to the __OnClientLoad__ client-side event of the __RadNavigation__ control.

## 

The __OnClientLoad__ event occurs after the __RadNavigation__ has been fully initialized at the client-side.The event handler receives one parameter:

* sender - the RadNavigation object that fired the event.

__Example 1__: Handle the __RadNavigation__'s client-side __OnClientLoad__ event.

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


