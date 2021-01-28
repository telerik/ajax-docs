---
title: OnClientDialogClosing
page_title: OnClientDialogClosing - RadSpell
description: Check our Web Forms article about OnClientDialogClosing.
slug: spell/client-side-programming/events/onclientdialogclosing
tags: onclientdialogclosing
published: True
position: 3
---

# OnClientDialogClosing

The **OnClientDialogClosing** client-side event occurs just before the spell check dialog closes. The event handler receives parameters:

1. The spell checker instance that fired the event.

1. Event argument object with no properties or methods.

The example below displays an alert that the dialog is closing.

````ASP.NET
function dialogClosing (sender, args)
{
   alert('Dialog is closing');
}
...   
	   
<telerik:RadSpell
   ID="RadSpell1"
   runat="server"
   ButtonType="PushButton"
   ControlToCheck="TextBox1"
   OnClientDialogClosing="dialogClosing"
/> 
````


