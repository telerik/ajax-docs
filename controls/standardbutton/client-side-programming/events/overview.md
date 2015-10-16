---
title: Overview
page_title: Overview | RadStandardButton for ASP.NET AJAX Documentation
description: Overview
slug: standardbutton/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

## RadStandardButton Client-side events

The RadStandardButton exposes several client-side events which allow easy and flexible use in a wide range of application scenarios:

* **OnClientLoad (load)** - raised when the control is initialized.

* **[OnClientClicking (clicking)]({%slug standardbutton/client-side-programming/events/onclientclicking%})** - raised when the user clicks the button. The event can be canceled.

* **[OnClientClicked (clicked)]({%slug standardbutton/client-side-programming/events/onclientclicked%})** - raised when the button is clicked. The event is subsequent to the **OnClientClicking** event.

* **[OnClientMouseOver (mouseOver)]({%slug standardbutton/client-side-programming/events/onclientmouseover%})** - raised when the mouse hovers over the control.

* **[OnClientMouseOut (mouseOut)]({%slug standardbutton/client-side-programming/events/onclientmouseout%})** - raised when the mouse leaves the control.

The event handler method for any of the events can be set on the server and on the client.

**Server-side**

To handle the desired event, the user must set the respective property to the name of the JavaScript function handling the event or to anonymous JavaScript function. Here is an example:

* Passing named (non-anonymous) JavaScript function

````ASP.NET
<script type="text/javascript">
	function Click(sender, args)
	{
		alert("RadStandardButton was clicked.");
	}
</script>
<telerik:RadStandardButton ID="RadStandardButton1" runat="server" OnClientClicked="Click">
</telerik:RadStandardButton>
````

````C#
RadStandardButton1.OnClientClicked = "Click";  //passing the name of the JS function
````
````VB
RadStandardButton1.OnClientClicked = "Click"  'passing the name of the JS function
````


* Passing anonymous JavaScript function

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1, arg2)
	{
		alert("arg1:" + arg1 + " arg2:" + arg2);
	}
</script>

<telerik:RadStandardButton ID="RadStandardButton1" runat="server" OnClientClicked="function(sender,args){Click(sender, args, 'Value1', 'Value2');}">
</telerik:RadStandardButton>
````

````C#
RadStandardButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"; //passing the name of the JS function
````
````VB
RadStandardButton1.OnClientClicked = "function(sender,args){Click(sender, args, 'Value1', 'Value2');}"  'passing the name of the JS function
````

**Client-side**

To handle the desired event, the user should use the respective **add_<eventName>(handlerFunction)** to attach the desired handler (i.e. **add_clicked** for the clicked event), where the parameter *handlerFunction* should be of type **function**. To remove a handler that has been added previously, the respective **remove_<eventName>(handlerFunction)** should be used.

Here is an example showing how to add handler on the client:

* Adding named (non-anonymous) JavaScript function

````ASP.NET
<script type="text/javascript">
	function Click(button, args)
	{
		alert("Button was clicked");
	}
	function addHandler()
	{
		var button = $find("<%=RadStandardButton1.ClientID %>");
		button.add_clicked(Click);
	}
</script>
````

* Adding anonymous JavaScript function

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1)
	{
		alert("Button was clicked. arg1: " + arg1);
	}
	function addHandler()
	{
		var button = $find("<%=RadStandardButton1.ClientID %>");
		button.add_clicked(function (button, args) { Click(button, args, "Value1") });
	}
</script>
````


