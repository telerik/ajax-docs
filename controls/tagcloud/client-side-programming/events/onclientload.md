---
title: OnClientLoad
page_title: OnClientLoad | RadTagCloud for ASP.NET AJAX Documentation
description: OnClientLoad
slug: tagcloud/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



The **OnClientLoad** event is raised when the **RadTagCloud** object is loaded on the page.	It can notify the developer that the control is available for further client-side programmatic interaction.

## 

The event handler receives two arguments:

* **Sender**–the [TagCould object]({%slug tagcloud/client-side-programming/tagcloud-object%}) that fired the event.

* **Event arguments**–an empty event arguments object.

**Example 1**: Shows how you can use the event to alert the count of the loaded items in the TagCloud.

````ASPNET
					<telerik:RadTagCloud runat="server" ID="RadTagCloud1" OnClientLoad="OnClientLoad">
				<Items>
					<telerik:RadTagCloudItem Text="Item 1" />
					<telerik:RadTagCloudItem Text="Item 2" />
				</Items>
			</telerik:RadTagCloud>
	
			<script type="text/javascript">
				function OnClientLoad(sender, args) {
					var loadedItems = sender.get_items().length;
	
					alert("The TagCload is loaded with " + loadedItems + " items.");
				}
			</script>
````



# See Also

 * [TagCloud Client-side object]({%slug tagcloud/client-side-programming/tagcloud-object%})

 * [Overview]({%slug tagcloud/client-side-programming/events/overview%})
