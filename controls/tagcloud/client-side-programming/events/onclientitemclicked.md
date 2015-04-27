---
title: OnClientItemClicked
page_title: OnClientItemClicked | RadTagCloud for ASP.NET AJAX Documentation
description: OnClientItemClicked
slug: tagcloud/client-side-programming/events/onclientitemclicked
tags: onclientitemclicked
published: True
position: 3
---

# OnClientItemClicked



The **OnClientItemClicked** event occurs when an item of the **RadTagCloud** control is clicked,	immediately after the [OnClientItemClicking]({%slug tagcloud/client-side-programming/events/onclientitemclicking%}) event.

## 

The event handler receives two parameters:

1. **Sender**–the [TagCould object]({%slug tagcloud/client-side-programming/tagcloud-object%}) that fired the event.

1. **Event arguments**–event arguments object of type **Telerik.Web.UI.RadTagCloudEventArgs**, that exposes the following properties and methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_item||RadTagCloudItem|Returns the client-side object of the clicked item.|

**Example 1:** Shows how you can use the **OnClientItemClicked**event to alert the text of the clicked item.

````ASPNET
			<telerik:RadTagCloud runat="server" ID="RadTagCloud1" OnClientItemClicked="OnClientItemClicked">
				<Items>
					<telerik:RadTagCloudItem Text="Item 1" />
					<telerik:RadTagCloudItem Text="Item 2" />s
				</Items>
			</telerik:RadTagCloud>
	
			<script type="text/javascript">
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

 * [OnClientItemClicking]({%slug tagcloud/client-side-programming/events/onclientitemclicking%})
