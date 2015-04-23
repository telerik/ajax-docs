---
title: OnClientItemChecking
page_title: OnClientItemChecking | RadComboBox for ASP.NET AJAX Documentation
description: OnClientItemChecking
slug: combobox/client-side-programming/events/onclientitemchecking
tags: onclientitemchecking
published: True
position: 7
---

# OnClientItemChecking



## 

The **OnClientItemChecking** client-side event occurs when a particular item is about to be checked. This event is fired before the particular item being checked.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns the item that is about to be checked.

* **set_cancel** lets you prevent the item from checking.

* **get_domEvent()** returns the DOM event object.

This example show the item which is about to be checked:

````ASPNET
<script language="javascript" type="text/javascript">

	function OnClientItemChecking(sender, eventArgs) {

		alert("The following items is about to be checked:" + eventArgs.get_item().get_text());

	}
</script>
<telerik:RadComboBox ID="RadComboBox1" runat="server" OnClientItemChecking="OnClientItemChecking"
CheckBoxes="true">
</telerik:RadComboBox>
````



# See Also
