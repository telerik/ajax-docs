---
title: OnClientTextChange
page_title: OnClientTextChange | UI for ASP.NET AJAX Documentation
description: OnClientTextChange
slug: combobox/client-side-programming/events/onclienttextchange
tags: onclienttextchange
published: True
position: 17
---

# OnClientTextChange



## 

The **OnClientTextChange** client-side event occurs when the user enters custom text in the input field of **RadComboBox** (if **AllowCustomText** property is **True**). **OnClientTextChange** doesn't fire until the user hits Enter or clicks outside the combobox.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_domEvent()** returns the DOM event object.

* **set_cancel** lets you prevent the combobox from doing a postback (if **AutoPostBack** property is **True**), but doesn't let you prevent the text from changing.

You can use this event to perform any client-side actions with the entered text:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientTextChange(sender, eventArgs) {
		alert("You typed " + sender.get_text());
	}
</script>

<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	allowcustomtext="true" 
	onclienttextchange="OnClientTextChange">  
</telerik:radcombobox>
````




