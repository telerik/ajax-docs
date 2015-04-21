---
title: RadListBoxItem Object
page_title: RadListBoxItem Object | UI for ASP.NET AJAX Documentation
description: RadListBoxItem Object
slug: listbox/client-side-programming/objects/radlistboxitem-object
tags: radlistboxitem,object
published: True
position: 1
---

# RadListBoxItem Object

## 

The __RadListBoxItem__ object is returned by the __getItem__ method of the __RadListBox__ or __RadListBoxItemCollection__ object. It is also exposed by the event arguments of many client-side events (__eventArgs.get_item()__). The following table lists the most important methods:


>caption   

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_text__ |none|string|Gets the Text of the item|
| __get_value__ |none|string|Gets th Value of the item|
| __get_attributes__ |none|Collection|Returns the collection of custom attributes for the item.|

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

>caption  

|  __enable__  | none | none | Enables the item if it is disabled |
| ------ | ------ | ------ | ------ |
| __disable__ |none|none|Disables the item if it is enabled|
| __select__ |none|none|Selects the item (equal to __set_selected(true)__ )|
| __unselect__ |none|none|Unselects the item (equal to __set_selected(false)__ )|
| __check__ |none|none|Checks the item (equal to __set_checked(true)__ )|
| __uncheck__ |none|none|Un-checks the item (equal to __set_checked(false)__ )|
| __clone__ |none|RadListBoxItem|Creates a new item by copying the properties of the source item|
| __get_isVisible__ |none|bool|Returns whether the item is visible|
| __scrollIntoView__ |none|none|Puts the item at the bottom of the visible area|
| __ensureVisible__ |none|none|If the item is not visible - puts it at the top of the visible area|
| __get_listBox__ |none|RadListBox|Gets the RadListBox client-object|
| __get_selected__ |none|bool|Returns whether the item is selected|
| __set_selected__ |bool|none|Selects the item|
| __get_checked__ |none|bool|Returns whether the item is checked|
| __set_checked__ |bool|none|Checks the item|
| __get_checkable__ |none|bool|Returns whether the item can be checked|
| __set_checkable__ |bool|none|Sets whether the item can be checked|
| __get_imageUrl__ |none|string|Gets the value of the __ImageUrl__ property|
| __set_imageUrl__ |string|none|Sets the __ImageUrl__ property of the item|
| __get_toolTip__ |none|string|Gets the tooltip of the item|
| __set_toolTip__ |string|none|Sets the tooltip of the item|
| __get_allowDrag__ |none|bool|Returns whether the item can be dragged|
| __set_allowDrag__ |bool|none|Sets the __AllowDrag__ property (whether the item can be dragged)|
| __get_element__ |none|HTML element|Returns the <LI> element of the item|
| __get_textElement__ |none|HTML element|Returns the <SPAN> element of the item|
| __get_imageElement__ |none|HTML element|Returns the image <IMG> element of the item|
| __get_checkBoxElement__ |none|HTML element|Returns the checkbox <input type=checkbox> element of the item|
| __get_cssClass__ |none|string|Gets the __cssClass__ of the RadListBoxItem.|
| __set_cssClass__ |string|none|Sets the __cssClass__ of the RadListBoxItem.|

# See Also

 * [RadListBox Object]({%slug listbox/client-side-programming/objects/radlistbox-object%})

 * [Overview]({%slug listbox/client-side-programming/overview%})

 * [Add/Remove/Disable Items on the client Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/clientside/addremovedisable/defaultcs.aspx)
