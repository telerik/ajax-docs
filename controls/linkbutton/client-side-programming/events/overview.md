---
title: Overview
page_title: Events Overview | RadLinkButton for ASP.NET AJAX Documentation
description: Events Overview
slug: linkbutton/client-side-programming/events/overview
tags: events,overview
published: True
position: 0
---

# Events Overview

The RadLinkButton exposes several client-side events which allow easy and flexible use in a wide range of application scenarios:

* **OnClientLoad (load)** - raised when the control is initialized.

* **[OnClientClicking (clicking)]({%slug linkbutton/client-side-programming/events/onclientclicking%})** - raised when the user clicks the button. The event can be canceled.

* **[OnClientClicked (clicked)]({%slug linkbutton/client-side-programming/events/onclientclicked%})** - raised when the button is clicked. The event is subsequent to the **OnClientClicking** event.

* **[OnClientMouseOver (mouseOver)]({%slug linkbutton/client-side-programming/events/onclientmouseover%})** - raised when the mouse hovers over the control.

* **[OnClientMouseOut (mouseOut)]({%slug linkbutton/client-side-programming/events/onclientmouseout%})** - raised when the mouse leaves the control.

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to anonymous JavaScript function. Here is an example:

* Passing named (non-anonymous) JavaScript function

	**ASP.NET**

		<script type="text/javascript">
			function Click(sender, args)
			{
				alert("RadLinkButton was clicked.");
			}
		</script>
		<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Click" OnClientClicked="Click" NavigateUrl="http://www.telerik.com" Target="_blank">
		</telerik:RadLinkButton>

	**C#**

		RadLinkButton1.OnClientClicked = "Click";  //passing the name of the JS function

	**VB**

		RadLinkButton1.OnClientClicked = "Click"  'passing the name of the JS function

* Passing anonymous JavaScript function

	**ASP.NET**

		<script type="text/javascript">
			function Click(button, args, arg1, arg2)
			{
				alert("arg1:" + arg1 + " arg2:" + arg2);
			}
		</script>
		<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Click" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}" NavigateUrl="http://www.telerik.com" Target="_blank">
		</telerik:RadLinkButton>

	**C#**

		RadLinkButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing the name of the JS function

	**VB**

		RadLinkButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing the name of the JS function

You can also assign event handlers in client-side code. For more information see the [Setting Event Handlers via JavaScript article]({%slug linkbutton/client-side-programming/events/setting-event-handlers-via-javascript%}).

For a live example illustrating the RadLinkButton client-side events, see the [LinkButton - Client-side Events live demo](http://demos.telerik.com/aspnet-ajax/LinkButton/Client-side-API/Client-side-Events/defaultcs.aspx).

# See Also

 * [Overview]({%slug linkbutton/client-side-programming/overview%})
 * [Setting Event Handlers via JavaScript article]({%slug linkbutton/client-side-programming/events/setting-event-handlers-via-javascript%})
 * [OnClientClicking]({%slug linkbutton/client-side-programming/events/onclientclicking%})
 * [OnClientClicked]({%slug linkbutton/client-side-programming/events/onclientclicked%})
 * [OnClientMouseOver]({%slug linkbutton/client-side-programming/events/onclientmouseover%})
 * [OnClientMouseOut]({%slug linkbutton/client-side-programming/events/onclientmouseout%})
 
 
 
