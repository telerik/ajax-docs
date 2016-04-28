---
title: Telerik.Web.UI.RadPanelItem
page_title: Client-side API Reference
description: Telerik.Web.UI.RadPanelItem
slug: Telerik.Web.UI.RadPanelItem
---

# Telerik.Web.UI.RadPanelItem : Telerik.Web.UI.ControlItem 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItem]({%slug Telerik.Web.UI.ControlItem%})
* *[Telerik.Web.UI.RadPanelItem]({%slug Telerik.Web.UI.RadPanelItem%})*


## Methods

### blur

Removes focus from the item.

#### Parameters

#### Returns

`None` 

### click

Performs an item click. If a the ItemClick server event is wired, it will be fired.

#### Parameters

#### Returns

`None` 

### collapse

Collapses the item if it is expanded.

#### Parameters

#### Returns

`None` 

### disable

Disables the item.

#### Parameters

#### Returns

`None` 

### enable

Enables the item if it is disabled.

#### Parameters

#### Returns

`None` 

### expand

Expands the item and reveals its children if any.

#### Parameters

#### Returns

`None` 

### findControl

Returns the client-side object of the Control with the specified ID nested in the Item's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.

#### Parameters

##### id `String`

The id of the control to search for.

#### Returns

`Sys.UI.Control`

### focus

Moves focus to the item.

#### Parameters

#### Returns

`None` 

### focusFirstChild

Moves focus to the first child of the item.

#### Parameters

#### Returns

`None` 

### focusLastChild

Moves focus to the last child of the item.

#### Parameters

#### Returns

`Object` 

### focusNextItem

Moves focus to the next item.

#### Parameters

#### Returns

`None` 

### focusPreviousItem

Moves focus to the previous item.

#### Parameters

#### Returns

`None` 

### get_attributes

Returns the collection of custom attributes for the item.

#### Parameters

#### Returns

`Telerik.Web.UI.AttributeCollection` 

### get_childListElement

Gets the DOM element of the list of child items (UL).

#### Parameters

#### Returns

`Element` 

### get_clicked

Returns whether the item is clicked.

#### Parameters

#### Returns

`Boolean` 

### get_clickedCssClass

Gets the CSS class for the item when it is clicked.

#### Parameters

#### Returns

`String` 

### get_cssClass

Gets the CssClass property of the item.

#### Parameters

#### Returns

`String` 

### get_disabledCssClass

Gets the CSS class for the item when it is disabled.

#### Parameters

#### Returns

`String` 

### get_disabledImageUrl

Returns the path to an image to display for the item when it is disabled.

#### Parameters

#### Returns

`String` Gets the path to an image to display for the item when it is disabled.

### get_element

Gets the root DOM element of the item (LI).

#### Parameters

#### Returns

`Element` HTML Element

### get_enabled

Returns true if both the item and the panelbar are enabled. If one of them is disabled will return false.

#### Parameters

#### Returns

`Boolean` 

### get_expandable

#### Parameters

#### Returns

`None` 

### get_expanded

Gets the expanded/collapsed state of a panel bar item

#### Parameters

#### Returns

`Boolean` 

### get_expandedCssClass

Gets the CSS class for the item when it is expanded.

#### Parameters

#### Returns

`String` 

### get_expandedImageUrl

Gets the URL of the image displayed when item is expanded.

#### Parameters

#### Returns

`String` 

### get_expandedItem

Returns the child item that was most recently expanded. Null if no child item is expanded.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### get_expandHandleElement

Gets the expand handle DOM element of a RadPanelItem.

#### Parameters

#### Returns

`Element` 

### get_focused

Returns a boolean indicating whether the item has focus.

#### Parameters

#### Returns

`None` 

### get_focusedCssClass

Gets the CSS class for the item when it has focus.

#### Parameters

#### Returns

`String` 

### get_focusedItem

Gets the focused child item. Null if no child item is focused.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### get_hasContentTemplate

Returns a value indicating if the item has content template.

#### Parameters

#### Returns

`Boolean` True if the item has content template

### get_headerElement

Gets the header DOM element for a RadPanelItem.

