---
title: OnClientClicked
page_title: OnClientClicked - RadButton
description: Check our Web Forms article about OnClientClicked.
slug: button/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 4
---

# OnClientClicked

## OnClientClicked (clicked client-side event)

The **clicked** event is subsequent to the **clicking** event, and occurs when the RadButton control is clicked. The event is fired after the client-side validation is completed, just before the page is submitted, and cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadButtonEventArgs**, containing the following properties and methods:

	* IsSplitButtonClick () - returns a bool value that indicates whether the split button or the main button is clicked. True means the split button was clicked.

	* get_commandName() - returns the value assigned to the RadButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadButton's **CommandArgument** property

This event should be used in scenarios where the user needs to execute custom client-side code when the button is clicked. Since validation has occurred, the page can be checked for validity before any client code is executed. This is exactly what the following example is doing, it checks for a valid URL, and if a valid one is entered, it opens it in a RadWindow control. Here is the code:

````ASP.NET
<script type="text/javascript">
	function OpenWindow(sender, args)
	{
		if (Page_IsValid)
		{
			var RadWindow = $find("<%=RadWindow1.ClientID%>");
			RadWindow.setUrl($get("Textbox1").value);
			RadWindow.show();
		}
		else
		{
			alert("The page is not valid. Please enter a valid URL.");
		}
	}
</script>

<span>URL:</span>
<asp:TextBox ID="Textbox1" runat="server" />
<asp:RegularExpressionValidator ID="regNavaigateUrl" runat="server" ForeColor="Red"
	ControlToValidate="Textbox1" ValidationGroup="UrlVG" SetFocusOnError="true" 
	ValidationExpression="http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&amp;=]*)?"
	ErrorMessage="Valid URL should start with <strong>http://</strong>">
</asp:RegularExpressionValidator>
<br />
<telerik:radbutton id="RadButton1" runat="server" text="Open Window" onclientclicked="OpenWindow"
	validationgroup="UrlVG" autopostback="false">
</telerik:radbutton>
<telerik:radwindow id="RadWindow1" runat="server">
</telerik:radwindow>
````

Here is another code sample of how to get the get_commandArgument() method from the eventArgs parameter:

````ASP.NET
<asp:ScriptManager runat="server" />
<script type="text/javascript">
    function btnEdit_Clicking(sender, eventArgs) {
        radconfirm("Are you sure?", confirmCallBackFn, 300, 150, null, eventArgs.get_commandArgument(), "myConfirmImage.png"); return false;
        args.set_cancel(true);
    }
    function confirmCallBackFn(arg) {
        radalert("Confirm returned the following result: " + arg);
        return false;
    }
</script>
<telerik:RadButton ID="RadButton2" AutoPostBack="false"
    runat="server" Text="Click Me"
    OnClientClicking="btnEdit_Clicking"
    CommandArgument="RadConfirm Title">
</telerik:RadButton>
<telerik:RadWindowManager ID="RadWindowManager1" runat="server"></telerik:RadWindowManager>
````
You can find more information in the following Code Library [Passing user-defined parameters to client-side event handlers](https://www.telerik.com/support/code-library/passing-user-defined-parameters-to-client-side-event-handlers)

````ASP.NET
	<script type="text/javascript">
		function Click1(button, args)
		{
			alert("Arguments passed: arg1-" + args.get_commandName() + " arg2-" + args.get_commandArgument());
		}

		function Click2(button, args)
		{
			var arguments = args.get_commandArgument().split('|');
			alert("Arguments passed: arg1-" + arguments[0] + " arg2-" + arguments[1]);
		}

		function Click3(button, args, arg1, arg2)
		{
			alert("Arguments passed: arg1-" + arg1 + " arg2-" + arg2);
		}
	</script>
	<div>
		<telerik:RadButton ID="RadButton1" runat="server" AutoPostBack="false" Text="Command Name and Command Argument"
			OnClientClicked="Click1" CommandArgument="Value2" CommandName="Value1">
		</telerik:RadButton>
		<br />
		<br />
		<telerik:RadButton ID="RadButton2" runat="server" AutoPostBack="false" Text="Command Argument"
			OnClientClicked="Click2" CommandArgument="Value1|Value2">
		</telerik:RadButton>
		<br />
		<br />
		<telerik:RadButton ID="RadButton3" runat="server" AutoPostBack="false" Text="Anonymous function"
			OnClientClicked="function(button, args){Click3(button, args, 'Value1', 'Value2');}">
		</telerik:RadButton>
````

You can also attach to the clicked client event of RadButton on the client with this line of code:

````ASP.NET
button.add_clicked(function() { alert('You have attached to the clicked event of the button'); });
````

