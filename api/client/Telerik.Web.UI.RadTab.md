---
title: Telerik.Web.UI.RadTab
description: Telerik.Web.UI.RadTab
slug: Telerik.Web.UI.RadTab
---

# Telerik.Web.UI.RadTab : Telerik.Web.UI.ControlItem 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItem]({%slug Telerik.Web.UI.ControlItem%})
* *[Telerik.Web.UI.RadTab]({%slug Telerik.Web.UI.RadTab%})*


## Methods

### click

Causes server side click to occur.

#### Parameters

#### Returns

`None` 

### disable

Disables the tab.

#### Parameters

#### Returns

`None` 

### enable

Enables the tab if it is disabled.

#### Parameters

#### Returns

`None` 

### get_childListElement

Gets the tab list (rtsUL) DOM element.

#### Parameters

#### Returns

`Element` 

### get_cssClass

Gets the CSS class name to be set to the tab.

#### Parameters

#### Returns

`String`  The CSS class name to be set to the tab. 

### get_disabledCssClass

Gets the CSS class name to be added when the tab is disabled.

#### Parameters

#### Returns

`String`  The CSS class name to be added when the tab is disabled. 

### get_disabledImageUrl

Gets the URL to an image which is displayed next to the text of a tab when it is disabled.

#### Parameters

#### Returns

`String`  The URL to an image which is displayed next to the text of a tab when it is disabled. 

### get_element

Gets the root DOM element of the tab (LI).

#### Parameters

#### Returns

`Element` 

### get_enabled

Same as get_isEnabled.

#### Parameters

#### Returns

`Boolean` 

### get_hoveredCssClass

Gets the CSS class name to be added when the tab is hovered.

#### Parameters

#### Returns

`String`  The CSS class name to be added when the tab is hovered. 

### get_hoveredImageUrl

Gets the URL to an image which is displayed next to the text of a tab when it is hovered.

#### Parameters

#### Returns

`String`  The URL to an image which is displayed next to the text of a tab when it is hovered. 

### get_imageElement

Gets the image DOM element of the tab (rtsImg).

#### Parameters

#### Returns

`Element` The DOM element of the tab image

### get_imageUrl

Gets the URL to an image which is displayed next to the text of a tab.

#### Parameters

#### Returns

`String`  The URL to an image which is displayed next to the text of a tab. 

### get_index

Gets the zero based index of the tab inside the parent tabs collection.

#### Parameters

#### Returns

`Number` 

### get_innerWrapElement

Gets the inner wrap DOM element of tab (rtsIn)

#### Parameters

#### Returns

`Element` The inner wrap DOM element

### get_isBreak

Gets a value indicating whether the next tab will be displayed on a new line

#### Parameters

#### Returns

`Boolean` 

### get_isEnabled

Returns true if both the tab and the tabstrip are enabled. If one of them is disabled, get_isEnabled() will return false.

#### Parameters

#### Returns

`Boolean` 

### get_isSeparator

Returns true if the tab is a separator; false for other tabs

#### Parameters

#### Returns

`Boolean` 

### get_level

Gets the level of the tab. Root level tabs are first level.

#### Parameters

#### Returns

`Number` 

### get_levelElement

Gets the DOM element of the level wrapper (rtsLevel)

#### Parameters

#### Returns

`Element`  The DOM element of the level wrapper 

### get_linkElement

Gets the anchor DOM element of the tab (rtsLink).

#### Parameters

#### Returns

`Element`  The anchor DOM element of the tab

### get_navigateUrl

Gets the URL of the Web page the tab navigates to.

#### Parameters

#### Returns

`String` 

### get_nextSibling

Returns the next sibling of the tab. If the tab is last, returns null.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTab` 

### get_nextTab

Returns the next sibling

#### Parameters

#### Returns

`Telerik.Web.UI.RadTab` The next tab

### get_outerWrapElement

Gets the outer wrap DOM element of tab (rtsOut)

#### Parameters

#### Returns

`Element` The outer wrap DOM element

### get_pageView

Returns the pageview associated with the tab.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPageView` 

### get_pageViewID

Returns the ID of the pageview.

#### Parameters

#### Returns

`String` 

### get_parent

Returns an instance of the parent object. RadTabStrip if this is a root tab, RadTab if it is a child tab.

#### Parameters

#### Returns

`Object` 

### get_postBack

Gets a value indicating whether clicking on the tab will postback

#### Parameters

#### Returns

`Boolean` true if the node should postback

### get_previousTab

Returns the previous sibling

#### Parameters

#### Returns

`Telerik.Web.UI.RadTab` The previous tab

### get_selected

Returns whether the tab is selected.

#### Parameters

#### Returns

`Boolean` 

### get_selectedCssClass

Gets the CSS class name to be added when the tab is selected.

#### Parameters

#### Returns

`String`  The CSS class name to be added when the tab is selected. 

### get_selectedImageUrl

Gets the URL to an image which is displayed next to the text of a tab when it is selected.

#### Parameters

#### Returns

`String`  The URL to an image which is displayed next to the text of a tab when it is selected. 

### get_selectedIndex

Gets the index of the selected child tab, if any

