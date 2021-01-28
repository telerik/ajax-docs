---
title: RadToolBarItem Object
page_title: RadToolBarItem Object - RadToolBar
description: Check our Web Forms article about RadToolBarItem Object.
slug: toolbar/client-side-programming/radtoolbaritem-object
tags: radtoolbaritem,object
published: True
position: 2
---

# RadToolBarItem Object

The **RadToolBarButton**, **RadToolBarDropDown**, and **RadToolBarSplitButton** objects share most of the same methods.

## Common RadToolBarItem methods

The following table lists the most important of the common **RadToolBarItem** client-side object methods:

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **findControl** |String|Object|Returns the client-side object of the Control with the specified ID nested in the Item's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.|
| **get_toolBar** |none|[RadToolBar]({%slug toolbar/client-side-programming/radtoolbar-object%})|Returns the toolbar to which the item belongs.|
| **enable** |none|none|Enables the toolbar item.|
| **disable** |none|none|disables the toolbar item.|
| **get_enabled** |none|boolean|Returns **true** if the item is enabled.|
| **click** |none|none|Causes server-side button click event to occur|
| **set_enabled** |boolean|none|Sets whether the item is enabled.|
| **get_isEnabled** |none|boolean|Returns true if both the item and the toolbar are enabled. If one of them is disabled, get_isEnabled() will return false.|
| **focus** |none|none|Moves focus to the item.|
| **blur** |none|none|Moves focus off the item to the next element in the tab order.|
| **get_focused** |none|boolean|Returns true if the item has focus.|
| **get_text** |none|string|Returns the text of the item.|
| **set_text** |string|none|Sets the text of the item.|
| **get_value** |none|string|Returns the value of the item.|
| **set_value** |string|none|Sets the value of the item.|
| **get_index** |none|integer|Returns the index of the item in the toolbar or drop-down list.|
| **get_isFirst** |none|boolean|Returns whether the item has index 0.|
| **get_isLast** |none|boolean|Returns whether the item is the last in the toolbar or drop-down list.|
| **get_nextSibling** |none|RadToolBarItem|Returns the next item in the toolbar or drop-down list.|
| **get_previousSibling** |none|RadToolBarItem|Returns the previous item in the toolbar or drop-down list.|
| **get_toolTip** |none|string|Returns the text of the item's tool tip.|
| **set_toolTip** |string|none|Sets the text of the item's tool tip.|
| **get_attributes** |none|[Attributes]({%slug toolbar/client-side-programming/attributes-object%})|Returns the collection of custom attributes defined for the item.|
| **get_element** |none|HTML element|Gets the DOM element for the item.|
| **get_imageElement** |none|HTML element|Gets the DOM element for the image of the item.|
| **get_textElement** |none|HTML element|Gets the DOM element for the text of the item.|
| **get_innerWrapElement** |none|HTML element|Gets the DOM element for the innermost SPAN that wraps the item.|
| **get_middleWrapElement** |none|HTML element|Gets the DOM element for the middle SPAN that wraps the item.|
| **get_outerWrapElement** |none|HTML element|Gets the DOM element for the outermost SPAN that wraps the item.|
| **show** |none|none|Shows the toolbar item. If you are using the [responsive features]({%slug toolbar/mobile-support/responsive-design%}), make sure to call the toolbar's `.repaint()` method afterwards.|
| **hide** |none|none|Hides the toolbar item. If you are using the [responsive features]({%slug toolbar/mobile-support/responsive-design%}), make sure to call the toolbar's `.repaint()` method afterwards.|
| **get_clicked** |none|boolean|True if the item is clicked.|
| **get_focused** |none|boolean|True if the item is focused.|
| **get_hovered** |none|boolean|True if the item is hovered.|
| **get_level** |none|integer|Gets the level of the item. Buttons and child items of a drop down button have 0 level. Child items of a split button are with level 1.|
| **get_navigateUrl** |none|string|Returns the NavigateUrl of the item|
| **set_navigateUrl** |string|none|Sets the NavigateUrl of the item|
| **get_overFlow** |none|integer|Returns the Overflow of the item where Telerik.Web.UI.ToolBarOverflow.Auto = 0; Telerik.Web.UI.ToolBarOverflow.Always = 1; Telerik.Web.UI.ToolBarOverflow.Never = 2;.|
| **set_overFlow** |integer|none|Sets the Overflow of the item where Telerik.Web.UI.ToolBarOverflow.Auto = 0; Telerik.Web.UI.ToolBarOverflow.Always = 1; Telerik.Web.UI.ToolBarOverflow.Never = 2;|

