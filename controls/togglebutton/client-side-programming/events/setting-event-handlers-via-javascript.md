---
title: Setting Event Handlers via JavaScript
page_title: Setting Event Handlers via JavaScript | RadToggleButton for ASP.NET AJAX Documentation
description: Setting Event Handlers via JavaScript
slug: togglebutton/client-side-programming/events/setting-event-handlers-via-javascript
tags: setting,event,handlers,via,javascript
published: True
position: 1
---

# Setting Event Handlers via JavaScript

**RadToggleButton** API exposes client-side methods to attach and detach function to its event. They  can be used as alternative to the server-side properties for handling events. 

To handle the desired event, you can use the respective **add_<eventName>(handlerFunction)** to attach the desired handler (i.e. **add_clicked** for the clicked event), where the parameter *handlerFunction* should be of type **function**. To remove the handler that has been added previously, the respective **remove_<eventName>(handlerFunction)** should be used.

Here follows examples showing how to add and remove handlers on the client:

>caption Example 1: Adding named (non-anonymous) JavaScript click handler to RadToggleButton.

````ASP.NET
<script type="text/javascript">
	function Click(button, args)
	{
		alert("Button was clicked");
	}
	function addHandler()
	{
		var toggleButton = $find("<%=RadToggleButton1.ClientID %>");
		toggleButton.add_clicked(Click);
	}
</script>
````

>caption Example 2: Adding anonymous JavaScript click handler to RadToggleButton.

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1)
	{
		alert("Button was clicked. arg1: " + arg1);
	}
	function addHandler()
	{
		var toggleButton = $find("<%=RadToggleButton1.ClientID %>");
		toggleButton.add_clicked(function (button, args) { Click(button, args, "Value1") });
	}
</script>
````

>caption Example 3: Removing JavaScript click handler of RadToggleButton.

````JavaScript
function removeEvents()
{
    var toggleButton = $find("<%= RadToggleButton1.ClientID %>");
    toggleButton.remove_show(Click);
}
````

>caption Table 1: Available add/remove methods for handling client-side events.

| Name | Description |
| ------ | ------ |
| **.add_load()** |The name of the javascript function called when the control loads.|
| **.remove_load()** |Removes a handler for the load event|
| **.add_clicking()** |The name of the javascript function called when the RadToggleButton control is clicked.|
| **.remove_clicking()** |Removes a handler for the clicking event.|
| **.add_toggleStateChanging()** |The name of the javascript function called before the state of the ToggleButton to change.|
| **.remove_toggleStateChanging()** |Removes a handler for the toggleStateChanging event.|
| **.add_toggleStateChanged()** |The name of the javascript function called when the state of the ToggleButton is changed.|
| **.remove_toggleStateChanged()** |Removes a handler for the toggleStateChanged event.|
| **.add_clicked()** |The name of the javascript function called when the RadToggleButton control is clicked.|
| **.remove_clicked()** |Removes a handler for the clicked event.|
| **.add_mouseOver()** |The name of the javascript function called when the mouse hovers over the control.|
| **.remove_mouseOver()** |Removes a handler for the mouseOver event.|
| **.add_mouseOut()** |The name of the javascript function when the mouse leaves the control.|
| **.remove_mouseOut()** |Removes a handler for the mouseOut event.|

## See Also

 * [PushButton Object]({%slug togglebutton/client-side-programming/togglebutton-object%})
 
 * [Events Overview]({%slug client-side-programming/events/overview%})
 
 * [OnClientClicking]({%slug togglebutton/client-side-programming/events/onclientclicking%})

 * [OnClientToggleStateChanging]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanging%})

 * [OnClientToggleStateChanged]({%slug togglebutton/client-side-programming/events/onclienttogglestatechanged%})
 
 * [OnClientClicked]({%slug togglebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug togglebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug togglebutton/client-side-programming/events/onclientmouseout%})



