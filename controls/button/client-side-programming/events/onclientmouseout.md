---
title: OnClientMouseOut
page_title: OnClientMouseOut - RadButton
description: Check our Web Forms article about OnClientMouseOut.
slug: button/client-side-programming/events/onclientmouseout
tags: onclientmouseout
published: True
position: 6
---

# OnClientMouseOut

## OnClientMouseOut (mouseOut client-side event)

The **mouseOut** event is fired when the user moves the mouse pointer over the control.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadButtonEventArgs**, containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadButton's **CommandArgument** property

````ASP.NET
<telerik:RadButton ID="RadButton1" runat="server" Text="Click me!" CommandName="SubmitForm"
	CommandArgument="Arg1" OnClientMouseOut="onMouseOut">
</telerik:RadButton>
<script>
	function onMouseOut(button, args) {
		var commandName = args.get_commandName();
		var commandArg = args.get_commandArgument();
		var text = button.get_text();
		alert("The mouse went over a button with \r\n Text: " + text + ", \r\n CommandName: " + commandName + ", \r\n CommandArgumen: " + commandArg);
	}
</script>
````