## RadToolBarButton methods

In addition to the common methods listed above, **RadToolBarButton** supports the following methods:

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **check** |none|none|Sets the checked property to **true** .|
| **unCheck** |none|none|Sets the checked property to **false** .|
| **toggle** |none|none|Toggles the checked property.|
| **get_checked** |none|boolean|Returns the value of the checked property.|
| **get_isChecked** |none|boolean|Same as get_checked.|
| **get_commandName** |none|string|Returns the name of the command associated with the item.|
| **set_commandName** |string|none|Sets the CommandName of the item.|
| **get_commandArgument** |none|string|Returns the value of the **CommandArgument** property.|
| **set_commandArgument** |string|none|Sets the CommandArgument of the item.|
| **get_isSeparator** |none|boolean|Returns whether the item is a separator.|
| **get_group** |none|string|Gets the name of the group to which the item belongs.|
| **set_group** |string|none|Sets the name of the group to which the item belongs.|
| **get_enableDefaultButton** |none|boolean|Returns true if EnabledDefaultButton is enabled.|
| **set_enableDefaultButton** |boolean|none|Enables/Disables the EnabledDefaultButton mechanism.|
| **set_imageUrl** |string|none|Sets the URL for the image.|
| **get_imageUrl** |none|string|Returns the URL of the image.|
| **set_hoveredImageUrl** |string|none|Sets the URL for the hovered-state image.|
| **get_hoveredImageUrl** |none|string|Returns the URL of the hovered-state image.|
| **getDefaultButton** |none|RadToolBarButton|Returns the default button.|
| **get_defaultButtonIndex** |none|Int|Returns the index of the Default Button.|
| **set_defaultButtonIndex** |Int|none|Sets the index of the Default Button.|


## RadToolBarDropDown methods

**RadToolBarDropDown** supports the following additional methods:

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_buttons** |none|[RadToolBarButtonCollection]({%slug toolbar/client-side-programming/radtoolbarbuttoncollection-object%})|Returns the collection of items in the drop-down list (if it exists).|
| **get_dropDownElement** |none|HTML element|
| **get_animationContainer** |none|HTML element|Returns the DOM element for the animation container of the item's drop-down list.
| **showDropDown** |none|none|Opens the drop-down list.|
| **hideDropDown** |none|none|Closes the drop-down list.|


## RadToolBarSplitButton methods

**RadToolBarSplitButton** supports the following additional methods:

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_buttons** |none|[RadToolBarButtonCollection]({%slug toolbar/client-side-programming/radtoolbarbuttoncollection-object%})|Returns the collection of items in the drop-down list (if it exists).|
| **get_commandName** |none|string|Returns the name of the command associated with the item.|
| **get_commandArgument** |none|string|Returns the value of the **CommandArgument** property.|
| **get_dropDownElement** |none|HTML element|Returns the DOM element for the item's drop-down list.|
| **get_animationContainer** |none|HTML element|Returns the DOM element for the animation container of the item's drop-down list.|
| **set_imageUrl** |string|none|Sets the URL for the image.|
| **get_imageUrl** |none|string|Returns the URL of the image.|
| **set_hoveredImageUrl** |string|none|Sets the URL for the hovered-state image.|
| **get_hoveredImageUrl** |none|string|Returns the URL of the hovered-state image.|
| **showDropDown** |none|none|Opens the drop-down list.|
| **hideDropDown** |none|none|Closes the drop-down list.|

