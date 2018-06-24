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

To handle the desired event, you can use the respective **`add_<eventName>(handlerFunction)`** to attach the desired handler (i.e., **add_itemClicked** for the itemClicked event), where the parameter *handlerFunction* should be of type **function**. To remove the handler that has been added previously, the respective **`remove_<eventName>(handlerFunction)`** should be used.

The next three examples show how to add and remove handlers on the client:

>caption Example 1: Adding a named (non-anonymous) JavaScript click handler to RadRadioButtonList.

````JavaScript
function Click(sender, args){
	alert("RadRadioButtonList's item was clicked");
}

function addHandler(){
	var radioButtonList = $find("<%=RadRadioButtonList1.ClientID %>");
	radioButtonList.add_itemClicked(Click);
}
````

>caption Example 2: Adding an anonymous JavaScript click handler to RadRadioButtonList.

````JavaScript
function addHandler(){
	var radioButtonList = $find("<%=RadRadioButtonList1.ClientID %>");
	radioButtonList.add_itemClicked(function (sender, args) { alert("RadRadioButtonList's item was clicked"); });
}
````

>caption Example 3: Removing the JavaScript click handler of a RadRadioButtonList.

````JavaScript
function Click(sender, args){
	// code
}

function removeEvents()
{
    var radioButtonList = $find("<%= RadRadioButtonList1.ClientID %>");
    radioButtonList.remove_itemClicked(Click);
}
````

>caption Table 1: Available add/remove methods for handling client-side events.

| Name | Description |
| ------ | ------ |
|**add_selectedIndexChanging**|The name of the JavaScript function called when the selected index is to be changed.|
|**remove_selectedIndexChanging**|Removes a handler for the selectedIndexChanging event.|
|**add_selectedIndexChanged**|The name of the JavaScript function called when the selected index is changed.|
|**remove_selectedIndexChanged**|Removes a handler for the selectedIndexChanged event.|
|**add_load**|The name of the JavaScript function called when the control loads.|
|**remove_load**|Removes a handler for the clientLoad event.|
|**add_itemClicking**|The name of the JavaScript function called when the item is clicked, but before itemClicked event.|
|**remove_itemClicking**|Removes a handler for the itemClicking event.|
|**add_itemClicked**|The name of the JavaScript function called when the item is clicked.|
|**remove_itemClicked**|Removes a handler for the itemClicked event.|
|**add_itemLoad**|The name of the JavaScript function called when an item is loaded.|
|**remove_itemLoad**|Removes a handler for the itemLoad event.|
|**add_itemMouseOver**|The name of the JavaScript function called when the mouse cursor moves over an item.|
|**remove_itemMouseOver**|Removes a handler for the itemMouseOver event.|
|**add_itemMouseOut**|The name of the JavaScript function called when the mouse cursor moves out of an item.|
|**remove_itemMouseOut**|Removes a handler for the itemMouseOut event.|

## See Also

 * [RadioButtonList Object]({%slug radiobuttonlist/client-side-programming/radiobuttonlist-object%})
 
 * [Events Overview]({%slug radiobuttonlist/client-side-programming/events/overview%})

* [OnLoad (load)]({%slug radiobuttonlist/client-side-programming/events/onload%})

* [OnItemLoad (itemLoad)]({%slug radiobuttonlist/client-side-programming/events/onitemload%})

* [OnItemClicking (itemClicking)]({%slug radiobuttonlist/client-side-programming/events/onitemclicking%})

* [OnItemClicked (itemClicked)]({%slug radiobuttonlist/client-side-programming/events/onitemclicked%})

* [OnSelectedIndexChanging (selectedIndexChanging)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanging%})

* [OnSelectedIndexChanged (selectedIndexChanged)]({%slug radiobuttonlist/client-side-programming/events/onselectedindexchanged%})

* [OnItemMouseOver (itemMouseOver)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseover%})

* [OnItemMouseOut (itemMouseOut)]({%slug radiobuttonlist/client-side-programming/events/onitemmouseout%})



