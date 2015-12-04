---
title: Overview
page_title: Overview | RadCheckBox for ASP.NET AJAX Documentation
description: Overview
slug: checkbox/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

RadCheckBox exposes several client-side events which allow easy and flexible use in a wide range of application scenarios:

* **[OnClientLoad (load)]({%slug checkbox/client-side-programming/events/onclientload%})** - raised when the control is initialized.

* **[OnClientClicking (clicking)]({%slug checkbox/client-side-programming/events/onclientclicking%})** - raised when the user clicks the button. The event can be canceled.

* **[OnClientToggleStateChanging (toggleStateChanging)]({%slug checkbox/client-side-programming/events/onclienttogglestatechanging%})** - raised after the user clicks the button and before state is changed. The event can be canceled and it is subsequent to the **OnClientClicking** event.

* **[OnClientToggleStateChanged (toggleStateChanged)]({%slug checkbox/client-side-programming/events/onclienttogglestatechanged%})** - raised when the state of the button is changed. The event is subsequent to the **OnClientToggleStateChanging** event.

* **[OnClientClicked (clicked)]({%slug checkbox/client-side-programming/events/onclientclicked%})** - raised when the button is clicked. The event is subsequent to the **OnClientToggleStateChanged** event.

* **[OnClientMouseOver (mouseOver)]({%slug checkbox/client-side-programming/events/onclientmouseover%})** - raised when the mouse hovers over the control.

* **[OnClientMouseOut (mouseOut)]({%slug checkbox/client-side-programming/events/onclientmouseout%})** - raised when the mouse leaves the control.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to anonymous JavaScript function. Here is an example:

>caption Example 1: Passing named (non-anonymous) JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(sender, args)
	{
		alert("RadCheckBox was clicked.");
	}
</script>
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" OnClientClicked="Click">
	<ToggleStates>
	    <telerik:ButtonToggleState Text="State 1" />
	    <telerik:ButtonToggleState Text="State 2" />
	</ToggleStates>
</telerik:RadCheckBox>
````

````C#
RadCheckBox1.OnClientClicked = "Click";  //passing the name of the JS function
````
````VB
RadCheckBox1.OnClientClicked = "Click"  'passing the name of the JS function
````


>caption Example 2: Passing anonymous JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1, arg2)
	{
		alert("arg1:" + arg1 + " arg2:" + arg2);
	}
</script>

<telerik:RadCheckBox ID="RadCheckBox1" runat="server" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}">
	<ToggleStates>
	    <telerik:ButtonToggleState Text="State 1" />
	    <telerik:ButtonToggleState Text="State 2" />
	</ToggleStates>
</telerik:RadCheckBox>
````

````C#
RadCheckBox1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing an anonymous JS function
````
````VB
RadCheckBox1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing an anonymous JS function
````


## See Also

 * [PushButton - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)
 
 * [PushButton Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug checkbox/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug checkbox/client-side-programming/events/onclientclicking%})
 
 * [OnClientToggleStateChanging]({%slug checkbox/client-side-programming/events/onclienttogglestatechanging%})

 * [OnClientToggleStateChanged]({%slug checkbox/client-side-programming/events/onclienttogglestatechanged%})
 
 * [OnClientClicked]({%slug checkbox/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})



