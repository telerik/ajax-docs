---
title: RadDropDownListItem Object
page_title: RadDropDownListItem Object - RadDropDownList
description: Check our Web Forms article about RadDropDownListItem Object.
slug: dropdownlist/client-side-programming/objects/raddropdownlistitem-object
tags: raddropdownlistitem,object
published: True
position: 1
---

# RadDropDownListItem Object



## 

The **RadDropDownListItem** object is returned by the **getItem** method of the **RadDropDownList** or **RadDropDownListItemCollection** object. It is also exposed by the event arguments of many client-side events (**eventArgs.get_item()**). The following table lists the most important methods:


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **set_enabled** |Boolean|none|Enables the item if it is disabled|
| **get_textElement** |none|none|Returns the <span/> element of the item|
| **get_imageElement** |none|none|Returns the <img/> element of the item|
| **remove_imageElement** |none|none|Removes the <img/> element of the item|
| **get_text** |none|String|Gets the Text of the item|
| **get_value** |none|String|Gets th Value of the item|
| **set_visible** |Boolean|none|Sets whether the item is visible|
| **set_element** |none|none|Sets the item's DOM element|
| **findControl** |Number|none|Searches the DropDownListItem for a client control with the specified id parameter.|
| **toJsonString** |none|String|The JSON representation of the DropDownListItem|
| **get_attributes** |none|AttributeCollection|Gets the arbitrary attributes collection|
| **get_element** |none|none|Gets he DOM element for the DropDownListItem|
| **get_parent** |none|none|The DropDownListItem's parent|
| **get_dropDownList** |none|RadDropDownList|Gets the RadDropDownList client-object|
| **set_parent** |none|none|Sets the DropDownListItem's parent|
| **set_text** |String|none|Sets the DropDownListItem's text|
| **set_value** |String|none|Sets the DropDownListItem's value|
| **get_selected** |none|Boolean|Returns whether the item is selected|
| **set_selected** |Boolean|none|Selects the item|
| **get_imageUrl** |none|String|Gets the value of the ImageUrl property|
| **set_imageUrl** |String|none|Sets the ImageUrl property of the item|
| **select** |none|none|Selects the item (equal to set_selected(true))|
| **unselect** |none|none|Unselects the item (equal to set_selected(false))|
| **get_index** |none|Number|Gets the DropDownListItem's index inside the DropDownListItemCollection|
| **get_visible** |none|Boolean|Gets a value indicating whether the DropDownListItem is visible or not|
| **get_isLast** |none|Boolean|Gets a value indicating whether the DropDownListItem is the last item in the ControlItemCollection|
| **get_isFirst** |none|Boolean|Gets a value indicating whether the ControlItem is the first item in the ControlItemCollection|
| **get_nextSibling** |none|ControlItem|Gets an instance of the next sibling of a ControlItem|
| **get_previousSibling** |none|ControlItem|Gets an instance of the previous sibling of a ControlItem.|
| **get_clientTemplate** |none|none|Returns the value of the DropDownListItem's ClientTemplate property.|
| **set_clientTemplate** |String|none|Sets the value of the DropDownListItem's ClientTemplate property.|
| **bindTemplate** |none|none|Evaluates the template against the DropDownListItem's data item and applies it.|
