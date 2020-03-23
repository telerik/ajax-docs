---
title: Telerik.Web.UI.RadMenuItem
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadMenuItem
slug: Telerik.Web.UI.RadMenuItem
---

# Telerik.Web.UI.RadMenuItem : Telerik.Web.UI.ControlItem 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItem]({%slug Telerik.Web.UI.ControlItem%})
* *[Telerik.Web.UI.RadMenuItem]({%slug Telerik.Web.UI.RadMenuItem%})*


## Methods

###  bindTemplate

Evaluates the template against the Menu Item's data and applies it.

#### Parameters

#### Returns

`None` 

### blur

Removes focus from the RadMenuItem

#### Parameters

#### Returns

`None` 

### click

Simulates a click on the RadMenuItem

#### Parameters

#### Returns

`None` 

### close

Closes the RadMenuItem

#### Parameters

#### Returns

`None` 

### disable

Disables the RadMenuItem. Clicking on it will no longer have effect, child items cannot be opened.

#### Parameters

#### Returns

`None` 

### enable

Enables the RadMenuItem if it has been previously disabled

#### Parameters

#### Returns

`None` 

### focus

Changes the focus to the RadMenuItem

#### Parameters

#### Returns

`None` 

### focusFirstChild

Changes the focus to the RadMenuItem's first child

#### Parameters

#### Returns

`None` 

### focusLastChild

Changes the focus to the RadMenuItem's last child

#### Parameters

#### Returns

`None` 

### focusNextItem

Changes the focus to the RadMenuItem's next sibling

#### Parameters

#### Returns

`None` 

### focusPreviousItem

Changes the focus to the RadMenuItem's previous sibling

#### Parameters

#### Returns

`None` 

### get_childListElement

Gets the DOM element of the list of child items (UL).

#### Parameters

#### Returns

`None` 

### get_clickedCssClass

Returns the Menu Item's css class if clicked.

#### Parameters

#### Returns

`String`

### get_clickedImageURL

Returns the URL of the Menu Item's Image on click.

#### Parameters

#### Returns

`String`

### get_clientTemplate

Returns the value of the Menu Item's ClientTemplate property.

#### Parameters

#### Returns

`String`

### get_disabledCssClass

Returns the Menu Item's css class if disabled.

#### Parameters

#### Returns

`String`

### get_disabledImageURL

Returns the URL of the Menu Item's Image if disabled.

#### Parameters

#### Returns

`String`

### get_expandedCssClass

Returns the Menu Item's css class if expanded.

#### Parameters

#### Returns

`String`

### get_expandedImageURL

Returns the URL of the Menu Item's Image for expanding.

#### Parameters

#### Returns

`String`

### get_expandedMode

Returns the value of the Menu Item's Expand Mode - 0 for Client-Side, 1 for WebService.

#### Parameters

#### Returns

`Number`

### get_focused

Indicates whether the menu item is focused.

#### Parameters

#### Returns

`Boolean`

### get_focusedCssClass

Returns the Menu Item's css class if focused.

#### Parameters

#### Returns

`String` The Menu Item

### get_focusedItem

Gets the focused child item. Null if no child item is focused.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem`

### get_hoveredImageUrl

Gets the URL of the image displayed when the mouse is over the item.

#### Parameters

#### Returns

`String`

### get_imageElement

Gets the image DOM element of the item. If the server side ImageUrl property is not set, returns null.

#### Parameters

#### Returns

`Element` 

### get_imageUrl

Gets the URL of the item's image.

#### Parameters

#### Returns

`String`

### get_isOpen

Returns a boolean indicating whether the item is opened or not

#### Parameters

#### Returns

`Boolean` 

### get_isSeparator

Returns true if the item is a separator (sever-side property IsSeparator = true)

#### Parameters

#### Returns

`Boolean`

### get_items

Returns the collection of child items.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItemCollection`

### get_level

Gets the level of the item. Root level items are first level.

#### Parameters

#### Returns

`Number`

### get_linkElement

Gets the anchor DOM element of the item (A).

#### Parameters

#### Returns

`Element` 

### get_menu

Returns an instance of the menu that contains the item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenu` 

### get_navigateUrl

Gets the URL of the Web page the menu item launches.

#### Parameters

#### Returns

`String` 

### get_nextItem

Returns the next sibling of the item. If the item is last, returns null.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem`

### get_openedItem

Gets the opened child item. Null if no child item is opened.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem`

### get_previousItem

Returns the previous sibling of the item. If the item is first, returns null.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem`

### get_selected

Returns whether the item is selected

