---
title: OnClientSelectedIndexChanged
page_title: OnClientSelectedIndexChanged | UI for ASP.NET AJAX Documentation
description: OnClientSelectedIndexChanged
slug: combobox/client-side-programming/events/onclientselectedindexchanged
tags: onclientselectedindexchanged
published: True
position: 14
---

# OnClientSelectedIndexChanged



## 

The **OnClientSelectedIndexChanged** client-side event occurs immediately after the selected item has changed.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following method:

* **get_item** returns the item that has just been selected.

* **get_domEvent()** returns the DOM event object.

Use this event to respond to the newly selected item:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientSelectedIndexChanged(sender, eventArgs) {
		var item = eventArgs.get_item();
		sender.set_text("You selected " + item.get_text());
	}
</script>

<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	onclientselectedindexchanged="OnClientSelectedIndexChanged">
</telerik:radcombobox>
````



# See Also

 * [SelectedIndexChanged]({%slug combobox/server-side-programming/selectedindexchanged%})

 * [OnClientSelectedIndexChanging]({%slug combobox/client-side-programming/events/onclientselectedindexchanging%})
