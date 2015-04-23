---
title: OnClientKeyPressing
page_title: OnClientKeyPressing | RadComboBox for ASP.NET AJAX Documentation
description: OnClientKeyPressing
slug: combobox/client-side-programming/events/onclientkeypressing
tags: onclientkeypressing
published: True
position: 12
---

# OnClientKeyPressing



## 

The **OnClientKeyPressing** client-side event occurs when a combobox receives the focus and the user presses a key.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following properties and methods:

* **get_domEvent()** returns the DOM event object. You can get the altKey, shiftKey, ctrlKey and keyCode from the DOM event object.

This example below uses the **OnClientKeyPressing** event to execute custom JavaScript when the user tabs out:

````ASPNET
<script language="javascript" type="text/javascript">
	function HandleKeyPress(sender, eventArgs)
	{
	 if (eventArgs.get_domEvent().keyCode == 9) {       
		// handle tab out
		}
	}
 </script>
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	onclientkeypressing="HandleKeyPress">
</telerik:radcombobox>
````



# See Also

 * [Keyboard Support]({%slug combobox/accessibility-and-internationalization/keyboard-support%})

 * [TextChanged]({%slug combobox/server-side-programming/textchanged%})

 * [Prevent from Typing Particular Characters]({%slug combobox/how-to/prevent-from-typing-particular-characters%})
