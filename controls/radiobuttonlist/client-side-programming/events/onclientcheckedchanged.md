---
title: OnClientCheckedChanged
page_title: OnClientCheckedChanged | RadCheckBox for ASP.NET AJAX Documentation
description: OnClientCheckedChanged
slug: checkbox/client-side-programming/events/onclientcheckedchanged
tags: onclientcheckedchanged
published: True
position: 6
---

# OnClientCheckedChanged

The **checkedChanged** event is subsequent to the [checkedChanging]({%slug checkbox/client-side-programming/events/onclientcheckedchanging%}) event, and occurs when the **RadCheckBox** checked state is changed.

The event handler receives two parameters:

1. The instance of the clicked RadCheckBox control.

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCheckedEventArgs**](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedEventArgs), containing the following properties and methods:

	* get_checked() - returns the checked state of the control.

	* get_domEvent() - returns the DOM event of the control.

	* get_commandName() - returns the value assigned to the RadCheckBox's **CommandName** property.

	* get_commandArgument() - returns the value assigned to the RadCheckBox's **CommandArgument** property.

This event is useful when the user wants to execute custom client code when the button changes its toggle state. 

>caption Example 1: Using the OnClientCheckedChanged event to get the checked state of the checkbox.

````ASP.NET
<script type="text/javascript">
    function checkedChanged(sender, args) {
        alert(args.get_checked());
    }
</script>

<telerik:RadCheckBox ID="RadCheckBox1" runat="server"
    AutoPostBack="false" OnClientCheckedChanged="CheckedChanged">
</telerik:RadCheckBox>
````

## See Also

 * [CheckBox - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)

 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug checkbox/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug checkbox/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug checkbox/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug checkbox/client-side-programming/events/onclientcheckedchanging%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.**ButtonCheckedEventArgs**](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedEventArgs)
