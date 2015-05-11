---
title: OnClientMouseOut
page_title: OnClientMouseOut | RadRotator for ASP.NET AJAX Documentation
description: OnClientMouseOut
slug: rotator/client-side-programming/events/onclientmouseout
tags: onclientmouseout
published: True
position: 9
---

# OnClientMouseOut

The **mouseOut** event is fired when the mouse pointer leaves the control.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type **Telerik.Web.UI.RadRotatorEventArgs**, containing the following properties and methods:

	* get_item() - returns the client object of the item that was hovered, before moving the mouse pointer.

This event can be used for executing a custom code when the mouse pointer leaves the RadRotator. The example below demonstrates how to display the index of the previously hovered item.

````ASP.NET
<script type="text/javascript">
	function OnClientMouseOut(sender, eventArgs) {
		var eventLog = $get("eventLog");
		eventLog.innerHTML = "You moved the cursor out of item with index " + eventArgs.get_item().get_index();
	}
</script>
<telerik:RadRotator ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
	ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientMouseOut="OnClientMouseOut">
	<ItemTemplate>
		<img src=".........." alt="" />
	</ItemTemplate>
</telerik:RadRotator>
<div id="eventLog"></div>
````


