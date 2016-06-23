---
title: Setting Event Handlers via JavaScript
page_title: Setting Event Handlers via JavaScript | RadRadioButtonList for ASP.NET AJAX Documentation
description: Setting Event Handlers via JavaScript
slug: radiobuttonlist/client-side-programming/events/setting-event-handlers-via-javascript
tags: setting,event,handlers,via,javascript
published: True
position: 1
---

# Setting Event Handlers via JavaScript

**RadRadioButtonList** API exposes client-side methods to attach and detach functions to its event. They can be used as an alternative to the server-side properties for handling events. 

To handle the desired event, you can use the respective **add_<eventName>(handlerFunction)** to attach the desired handler (i.e., **add_clicked** for the clicked event), where the parameter *handlerFunction* should be of type **function**. To remove the handler that has been added previously, the respective **remove_<eventName>(handlerFunction)** should be used.

The next three examples show how to add and remove handlers on the client:

>caption Example 1: Adding a named (non-anonymous) JavaScript click handler to RadRadioButtonList.

````ASP.NET
<script type="text/javascript">
	function Click(checkbox, args)
	{
		alert("Checkbox was clicked");
	}
	function addHandler()
	{
		var checkBox = $find("<%=RadRadioButtonList1.ClientID %>");
		checkBox.add_clicked(Click);
	}
</script>
````

>caption Example 2: Adding an anonymous JavaScript click handler to RadRadioButtonList.

````ASP.NET
<script type="text/javascript">
	function Click(checkbox, args, arg1)
	{
		alert("Checkbox was clicked. arg1: " + arg1);
	}
	function addHandler()
	{
		var checkBox = $find("<%=RadRadioButtonList1.ClientID %>");
		checkBox.add_clicked(function (checkbox, args) { Click(checkbox, args, "Value1") });
	}
</script>
````

>caption Example 3: Removing the JavaScript click handler of a RadRadioButtonList.

````JavaScript
function removeEvents()
{
    var checkBox = $find("<%= RadRadioButtonList1.ClientID %>");
    checkBox.remove_click(Click);
}
````

>caption Table 1: Available add/remove methods for handling client-side events.

| Name | Description |
| ------ | ------ |
| **add_load** |The name of the JavaScript function called when the control loads.|
| **remove_load** |Removes a handler for the load event.|
| **add_clicking** |The name of the JavaScript function called when the RadRadioButtonList control is clicked.|
| **remove_clicking** |Removes a handler for the clicking event.|
| **add_checkedChanging** |The name of the JavaScript function called before the checked state of the checkbox is changed.|
| **remove_checkedChanging** |Removes a handler for the checkedChanging event.|
| **add_checkedChanged** |The name of the JavaScript function called when the checked state of the checkbox is changed.|
| **remove_checkedChanged** |Removes a handler for the checkedChanged event.|
| **add_clicked** |The name of the JavaScript function called when the RadRadioButtonList control is clicked.|
| **remove_clicked** |Removes a handler for the clicked event.|
| **add_mouseOver** |The name of the JavaScript function called when the mouse hovers over the control.|
| **remove_mouseOver** |Removes a handler for the mouseOver event.|
| **add_mouseOut** |The name of the JavaScript function when the mouse leaves the control.|
| **remove_mouseOut** |Removes a handler for the mouseOut event.|

## See Also

 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [Events Overview]({%slug checkbox/client-side-programming/events/overview%})
 
 * [CheckBox Object]({%slug checkbox/client-side-programming/checkbox-object%})
 
 * [OnClientLoad]({%slug checkbox/client-side-programming/events/onclientload%})
 
 * [OnClientClicking]({%slug checkbox/client-side-programming/events/onclientclicking%})
 
 * [OnClientClicked]({%slug checkbox/client-side-programming/events/onclientclicked%})
 
 * [OnClientCheckedChanging]({%slug checkbox/client-side-programming/events/onclientcheckedchanging%})

 * [OnClientCheckedChanged]({%slug checkbox/client-side-programming/events/onclientcheckedchanged%})
 
 * [OnClientMouseOver]({%slug checkbox/client-side-programming/events/onclientmouseover%})
 
 * [OnClientMouseOut]({%slug checkbox/client-side-programming/events/onclientmouseout%})



