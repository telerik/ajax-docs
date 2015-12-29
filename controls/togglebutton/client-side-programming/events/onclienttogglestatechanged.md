---
title: OnClientToggleStateChanged
page_title: OnClientToggleStateChanged | RadToggleButton for ASP.NET AJAX Documentation
description: OnClientToggleStateChanged
slug: togglebutton/client-side-programming/events/onclienttogglestatechanged
tags: OnClientToggleStateChanged, toggleStateChanged, state, RadToggleButton, event, client-side
published: True
position: 5
---

# OnClientToggleStateChanged

The **toggleStateChanged** event is subsequent to the [toggleStateChanging]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanging%}) event, and occurs when the **RadToggleButton** state is changed.

The event handler receives two parameters:

1. The instance of the clicked RadButton control.

1. An eventArgs parameter of type **Telerik.Web.UI.RadButtonCheckedEventArgs**, containing the following properties and methods:

	* get_currentToggleState() - returns the current **RadButtonToggleState** object applied to the button.

	* get_commandName() - returns the value assigned to the RadToggleButton's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadToggleButton's **CommandArgument** property.

This event is useful when the user wants to execute custom client code when the button changes its toggle state. 

>caption Example 1: Using the OnClientToggleStateChanged event to get the text of the currently selected state.

````ASP.NET
<script type="text/javascript">
    function toggleStateChanged(sender, args) {
        alert(args.get_currentToggleState().get_text());
    }
</script>

<telerik:RadToggleButton ID="RadToggleButton1" runat="server"
    AutoPostBack="false" OnClientToggleStateChanged="toggleStateChanged">
    <ToggleStates>
        <telerik:ButtonToggleState Text="State 1" />
        <telerik:ButtonToggleState Text="State 2" />
    </ToggleStates>
</telerik:RadToggleButton>
````

## See Also

* [ToggleButton Object]({%slug togglebutton/client-side-programming/togglebutton-object%})

* [OnClientClicking]({%slug togglebutton/client-side-programming/events/onclientclicking%})

* [OnClientToggleStateChanging]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanging%})

* [OnClientClicked]({%slug togglebutton/client-side-programming/events/onclientclicked%})
