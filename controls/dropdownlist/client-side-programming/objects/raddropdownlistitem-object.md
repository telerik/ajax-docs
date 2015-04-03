---
title: RadDropDownListItem Object
page_title: RadDropDownListItem Object | UI for ASP.NET AJAX Documentation
description: RadDropDownListItem Object
slug: dropdownlist/client-side-programming/objects/raddropdownlistitem-object
tags: raddropdownlistitem,object
published: True
position: 1
---

# RadDropDownListItem Object



## 

The __RadDropDownListItem__ object is returned by the __getItem__ method of the __RadDropDownList__ or __RadDropDownListItemCollection__ object. It is also exposed by the event arguments of many client-side events (__eventArgs.get_item()__). The following table lists the most important methods:


|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __set_enabled__ |Boolean|none|Enables the item if it is disabled|
| __get_textElement__ |none|none|Returns the <span/> element of the item|
| __get_imageElement__ |none|none|Returns the <img/> element of the item|
| __remove_imageElement__ |none|none|Removes the <img/> element of the item|
| __get_text__ |none|String|Gets the Text of the item|
| __get_value__ |none|String|Gets th Value of the item|
| __set_visible__ |Boolean|none|Sets whether the item is visible|
| __set_element__ |none|none|Sets the item's DOM element|
| __findControl__ |Number|none|Searches the DropDownListItem for a client control with the specified id parameter.|
| __toJsonString__ |none|String|The JSON representation of the DropDownListItem|
| __get_attributes__ |none|AttributeCollection|Gets the arbitrary attributes collection|
| __get_element__ |none|none|Gets he DOM element for the DropDownListItem|
| __get_parent__ |none|none|The DropDownListItem's parent|
| __get_dropDownList__ |none|RadDropDownList|Gets the RadDropDownList client-object|
| __set_parent__ |none|none|Sets the DropDownListItem's parent|
| __set_text__ |String|none|Sets the DropDownListItem's text|
| __set_value__ |String|none|Sets the DropDownListItem's value|
| __get_selected__ |none|Boolean|Returns whether the item is selected|
| __set_selected__ |Boolean|none|Selects the item|
| __get_imageUrl__ |none|String|Gets the value of the ImageUrl property|
| __set_imageUrl__ |String|none|Sets the ImageUrl property of the item|
| __select__ |none|none|Selects the item (equal to set_selected(true))|
| __unselect__ |none|none|Unselects the item (equal to set_selected(false))|
| __get_index__ |none|Number|Gets the DropDownListItem's index inside the DropDownListItemCollection|
| __get_visible__ |none|Boolean|Gets a value indicating whether the DropDownListItem is visible or not|
| __get_isLast__ |none|Boolean|Gets a value indicating whether the DropDownListItem is the last item in the ControlItemCollection|
| __get_isFirst__ |none|Boolean|Gets a value indicating whether the ControlItem is the first item in the ControlItemCollection|
| __get_nextSibling__ |none|ControlItem|Gets an instance of the next sibling of a ControlItem|
| __get_previousSibling__ |none|ControlItem|Gets an instance of the previous sibling of a ControlItem.|
| __get_clientTemplate__ |none|none|Returns the value of the DropDownListItem's ClientTemplate property.|
| __set_clientTemplate__ |String|none|Sets the value of the DropDownListItem's ClientTemplate property.|
| __bindTemplate__ |none|none|Evaluates the template against the DropDownListItem's data item and applies it.|
