---
title: Setting Event Handlers via JavaScript
page_title: Setting Event Handlers via JavaScript | RadImageButton for ASP.NET AJAX Documentation
description: Setting Event Handlers via JavaScript
slug: imagebutton/client-side-programming/events/setting-event-handlers-via-javascript
tags: setting,event,handlers,via,javascript
published: True
position: 1
---

# Setting Event Handlers via JavaScript

You can use the client-side API of the **RadImageButton** control to modify the event handlers it calls.

To handle the desired event, the user should use the respective **add_<eventName>(handlerFunction)** to attach the desired handler (i.e. **add_clicked** for the clicked event), where the parameter *handlerFunction* should be of type **function**. To remove a handler that has been added previously, the respective **remove_<eventName>(handlerFunction)** should be used.

Here follows examples showing how to add and remove handlers on the client:

>caption Example 1: Adding named (non-anonymous) JavaScript click handler to RadImageButton.

````ASP.NET
<script type="text/javascript">
	function Click(button, args)
	{
		alert("Button was clicked");
	}
	function addHandler()
	{
		var button = $find("<%=RadImageButton1.ClientID %>");
		button.add_clicked(Click);
	}
</script>
````

>caption Example 2: Adding anonymous JavaScript click handler to RadImageButton.

````ASP.NET
<script type="text/javascript">
	function Click(button, args, arg1)
	{
		alert("Button was clicked. arg1: " + arg1);
	}
	function addHandler()
	{
		var button = $find("<%=RadImageButton1.ClientID %>");
		button.add_clicked(function (button, args) { Click(button, args, "Value1") });
	}
</script>
````

>caption Example 3: Removing JavaScript click handler of RadImageButton.

````ASP.NET
<script type="text/javascript">
function removeEvents()
{
    var button = $find("<%= RadImageButton1.ClientID %>");
    button.remove_show(Click);
}
</script>
````

>caption Public Properties

| Name | Description |
| ------ | ------ |
| **.add_load()** |The name of the javascript function called when the control loads.|
| **.remove_load()** |Removes a handler for the load event|
| **.add_clicking()** |The name of the javascript function called when the RadImageButton control is clicked.|
| **.remove_clicking()** |Removes a handler for the clicking event.|
| **.add_clicked()** |The name of the javascript function called when the RadImageButton control is clicked.|
| **.remove_clicked()** |Removes a handler for the clicked event.|
| **.add_mouseOver()** |The name of the javascript function called when the mouse hovers over the control.|
| **.remove_mouseOver()** |Removes a handler for the mouseOver event.|
| **.add_mouseOut()** |The name of the javascript function when the mouse leaves the control.|
| **.remove_mouseOut()** |Removes a handler for the mouseOut event.|

## See Also

 * [ImageButton Object]({%slug imagebutton/client-side-programming/imagebutton-object%})
 
 * [Events Overview]({%slug imagebutton/client-side-programming/events/overview%})
 
 * [OnClientClicking]({%slug imagebutton/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug imagebutton/client-side-programming/events/onclientclicked%})
 
 * [OnClientMouseOver]({%slug imagebutton/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug imagebutton/client-side-programming/events/onclientmouseout%})



