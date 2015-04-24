---
title: RadPanelItem Object
page_title: RadPanelItem Object | RadPanelBar for ASP.NET AJAX Documentation
description: RadPanelItem Object
slug: panelbar/client-side-programming/radpanelitem-object
tags: radpanelitem,object
published: True
position: 2
---

# RadPanelItem Object



## 

The **RadPanelItem** object is returned by the **getItem** method of the [RadPanelItemCollection object]({%slug panelbar/client-side-programming/radpanelitemcollection-object%}) or the "findItemBy..." methods of the [RadPanelBar]({%slug panelbar/client-side-programming/radpanelbar-object%}) object. It is also exposed by the eventArgs of many [client-side events]({%slug panelbar/client-side-programming/events%}). The following table lists the most important methods:


>caption  

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **findControl** |String|Object|Returns the client-side object of the Control with the specified ID nested in the Item's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.|
| **disable** |none|none|Disables the item.|

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.disable();
	
````




>caption  

|  **enable**  | none | none | Enables the item if it is disabled. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.enable();
	
````




>caption  

|  **get_isEnabled**  | none | Boolean | Returns true if both the item and the panelbar are enabled. If one of them is disabled, get_isEnabled() will return false. |
| ------ | ------ | ------ | ------ |
| **get_enabled** |none|Boolean|Same as get_isEnabled.|
| **set_enabled** |Boolean|none|Sets the enabled state of the item.|
| **focus** |none|none|Moves focus to the item.|

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.focus();
	
````




>caption  

|  **blur**  | none | none | Removes focus from the item. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	
	        var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	        var panelItem = panelBar.findItemByText("Paris"); 
	        panelItem.blur();
	
````




>caption  

|  **focusPreviousItem**  | none | none | Moves focus to the previous item. |
| ------ | ------ | ------ | ------ |
| **focusNextItem** |none|none|Moves focus to the next item.|
| **focusFirstChild** |none|none|Moves focus to the first child of the item.|
| **focusLastChild** |none|none|Moves focus to the last child of the item.|
| **get_focusedItem** |none|RadPanelItem|Gets the focused child item. Null if no child item is focused.|
| **get_focused** |none|Boolean|Returns a boolean indicating whether the item has focus.|
| **set_focused** |Boolean|none|Sets a boolean indicating whether the item has focus.|
| **get_previousSibling** |none|RadPanelItem|Returns the previous sibling or null if this is the first item at its level.|
| **get_nextSibling** |none|RadPanelItem|Returns the next sibling or null if this is the last item at its level.|
| **get_items** |none|[RadPanelItemCollection]({%slug panelbar/client-side-programming/radpanelitemcollection-object%})|Gets the child items of the current item.|
| **get_expandedItem** |none|RadPanelItem|Returns the child item that was most recently expanded. Null if no child item is expanded.|
| **get_selected** |none|Boolean|Returns whether the item is selected.|
| **set_selected** |Boolean|none|selects or de-selects the item.|
| **select** |none|none|Selects the item.|
| **unSelect** |none|none|De-selects the item.|
| **get_parent** |none|[RadPanelBar]({%slug panelbar/client-side-programming/radpanelbar-object%})or RadPanelItem|Returns an instance of the parent object. If this is a root item, the parent object is **RadPanelBar** and if this is a child item - a **RadPanelItem** .|
| **get_panelBar** |none|[RadPanelBar]({%slug panelbar/client-side-programming/radpanelbar-object%})|Returns an instance of the panel bar that contains the item.|
| **get_index** |none|Integer|Gets the zero-based index of the item inside its parent items collection.|
| **get_level** |none|Integer|Gets the level of the item. Root level items are level 0.|
| **get_attributes** |(none)|Collection|Returns the collection of custom attributes for the item.|

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

|  **expand**  | none | none | Expands the item and reveals its children if any. |
| ------ | ------ | ------ | ------ |
| **collapse** |none|none|Collapses the item if it is expanded.|
| **get_expanded** |Boolean|boolean|Gets the expanded/collapsed state of a panel bar item|
| **set_expanded** |Boolean|none|Expands /Collapses the item.|
| **get_visible** |none|boolean|Returns **true** if the items is visible or **false** if the item is invisible.|
| **set_text** |string|none|Sets the text of the item.|
| **get_text** |none|string|Returns the text of the item.|
| **set_value** |string|none|Sets the Value property of the item.|
| **get_value** |none|string|Returns the Value property of the item.|
| **get_isSeparator** |none|boolean|Returns **true** the item is a separator (sever-side property IsSeparator = true)|
| **get_navigateUrl** |none|string|Gets the URL of the Web page the panel item launches.|
| **set_navigateUrl** |string|none|Sets the navigateURL property of the item. This is the URL of the Web page the item launches.

>caution The **navigateUrl** property must be an absolute URL on the client side: e.g. " *http://mydomain.com/default.aspx"* not *"default.aspx".* 
>
|
| **set_imageUrl** |string|none|Sets the URL of the image.|
| **get_imageUrl** |none|string|Gets the URL of the image.|
| **set_hoveredImageUrl** |string|none|Sets the URL of the image displayed when the mouse if over the item.|
| **get_hoveredImageUrl** |none|string|Gets the URL of the image displayed when the mouse if over the item.|
| **get_cssClass** |none|string|Gets the CssClass property of the item.|
| **set_cssClass** |string|none|Sets the CssClass property for the item.|
| **get_clickedCssClass** |none|string|Gets the CSS class for the item when it is clicked.|
| **set_clickedCssClass** |string|none|Sets the CSS class for the item when it is clicked.|
| **get_focusedCssClass** |none|string|Gets the CSS class for the item when it has focus.|
| **set_focusedCssClass** |string|none|Sets the CSS class for the item when it has focus.|
| **get_expandedCssClass** |none|string|Gets the CSS class for the item when it is expanded.|
| **set_expandedCssClass** |string|none|Sets the CSS class for the item when it is expanded.|
| **get_disabledCssClass** |none|string|Gets the CSS class for the item when it is disabled.|
| **set_disabledCssClass** |string|none|Sets the CSS class for the item when it is disabled.|
| **get_element** |none|HTML Element|Gets the root DOM element of the item (LI).|
| **get_linkElement** |none|HTML Element|Gets the anchor DOM element of the item (A).|
| **get_imageElement** |none|HTML Element|Gets the image DOM element of the item. If the server side ImageUrl property is not set,returns null.|
| **get_textElement** |none|HTML Element|Gets the DOM element of the item text (SPAN).|
| **get_childListElement** |none|HTML Element|Gets the DOM element of the list of child items (UL).|
| **click** |none|none|Performs an item click. If a the **ItemClick** server event is wired, it will be fired.|
| **show** |none|none|Makes the item visible.|
| **hide** |none|none|Makes the item invisible.|
| **set_visible** |boolean|none|Shows/Hides a RadPanelItem|

# See Also

 * [Overview]({%slug panelbar/client-side-programming/overview%})

 * [Overview]({%slug panelbar/radpanelbar-items/overview%})

 * [Working With Items at the Client]({%slug panelbar/radpanelbar-items/working-with-items-at-the-client%})
