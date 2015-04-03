---
title: RadMenuItem Object
page_title: RadMenuItem Object | UI for ASP.NET AJAX Documentation
description: RadMenuItem Object
slug: menu/client-side-programming/objects/radmenuitem-object
tags: radmenuitem,object
published: True
position: 1
---

# RadMenuItem Object



## 

The __RadMenuItem__ object is returned by the __getItem__ method of the __[RadMenuItemCollection object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})__. It is also exposed by the eventArgs of many [client-side events]({%slug menu/client-side-programming/events/overview%}). The following table lists the most important methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __disable__ |none|none|Disables the item.|

````JavaScript
	var menu = $find("<%= RadMenu1.ClientID %>");
	var menuItem = menu.findItemByText("Paris");
	menuItem.disable();			
````




>caption  

|  __enable__  | none | none | Enables the item if it is disabled. |
| ------ | ------ | ------ | ------ |

````JavaScript
	var menu = $find("<%= RadMenu1.ClientID %>");
	var menuItem = menu.findItemByText("Paris");
	menuItem.enable();		
````




>caption  

|  __get_isEnabled__  | none | Boolean | Returns true if both the item and the menu are enabled. If one of them is disabled, get_isEnabled() will return false. |
| ------ | ------ | ------ | ------ |
| __get_enabled__ |none|Boolean|Same as get_isEnabled.|
| __set_enabled__ |Boolean|none|Sets the enabled state of the item.|
| __focus__ |none|none|Moves keyboard focus to the item.|

````JavaScript
	var menu = $find("<%= RadMenu1.ClientID %>");
	var menuItem = menu.findItemByText("Paris");
	menuItem.focus();	
````




>caption  

|  __blur__  | none | none | Removes focus from the item. |
| ------ | ------ | ------ | ------ |

````JavaScript
	var menu = $find("<%= RadMenu1.ClientID %>");
	var menuItem = menu.findItemByText("Paris");
	menuItem.blur();
````




>caption  

|  __focusPreviousItem__  | none | none | Moves focus to the previous item. |
| ------ | ------ | ------ | ------ |
| __focusNextItem__ |none|none|Moves focus to the next item.|
| __focusFirstChild__ |none|none|Moves focus to the first child of the item.|
| __focusLastChild__ |none|none|Moves focus to the last child of the item.|
| __get_focusedItem__ |none|RadMenuItem|Gets the focused child item. Null if no child item is focused.|
| __get_focused__ |none|Boolean|Indicates whether the menu item is focused.|
| __set_focused__ |none|none|Sets focus to the item.|
| __get_items__ |none|RadMenuItemCollection|Gets the child items of the current item.|
| __get_nextItem__ |none|RadMenuItem|Returns the next sibling of the item. If the item is last, returns null.|
| __get_previousItem__ |none|RadMenuItem|Returns the previous sibling of the item. If the item is first, returns null.|
| __get_openedItem__ |none|RadMenuItem|Gets the opened child item. Null if no child item is opened.|
| __get_parent__ |none|RadMenu, RadContextMenu or RadMenuItem|Returns an instance of the parent object. RadMenu or RadContextMenu if this is a root item, RadMenuItem if it is a child item.|
| __get_menu__ |none|RadMenu or RadContextMenu|Returns an instance of the menu that contains the item.|
| __get_index__ |none|Integer|Gets the zero based index of the item inside the parent items collection.|
| __get_level__ |none|Integer|Gets the level of the item. Root level items are first level.|
| __get_attributes__ |(none)|Collection|Returns the collection of custom attributes for the item.|

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

|  __open__  | none | none | Expands the item and reveals its children, if any. |
| ------ | ------ | ------ | ------ |
| __close__ |none|none|Collapses the item, if it is expanded.|
| __click__ |none|none|Performs a click on the menu item. It can cause postback, but it will not redirect to another page. See[this example]({%slug menu/application-scenarios/use-radconfirm-to-confirm-menuitem-click%}).|
| __get_visible__ |none|boolean|Returns __true__ if the items is visible or __false__ if the item is invisible.|
| __set_visible__ |boolean|none|Sets the visibility of the item|
| __show__ |none|none|Shows the item if it was set invisible on the client. The same as __set_visible(true)__ |
| __hide__ |none|none|Hides the item. The same as __set_visible(false)__ |
| __set_text__ |string text|none|Sets the text of the item.|
| __get_text__ |none|string text|Returns the text of the item.|
| __set_value__ |string value|none|Sets the Value property of the item.|
| __get_value__ |none|string value|Returns the Value property of the item.|
| __get_isSeparator__ |none|boolean|Returns __true__ the item is a separator (sever-side property IsSeparator = true)|
| __get_navigateUrl__ |none|string|Gets the URL of the Web page the menu item launches.|
| __set_navigateUrl__ |string|none|Sets the navigateURL property of the item. This is the URL of the Web page the menu item launches.

>caution The __navigateUrl__ property must be an absolute URL on the client side: e.g." *http://mydomain.com/default.aspx"* not *"default.aspx".* 
>
|
| __set_imageUrl__ |(string imageUrl)|none|Sets the URL of the image.|
| __get_imageUrl__ |none|(string imageUrl)|Gets the URL of the image.|
| __set_hoveredImageUrl__ |(string imageUrl)|none|Sets the URL of the image displayed when the mouse is over the item.|
| __get_hoveredImageUrl__ |none|(string imageUrl)|Gets the URL of the image displayed when the mouse is over the item.|
| __get_element__ |none|HTML Element|Gets the root DOM element of the item (LI).|
| __get_linkElement__ |none|HTML Element|Gets the anchor DOM element of the item (A).|
| __get_imageElement__ |none|HTML Element|Gets the image DOM element of the item. If the server side ImageUrl property is not set,returns null.|
| __get_textElement__ |none|HTML Element|Gets the DOM element of the item text (SPAN).|
| __get_childListElement__ |none|HTML Element|Gets the DOM element of the list of child items (UL).|
| __findControl__ |string|object|Returns the object nested in the item's template|
| __get_selected__ |none|Boolean|Returns whether the item is selected|
| __set_selected__ |Boolean|none|Sets the selected property of the item.|
| __get_selectedImageUrl__ |none|(string imageURL)|Gets the value of the __SelectedImageUrl__ property|
| __set_selectedImageUrl__ |string (imageUrl)|none|Sets the URL of the image displayed when the item is selected|

# See Also

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [Overview]({%slug menu/radmenu-items/overview%})

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})
