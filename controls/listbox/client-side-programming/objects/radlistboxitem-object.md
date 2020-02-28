---
title: RadListBoxItem Object
page_title: RadListBoxItem Object | RadListBox for ASP.NET AJAX Documentation
description: RadListBoxItem Object
slug: listbox/client-side-programming/objects/radlistboxitem-object
tags: radlistboxitem,object
published: True
position: 1
---

# RadListBoxItem Object

## 

The **RadListBoxItem** object is returned by the **getItem** method of the **RadListBox** or **RadListBoxItemCollection** object. It is also exposed by the event arguments of many client-side events (**eventArgs.get_item()**). The following table lists the most important methods:


>caption   

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_text** |none|string|Gets the Text of the item|
| **get_value** |none|string|Gets th Value of the item|
| **get_attributes** |none|Collection|Returns the collection of custom attributes for the item.(see **Example 1**)|
| **enable**  | none | none | Enables the item if it is disabled |
| **disable** |none|none|Disables the item if it is enabled|
| **select** |none|none|Selects the item (equal to **set_selected(true)** )|
| **unselect** |none|none|Unselects the item (equal to **set_selected(false)** )|
| **check** |none|none|Checks the item (equal to **set_checked(true)** )|
| **uncheck** |none|none|Un-checks the item (equal to **set_checked(false)** )|
| **clone** |none|RadListBoxItem|Creates a new item by copying the properties of the source item|
| **get_isVisible** |none|bool|Returns whether the item is visible|
| **scrollIntoView** |none|none|Puts the item at the bottom of the visible area|
| **ensureVisible** |none|none|If the item is not visible - puts it at the top of the visible area|
| **get_listBox** |none|RadListBox|Gets the RadListBox client-object|
| **get_selected** |none|bool|Returns whether the item is selected|
| **set_selected** |bool|none|Selects the item|
| **get_checked** |none|bool|Returns whether the item is checked|
| **set_checked** |bool|none|Checks the item|
| **get_checkable** |none|bool|Returns whether the item can be checked|
| **set_checkable** |bool|none|Sets whether the item can be checked|
| **get_imageUrl** |none|string|Gets the value of the **ImageUrl** property|
| **set_imageUrl** |string|none|Sets the **ImageUrl** property of the item|
| **get_toolTip** |none|string|Gets the tooltip of the item|
| **set_toolTip** |string|none|Sets the tooltip of the item|
| **get_allowDrag** |none|bool|Returns whether the item can be dragged|
| **set_allowDrag** |bool|none|Sets the **AllowDrag** property (whether the item can be dragged)|
| **get_element** |none|HTML element|Returns the <LI> element of the item|
| **get_textElement** |none|HTML element|Returns the <SPAN> element of the item|
| **get_imageElement** |none|HTML element|Returns the image <IMG> element of the item|
| **get_checkBoxElement** |none|HTML element|Returns the checkbox <input type=checkbox> element of the item|
| **get_cssClass** |none|string|Gets the **cssClass** of the RadListBoxItem.|
| **set_cssClass** |string|none|Sets the **cssClass** of the RadListBoxItem.|

>caption  Example 1: Demonstrates the usage of the get_attributes method
````JavaScript	
var listbox = $find("<%= RadListBox1.ClientID %>");
var foundItem = listbox.findItemByAttribute("Population", "0");
var attributes = foundItem.get_attributes();
var size = attributes.getAttribute("size");
if (size) {
	attributes.setAttribute("Population", size);
	attributes.removeAttribute("size");
}
else {
	attributes.setAttribute("Population", "Unknown");
}
````



# See Also

 * [RadListBox Object]({%slug listbox/client-side-programming/objects/radlistbox-object%})

 * [Overview]({%slug listbox/client-side-programming/overview%})

 * [Add/Remove/Disable Items on the client Demo](https://demos.telerik.com/aspnet-ajax/listbox/examples/clientside/addremovedisable/defaultcs.aspx)
