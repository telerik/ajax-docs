---
title: OnClientCheckStarted
page_title: OnClientCheckStarted - RadSpell
description: Check our Web Forms article about OnClientCheckStarted.
slug: spell/client-side-programming/events/onclientcheckstarted
tags: onclientcheckstarted
published: True
position: 0
---

# OnClientCheckStarted

The **OnClientCheckStarted** client-side event occurs when the spell check begins and before the spell check dialog appears.

The event handler receives parameters:

1. The spell checker instance that fired the event.

1. Event arguments with the following properties:

	1. **set_cancel**: Can be used to cancel the event. Calling **set_cancel(true)** prevents the spell check from continuing.

The example below displays the discontinues the spell check if the contents of "TextBox1" contain the string [www.telerik.com](https://www.telerik.com).

````ASP.NET
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


