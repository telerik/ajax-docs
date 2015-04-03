---
title: OnClientCheckStarted
page_title: OnClientCheckStarted | UI for ASP.NET AJAX Documentation
description: OnClientCheckStarted
slug: spell/client-side-programming/events/onclientcheckstarted
tags: onclientcheckstarted
published: True
position: 0
---

# OnClientCheckStarted



## 

The __OnClientCheckStarted__client-side event occurs when the spell check begins and before the spell check dialog appears.

The event handler receives parameters:

1. The spell checker instance that fired the event.

1. Event arguments with the following properties:

1. __set_cancel__: Can be used to cancel the event. Calling __set_cancel(true)__ prevents the spell check from continuing.

The example below displays the discontinues the spell check if the contents of "TextBox1" contain the string [www.telerik.com](http://www.telerik.com).

````ASPNET
	function checkStarted (sender, args)
	{
	   if ($get("<%= TextBox1.ClientID %>").value == 'www.telerik.com')
	   {
	       args.set_cancel(true);
	   }
	}
	...
	<telerik:RadSpell
	   ID="RadSpell1"
	   runat="server"
	   ButtonType="PushButton"
	   ControlToCheck="TextBox1"
	   OnClientCheckStarted="checkStarted"
	/>  
````


