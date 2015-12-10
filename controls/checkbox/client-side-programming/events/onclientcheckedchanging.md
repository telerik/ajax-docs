---
title: OnClientCheckedChanging
page_title: OnClientCheckedChanging | RadCheckBox for ASP.NET AJAX Documentation
description: OnClientCheckedChanging
slug: checkbox/client-side-programming/events/onclientcheckedchanging
tags: onclientcheckedchanging
published: True
position: 5
---

# OnClientCheckedChanging

The **checkedChanging** event is subsequent to the [clicking]({%slug checkbox/client-side-programming/events/onclientclicking%}) event, and occurs before the **RadCheckBox** checked state is changed.

The event handler receives two parameters:

1. The instance of the clicked RadCheckBox control

1. An eventArgs parameter of type [Telerik.Web.UI.**ButtonCheckedCancelEventArgs**](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedCancelEventArgs), containing the following properties and methods:

	* get_cancel() - returns a bool value that indicates whether the event was canceled. True means the event is canceled.

	* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

	* get_checked() - returns the checked state of the control.

	* get_domEvent() - returns the DOM event of the control.

	* get_commandName() - returns the value assigned to the RadCheckBox's **CommandName** property

	* get_commandArgument() - returns the value assigned to the RadCheckBox's **CommandArgument** property.

This event is useful in scenarios where the user wants to make sure the checked state is changed only if a certain condition is met. Note that, if the checkbox automatically posts back to the server, which is the default behavior, the post back will not be stopped even if the event is canceled.

The following example asks the user to confirm whether the state to be changed.

>caption Example 1: Using OnClientCheckedChanging event.

````ASP.NET
<script type="text/javascript">
    function CheckedChanging(sender, args) {
        args.set_cancel(!window.confirm("Are you sure you want to change the checked state of the checkbox?"));
    }
</script>

<telerik:RadCheckBox ID="RadCheckBox1" runat="server"
    OnClientCheckedChanging="CheckedChanging">
</telerik:RadCheckBox>
````


## See Also

 * [CheckBox - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)

 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug checkbox/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug checkbox/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug checkbox/client-side-programming/events/onclientclicked%})

 * [OnClientCheckedChanged]({%slug checkbox/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})
 
 * [Telerik.Web.UI.**ButtonCheckedCancelEventArgs**](http://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonCheckedCancelEventArgs)
