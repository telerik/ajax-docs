---
title: OnClientClicking
page_title: OnClientClicking - RadSwitch
description: Check our Web Forms article about OnClientClicking.
slug: switch/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 3
---

# OnClientClicking

The clicking event occurs when the RadSwitch control is clicked, immediately after the mouse button is released. The event is fired after the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadSwitch control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCancelEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs), containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_commandName() - returns the value assigned to the RadSwitch's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadSwitch's **CommandArgument** property.

This event comes handy in scenarios when the user wants to cancel the page submission, or prevent execution of the other client-side events based on a certain condition. One such scenario is confirming the submission of the page to the server. We ask the user if she wants to submit the page, and if a negative answer is received, we cancel the clicking event. Here is the code:

>caption Example 1: Handling OnClientClicking event in RadSwitch.

````ASP.NET
<script type="text/javascript">
    function Clicking(sender, args) {
        args.set_cancel(!window.confirm("Are you sure?"));
    }
</script>

<telerik:RadSwitch ID="RadSwitch1" runat="server" OnClientClicking="Clicking" OnClick="RadSwitch1_Click">
</telerik:RadSwitch>

<telerik:RadLabel ID="Label1" runat="server" AssociatedControlID="RadSwitch1" Text=""></telerik:RadLabel>
````

````C#
protected void RadSwitch1_Click(object sender, System.EventArgs e)
{
	Label1.Text = "RadSwitch was clicked at: " + DateTime.Now.ToString();
}
````
````VB
Protected Sub RadSwitch1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	Label1.Text = "RadSwitch was clicked at: " + DateTime.Now.ToString
End Sub
````

## See Also

 * [Switch - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/switch/client-side-api/client-side-events/defaultcs.aspx)

 * [Switch Object]({%slug switch/client-side-programming/switch-object%})
 
 * [OnClientLoad]({%slug switch/client-side-programming/events/onclientload%})
 
 * [OnClientClicked]({%slug switch/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug switch/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug switch/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug switch/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug switch/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonCancelEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs)

