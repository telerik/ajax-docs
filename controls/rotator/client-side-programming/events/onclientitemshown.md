---
title: OnClientItemShown
page_title: OnClientItemShown - RadRotator
description: Check our Web Forms article about OnClientItemShown.
slug: rotator/client-side-programming/events/onclientitemshown
tags: onclientitemshown
published: True
position: 5
---

# OnClientItemShown

The **ItemShown** event occurs when an item of the RadRotator control is shown. The event is subsequent to the **ItemShowing** event (**OnClientItemShowing**) and it cannot be canceled.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type Telerik.Web.UI.**RadRotatorEventArgs** containing the following properties and methods:

	* get_item () - returns the client object of the currently displayed item.

This event can be used for executing a custom code when a new item of the RadRotator is shown. The example below demonstrates how to display the index of the current item.

````ASP.NET
<script type="text/javascript">
	function OnClientItemShown(sender, eventArgs) {
		var eventLog = $get("eventLog");
		eventLog.innerHTML = "Currently showing item with index " + eventArgs.get_item().get_index();
	}
</script>
<telerik:RadRotator RenderMode="Lightweight" ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
	ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientItemShown="OnClientItemShown">
	<ItemTemplate>
		<img src=".........." alt="" />
	</ItemTemplate>
</telerik:RadRotator>
<div id="eventLog"></div>
````


