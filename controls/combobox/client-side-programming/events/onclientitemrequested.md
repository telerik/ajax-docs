---
title: OnClientItemRequested
page_title: OnClientItemRequested | UI for ASP.NET AJAX Documentation
description: OnClientItemRequested
slug: combobox/client-side-programming/events/onclientitemrequested
tags: onclientitemrequested
published: True
position: 10
---

# OnClientItemRequested



## 

The **OnClientItemsRequested** client-side event occurs after the load-on-demand mechanism has added new items to the combobox.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following method:

* **get_text** returns the text that has been typed in the input field to fire the ItemsRequested event. This text is the same text that is passed to the ItemsRequested server event.

* **get_domEvent()** returns the DOM event object.

Use this event to perform client-side actions once the new items are bound to the combobox:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientItemsRequested(sender, eventArgs) {
		alert("There are now " + sender.get_items().get_count() + " items.");
	}
 </script>

<telerik:radcombobox
	id="RadComboBox1" 
	runat="server" 
	onclientitemsrequested="OnClientItemsRequested"
	enableloadondemand="true" 
	onitemsrequested="RadComboBox1_ItemsRequested">
</telerik:radcombobox>
````



# See Also

 * [Overview]({%slug combobox/load-on-demand/overview%})

 * [OnClientItemRequesting]({%slug combobox/client-side-programming/events/onclientitemrequesting%})

 * [OnClientItemRequestFailed]({%slug combobox/client-side-programming/events/onclientitemrequestfailed%})
