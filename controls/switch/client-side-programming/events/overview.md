---
title: Overview
page_title: Overview - RadSwitch
description: Check our Web Forms article about Overview.
slug: switch/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

RadSwitch exposes several client-side events that allow easy and flexible use in a wide range of application scenarios:

* **[OnClientLoad (load)]({%slug switch/client-side-programming/events/onclientload%})** - raised when the control is initialized.

* **[OnClientClicking (clicking)]({%slug switch/client-side-programming/events/onclientclicking%})** - raised when the user clicks the switch. The event can be canceled.

* **[OnClientClicked (clicked)]({%slug switch/client-side-programming/events/onclientclicked%})** - raised when the switch is clicked. The event is subsequent to the **OnClientCheckedChanged** event.

* **[OnClientCheckedChanging (checkedChanging)]({%slug switch/client-side-programming/events/onclientcheckedchanging%})** - raised after the user clicks the switch and before the checked state is changed. The event can be canceled and it is subsequent to the **OnClientCheckedChanged** event.

* **[OnClientCheckedChanged (checkedChanged)]({%slug switch/client-side-programming/events/onclientcheckedchanged%})** - raised when the checked state of the switch is changed. The event is subsequent to the **OnClientCheckedChanging** event.

* **[OnClientMouseOver (mouseOver)]({%slug switch/client-side-programming/events/onclientmouseover%})** - raised when the mouse hovers over the control.

* **[OnClientMouseOut (mouseOut)]({%slug switch/client-side-programming/events/onclientmouseout%})** - raised when the mouse leaves the control.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to an anonymous JavaScript function. Here is an example:

>caption Example 1: Passing a named (non-anonymous) JavaScript function.

````ASP.NET
<script type="text/javascript">
    function Click(sender, args) {
        alert("RadSwitch was clicked.");
    }
</script>
<telerik:RadLabel ID="Label1" runat="server" AssociatedControlID="RadSwitch1" Text="Check here"></telerik:RadLabel>

<telerik:RadSwitch ID="RadSwitch1" runat="server" OnClientClicked="Click">
</telerik:RadSwitch>
````

````C#
RadSwitch1.OnClientClicked = "Click";  //passing the name of the JS function
````
````VB
RadSwitch1.OnClientClicked = "Click"  'passing the name of the JS function
````


>caption Example 2: Passing an anonymous JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1, arg2)
	{
		alert("arg1:" + arg1 + " arg2:" + arg2);
	}
</script>

<telerik:RadLabel ID="Label1" runat="server" AssociatedControlID="RadSwitch1" Text="Check here"></telerik:RadLabel>

<telerik:RadSwitch ID="RadSwitch1" runat="server" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}">
</telerik:RadSwitch>
````

````C#
RadSwitch1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing an anonymous JS function
````
````VB
RadSwitch1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing an anonymous JS function
````


## See Also

 * [Switch - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/switch/client-side-api/client-side-events/defaultcs.aspx)
 
 * [Switch Object]({%slug switch/client-side-programming/switch-object%})
 
 * [OnClientLoad]({%slug switch/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug switch/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug switch/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug switch/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug switch/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug switch/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug switch/client-side-programming/events/onclientmouseout%})



