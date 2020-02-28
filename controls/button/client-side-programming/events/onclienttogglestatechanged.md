---
title: OnClientToggleStateChanged
page_title: OnClientToggleStateChanged | RadButton for ASP.NET AJAX Documentation
description: OnClientToggleStateChanged
slug: button/client-side-programming/events/onclienttogglestatechanged
tags: onclienttogglestatechanged
published: True
position: 8
---

# OnClientToggleStateChanged

## OnClientToggleStateChanged (toggleStateChanged client-side event)

The **toggleStateChanged** event is fired after the **SelectedToggleState** and the **SelectedToggleStateIndex** properties of the RadButton are changed. The event is triggered only if the **ToggleType** property is set to [Telerik.Web.UI].**ButtonToggleType.CustomToggle**. The user cannot cancel the event.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadButtonCheckedEventArgs**, containing the following properties and methods:

	* get_currentToggleState() - returns the current [Telerik.Web.UI].**RadButtonToggleState** object applied to the button.

	* get_commandName() - returns the value assigned to the RadButton's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadButton's **CommandArgument** property

This event is useful when the user wants to execute custom client code when the button changes its toggle state. For example, the following code shows one page in a RadWindow control when the tri-state checkbox is "Filled", another when the state is "Checked", and hides the window when unchecked.

````ASP.NET
<script type="text/javascript">
	function OpenWindows(sender, args)
	{
		var oWnd = $find("<%=RadWindow1.ClientID %>");
		switch (args.get_currentToggleState().get_text())
		{
			case "Telerik":
				oWnd.setUrl("https://www.telerik.com");
				oWnd.show();
				break;
			case "Google":
				oWnd.setUrl("http://www.google.com");
				oWnd.show();
				break;
			default:
				oWnd.hide();
				break;
		}
	}
</script>

<telerik:radbutton id="RadButton1" runat="server" text="Show/Hide Window" toggletype="CustomToggle"
	autopostback="false" onclienttogglestatechanged="OpenWindows">
	<ToggleStates>
		<telerik:RadButtonToggleState Text="Hide Windows" PrimaryIconCssClass="rbToggleCheckbox" />
		<telerik:RadButtonToggleState Text="Google" PrimaryIconCssClass="rbToggleCheckboxFilled" />
		<telerik:RadButtonToggleState Text="Telerik" PrimaryIconCssClass="rbToggleCheckboxChecked" />
	</ToggleStates>
</telerik:radbutton>
<telerik:radwindow id="RadWindow1" runat="server"></telerik:radwindow>
````


