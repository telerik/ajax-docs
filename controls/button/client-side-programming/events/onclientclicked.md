---
title: OnClientClicked
page_title: OnClientClicked | RadButton for ASP.NET AJAX Documentation
description: OnClientClicked
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


