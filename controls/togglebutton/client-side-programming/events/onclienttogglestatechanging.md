---
title: OnClientToggleStateChanging
page_title: OnClientToggleStateChanging - RadToggleButton
description: Check our Web Forms article about OnClientToggleStateChanging.
slug: togglebutton/client-side-programming/events/onclienttogglestatechanging
tags: OnClientToggleStateChanging, toggleStateChanging, state, RadToggleButton, event, client-side
published: True
position: 4
---

# OnClientToggleStateChanging

The **toggleStateChanging** event is subsequent to the [clicking]({%slug togglebutton/client-side-programming/events/onclientclicking%}) event, and occurs before the **RadToggleButton** state is changed.

The event handler receives two parameters:

1. The instance of the clicked RadToggleButton control.

1. An eventArgs parameter of type **Telerik.Web.UI.RadButtonCheckedEventArgs**, containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_commandName() - returns the value assigned to the RadToggleButton's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadToggleButton's **CommandArgument** property.

This event is useful in scenarios where the user wants to make sure the ToggleState is changed only if a certain condition is met. Note that, if the button automatically posts back to the server, which is the default behavior, the postback will not be stopped even if the event is canceled.

The following example asks the user to confirm whether they want to change the state of the button.

>caption Example 1: Using OnClientToggleStateChanging event.

````ASP.NET
<script type="text/javascript">
    function ToggleStateChanging(sender, args) {
        args.set_cancel(!window.confirm("Are you sure you want to change the state of the button?"));
    }
</script>

<telerik:RadToggleButton ID="RadToggleButton1" runat="server"
    OnClientToggleStateChanging="ToggleStateChanging">
    <ToggleStates>
        <telerik:ButtonToggleState Text="State 1" />
        <telerik:ButtonToggleState Text="State 2" />
    </ToggleStates>
</telerik:RadToggleButton>
````


## See Also

* [ToggleButton Object]({%slug togglebutton/client-side-programming/togglebutton-object%})

* [OnClientClicking]({%slug togglebutton/client-side-programming/events/onclientclicking%})

* [OnClientToggleStateChanged]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanged%})

* [OnClientClicked]({%slug togglebutton/client-side-programming/events/onclientclicked%})
