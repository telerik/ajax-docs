---
title: OnClientMouseOver
page_title: OnClientMouseOver - RadRotator
description: Check our Web Forms article about OnClientMouseOver.
slug: rotator/client-side-programming/events/onclientmouseover
tags: onclientmouseover
published: True
position: 10
---

# OnClientMouseOver

The **mouseOver** event is fired when the user moves the mouse pointer over the control.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type **Telerik.Web.UI.RadRotatorEventArgs**, containing the following properties and methods:

	* get_item() - returns the client object of the item that is hovered with the cursor.

This event can be used for executing a custom code when the mouse pointer is moved over the RadRotator. The example below demonstrates how to display the index of the currently hovered item.

````ASP.NET
<script type="text/javascript">
	function OnClientMouseOver(sender, eventArgs) {
		var eventLog = $get("eventLog");
		eventLog.innerHTML = "You placed the mouse over an item with index " + eventArgs.get_item().get_index();
	}
</script>
<telerik:RadRotator RenderMode="Lightweight" ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
	ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientMouseOver="OnClientMouseOver">
	<ItemTemplate>
		<img src=".........." alt="" />
	</ItemTemplate>
</telerik:RadRotator>
<div id="eventLog"></div>
````


