---
title: OnClientItemClicking
page_title: OnClientItemClicking | UI for ASP.NET AJAX Documentation
description: OnClientItemClicking
slug: tagcloud/client-side-programming/events/onclientitemclicking
tags: onclientitemclicking
published: True
position: 2
---

# OnClientItemClicking



The __OnClientItemClicking__ event occurs when an item of the __RadTagCloud__ control is clicked,	immediately after the mouse button is released. The event is fired before the client-side validation occurs, and can be canceled

## 

The event handler receives two parameters:

1. __Sender__–the [TagCould object]({%slug tagcloud/client-side-programming/tagcloud-object%}) that fired the event.

1. __Event arguments__–event arguments object of type __Telerik.Web.UI.RadTagCloudEventArgs__, that exposes the following properties and methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_item||RadTagCloudItem|Returns the client-side object of the clicked item.|
|get_cancel||Bool|Returns a bool value that indicates whether the event was canceled. True means the event is canceled.|
|set_cancel|bool||Sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.|

__Example 1:__ Shows how you can use the __OnClientItemClicking__event to cancel the [OnClientClicked]({%slug tagcloud/client-side-programming/events/onclientitemclicked%}) event firing upon programmatic rule.

````ASPNET
			<telerik:RadTagCloud runat="server" ID="RadTagCloud1" 
				OnClientItemClicking="OnClientItemClicking" OnClientItemClicked="OnClientItemClicked">
				<Items>
					<telerik:RadTagCloudItem Text="Item 1" />
					<telerik:RadTagCloudItem Text="Item 2" />
				</Items>
			</telerik:RadTagCloud>
	
			<script type="text/javascript">
				function OnClientItemClicking(sender, args) {
					var item = args.get_item();
					var text = item.get_text();
					var proceedToClicked = !confirm("You clicked on Item with text \"" + text + "\".\nContinue?")
					// Note, argument value of true will prevent the further execution of the clicked event
					args.set_cancel(proceedToClicked);
				}
	
				function OnClientItemClicked(sender, args) {
					var item = args.get_item();
					var text = item.get_text();
	
					alert("Item with text \"" + text + "\" was clicked!");
				}
			</script>
````



# See Also

 * [TagCloud Client-side object]({%slug tagcloud/client-side-programming/tagcloud-object%})

 * [Overview]({%slug tagcloud/client-side-programming/events/overview%})

 * [OnClientItemClicked]({%slug tagcloud/client-side-programming/events/onclientitemclicked%})
