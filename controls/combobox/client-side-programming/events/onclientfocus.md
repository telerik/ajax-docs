---
title: OnClientFocus
page_title: OnClientFocus - RadComboBox
description: Check our Web Forms article about OnClientFocus.
slug: combobox/client-side-programming/events/onclientfocus
tags: onclientfocus
published: True
position: 5
---

# OnClientFocus



## 

The **OnClientFocus** client-side event occurs when the combobox receives the input focus.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following method:

* **get_domEvent()** returns the DOM event object

You can use this event to perform any client-side actions when the combobox receives focus:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientFocus(sender,args) {
		alert("focus");
	}
</script>

<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	onclientfocus="OnClientFocus">
</telerik:radcombobox>
````



# See Also

 * [OnClientBlur]({%slug combobox/client-side-programming/events/onclientblur%})

 * [Focus the RadComboBox]({%slug combobox/how-to/focus-the-radcombobox%})
