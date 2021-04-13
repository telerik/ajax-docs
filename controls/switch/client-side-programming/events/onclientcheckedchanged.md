---
title: OnClientCheckedChanged
page_title: OnClientCheckedChanged - RadSwitch
description: Check our Web Forms article about OnClientCheckedChanged.
slug: switch/client-side-programming/events/onclientcheckedchanged
tags: onclientcheckedchanged
published: True
position: 6
---

# OnClientCheckedChanged

The **checkedChanged** event is subsequent to the [checkedChanging]({%slug switch/client-side-programming/events/onclientcheckedchanging%}) event, and occurs when the **RadSwitch** checked state is changed.

The event handler receives two parameters:

1. The instance of the clicked RadSwitch control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCheckedEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedEventArgs), containing the following properties and methods:

	* get_checked() - returns the checked state of the control.

	* get_domEvent() - returns the DOM event of the control.

	* get_commandName() - returns the value assigned to the RadSwitch's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadSwitch's **CommandArgument** property.

This event is useful when the user wants to execute custom client code when the button changes its toggle state. 

>caption Example 1: Using the OnClientCheckedChanged event to get the checked state of the switch.

````ASP.NET
<script type="text/javascript">
    function checkedChanged(sender, args) {
        alert(args.get_checked());
    }
</script>

<telerik:RadSwitch ID="RadSwitch1" runat="server"
    AutoPostBack="false" OnClientCheckedChanged="CheckedChanged">
</telerik:RadSwitch>
````

## See Also

 * [Switch - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/switch/client-side-api/client-side-events/defaultcs.aspx)

 * [Switch Object]({%slug switch/client-side-programming/switch-object%})
 
 * [OnClientLoad]({%slug switch/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug switch/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug switch/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug switch/client-side-programming/events/onclientcheckedchanging%})
 
 * [OnClientMouseOver]({%slug switch/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug switch/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.**ButtonCheckedEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedEventArgs)