#### Parameters

#### Returns

`Element` 

### get_hoveredImageUrl

Gets the URL of the image displayed when the mouse if over the item.

#### Parameters

#### Returns

`String` 

### get_imageElement

Gets the image DOM element of the item. If the server side ImageUrl property is not set, returns null.

#### Parameters

#### Returns

`Element` 

### get_imageUrl

Gets the URL of the image.

#### Parameters

#### Returns

`String` 

### get_index

Gets the zero-based index of the item inside its parent items collection.

#### Parameters

#### Returns

`Number` 

### get_isEnabled

Returns true if both the item and the panelbar are enabled. If one of them is disabled will return false.

#### Parameters

#### Returns

`Boolean` 

### get_isFirst

Returns true if the item index is first, otherwise returns false.

#### Parameters

#### Returns

`Boolean` Indicates whether the item is first.

### get_isLast

Returns true if the item index is last, otherwise returns false.

#### Parameters

#### Returns

`Boolean` Returns true if the RadPanelItem is last

### get_isSeparator

Returns true the item is a separator (sever-side property IsSeparator = true)

#### Parameters

#### Returns

`Boolean` 

### get_items

Returns the child items of the current item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItemCollection` 

### get_level

Gets the level of the item. Root level items are level 0.

#### Parameters

#### Returns

`Number` Returns the level of the item as number.

### get_linkElement

Gets the anchor DOM element of the item (A).

#### Parameters

#### Returns

`Element` 

### get_navigateAfterClick

Defines whether the item should navigate after click.

#### Parameters

#### Returns

`Boolean` 

### get_navigateUrl

Returns the URL of the Web page the panel item launches.

#### Parameters

#### Returns

`String` 

### get_nextSibling

Returns the next sibling or null if this is the last item at its level.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### get_panelBar

Returns an instance of the panel bar that contains the item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelBar` 

### get_postBack

Returns the postback value of a RadPanelItem.

#### Parameters

#### Returns

`Boolean` 

### get_preventCollapse

Returns a value indicating if the item should collapse.

#### Parameters

#### Returns

`Boolean` True if the item is should collapse

### get_previousSibling

Returns the previous sibling or null if this is the first item at its level.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### get_selected

Returns whether the item is selected.

#### Parameters

#### Returns

`Boolean` 

### get_selectedCssClass

Gets the CSS class for the item when it is selected.

#### Parameters

#### Returns

`String` 

### get_selectedImageUrl

Gets the URL of the image displayed when item is selected.

#### Parameters

#### Returns

`String` 

### get_selectedItem

Gets the selected item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### get_target

Returns the value of "target" attribute of the anchor DOM element of the item (A).

#### Parameters

#### Returns

`String` 

### get_templated

Returns a value indicating if the item is templated.

#### Parameters

#### Returns

`Boolean` True if the item is templated

### get_text

Returns the text of the item.

#### Parameters

#### Returns

`String` 

### get_textElement

Gets the DOM element of the item text (SPAN).

#### Parameters

#### Returns

`Element` 

### get_value

Returns the Value property of the item.

#### Parameters

#### Returns

`String` 

### get_visible

Returns true if the items is visible or false if the item is invisible.

#### Parameters

#### Returns

`Boolean` 

### hide

Makes the item invisible.

#### Parameters

#### Returns

`None` 

### select

Selects the item.

#### Parameters

#### Returns

`None` 

### set_clickedCssClass

Sets the CSS class for the item when it is clicked.

#### Parameters

##### value `String`

The CSS class for the item when it is clicked.

#### Returns

`None` 

### set_cssClass

Sets the CssClass property for the item.

#### Parameters

##### value `String`

 The CssClass property for the item.

#### Returns

`None` 

### set_disabledCssClass

Sets the CSS class for the item when it is disabled.

#### Parameters

##### value `String`

The CSS class for the item when it is disabled.

#### Returns

`None` 

### set_disabledImageUrl

Sets the path to an image to display for the item when it is disabled.

#### Parameters

##### value `String`

Value of the item.

#### Returns

`None` 

### set_element

Sets the root DOM element of the item(LI).

