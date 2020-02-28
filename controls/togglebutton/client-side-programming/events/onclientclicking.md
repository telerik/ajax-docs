---
title: OnClientClicking
page_title: OnClientClicking | RadToggleButton for ASP.NET AJAX Documentation
description: OnClientClicking
slug: togglebutton/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 3
---

# OnClientClicking

The clicking event occurs when the RadToggleButton control is clicked, immediately after the mouse button is released. The event is fired after the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadToggleButton control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCancelEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs), containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_commandName() - returns the value assigned to the RadToggleButton's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadToggleButton's **CommandArgument** property.

This event is handy in scenarios when the user wants to cancel the page submission, or prevent execution of the other client-side events based on a certain condition. One such scenario is confirming the submission of the page to the server. We ask the user if she wants to submit the page, and if a negative answer is received, we cancel the clicking event. Here is the code:

>caption Example 1: Handling OnClientClicking event in RadToggleButton.

````ASP.NET
<script type="text/javascript">
	function Clicking(sender, args)
	{
		args.set_cancel(!window.confirm("Are you sure?"));
	}
</script>
<telerik:RadToggleButton ID="RadToggleButton1" runat="server" OnClientClicking="Clicking" OnClick="RadToggleButton1_Click">
	<ToggleStates>
	    <telerik:ButtonToggleState Text="State 1" />
	    <telerik:ButtonToggleState Text="State 2" />
	</ToggleStates>
</telerik:RadToggleButton>
````

````C#
protected void RadToggleButton1_Click(object sender, System.EventArgs e)
{
	RadToggleButton1.Text = "RadToggleButton was clicked at: " + DateTime.Now.ToString();
}
````
````VB
Protected Sub RadToggleButton1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	RadToggleButton1.Text = "RadToggleButton was clicked at: " + DateTime.Now.ToString
End Sub
````

## See Also

 * [PushButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/togglebutton/client-side-api/client-side-events/defaultcs.aspx)

 * [PushButton Object]({%slug togglebutton/client-side-programming/togglebutton-object%})

 * [OnClientLoad]({%slug togglebutton/client-side-programming/events/onclientload%})

 * [OnClientToggleStateChanging]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanging%})

 * [OnClientToggleStateChanged]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanged%})
 
 * [OnClientClicked]({%slug togglebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug togglebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug togglebutton/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonCancelEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs)

