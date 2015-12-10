---
title: OnClientClicked
page_title: OnClientClicked | RadCheckBox for ASP.NET AJAX Documentation
description: OnClientClicked
slug: checkbox/client-side-programming/events/onclientclicked
tags: onclientclicked
published: True
position: 4
---

# OnClientClicked

The **clicked** event is subsequent to the [checkedChanged]({%slug checkbox/client-side-programming/events/onclientcheckedChanged%}) event, and occurs when the **RadCheckBox** control is clicked. The event is fired after the client-side validation is completed (just like the [PushButon's OnClientClicked event]({%slug pushbutton/client-side-programming/events/onclientclicked%})), just before the page is submitted, and cannot be canceled.

The event handler receives two parameters:

1. The instance of the clicked RadCheckBox control

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonEventArgs**](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs), containing the following properties and methods:

	* get_commandName() - returns the value assigned to the RadCheckBox's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadCheckBox's **CommandArgument** property

This event can be used in scenarios where is needed custom client-side code to be executed when the checkbox is clicked. 

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

<telerik:RadCheckBox ID="RadCheckBox1" runat="server" AutoPostBack="false" Value="1"
    OnClientClicked="clientClick">
</telerik:RadCheckBox>
````

## See Also

 * [CheckBox - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)

 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug checkbox/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug checkbox/client-side-programming/events/onclientclicking%})
 
 * [OnClientCheckedChanging]({%slug checkbox/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug checkbox/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.ButtonEventArgs](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
