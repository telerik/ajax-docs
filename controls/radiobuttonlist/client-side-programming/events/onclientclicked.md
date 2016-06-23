---
title: OnClientClicked
page_title: OnClientClicked | RadRadioButtonList for ASP.NET AJAX Documentation
description: OnClientClicked
slug: radiobuttonlist/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 4
---

# OnClientClicked

The **clicked** event is subsequent to the [checkedChanged]({%slug radiobuttonlist/client-side-programming/events/onclientcheckedchanged%}) event, and occurs when the **RadRadioButtonList** control is clicked. The event is fired after the client-side validation is completed (just like the [PushButon's OnClientClicked event]({%slug pushbutton/client-side-programming/events/onclientclicked%})), just before the page is submitted, and cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadRadioButtonList control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonEventArgs**](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs), containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadRadioButtonList's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadRadioButtonList's **CommandArgument** property.

This event can be used in scenarios where you need custom client-side code to be executed when the checkbox is clicked. 

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

<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" AutoPostBack="false" Value="1"
    OnClientClicked="clientClick">
</telerik:RadRadioButtonList>
````

## See Also

 * [CheckBox - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)

 * [CheckBox Object]({%slug radiobuttonlist/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug radiobuttonlist/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug radiobuttonlist/client-side-programming/events/onclientclicking%})
 
 * [OnClientCheckedChanging]({%slug radiobuttonlist/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug radiobuttonlist/client-side-programming/events/onclientcheckedchanged%} 
 
 * [OnClientMouseOver]({%slug radiobuttonlist/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug radiobuttonlist/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonEventArgs](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
