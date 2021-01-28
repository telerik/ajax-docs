---
title: OnClientClicking
page_title: OnClientClicking - RadCheckBox
description: Check our Web Forms article about OnClientClicking.
slug: checkbox/client-side-programming/events/onclientclicking
tags: onclientclicking
published: True
position: 3
---

# OnClientClicking

The clicking event occurs when the RadCheckBox control is clicked, immediately after the mouse button is released. The event is fired after the client-side validation occurs, and can be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadCheckBox control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCancelEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs), containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_commandName() - returns the value assigned to the RadCheckBox's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadCheckBox's **CommandArgument** property.

This event comes handy in scenarios when the user wants to cancel the page submission, or prevent execution of the other client-side events based on a certain condition. One such scenario is confirming the submission of the page to the server. We ask the user if she wants to submit the page, and if a negative answer is received, we cancel the clicking event. Here is the code:

>caption Example 1: Handling OnClientClicking event in RadCheckBox.

````ASP.NET
<script type="text/javascript">
	function Clicking(sender, args)
	{
		args.set_cancel(!window.confirm("Are you sure?"));
	}
</script>
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" OnClientClicking="Clicking" OnClick="RadCheckBox1_Click">
</telerik:RadCheckBox>
````

````C#
protected void RadCheckBox1_Click(object sender, System.EventArgs e)
{
	RadCheckBox1.Text = "RadCheckBox was clicked at: " + DateTime.Now.ToString();
}
````
````VB
Protected Sub RadCheckBox1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	RadCheckBox1.Text = "RadCheckBox was clicked at: " + DateTime.Now.ToString
End Sub
````

## See Also

 * [CheckBox - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)

 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug checkbox/client-side-programming/events/onclientload%})
 
 * [OnClientClicked]({%slug checkbox/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug checkbox/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug checkbox/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonCancelEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCancelEventArgs)

