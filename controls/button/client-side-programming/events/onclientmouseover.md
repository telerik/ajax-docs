---
title: OnClientMouseOver
page_title: OnClientMouseOver - RadButton
description: Check our Web Forms article about OnClientMouseOver.
slug: button/client-side-programming/events/onclientmouseover
tags: onclientmouseover
published: True
position: 5
---

# OnClientMouseOver

## OnClientMouseOver (mouseOver client-side event)

The **mouseOver** event is fired when the user moves the mouse pointer over the control.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadButtonEventArgs**, containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadButton's **CommandArgument** property

````ASP.NET
<telerik:RadButton ID="RadButton1" runat="server" Text="Click me!" CommandName="SubmitForm"
	CommandArgument="Arg1" OnClientMouseOver="onMouseOver">
</telerik:RadButton>
<script>
	function onMouseOver(button, args) {
		var commandName = args.get_commandName();
		var commandArg = args.get_commandArgument();
		var text = button.get_text();
		alert("The mouse is over a button with \r\n Text: " + text + ", \r\n CommandName: " + commandName + ", \r\n CommandArgumen: " + commandArg);
	}
</script>
````


