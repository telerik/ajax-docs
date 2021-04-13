---
title: OnClientCheckedChanging
page_title: OnClientCheckedChanging - RadSwitch
description: Check our Web Forms article about OnClientCheckedChanging.
slug: switch/client-side-programming/events/onclientcheckedchanging
tags: onclientcheckedchanging
published: True
position: 5
---

# OnClientCheckedChanging

The **checkedChanging** event is subsequent to the [clicking]({%slug switch/client-side-programming/events/onclientclicking%}) event, and occurs before the **RadSwitch** checked state is changed.

The event handler receives two parameters:

1. The instance of the clicked RadSwitch control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCheckedCancelEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedCancelEventArgs), containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_checked() - returns the checked state of the control.

	* get_domEvent() - returns the DOM event of the control.

	* get_commandName() - returns the value assigned to the RadSwitch's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadSwitch's **CommandArgument** property.

This event is useful in scenarios where the user wants to make sure the checked state is changed only if a certain condition is met. Note that, if the switch automatically posts back to the server, which is the default behavior, the post back will not be stopped even if the event is canceled.

The following example asks the user to confirm whether they want to change the state.

>caption Example 1: Using OnClientCheckedChanging event.

````ASP.NET
<script type="text/javascript">
    function CheckedChanging(sender, args) {
        args.set_cancel(!window.confirm("Are you sure you want to change the checked state of the switch?"));
    }
</script>

<telerik:RadSwitch ID="RadSwitch1" runat="server"
    OnClientCheckedChanging="CheckedChanging">
</telerik:RadSwitch>
````


## See Also

 * [Switch - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/switch/client-side-api/client-side-events/defaultcs.aspx)

 * [switch Object]({%slug switch/client-side-programming/switch-object%})
 
 * [OnClientLoad]({%slug switch/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug switch/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug switch/client-side-programming/events/onclientclicked%})

 * [OnClientCheckedChanged]({%slug switch/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug switch/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug switch/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.**ButtonCheckedCancelEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedCancelEventArgs)
