---
title: OnClientItemShowing
page_title: OnClientItemShowing - RadRotator
description: Check our Web Forms article about OnClientItemShowing.
slug: rotator/client-side-programming/events/onclientitemshowing
tags: onclientitemshowing
published: True
position: 4
---

# OnClientItemShowing

The **ItemShowing** event occurs when an item of the RadRotator control is about to be shown, before the **ItemShown** event (**OnClientItemShown**). This event can be canceled.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type Telerik.Web.UI.**RadRotatorCancelEventArgs** containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_item() - returns the client object of the item that was displayed before rotating to a new one.

This event can be used for executing a custom code before a new item of the RadRotator is shown. The example below demonstrates how to cancel the rotation before the RadRotator reaches the item with index 2.

````ASP.NET
<script type="text/javascript">
	function OnClientItemShowing(sender, eventArgs) {
		var oldItemIndex = eventArgs.get_item().get_index();
		if (oldItemIndex == 1) {
			eventArgs.set_cancel(true);
		}
	}
</script>
<telerik:RadRotator RenderMode="Lightweight" ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
	ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientItemShowing="OnClientItemShowing">
	<ItemTemplate>
		<img src=".........." alt="" />
	</ItemTemplate>
</telerik:RadRotator>
````


