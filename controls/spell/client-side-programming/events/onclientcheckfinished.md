---
title: OnClientCheckFinished
page_title: OnClientCheckFinished | RadSpell for ASP.NET AJAX Documentation
description: OnClientCheckFinished
slug: spell/client-side-programming/events/onclientcheckfinished
tags: onclientcheckfinished
published: True
position: 1
---

# OnClientCheckFinished

The **OnClientCheckFinished** client-side event occurs after the spell check is complete. The event handler receives parameters:

1. sender—the [RadSpell]({%slug spell/client-side-programming/radspell-object%}) that fired the event.

1. Event arguments—an event arguments object of type **SpellClientCheckFinishedEventArgs** that exposes the following properties and methods:

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|suppressCompleteMessage|boolean||Pass`true`to prevent the alert that indicates that the spell check has finished.|

The example below cancels the built-in complete message and displays a completion message in a div instead.

````ASP.NET
function checkFinished (sender, args)
{
   args.suppressCompleteMessage(true);
   $get('statusDiv').innerHTML = 'Spell check is complete';
}
...
<div runat="server" id="statusDiv" />        
	   
<telerik:RadSpell
   ID="RadSpell1"
   runat="server"
   ButtonType="PushButton"
   ControlToCheck="TextBox1"
   OnClientCheckFinished="checkFinished"
/>     
````


