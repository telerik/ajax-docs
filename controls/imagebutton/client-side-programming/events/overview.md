---
title: Overview
page_title: Overview | RadImageButton for ASP.NET AJAX Documentation
description: Overview
slug: imagebutton/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

The **RadImageButton** exposes several client-side events that allow easy and flexible use in a wide range of application scenarios:

* **[OnClientLoad (load)]({%slug imagebutton/client-side-programming/events/onclientload%})** - raised when the control is initialized.

* **[OnClientClicking (clicking)]({%slug imagebutton/client-side-programming/events/onclientclicking%})** - raised when the user clicks the button. The event can be canceled.

* **[OnClientClicked (clicked)]({%slug imagebutton/client-side-programming/events/onclientclicked%})** - raised when the button is clicked. The event is subsequent to the **OnClientClicking** event.

* **[OnClientMouseOver (mouseOver)]({%slug imagebutton/client-side-programming/events/onclientmouseover%})** - raised when the mouse hovers over the control.

* **[OnClientMouseOut (mouseOut)]({%slug imagebutton/client-side-programming/events/onclientmouseout%})** - raised when the mouse leaves the control.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to an anonymous JavaScript function. Here is an example:

>caption Example 1: Passing named (non-anonymous) JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(sender, args)
	{
		alert("RadImageButton was clicked.");
	}
</script>
<telerik:RadImageButton ID="RadImageButton1" runat="server" OnClientClicked="Click">
</telerik:RadImageButton>
````

````C#
RadImageButton1.OnClientClicked = "Click";  //passing the name of the JS function
````
````VB
RadImageButton1.OnClientClicked = "Click"  'passing the name of the JS function
````


>caption Example 2: Passing an anonymous JavaScript function.

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1, arg2)
	{
		alert("arg1:" + arg1 + " arg2:" + arg2);
	}
</script>

<telerik:RadImageButton ID="RadImageButton1" runat="server" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}">
</telerik:RadImageButton>
````

````C#
RadImageButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing the name of the JS function
````
````VB
RadImageButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing the name of the JS function
````


## See Also

 * [ImageButton - Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/imagebutton/client-side-api/client-side-events/defaultcs.aspx)
 
 * [ImageButton Object]({%slug imagebutton/client-side-programming/imagebutton-object%})
 
 * [OnClientLoad]({%slug imagebutton/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug imagebutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug imagebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug imagebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug imagebutton/client-side-programming/events/onclientmouseout%})



