---
title: RadToolBarItem Object
page_title: RadToolBarItem Object | UI for ASP.NET AJAX Documentation
description: RadToolBarItem Object
slug: toolbar/client-side-programming/radtoolbaritem-object
tags: radtoolbaritem,object
published: True
position: 3
---

# RadToolBarItem Object



## 

The __RadToolBarButton__, __RadToolBarDropDown__, and __RadToolBarSplitButton__ objects share most of the same methods. The following table lists the most important of these common __RadToolBarItem__ client-side object methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __findControl__ |String|Object|Returns the client-side object of the Control with the specified ID nested in the Item's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.|
| __get_toolBar__ |none|[RadToolBar]({%slug toolbar/client-side-programming/radtoolbar-object%})|Returns the toolbar to which the item belongs.|
| __enable__ |none|none|Enables the toolbar item.|
| __disable__ |none|none|disables the toolbar item.|
| __get_enabled__ |none|boolean|Returns __true__ if the item is enabled.|
| __click__ |none|none|Causes server-side button click event to occur|
| __set_enabled__ |boolean|none|Sets whether the item is enabled.|
| __get_isEnabled__ |none|boolean|Returns true if both the item and the toolbar are enabled. If one of them is disabled, get_isEnabled() will return false.|
| __focus__ |none|none|Moves focus to the item.|
| __blur__ |none|none|Moves focus off the item to the next element in the tab order.|
| __get_focused__ |none|boolean|Returns true if the item has focus.|
| __get_text__ |none|string|Returns the text of the item.|
| __set_text__ |string|none|Sets the text of the item.|
| __get_value__ |none|string|Returns the value of the item.|
| __set_value__ |string|none|Sets the value of the item.|
| __get_index__ |none|integer|Returns the index of the item in the toolbar or drop-down list.|
| __get_isFirst__ |none|boolean|Returns whether the item has index 0.|
| __get_isLast__ |none|boolean|Returns whether the item is the last in the toolbar or drop-down list.|
| __get_nextSibling__ |none|RadToolBarItem|Returns the next item in the toolbar or drop-down list.|
| __get_previousSibling__ |none|RadToolBarItem|Returns the previous item in the toolbar or drop-down list.|
| __get_toolTip__ |none|string|Returns the text of the item's tool tip.|
| __set_toolTip__ |string|none|Sets the text of the item's tool tip.|
| __get_attributes__ |none|[Attributes]({%slug toolbar/client-side-programming/attributes-object%})|Returns the collection of custom attributes defined for the item.|
| __get_element__ |none|HTML element|Gets the DOM element for the item.|
| __get_imageElement__ |none|HTML element|Gets the DOM element for the image of the item.|
| __get_textElement__ |none|HTML element|Gets the DOM element for the text of the item.|
| __get_innerWrapElement__ |none|HTML element|Gets the DOM element for the innermost SPAN that wraps the item.|
| __get_middleWrapElement__ |none|HTML element|Gets the DOM element for the middle SPAN that wraps the item.|
| __get_outerWrapElement__ |none|HTML element|Gets the DOM element for the outermost SPAN that wraps the item.|
| __show__ |none|none|Shows the toolbar item.|
| __hide__ |none|none|Hides the toolbar item.|
| __get_clicked__ |none|boolean|True if the item is clicked.|
| __get_focused__ |none|boolean|True if the item is focused.|
| __get_hovered__ |none|boolean|True if the item is hovered.|
| __get_level__ |none|integer|Gets the level of the item. Buttons and child items of a drop down button have 0 level. Child items of a split button are with level 1.|
| __get_navigateUrl__ |none|string|Returns the NavigateUrl of the item|
| __set_navigateUrl__ |string|none|Sets the NavigateUrl of the item|

## 

In addition to the common methods listed above, __RadToolBarButton__ supports the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __check__ |none|none|Sets the checked property to __true__ .|
| __unCheck__ |none|none|Sets the checked property to __false__ .|
| __toggle__ |none|none|Toggles the checked property.|
| __get_checked__ |none|boolean|Returns the value of the checked property.|
| __get_isChecked__ |none|boolean|Same as get_checked.|
| __get_commandName__ |none|string|Returns the name of the command associated with the item.|
| __set_commandName__ |string|none|Sets the CommandName of the item.|
| __get_commandArgument__ |none|string|Returns the value of the __CommandArgument__ property.|
| __set_commandArgument__ |string|none|Sets the CommandArgument of the item.|
| __get_isSeparator__ |none|boolean|Returns whether the item is a separator.|
| __get_group__ |none|string|Gets the name of the group to which the item belongs.|
| __set_group__ |string|none|Sets the name of the group to which the item belongs.|
| __get_enableDefaultButton__ |none|boolean|Returns true if EnabledDefaultButton is enabled.|
| __set_enableDefaultButton__ |boolean|none|Enables/Disables the EnabledDefaultButton mechanism.|
| __set_imageUrl__ |string|none|Sets the URL for the image.|
| __get_imageUrl__ |none|string|Returns the URL of the image.|
| __set_hoveredImageUrl__ |string|none|Sets the URL for the hovered-state image.|
| __get_hoveredImageUrl__ |none|string|Returns the URL of the hovered-state image.|
| __getDefaultButton__ |none|RadToolBarButton|Returns the default button.|
| __get_defaultButtonIndex__ |none|Int|Returns the index of the Default Button.|
| __set_defaultButtonIndex__ |Int|none|Sets the index of the Default Button.|

## 

__RadToolBarDropDown__ supports the following additional methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_buttons__ |none|[RadToolBarButtonCollection]({%slug toolbar/client-side-programming/radtoolbarbuttoncollection-object%})|Returns the collection of items in the drop-down list (if it exists).|
| __get_dropDownElement__ |none|HTML element|

>caution This method is not available for __RadToolBarButton__ .
>
|
| __get_animationContainer__ |none|HTML element|Returns the DOM element for the animation container of the item's drop-down list.

>caution This method is not available for __RadToolBarButton__ .
>
|
| __showDropDown__ |none|none|Opens the drop-down list.|
| __hideDropDown__ |none|none|Closes the drop-down list.|

## 

__RadToolBarSplitButton__ supports the following additional methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_buttons__ |none|[RadToolBarButtonCollection]({%slug toolbar/client-side-programming/radtoolbarbuttoncollection-object%})|Returns the collection of items in the drop-down list (if it exists).|
| __get_commandName__ |none|string|Returns the name of the command associated with the item.|
| __get_commandArgument__ |none|string|Returns the value of the __CommandArgument__ property.|
| __get_dropDownElement__ |none|HTML element|Returns the DOM element for the item's drop-down list.|
| __get_animationContainer__ |none|HTML element|Returns the DOM element for the animation container of the item's drop-down list.|
| __set_imageUrl__ |string|none|Sets the URL for the image.|
| __get_imageUrl__ |none|string|Returns the URL of the image.|
| __set_hoveredImageUrl__ |string|none|Sets the URL for the hovered-state image.|
| __get_hoveredImageUrl__ |none|string|Returns the URL of the hovered-state image.|
| __showDropDown__ |none|none|Opens the drop-down list.|
| __hideDropDown__ |none|none|Closes the drop-down list.|
