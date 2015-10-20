---
title: OnClientClicking
page_title: OnClientClicking | RadLinkButton for ASP.NET AJAX Documentation
description: OnClientClicking
slug: linkbutton/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 1
---

# OnClientClicking

## OnClientClicking (clicking client-side event)

The clicking event occurs when the RadLinkButton control is clicked, immediately after the mouse button is released. The event is fired after the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadLinkButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadButtonCancelEventArgs**, containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_commandName() - returns the value assigned to the RadLinkButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadLinkButton's **CommandArgument** property

This event comes handy in scenarios when the user wants to cancel the page submission, or prevent execution of the other client-side events based on a certain condition. One such scenario is confirming the submission of the page to the server. We ask the user if she wants to submit the page, and if a negative answer is received, we cancel the clicking event. Here is the code:

````ASP.NET
<script type="text/javascript">
	function Clicking(sender, args)
	{
		args.set_cancel(!window.confirm("Are you sure you want to submit the page?"));
	}
</script>
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Submit"	OnClientClicking="Clicking" OnClick="RadLinkButton1_Click">
</telerik:RadLinkButton>
````

````C#
protected void RadLinkButton1_Click(object sender, System.EventArgs e)
{
	RadLinkButton1.Text = "RadLinkButton was clicked at: " + DateTime.Now.ToString();
}
````
````VB
Protected Sub RadLinkButton1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	RadLinkButton1.Text = "RadLinkButton was clicked at: " + DateTime.Now.ToString
End Sub
````

