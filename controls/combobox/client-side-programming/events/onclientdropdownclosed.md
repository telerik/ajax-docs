---
title: OnClientDropDownClosed
page_title: OnClientDropDownClosed - RadComboBox
description: Check our Web Forms article about OnClientDropDownClosed.
slug: combobox/client-side-programming/events/onclientdropdownclosed
tags: onclientdropdownclosed
published: True
position: 1
---

# OnClientDropDownClosed



## 

As of Q1 SP2, the RadComboBox exposes a new client-side event - **OnClientDropDownClosed**.

The **OnClientDropDownClosed** client-side event occurs after the drop-down list has been closed.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following method:

* **get_domEvent()** returns the DOM event object of the drop-down closed.

You can use this event to perform any client-side actions when the drop-down is completely closed:

````ASPNET
<script type="text/javascript">
	function OnClientDropDownClosedHandler(sender, eventArgs) {
		alert("Dropdown is closed now");
	}
</script>

<telerik:radcombobox 
	id="RadComboBox1" 
	onclientdropdownclosed="OnClientDropDownClosedHandler"
	runat="server">
</telerik:radcombobox>
````



# See Also

 * [OnClientDropDownClosing]({%slug combobox/client-side-programming/events/onclientdropdownclosing%})
