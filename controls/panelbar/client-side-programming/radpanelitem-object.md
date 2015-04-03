---
title: RadPanelItem Object
page_title: RadPanelItem Object | UI for ASP.NET AJAX Documentation
description: RadPanelItem Object
slug: panelbar/client-side-programming/radpanelitem-object
tags: radpanelitem,object
published: True
position: 2
---

# RadPanelItem Object



## 

The __RadPanelItem__ object is returned by the __getItem__ method of the [RadPanelItemCollection object]({%slug panelbar/client-side-programming/radpanelitemcollection-object%}) or the "findItemBy..." methods of the [RadPanelBar]({%slug panelbar/client-side-programming/radpanelbar-object%}) object. It is also exposed by the eventArgs of many [client-side events]({%slug panelbar/client-side-programming/events%}). The following table lists the most important methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __findControl__ |String|Object|Returns the client-side object of the Control with the specified ID nested in the Item's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.|
| __disable__ |none|none|Disables the item.|

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.disable();
	
````




>caption  

|  __enable__  | none | none | Enables the item if it is disabled. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.enable();
	
````




>caption  

|  __get_isEnabled__  | none | Boolean | Returns true if both the item and the panelbar are enabled. If one of them is disabled, get_isEnabled() will return false. |
| ------ | ------ | ------ | ------ |
| __get_enabled__ |none|Boolean|Same as get_isEnabled.|
| __set_enabled__ |Boolean|none|Sets the enabled state of the item.|
| __focus__ |none|none|Moves focus to the item.|

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.focus();
	
````




>caption  

|  __blur__  | none | none | Removes focus from the item. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.blur();
	
````




>caption  

|  __focusPreviousItem__  | none | none | Moves focus to the previous item. |
| ------ | ------ | ------ | ------ |
| __focusNextItem__ |none|none|Moves focus to the next item.|
| __focusFirstChild__ |none|none|Moves focus to the first child of the item.|
| __focusLastChild__ |none|none|Moves focus to the last child of the item.|
| __get_focusedItem__ |none|RadPanelItem|Gets the focused child item. Null if no child item is focused.|
| __get_focused__ |none|Boolean|Returns a boolean indicating whether the item has focus.|
| __set_focused__ |Boolean|none|Sets a boolean indicating whether the item has focus.|
| __get_previousSibling__ |none|RadPanelItem|Returns the previous sibling or null if this is the first item at its level.|
| __get_nextSibling__ |none|RadPanelItem|Returns the next sibling or null if this is the last item at its level.|
| __get_items__ |none|[RadPanelItemCollection]({%slug panelbar/client-side-programming/radpanelitemcollection-object%})|Gets the child items of the current item.|
| __get_expandedItem__ |none|RadPanelItem|Returns the child item that was most recently expanded. Null if no child item is expanded.|
| __get_selected__ |none|Boolean|Returns whether the item is selected.|
| __set_selected__ |Boolean|none|selects or de-selects the item.|
| __select__ |none|none|Selects the item.|
| __unSelect__ |none|none|De-selects the item.|
| __get_parent__ |none|[RadPanelBar]({%slug panelbar/client-side-programming/radpanelbar-object%})or RadPanelItem|Returns an instance of the parent object. If this is a root item, the parent object is __RadPanelBar__ and if this is a child item - a __RadPanelItem__ .|
| __get_panelBar__ |none|[RadPanelBar]({%slug panelbar/client-side-programming/radpanelbar-object%})|Returns an instance of the panel bar that contains the item.|
| __get_index__ |none|Integer|Gets the zero-based index of the item inside its parent items collection.|
| __get_level__ |none|Integer|Gets the level of the item. Root level items are level 0.|
| __get_attributes__ |(none)|Collection|Returns the collection of custom attributes for the item.|

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var foundItem = panelBar.findItemByAttribute("Population", "0");
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

|  __expand__  | none | none | Expands the item and reveals its children if any. |
| ------ | ------ | ------ | ------ |
| __collapse__ |none|none|Collapses the item if it is expanded.|
| __get_expanded__ |Boolean|boolean|Gets the expanded/collapsed state of a panel bar item|
| __set_expanded__ |Boolean|none|Expands /Collapses the item.|
| __get_visible__ |none|boolean|Returns __true__ if the items is visible or __false__ if the item is invisible.|
| __set_text__ |string|none|Sets the text of the item.|
| __get_text__ |none|string|Returns the text of the item.|
| __set_value__ |string|none|Sets the Value property of the item.|
| __get_value__ |none|string|Returns the Value property of the item.|
| __get_isSeparator__ |none|boolean|Returns __true__ the item is a separator (sever-side property IsSeparator = true)|
| __get_navigateUrl__ |none|string|Gets the URL of the Web page the panel item launches.|
| __set_navigateUrl__ |string|none|Sets the navigateURL property of the item. This is the URL of the Web page the item launches.

>caution The __navigateUrl__ property must be an absolute URL on the client side: e.g. " *http://mydomain.com/default.aspx"* not *"default.aspx".* 
>
|
| __set_imageUrl__ |string|none|Sets the URL of the image.|
| __get_imageUrl__ |none|string|Gets the URL of the image.|
| __set_hoveredImageUrl__ |string|none|Sets the URL of the image displayed when the mouse if over the item.|
| __get_hoveredImageUrl__ |none|string|Gets the URL of the image displayed when the mouse if over the item.|
| __get_cssClass__ |none|string|Gets the CssClass property of the item.|
| __set_cssClass__ |string|none|Sets the CssClass property for the item.|
| __get_clickedCssClass__ |none|string|Gets the CSS class for the item when it is clicked.|
| __set_clickedCssClass__ |string|none|Sets the CSS class for the item when it is clicked.|
| __get_focusedCssClass__ |none|string|Gets the CSS class for the item when it has focus.|
| __set_focusedCssClass__ |string|none|Sets the CSS class for the item when it has focus.|
| __get_expandedCssClass__ |none|string|Gets the CSS class for the item when it is expanded.|
| __set_expandedCssClass__ |string|none|Sets the CSS class for the item when it is expanded.|
| __get_disabledCssClass__ |none|string|Gets the CSS class for the item when it is disabled.|
| __set_disabledCssClass__ |string|none|Sets the CSS class for the item when it is disabled.|
| __get_element__ |none|HTML Element|Gets the root DOM element of the item (LI).|
| __get_linkElement__ |none|HTML Element|Gets the anchor DOM element of the item (A).|
| __get_imageElement__ |none|HTML Element|Gets the image DOM element of the item. If the server side ImageUrl property is not set,returns null.|
| __get_textElement__ |none|HTML Element|Gets the DOM element of the item text (SPAN).|
| __get_childListElement__ |none|HTML Element|Gets the DOM element of the list of child items (UL).|
| __click__ |none|none|Performs an item click. If a the __ItemClick__ server event is wired, it will be fired.|
| __show__ |none|none|Makes the item visible.|
| __hide__ |none|none|Makes the item invisible.|
| __set_visible__ |boolean|none|Shows/Hides a RadPanelItem|

# See Also

 * [Overview]({%slug panelbar/client-side-programming/overview%})

 * [Overview]({%slug panelbar/radpanelbar-items/overview%})

 * [Working With Items at the Client]({%slug panelbar/radpanelbar-items/working-with-items-at-the-client%})
