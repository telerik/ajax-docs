---
title: OnClientCheckedChanged
page_title: OnClientCheckedChanged | RadButton for ASP.NET AJAX Documentation
description: OnClientCheckedChanged
slug: button/client-side-programming/events/onclientcheckedchanged
tags: onclientcheckedchanged
published: True
position: 1
---

# OnClientCheckedChanged



## OnClientCheckedChanged (checkedChanged client-side event)

The **checkedChanged** event is fired after the **Checked** property of the RadButton is changed, and is subsequent to the **checkedChanging** event(OnClientCheckedChanging). The event is triggered only if the **ToggleType** property is set to [Telerik.Web.UI].**ButtonToggleType.CheckBox** or **ButtonToggleType.Radio** i.e. when the control is used as a RadioButton or CheckBox. The user cannot cancel the event.

The event handler receives two parameters:

1. The instance of the clicked RadButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadButtonCheckedEventArgs**, containing the following properties and methods:

* get_checked() - returns a bool value that indicates whether the button is checked.

* get_toggleType () - returns the ButtonToggleType of the RadButton. It can be either **ButtonToggleType.CheckBox** or **ButtonToggleType.Radio**.

* get_commandName() - returns the value assigned to the RadButton's **CommandName** property.

* get_commandArgument() - returns the value assigned to the RadButton's **CommandArgument** property.

This event is useful when the user wants to execute custom client code when the button changes its checked state. For example, the following code shows a RadWindow control when the button is checked, and hides it when unchecked.

````ASPNET
	    <script type="text/javascript">
	        function ShowHideWindow(sender, args)
	        {
	            var oWnd = $find("<%=RadWindow1.ClientID %>");
	            if (args.get_checked())
	            {
	                oWnd.show();
	            }
	            else
	            {
	                oWnd.hide();
	            }
	        }
	    </script>
	    <telerik:RadButton ID="RadButton1" runat="server" Text="Show/Hide Window" ToggleType="CheckBox"
		    ButtonType="ToggleButton" OnClientCheckedChanged="ShowHideWindow" AutoPostBack="false">
	    </telerik:RadButton>
	    <telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="http://www.telerik.com">
	    </telerik:RadWindow>
````


