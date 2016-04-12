---
title: OnClientCheckedChanging
page_title: OnClientCheckedChanging | RadButton for ASP.NET AJAX Documentation
description: OnClientCheckedChanging
slug: button/client-side-programming/events/onclientcheckedchanging
tags: onclientcheckedchanging
published: True
position: 2
---

# OnClientCheckedChanging

## OnClientCheckedChanging (checkedChanging client-side event)

The **checkedChanging** event is fired after the **Checked** property of the RadButton is changed, and is subsequent to the **checkedChanging** event(OnClientCheckedChanging). The event is triggered only if the **ToggleType** property is set to [Telerik.Web.UI].**ButtonToggleType.CheckBox** or **ButtonToggleType.Radio** i.e. when the control is used as a RadioButton or CheckBox. The user cannot cancel the event.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadButtonCheckedEventArgs**, containing the following properties and methods:
	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.
	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.
	* get_toggleType () - returns the ButtonToggleType of the RadButton. It can be either **ButtonToggleType.CheckBox** or **ButtonToggleType.Radio**.
	* get_commandName() - returns the value assigned to the RadButton's **CommandName** property
	* get_commandArgument() - returns the value assigned to the RadButton's **CommandArgument** property.

This event is useful in scenarios where the user wants to make sure the button (radio or checkbox) is checked only if a certain condition is met. Note that, if the button automatically posts back to the server, which is the default behavior, the postback will not be stopped even if the event is canceled.

The following example asks the user to confirm the checking of a CheckBox.Here is the code:

````ASP.NET
<script type="text/javascript">
	function CheckedChanging(sender, args)
	{
		args.set_cancel(!window.confirm("Are you sure you want to check the button?"));
	}
</script>

<telerik:RadButton RenderMode="Lightweight" ID="RadButton1" runat="server" Text="Checkbox" ToggleType="CheckBox"	
	ButtonType="ToggleButton" OnClick="RadButton1_Click" OnClientCheckedChanging="CheckedChanging">
</telerik:RadButton>
````

````C#
protected void RadButton1_Click(object sender, System.EventArgs e)
{
	RadButton1.Text = "RadButton.Checked=" + RadButton1.Checked.ToString();
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	RadButton1.Text = "RadButton.Checked=" + RadButton1.Checked.ToString
End Sub
````

