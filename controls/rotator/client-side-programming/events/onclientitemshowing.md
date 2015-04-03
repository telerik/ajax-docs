---
title: OnClientItemShowing
page_title: OnClientItemShowing | UI for ASP.NET AJAX Documentation
description: OnClientItemShowing
slug: rotator/client-side-programming/events/onclientitemshowing
tags: onclientitemshowing
published: True
position: 4
---

# OnClientItemShowing



## 

The __ItemShowing__ event occurs when an item of the RadRotator control is about to be shown, before the __ItemShown__ event (__OnClientItemShown__). This event can be canceled.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type Telerik.Web.UI.__RadRotatorCancelEventArgs__ containing the following properties and methods:

* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

* get_item() - returns the client object of the item that was displayed before rotating to a new one.

This event can be used for executing a custom code before a new item of the RadRotator is shown. The example below demonstrates how to cancel the rotation before the RadRotator reaches the item with index 2.

````ASPNET
		<script type="text/javascript">
			function OnClientItemShowing(sender, eventArgs) {
				var oldItemIndex = eventArgs.get_item().get_index();
				if (oldItemIndex == 1) {
					eventArgs.set_cancel(true);
				}
			}
		</script>
		<telerik:RadRotator ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
			ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientItemShowing="OnClientItemShowing">
			<ItemTemplate>
				<img src=".........." alt="" />
			</ItemTemplate>
		</telerik:RadRotator>
````


