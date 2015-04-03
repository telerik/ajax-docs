---
title: OnClientClicking
page_title: OnClientClicking | UI for ASP.NET AJAX Documentation
description: OnClientClicking
slug: button/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 3
---

# OnClientClicking



## OnClientClicking (clicking client-side event)

The clicking event occurs when the RadButton control is clicked, immediately after the mouse button is released. The event is fired after the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.__RadButtonCancelEventArgs__, containing the following properties and methods:

* IsSplitButtonClick() - returns a bool value that indicates whether the split button or the main button is clicked. True means the split button was clicked.

* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

* get_commandName() - returns the value assigned to the RadButton's __CommandName__ property

* get_commandArgument() - returns the value assigned to the RadButton's __CommandArgument__ property

This event comes handy in scenarios when the user wants to cancel the page submission, or prevent execution of the other client-side events based on a certain condition. One such scenario is confirming the submission of the page to the server. We ask the user if she wants to submit the page, and if a negative answer is received, we cancel the clicking event. Here is the code:

````ASPNET
	    <script type="text/javascript">
	        function Clicking(sender, args)
	        {
	            args.set_cancel(!window.confirm("Are you sure you want to submit the page?"));
	        }
	    </script>
	    <telerik:RadButton ID="RadButton1" runat="server" Text="Submit"	OnClientClicking="Clicking" OnClick="RadButton1_Click">
	    </telerik:RadButton>
````



>tabbedCode

````C#
	    protected void RadButton1_Click(object sender, System.EventArgs e)
	    {
	        RadButton1.Text = "RadButton was clicked at: " + DateTime.Now.ToString();
	    }
````



````VB
	    Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	        RadButton1.Text = "RadButton was clicked at: " + DateTime.Now.ToString
	    End Sub
````


>end

>note Since Q2 2012 the event __OnClientClicking__ is raised after the ASP.NET client-side validation on the page takes place. This will handle the problem described in the help article[RadButton Validation And Client-side Event Handlers]({%slug button/application-scenarios/radbutton-validation-and-client-side-event-handlers%}).
>

