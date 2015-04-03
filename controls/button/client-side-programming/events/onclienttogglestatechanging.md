---
title: OnClientToggleStateChanging
page_title: OnClientToggleStateChanging | UI for ASP.NET AJAX Documentation
description: OnClientToggleStateChanging
slug: button/client-side-programming/events/onclienttogglestatechanging
tags: onclienttogglestatechanging
published: True
position: 7
---

# OnClientToggleStateChanging



## OnClientToggleStateChanging (toggleStateChanging client-side event)

The __toggleStateChanging__ event is fired before the __SelectedToggleState__ and the __SelectedToggleStateIndex__ properties of the RadButton are changed. The event is triggered only if the __ToggleType__ property is set to [Telerik.Web.UI].__ButtonToggleType.CustomToggle__. The user can cancel the event.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.__RadButtonCheckedEventArgs__, containing the following properties and methods:

* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

* get_toggleType () - returns the ButtonToggleType of the RadButton. It can be either __ButtonToggleType.CheckBox__ or __ButtonToggleType.Radio__.

* get_commandName() - returns the value assigned to the RadButton's __CommandName__ property

* get_commandArgument() - returns the value assigned to the RadButton's __CommandArgument__ property.

This event is useful in scenarios where the user wants to make sure the ToggleState is changed only if a certain condition is met. Note that, if the button automatically posts back to the server, which is the default behavior, the postback will not be stopped even if the event is canceled.

The following example asks the user to confirm changing the state of a Tri-state CheckBox.Here is the code:

````ASPNET
	    <script type="text/javascript">
	        function ToggleStateChanging(sender, args)
	        {
	            args.set_cancel(!window.confirm("Are you sure you want to change the state of the button?"));
	        }
	    </script>
	
	    <telerik:RadButton ID="RadButton1" runat="server" Text="Show/Hide Window"
		    ToggleType="CustomToggle" ButtonType="ToggleButton"
		    OnClientToggleStateChanging="ToggleStateChanging">
		    <ToggleStates>
			    <telerik:RadButtonToggleState Text="UnChecked" PrimaryIconCssClass="rbToggleCheckbox" />
			    <telerik:RadButtonToggleState Text="Filled" PrimaryIconCssClass="rbToggleCheckboxFilled" />
			    <telerik:RadButtonToggleState Text="Checked" PrimaryIconCssClass="rbToggleCheckboxChecked" />
		    </ToggleStates>
	    </telerik:RadButton>
````


