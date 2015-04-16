---
title: OnClientBlur
page_title: OnClientBlur | UI for ASP.NET AJAX Documentation
description: OnClientBlur
slug: combobox/client-side-programming/events/onclientblur
tags: onclientblur
published: True
position: 0
---

# OnClientBlur



## 

The **OnClientBlur** client-side event occurs when the combobox loses the input focus.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following method:

* **get_domEvent()** returns the DOM event object

You can use this event to perform any client-side actions when the combobox loses focus:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientBlur(sender, args) {
		alert("blur");
	}
</script>

<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	onclientblur="OnClientBlur">
</telerik:radcombobox>
````



# See Also

 * [OnClientFocus]({%slug combobox/client-side-programming/events/onclientfocus%})
