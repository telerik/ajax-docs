---
title: Setting Event Handlers via JavaScript
page_title: Setting Event Handlers via JavaScript | RadLinkButton for ASP.NET AJAX Documentation
description: Setting Event Handlers via JavaScript
slug: linkbutton/client-side-programming/events/setting-event-handlers-via-javascript
tags: setting,event,handlers,via,javascript
published: True
position: 1
---

# Setting Event Handlers via JavaScript

You can use the client-side API of the RadLinkButton control to modify the event handlers it calls.

To handle the desired event, the user should use the respective **add_<eventName>(handlerFunction)** to attach the desired handler (i.e. **add_clicked** for the clicked event), where the parameter *handlerFunction* should be of type **function**. To remove a handler that has been added previously, the respective **remove_<eventName>(handlerFunction)** should be used.

Here is an example showing how to add handler on the client:

* Adding named (non-anonymous) JavaScript function

	**ASP.NET**

		<script type="text/javascript">
			function Click(button, args)
			{
				alert("Button was clicked");
			}
			function addHandler()
			{
				var button = $find("<%=RadLinkButton1.ClientID %>");
				button.add_clicked(Click);
			}
		</script>

* Adding anonymous JavaScript function

	**ASP.NET**

		<script type="text/javascript">
			function Click(button, args, arg1)
			{
				alert("Button was clicked. arg1: " + arg1);
			}
			function addHandler()
			{
				var button = $find("<%=RadLinkButton1.ClientID %>");
				button.add_clicked(function (button, args) { Click(button, args, "Value1") });
			}
		</script>
	
>caption A list with the available methods

| Name | Description |
| ------ | ------ |
| **.add_load()** |The name of the javascript function called when the control loads.|
| **.remove_load()** |Removes a handler for the load event|
| **.add_clicking()** |The name of the javascript function called when the RadLinkButton control is clicked.|
| **.remove_clicking()** |Removes a handler for the clicking event.|
| **.add_clicked()** |The name of the javascript function called when the RadLinkButton control is clicked.|
| **.remove_clicked()** |Removes a handler for the clicked event.|
| **.add_mouseOver()** |The name of the javascript function called when the mouse hovers over the control.|
| **.remove_mouseOver()** |Removes a handler for the mouseOver event.|
| **.add_mouseOut()** |The name of the javascript function when the mouse leaves the control.|
| **.remove_mouseOut()** |Removes a handler for the mouseOut event.|

# See Also

 * [Overview]({%slug linkbutton/client-side-programming/overview%})
 * [OnClientClicking]({%slug linkbutton/client-side-programming/events/onclientclicking%})
 * [OnClientClicked]({%slug linkbutton/client-side-programming/events/onclientclicked%})
 * [OnClientMouseOver]({%slug linkbutton/client-side-programming/events/onclientmouseover%})
 * [OnClientMouseOut]({%slug linkbutton/client-side-programming/events/onclientmouseout%})