#### Parameters

##### value `Element`

HTML Element

#### Returns

`None` 

### set_enabled

Sets the enabled state of the item.

#### Parameters

##### value `Boolean`

The enabled state of the item.

#### Returns

`None` 

### set_expanded

Expands /Collapses the item.

#### Parameters

##### value `Boolean`

Expands 

#### Returns

`None` 

### set_expandedCssClass

Sets the CSS class for the item when it is expanded.

#### Parameters

##### value `String`

The CSS class for the item when it is expanded.

#### Returns

`None` 

### set_expandedImageUrl

Sets the URL of the image displayed when item is expanded.

#### Parameters

##### value `String`

URL of the image displayed when item is expanded.

#### Returns

`None` 

### set_expandedItem

Sets the expanded item

#### Parameters

##### value `Telerik.Web.UI.RadPanelItem`

Expanded item.

#### Returns

`None` 

### set_focused

Sets a boolean indicating whether the item has focus.

#### Parameters

##### Boolean `Boolean`

#### Returns

`Object` 

### set_focusedCssClass

Sets the CSS class for the item when it has focus.

#### Parameters

##### value `String`

The CSS class for the item when it has focus.

#### Returns

`None` 

### set_focusedItem

Sets the focused RadPanelItem

#### Parameters

##### value `String`

Value of the item.

#### Returns

`None` 

### set_hoveredImageUrl

Sets the URL of the image displayed when the mouse if over the item.

#### Parameters

##### value `String`

URL of the image displayed when the mouse if over the item.

#### Returns

`None` 

### set_imageUrl

Sets the URL of the image.

#### Parameters

##### value `String`

URL of the image

#### Returns

`None` 

### set_isSeparator

Finds a RadPanelItem by value and sets it to be a separator.

#### Parameters

##### value `Boolean`

Finds a RadPanelItem by value and sets it to be a separator.

#### Returns

`None` 

### set_lastExpandedItem

Sets lastExpandedItem property.

#### Parameters

##### value `Boolean`

Finds a RadPanelItem by value and sets it to be a expanded.

#### Returns

`None` 

### set_navigateUrl

Sets the URL of the Web page the panel item launches.

#### Parameters

##### value `String`

URL of the Web page the panel item launches.

#### Returns

`None` 

### set_postBack

Returns the postBack value of a RadPanelItem.

#### Parameters

##### value `Boolean`

Sets the postback value of a RadPanelItem.

#### Returns

`None` 

### set_preventCollapse

Sets if the item should collapse.

#### Parameters

##### value `Boolean`

False if the panel item should collapse otherwise true.

#### Returns

`None` 

### set_selected

Selects or de-selects the item.

#### Parameters

##### value `Boolean`

Selects of de

#### Returns

`None` 

### set_selectedCssClass

Sets the CSS class for the item when it is selected.

#### Parameters

##### value `String`

The CSS class for the item when it is selected.

#### Returns

`None` 

### set_selectedImageUrl

Sets the URL of the image displayed when item is selected.

#### Parameters

##### value `String`

URL of the image displayed when item is selected.

#### Returns

`None` 

### set_selectedItem

Sets selected item.

#### Parameters

##### value `Telerik.Web.UI.RadPanelItem`

Expanded item.

#### Returns

`None` 

### set_target

Sets the value of "target" attribute of the anchor DOM element of the item (A).

#### Parameters

##### value `String`

The 

#### Returns

`None` 

### set_text

Sets the text of the item.

#### Parameters

##### text `String`

Text of the item.

#### Returns

`None` 

### set_value

Sets the Value property of the item.

#### Parameters

##### value `String`

Value of the item.

#### Returns

`None` 

### set_visible

Shows/Hides a RadPanelItem

#### Parameters

##### value `Boolean`

Shows

#### Returns

`None` 

### show

Makes the item visible.

#### Parameters

#### Returns

`None` 

### toJsonString

Returns the RadPanelItem as a JSON serialized string.

#### Parameters

#### Returns

`String` JSON serialized string.

### unSelect

De-selects the item.

#### Parameters

#### Returns

`None` 