#### Parameters

#### Returns

`Number` The index of the selected child tab

### get_selectedTab

Gets the selected tab instance, if any

#### Parameters

#### Returns

`Telerik.Web.UI.RadTab` The selected tab instance

### get_tabs

Returns a collection of child tabs.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTabCollection` 

### get_tabStrip

Returns the instance of the tabstrip that contains the tab.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTabStrip` 

### get_target

Gets the target window or frame in which to display the Web page content associated with the current tab.

#### Parameters

#### Returns

`String` The target window or frame in which to display the Web page content associated with the current tab

### get_text

Returns the text of the tab.

#### Parameters

#### Returns

`Object` 

### get_textElement

Gets the DOM element that contains the tab text (rtsTxt).

#### Parameters

#### Returns

`Element`  The DOM element that contains the tab text

### get_value

Returns the Value property of the tab.

#### Parameters

#### Returns

`Object` 

### get_visible

Gets a value indicating if the tab is visible.

#### Parameters

#### Returns

`Boolean` 

### hide

Hides the tab.

#### Parameters

#### Returns

`None` 

### scrollIntoView

Scrolls to the tab into view.

#### Parameters

#### Returns

`None` 

### select

Selects the tab.

#### Parameters

#### Returns

`None` 

### selectParents

Selects all parents of this tab

#### Parameters

#### Returns

`None` 

### set_cssClass

Sets the CSS class name to be set to the tab.

#### Parameters

##### value `String`

 The CSS class name to be set to the tab. 

#### Returns

`None` 

### set_disabledCssClass

Sets the CSS class name to be added when the tab is disabled.

#### Parameters

##### value `String`

 The CSS class name to be added when the tab is disabled. 

#### Returns

`None` 

### set_disabledImageUrl

Sets the URL to an image which is displayed next to the text of a tab when it is disabled.

#### Parameters

##### value `String`

 The URL to an image which is displayed next to the text of a tab when it is disabled. 

#### Returns

`None` 

### set_enabled

Sets a value indicating if the tab is enabled.

#### Parameters

##### value `Boolean`

A value indicating if the tab is enabled

#### Returns

`None` 

### set_hoveredCssClass

Sets the CSS class name to be added when the tab is hovered.

#### Parameters

##### value `String`

 The CSS class name to be added when the tab is hovered. 

#### Returns

`None` 

### set_hoveredImageUrl

Sets the URL to an image which is displayed next to the text of a tab when it is hovered.

#### Parameters

##### value `String`

 The URL to an image which is displayed next to the text of a tab when it is hovered. 

#### Returns

`None` 

### set_imageUrl

Sets the URL to an image which is displayed next to the text of a tab.

#### Parameters

##### value `String`

 The URL to an image which is displayed next to the text of a tab. 

#### Returns

`None` 

### set_isBreak

Sets a value indicating if the next tab will be displayed on a new line

#### Parameters

##### value `Boolean`

 true if the next tab should be displayed on a new line

#### Returns

`None` 

### set_isSeparator

Sets a value indicating if the tab is a separator

#### Parameters

##### value `Boolean`

 A value indicating if the tab is a separator

#### Returns

`None` 

### set_navigateUrl

Sets the URL of the Web page the tab navigates to

#### Parameters

##### value `String`

 The URL of the Web page the tab navigates to

#### Returns

`None` 

### set_pageViewID

Returns the ID of the associated pageview, if any.

#### Parameters

#### Returns

`String` 

### set_postBack

Sets a value indicating whether clicking on the tab will postback

#### Parameters

##### value `Boolean`

true if the node should postback

#### Returns

`None` 

### set_selected

Sets a value indicating if the tab is selected.

#### Parameters

##### value `Boolean`

A value indicating if the tab is selected

#### Returns

`None` 

### set_selectedCssClass

Sets the CSS class name to be added when the tab is selected.

#### Parameters

##### value `String`

 The CSS class name to be added when the tab is selected. 

#### Returns

`None` 

### set_selectedImageUrl

Sets the URL to an image which is displayed next to the text of a tab when it is selected.

#### Parameters

##### value `String`

 The URL to an image which is displayed next to the text of a tab when it is selected. 

#### Returns

`None` 

### set_selectedIndex

Sets the selected child tab index to the specified value

#### Parameters

##### value `Number`

The selected child tab index 

#### Returns

`None` 

### set_target

Sets the target window or frame in which to display the Web page content associated with the current tab

#### Parameters

##### value `String`

The target window or frame in which to display the Web page content associated with the current tab

#### Returns

`None` 

### set_text

Sets the text of the tab.

#### Parameters

##### stringtext `Object`

#### Returns

`Object` 

### set_value

Sets the Value property of the tab.

#### Parameters

##### stringvalue `Object`

#### Returns

`Object` 

### set_visible

Sets a value indicating if the tab is visible.

#### Parameters

##### value `Boolean`

A value indicating if the tab is visible

#### Returns

`None` 

### show

Shows the tab if it was hidden.

#### Parameters

#### Returns

`None` 

### unselect

Unselects the tab.

#### Parameters

#### Returns

`None` 


