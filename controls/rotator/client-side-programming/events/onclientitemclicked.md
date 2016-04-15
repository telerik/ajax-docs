---
title: OnClientItemClicked
page_title: OnClientItemClicked | RadRotator for ASP.NET AJAX Documentation
description: OnClientItemClicked
slug: rotator/client-side-programming/events/onclientitemclicked
tags: onclientitemclicked
published: True
position: 2
---

# OnClientItemClicked

The event **ItemClicked** is subsequent to the **ItemClicking** (**OnClientItemClicking**) event and occurs when an item of the RadRotator control is clicked. The event is fired after the client-side validation is completed, just before the page is submitted, and cannot be cancelled.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type Telerik.Web.UI.**RadRotatorEventArgs** containing the following properties and methods:

	* get_item() - returns the client object of the clicked item.

This event can be used for executing a custom code when an item of the RadRotator is clicked. The example below demonstrates how to show the index of the currently displayed item.

````ASP.NET
<script type="text/javascript">
	function OnClientItemClicked(sender, eventArgs) {
		var eventLog = $get("eventLog");
		eventLog.innerHTML = "You clicked an item with index " + eventArgs.get_item().get_index();
	}
</script>
<telerik:RadRotator RenderMode="Lightweight" ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
	ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientItemClicked="OnClientItemClicked">
	<ItemTemplate>
		<img src=".........." alt="" />
	</ItemTemplate>
</telerik:RadRotator>
<div id="eventLog"></div>
````


