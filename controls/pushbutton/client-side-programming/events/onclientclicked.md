---
title: OnClientClicked
page_title: OnClientClicked - RadPushButton
description: Check our Web Forms article about OnClientClicked.
slug: pushbutton/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 4
---

# OnClientClicked

The **clicked** event is subsequent to the **clicking** event, and occurs when the RadPushButton control is clicked. The event is fired after the client-side validation is completed, just before the page is submitted, and cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadPushButton control

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs), containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadPushButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadPushButton's **CommandArgument** property

This event should be used in scenarios where the user needs to execute custom client-side code when the button is clicked. Since validation has occurred, the page can be checked for validity before any client code is executed. This is exactly what the following example is doing, it checks for a valid URL, and if a valid one is entered, it opens it in a RadWindow control. Here is the code:

>caption Example 1: RadPushButton handling the OnClientClicked event.

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
<telerik:RadPushButton id="RadPushButton1" runat="server" text="Open Window" OnClientClicked="OpenWindow"
	ValidationGroup="UrlVG" AutoPostback="false">
</telerik:RadPushButton>
<telerik:RadWindow RenderMode="Lightweight" id="RadWindow1" runat="server">
</telerik:RadWindow>
````

## See Also

 * [PushButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/pushbutton/client-side-api/client-side-events/defaultcs.aspx)

 * [PushButton Object]({%slug pushbutton/client-side-programming/pushbutton-object%})
 
 * [OnClientLoad]({%slug pushbutton/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug pushbutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientMouseOver]({%slug pushbutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug pushbutton/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
