---
title: OnClientItemClicking
page_title: OnClientItemClicking | UI for ASP.NET AJAX Documentation
description: OnClientItemClicking
slug: rotator/client-side-programming/events/onclientitemclicking
tags: onclientitemclicking
published: True
position: 3
---

# OnClientItemClicking



## 

The __ItemClicking__ event occurs when an item of the the RadRotator control is clicked, immediately after the mouse button is released and before the event __ItemClicked__ (__OnClientItemClicked__). The event is fired before the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The RadRotator instance that fired the event.

1. An eventArgs parameter of type Telerik.Web.UI.__RadRotatorCancelEventArgs__ containing the following properties and methods:

* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

* get_item() - returns the client object of the clicked item.

This event can be used for executing a custom code before the click event of the RadRotator is fired. The example below demonstrates how to cancel the clicking event if the user doesn’t confirm it in the displayed dialog.

````ASPNET
		<script type="text/javascript">
			function OnClientItemClicking(sender, eventArgs) {
				eventArgs.set_cancel(!window.confirm("Are you sure you want to click on the item with index " + eventArgs.get_item().get_index() + "?"));
			}
		</script>
		<telerik:RadRotator ID="RadRotator1" runat="server" ScrollDirection="Left" Height="113px"
			ItemHeight="113px" Width="150px" ItemWidth="150px" OnClientItemClicking="OnClientItemClicking" 
			AutoPostBack="true">
			<ItemTemplate>
				<img src=".........." alt="" />
			</ItemTemplate>
		</telerik:RadRotator>
````


