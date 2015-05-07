---
title: RadMenuItem Object
page_title: RadMenuItem Object | RadMenu for ASP.NET AJAX Documentation
description: RadMenuItem Object
slug: menu/client-side-programming/objects/radmenuitem-object
tags: radmenuitem,object
published: True
position: 1
---

# RadMenuItem Object

## 

The **RadMenuItem** object is returned by the **getItem** method of the **[RadMenuItemCollection object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})**. It is also exposed by the eventArgs of many [client-side events]({%slug menu/client-side-programming/events/overview%}). The following table lists the most important methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **disable** |none|none|Disables the item.|

````JavaScript
var menu = $find("<%= RadMenu1.ClientID %>");
var menuItem = menu.findItemByText("Paris");
menuItem.disable();			
````


>caption  

|  **enable**  | none | none | Enables the item if it is disabled. |
| ------ | ------ | ------ | ------ |

````JavaScript
var menu = $find("<%= RadMenu1.ClientID %>");
var menuItem = menu.findItemByText("Paris");
menuItem.enable();		
````

>caption  

|  **get_isEnabled**  | none | Boolean | Returns true if both the item and the menu are enabled. If one of them is disabled, get_isEnabled() will return false. |
| ------ | ------ | ------ | ------ |
| **get_enabled** |none|Boolean|Same as get_isEnabled.|
| **set_enabled** |Boolean|none|Sets the enabled state of the item.|
| **focus** |none|none|Moves keyboard focus to the item.|

````JavaScript
var menu = $find("<%= RadMenu1.ClientID %>");
var menuItem = menu.findItemByText("Paris");
menuItem.focus();	
````

>caption  

|  **blur**  | none | none | Removes focus from the item. |
| ------ | ------ | ------ | ------ |

````JavaScript
var menu = $find("<%= RadMenu1.ClientID %>");
var menuItem = menu.findItemByText("Paris");
menuItem.blur();
````


>caption  

|  **focusPreviousItem**  | none | none | Moves focus to the previous item. |
| ------ | ------ | ------ | ------ |
| **focusNextItem** |none|none|Moves focus to the next item.|
| **focusFirstChild** |none|none|Moves focus to the first child of the item.|
| **focusLastChild** |none|none|Moves focus to the last child of the item.|
| **get_focusedItem** |none|RadMenuItem|Gets the focused child item. Null if no child item is focused.|
| **get_focused** |none|Boolean|Indicates whether the menu item is focused.|
| **set_focused** |none|none|Sets focus to the item.|
| **get_items** |none|RadMenuItemCollection|Gets the child items of the current item.|
| **get_nextItem** |none|RadMenuItem|Returns the next sibling of the item. If the item is last, returns null.|
| **get_previousItem** |none|RadMenuItem|Returns the previous sibling of the item. If the item is first, returns null.|
| **get_openedItem** |none|RadMenuItem|Gets the opened child item. Null if no child item is opened.|
| **get_parent** |none|RadMenu, RadContextMenu or RadMenuItem|Returns an instance of the parent object. RadMenu or RadContextMenu if this is a root item, RadMenuItem if it is a child item.|
| **get_menu** |none|RadMenu or RadContextMenu|Returns an instance of the menu that contains the item.|
| **get_index** |none|Integer|Gets the zero based index of the item inside the parent items collection.|
| **get_level** |none|Integer|Gets the level of the item. Root level items are first level.|
| **get_attributes** |(none)|Collection|Returns the collection of custom attributes for the item.|

````JavaScript
var menu = $find("<%= RadMenu1.ClientID %>");
var foundItem = menu.findItemByAttribute("Population", "0");
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

|  **open**  | none | none | Expands the item and reveals its children, if any. |
| ------ | ------ | ------ | ------ |
| **close** |none|none|Collapses the item, if it is expanded.|
| **click** |none|none|Performs a click on the menu item. It can cause postback, but it will not redirect to another page. See [this example]({%slug menu/how-to/use-radconfirm-to-confirm-menuitem-click%}).|
| **get_visible** |none|boolean|Returns **true** if the items is visible or **false** if the item is invisible.|
| **set_visible** |boolean|none|Sets the visibility of the item|
| **show** |none|none|Shows the item if it was set invisible on the client. The same as **set_visible(true)** |
| **hide** |none|none|Hides the item. The same as **set_visible(false)** |
| **set_text** |string text|none|Sets the text of the item.|
| **get_text** |none|string text|Returns the text of the item.|
| **set_value** |string value|none|Sets the Value property of the item.|
| **get_value** |none|string value|Returns the Value property of the item.|
| **get_isSeparator** |none|boolean|Returns **true** the item is a separator (sever-side property IsSeparator = true)|
| **get_navigateUrl** |none|string|Gets the URL of the Web page the menu item launches.|
| **set_navigateUrl** |string|none|Sets the navigateURL property of the item. This is the URL of the Web page the menu item launches.

>caution The **navigateUrl** property must be an absolute URL on the client side: e.g." *http://mydomain.com/default.aspx"* not *"default.aspx".* 
>
|
| **set_imageUrl** |(string imageUrl)|none|Sets the URL of the image.|
| **get_imageUrl** |none|(string imageUrl)|Gets the URL of the image.|
| **set_hoveredImageUrl** |(string imageUrl)|none|Sets the URL of the image displayed when the mouse is over the item.|
| **get_hoveredImageUrl** |none|(string imageUrl)|Gets the URL of the image displayed when the mouse is over the item.|
| **get_element** |none|HTML Element|Gets the root DOM element of the item (LI).|
| **get_linkElement** |none|HTML Element|Gets the anchor DOM element of the item (A).|
| **get_imageElement** |none|HTML Element|Gets the image DOM element of the item. If the server side ImageUrl property is not set,returns null.|
| **get_textElement** |none|HTML Element|Gets the DOM element of the item text (SPAN).|
| **get_childListElement** |none|HTML Element|Gets the DOM element of the list of child items (UL).|
| **findControl** |string|object|Returns the object nested in the item's template|
| **get_selected** |none|Boolean|Returns whether the item is selected|
| **set_selected** |Boolean|none|Sets the selected property of the item.|
| **get_selectedImageUrl** |none|(string imageURL)|Gets the value of the **SelectedImageUrl** property|
| **set_selectedImageUrl** |string (imageUrl)|none|Sets the URL of the image displayed when the item is selected|

# See Also

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [Overview]({%slug menu/radmenu-items/overview%})

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})
