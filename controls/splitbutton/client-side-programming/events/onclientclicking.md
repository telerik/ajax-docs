---
title: OnClientClicking
page_title: OnClientClicking - RadSplitButton
description: Check our Web Forms article about OnClientClicking.
slug: splitbutton/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 3
---

# OnClientClicking


The clicking event occurs when the RadSplitButton control is clicked, immediately after the mouse button is released. The event is fired after the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadSplitButton control

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCancelEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs), containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_commandName() - returns the value assigned to the RadSplitButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadSplitButton's **CommandArgument** property

This event comes handy in scenarios when the user wants to cancel the page submission, or prevent execution of the other client-side events based on a certain condition. One such scenario is confirming the submission of the page to the server. We ask the user if she wants to submit the page, and if a negative answer is received, we cancel the clicking event. Here is the code:

>caption Example 1: Handling OnClientClicking event in RadSplitButton.

````ASP.NET
<script type="text/javascript">
	function Clicking(sender, args)
	{
		args.set_cancel(!window.confirm("Are you sure you want to submit the page?"));
	}
</script>
<telerik:RadSplitButton ID="RadSplitButton1" runat="server" Text="Submit" OnClientClicking="Clicking" OnClick="RadSplitButton1_Click">
</telerik:RadSplitButton>
````

````C#
protected void RadSplitButton1_Click(object sender, System.EventArgs e)
{
	RadSplitButton1.Text = "RadSplitButton was clicked at: " + DateTime.Now.ToString();
}
````
````VB
Protected Sub RadSplitButton1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	RadSplitButton1.Text = "RadSplitButton was clicked at: " + DateTime.Now.ToString
End Sub
````

## See Also

 * [RadSplitButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/splitbutton/client-side-events/defaultcs.aspx)

 * [SplitButton Object]({%slug splitbutton/client-side-programming/splitbutton-object%})

 * [Telerik.Web.UI.ButtonCancelEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs)

