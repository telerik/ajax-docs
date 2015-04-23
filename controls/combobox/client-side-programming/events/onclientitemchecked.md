---
title: OnClientItemChecked
page_title: OnClientItemChecked | RadComboBox for ASP.NET AJAX Documentation
description: OnClientItemChecked
slug: combobox/client-side-programming/events/onclientitemchecked
tags: onclientitemchecked
published: True
position: 6
---

# OnClientItemChecked



## 

The **OnClientItemChecked** client-side event occurs immediately after a particular item is being checked.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following method:

* **get_item** returns the item that has just been checked.

* **get_domEvent()** returns the DOM event object.

Use this event to respond to the newly checked item:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientItemChecked(sender, eventArgs) {
		var item = eventArgs.get_item();
		sender.set_text("You checked " + item.get_text());
	}
</script>
<telerik:RadComboBox ID="RadComboBox1" runat="server" 
	OnClientItemChecked="OnClientItemChecked" CheckBoxes="true">
</telerik:RadComboBox>
````



# See Also
