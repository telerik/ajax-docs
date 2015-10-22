---
title: OnClientItemsRequesting
page_title: OnClientItemsRequesting | RadComboBox for ASP.NET AJAX Documentation
description: OnClientItemsRequesting
slug: combobox/client-side-programming/events/onclientitemrequesting
tags: onclientitemsrequesting
published: True
position: 11
---

# OnClientItemsRequesting



## 

The **OnClientItemsRequesting** client-side event occurs when **EnableLoadOnDemand** is **True** and the combobox is about to send a server-side request to load more items. This event fires before the items are added to the combobox' Items collection.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_text** returns the text currently in the input area.

* **get_context** returns a context object (implements **IDictionary**) that is passed to the server-side code that handles the request for items.

* **set_cancel** lets you prevent the items request.

* **get_domEvent()** returns the DOM event object.

This event can be used to [pass context information to the server]({%slug combobox/load-on-demand/passing-context-information-to-the-server-%}) for it to use in servicing the load-on-demand request, or to cancel the load-on-demand request. The following example uses the **OnClientItemsRequesting** event to prevent the combobox from requesting more items unless the user types at least three characters:

````JavaScript
<script language="javascript" type="text/javascript">
	function OnClientItemsRequesting(sender, eventArgs) {
		if (eventArgs.get_text().length < 3)
			eventArgs.set_cancel(true)
		else
			eventArgs.set_cancel(false);
	}
</script>
````



````ASPNET
<telerik:RadComboBox
  ID="RadComboBox1"
  runat="server"
  EnableLoadOnDemand="True"
  OnItemsRequested="RadComboBox1_ItemsRequested"
  OnClientItemsRequesting="OnClientItemsRequesting">
</telerik:RadComboBox> 
````



# See Also

 * [Overview]({%slug combobox/load-on-demand/overview%})

 * [OnClientItemsRequested]({%slug combobox/client-side-programming/events/onclientitemrequested%})

 * [OnClientItemsRequestFailed]({%slug combobox/client-side-programming/events/onclientitemrequestfailed%})
