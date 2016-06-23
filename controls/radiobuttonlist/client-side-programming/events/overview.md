---
title: Overview
page_title: Overview | RadRadioButtonList for ASP.NET AJAX Documentation
description: Overview
slug: radiobuttonlist/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

RadRadioButtonList exposes several client-side events that allow easy and flexible use in a wide range of application scenarios:

* **[OnClientLoad (load)]({%slug radiobuttonlist/client-side-programming/events/onclientload%})** - raised when the control is initialized.

* **[OnClientClicking (clicking)]({%slug radiobuttonlist/client-side-programming/events/onclientclicking%})** - raised when the user clicks the checkbox. The event can be canceled.

* **[OnClientClicked (clicked)]({%slug radiobuttonlist/client-side-programming/events/onclientclicked%})** - raised when the checkbox is clicked. The event is subsequent to the **OnClientCheckedChanged** event.

* **[OnClientCheckedChanging (checkedChanging)]({%slug radiobuttonlist/client-side-programming/events/onclientcheckedchanging%})** - raised after the user clicks the checkbox and before the checked state is changed. The event can be canceled and it is subsequent to the **OnClientCheckedChanged** event.

* **[OnClientCheckedChanged (checkedChanged)]({%slug radiobuttonlist/client-side-programming/events/onclientcheckedchanged%})** - raised when the checked state of the checkbox is changed. The event is subsequent to the **OnClientCheckedChanging** event.

* **[OnClientMouseOver (mouseOver)]({%slug radiobuttonlist/client-side-programming/events/onclientmouseover%})** - raised when the mouse hovers over the control.

* **[OnClientMouseOut (mouseOut)]({%slug radiobuttonlist/client-side-programming/events/onclientmouseout%})** - raised when the mouse leaves the control.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to an anonymous JavaScript function. Here is an example:

>caption Example 1: Passing a named (non-anonymous) JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(sender, args)
	{
		alert("RadRadioButtonList was clicked.");
	}
</script>
<telerik:RadRadioButtonList ID="RadRadioButtonList1" Text="Check here" runat="server" OnClientClicked="Click">
</telerik:RadRadioButtonList>
````

````C#
RadRadioButtonList1.OnClientClicked = "Click";  //passing the name of the JS function
````
````VB
RadRadioButtonList1.OnClientClicked = "Click"  'passing the name of the JS function
````


>caption Example 2: Passing an anonymous JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1, arg2)
	{
		alert("arg1:" + arg1 + " arg2:" + arg2);
	}
</script>

<telerik:RadRadioButtonList ID="RadRadioButtonList1" Text="Check here" runat="server" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}">
</telerik:RadRadioButtonList>
````

````C#
RadRadioButtonList1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing an anonymous JS function
````
````VB
RadRadioButtonList1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing an anonymous JS function
````


## See Also

 * [CheckBox - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/checkbox/client-side-api/client-side-events/defaultcs.aspx)
 
 * [CheckBox Object]({%slug radiobuttonlist/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug radiobuttonlist/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug radiobuttonlist/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug radiobuttonlist/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug radiobuttonlist/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug radiobuttonlist/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug radiobuttonlist/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug radiobuttonlist/client-side-programming/events/onclientmouseout%})



