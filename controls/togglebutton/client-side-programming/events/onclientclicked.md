---
title: OnClientClicked
page_title: OnClientClicked | RadToggleButton for ASP.NET AJAX Documentation
description: OnClientClicked
slug: togglebutton/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 6
---

# OnClientClicked

The **clicked** event is subsequent to the [toggleStateChanged]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanged%}) event, and occurs when the **RadToggleButton** control is clicked. The event is fired after the client-side validation is completed (just like the [PushButon's OnClientClicked event]({%slug pushbutton/client-side-programming/events/onclientclicked%})), just before the page is submitted, and cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadToggleButton control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs), containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadToggleButton's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadToggleButton's **CommandArgument** property.

This event can be used in scenarios where one needs custom client-side code to be executed when the button is clicked. 

>caption Example 1: Handling the OnClientClicked event.

````ASP.NET
<script type="text/javascript">
    function clientClick(sender, args) {
        var selectedValue = sender.get_selectedToggleState().get_value();
        $get("<%= Textbox1.ClientID %>").value = selectedValue;
    }
</script>

<span>Selected Value:</span>
<asp:TextBox ID="Textbox1" runat="server" />

<telerik:RadToggleButton ID="RadToggleButton1" runat="server" AutoPostBack="false"
    OnClientClicked="clientClick">
    <ToggleStates>
        <telerik:ButtonToggleState Text="State 1" Value="Value1"/>
        <telerik:ButtonToggleState Text="State 2" Value="Value2"/>
    </ToggleStates>
</telerik:RadToggleButton>
````

## See Also

 * [PushButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/togglebutton/client-side-api/client-side-events/defaultcs.aspx)

 * [PushButton Object]({%slug togglebutton/client-side-programming/togglebutton-object%})
 
 * [OnClientLoad]({%slug togglebutton/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug togglebutton/client-side-programming/events/onclientclicking%})

 * [OnClientToggleStateChanging]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanging%})

 * [OnClientToggleStateChanged]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanged%})
 
 * [OnClientMouseOver]({%slug togglebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug togglebutton/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