#### Parameters

#### Returns

`Boolean`

### get_selectedCssClass

Returns the Menu Item's css class if selected.

#### Parameters

#### Returns

`String`

### get_selectedImageUrl

Gets the URL of the image displayed when item is selected.

#### Parameters

#### Returns

`String` 

### get_templateElement

Returns the html representation of the element's template.

#### Parameters

#### Returns

`String` The item

### get_textElement

Gets the DOM element of the item text (SPAN).

#### Parameters

#### Returns

`Element` 

### hide

Hides the RadMenuItem

#### Parameters

#### Returns

`None` 

### open

Opens the RadMenuItem to show its children

#### Parameters

#### Returns

`None` 

### scrollIntoView

Loads next View's Menu Items.

#### Parameters

#### Returns

`None` 

### select

Selects the RadMenuItem

#### Parameters

#### Returns

`None` 

### set_clickedCssClass

Sets the Menu Item's css class if clicked.

#### Parameters

##### value `String`

The new CSS class for the item

#### Returns

`None` 

### set_clickedImageURL

Sets the URL of the Menu Item's Image on click.

#### Parameters

##### value `String`

The new Menu Item Image

#### Returns

`None` 

### set_clientTemplate

Sets the value of the Menu Item's ClientTemplate property.

#### Parameters

##### value `String`

The new client template string

#### Returns

`None` 

### set_disabledCssClass

Sets the Menu Item's css class if disabled.

#### Parameters

##### value `String`

The new CSS class for disabled mode

#### Returns

`None` 

### set_disabledImageURL

Sets the URL of the Menu Item's Image if disabled.

#### Parameters

##### value `String`

The new Menu Item disabled image URL

#### Returns

`None` 

### set_enabled

Sets the enabled state of the item.

#### Parameters

##### value `Boolean`

Value indicating the enabled state of the item.

#### Returns

`None` 

### set_expandedCssClass

Sets the Menu Item's css class if expanded.

#### Parameters

##### value `String`

The new CSS class for the expanded state

#### Returns

`None` 

### set_expandedImageURL

Sets the URL of the Menu Item's Image for expanding.

#### Parameters

##### value `String`

The new expand image URL for the Menu Item

#### Returns

`None` 

### set_expandedMode

Sets the value of the Menu Item's Expand Mode - 0 for Client-Side, 1 for WebService.

#### Parameters

##### value `Number`

The new Menu Item expand mode

#### Returns

`None` 

### set_focused

Sets focus to the item.

#### Parameters

##### value `Boolean`

Whether the item will be focused

#### Returns

`None` 

### set_focusedCssClass

Sets the Menu Item's css class if focused.

#### Parameters

##### value `String`

The new CSS class for the focused state of the item

#### Returns

`None` 

### set_hoveredImageUrl

Sets the URL of the image displayed when the mouse is over the item.

#### Parameters

##### value `String`

The new URL of the image displayed when the mouse is over the item.

#### Returns

`None` 

### set_imageUrl

Sets the URL of the item's image.

#### Parameters

##### value `String`

The new URL of the image displayed in the item

#### Returns

`None` 

### set_isSeparator

Sets whether the item is a separator or a regular item

#### Parameters

##### value `Boolean`

Pass true to get a separator item

#### Returns

`None` 

### set_navigateUrl

Sets the navigateURL property of the item. This is the URL of the Web page the menu item launches. The navigateUrl property must be an absolute URL on the client side: (e.g. "http://mydomain.com/default.aspx" not "default.aspx").

#### Parameters

##### value `String`

The new URL the item will navigate to

#### Returns

`None` 

### set_selected

Sets the selected property of the item.

#### Parameters

##### value `Boolean`

Whether the item will be selected

#### Returns

`None` 

### set_selectedCssClass

Sets the Menu Item's css class if selected.

#### Parameters

##### value `String`

The new CSS class for the selected state of the Menu Item

#### Returns

`None` 

### set_selectedImageUrl

Sets the URL of the image displayed when the item is selected

#### Parameters

##### value `String`

The new URL of the image displayed when the item is selected.

#### Returns

`None` 

### set_text

Sets the text of the item.

#### Parameters

##### value `String`

The new text of the item

#### Returns

`None` 

### set_visible

Sets the visibility of the item

#### Parameters

##### value `Boolean`

Boolean value indicating the item should be visible

#### Returns

`None` 

### show

Shows the RadMenuItem if it is hidden

#### Parameters

#### Returns

`None` 

### unselect

Unselects the RadMenuItem

#### Parameters

#### Returns

`None` 



