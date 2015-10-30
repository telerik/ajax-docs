---
title: Overview
page_title: Overview | RadPushButton for ASP.NET AJAX Documentation
description: Overview
slug: pushbutton/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

The RadPushButton exposes several client-side events which allow easy and flexible use in a wide range of application scenarios:

* **[OnClientLoad (load)]({%slug pushbutton/client-side-programming/events/onclientload%})** - raised when the control is initialized.

* **[OnClientClicking (clicking)]({%slug pushbutton/client-side-programming/events/onclientclicking%})** - raised when the user clicks the button. The event can be canceled.

* **[OnClientClicked (clicked)]({%slug pushbutton/client-side-programming/events/onclientclicked%})** - raised when the button is clicked. The event is subsequent to the **OnClientClicking** event.

* **[OnClientMouseOver (mouseOver)]({%slug pushbutton/client-side-programming/events/onclientmouseover%})** - raised when the mouse hovers over the control.

* **[OnClientMouseOut (mouseOut)]({%slug pushbutton/client-side-programming/events/onclientmouseout%})** - raised when the mouse leaves the control.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to anonymous JavaScript function. Here is an example:

>caption Example 1: Passing named (non-anonymous) JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(sender, args)
	{
		alert("RadPushButton was clicked.");
	}
</script>
<telerik:RadPushButton ID="RadPushButton1" runat="server" OnClientClicked="Click">
</telerik:RadPushButton>
````

````C#
RadPushButton1.OnClientClicked = "Click";  //passing the name of the JS function
````
````VB
RadPushButton1.OnClientClicked = "Click"  'passing the name of the JS function
````


>caption Example 2: Passing anonymous JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1, arg2)
	{
		alert("arg1:" + arg1 + " arg2:" + arg2);
	}
</script>

<telerik:RadPushButton ID="RadPushButton1" runat="server" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}">
</telerik:RadPushButton>
````

````C#
RadPushButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing the name of the JS function
````
````VB
RadPushButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing the name of the JS function
````


## See Also

 * [PushButton - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/pushbutton/client-side-api/client-side-events/defaultcs.aspx)
 
 * [PushButton Object]({%slug pushbutton/client-side-programming/pushbutton-object%})
 
 * [OnClientLoad]({%slug pushbutton/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug pushbutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug pushbutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug pushbutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug pushbutton/client-side-programming/events/onclientmouseout%})



