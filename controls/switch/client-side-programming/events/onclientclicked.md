---
title: OnClientClicked
page_title: OnClientClicked - RadSwitch
description: Check our Web Forms article about OnClientClicked.
slug: switch/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 4
---

# OnClientClicked

The **clicked** event is subsequent to the [checkedChanged]({%slug switch/client-side-programming/events/onclientcheckedchanged%}) event, and occurs when the **RadSwitch** control is clicked. The event is fired after the client-side validation is completed (just like the [PushButon's OnClientClicked event]({%slug pushbutton/client-side-programming/events/onclientclicked%})), just before the page is submitted, and cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadSwitch control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonEventArgs**](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs), containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadSwitch's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadSwitch's **CommandArgument** property.

This event can be used in scenarios where you need custom client-side code to be executed when the switch is clicked. 

>caption Example 1: Handling the OnClientClicked event.

````ASP.NET
<script type="text/javascript">
    function clientClick(sender, args) {
        var value = sender.get_value();
        $get("<%= Textbox1.ClientID %>").value = value;
    }
</script>

<span> Value:</span>
<asp:TextBox ID="Textbox1" runat="server" />

<telerik:RadSwitch ID="RadSwitch1" runat="server" AutoPostBack="false" Value="1"
    OnClientClicked="clientClick">
</telerik:RadSwitch>
````

## See Also

 * [switch - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/switch/client-side-api/client-side-events/defaultcs.aspx)

 * [switch Object]({%slug switch/client-side-programming/switch-object%})
 
 * [OnClientLoad]({%slug switch/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug switch/client-side-programming/events/onclientclicking%})
 
 * [OnClientCheckedChanging]({%slug switch/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug switch/client-side-programming/events/onclientcheckedchanged%} 
 
 * [OnClientMouseOver]({%slug switch/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug switch/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
