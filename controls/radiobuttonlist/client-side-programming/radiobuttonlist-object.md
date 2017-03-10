---
title: RadioButtonList Object
page_title: RadioButtonList Object | RadRadioButtonList for ASP.NET AJAX Documentation
description: RadioButtonList Object
slug: radiobuttonlist/client-side-programming/radiobuttonlist-object
tags: radiobutton, button, radiobuttonlist, list, radio ,object
published: True
position: 1
---

# RadioButtonList Object

The following table lists the most important members of the client-side RadRadioButtonList object:

>caption Public Properties

| Name | Description |
| ------ | ------ |
|**get_visible**|Returns if the list is visible.|
|**set_visible**|Sets the visibility of the list.|
|**get_enabled**|Returns if the list is enabled.|
|**set_enabled**|Specifies if the list is enabled.|
|**get_selectedIndex**|Gets the index of the selected radio button.|
|**set_selectedIndex**|Checks the radio button with the provided index.|
|**get_items**|Returns a collection with the [radio button list items]({%slug Telerik.Web.UI.ButtonListItem%}).|
|**get_toolTip**|Gets the text displayed when the mouse pointer hovers over the list. |
|**set_toolTip**|Sets the text displayed when the mouse pointer hovers over the list. |
|**get_height**|Gets the height of the control.|
|**set_height**|Sets the height of the control.|
|**get_width**|Gets the width of the control.|
|**set_width**|Sets the width of the control.|
|**get_validationGroup**|Gets the name of validation group to which the list is assigned.  	 |
|**set_validationGroup**|Sets the validation group to which the list should be assigned.  	 |

>tip To get or set the selected item, see the [Select Item]({%slug radiobuttonlist/functionality/select-item%}#select-item-client-side) article.

>caption Methods for Modifying Client-side Event Handlers Dynamically

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

You can read more on the subject in the [Setting Client Event Handlers by Using JavaScript]({%slug radiobuttonlist/client-side-programming/events/setting-event-handlers-via-javascript%}) help article.

## See Also

 * [Client-side Programming Overview]({%slug radiobuttonlist/client-side-programming/overview%})
 
