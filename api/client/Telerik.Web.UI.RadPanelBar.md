---
title: Telerik.Web.UI.RadPanelBar
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadPanelBar
---

# Telerik.Web.UI.RadPanelBar : Telerik.Web.UI.ControlItemContainer 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemContainer]({%slug Telerik.Web.UI.ControlItemContainer%})
* *[Telerik.Web.UI.RadPanelBar]({%slug Telerik.Web.UI.RadPanelBar%})*

## Methods

### set_expandMode

Sets the Expand mode of the RadPanelBar

#### Parameters

##### value `Telerik.Web.UI.ExpandMode`

Expand mode

#### Returns

`None` 

### set_items

Sets the RadPanelBar's root items.

#### Parameters

##### value `Telerik.Web.UI.RadPanelItemCollection`

RadPanelBar

#### Returns

`None` 

### get_selectedItem

Returns the selected item if it exists. (It does not have to be a root level item). Null if the panel does not have a selected item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` RadPanelItem

### set_expandedItem

Sets the root level item to be expanded.

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### get_collapseDelay

Gets the value of the collapseDelay property.

#### Parameters

#### Returns

`Number` The collapseDelay value.

### set_singleExpandedItem

Sets a RadPanelItem to be expanded in "SingleExpandedItem" mode.

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### set_expandDelay

Sets the value of the expandDelay property.

#### Parameters

##### value `Number`

The expandDelay value.

#### Returns

`None` 

### get_allowCollapseAllItems

Gets the allowCollapseAllItems property value.

#### Parameters

#### Returns

`Boolean` True if the allowCollapseAllItems is enabled

### commitChanges

Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs.

#### Parameters

#### Returns

`None` 

### findItemByText

Returns the first RadPanelItem whose Text property matches the passed parameter.

#### Parameters

##### text `String`

The text to search for.

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### get_expandedItems

Returns an array of the RadPanelItem objects for every expanded item in the panel bar (including expanded child items).

#### Parameters

#### Returns

`Array` 

### get_multiExpandedItem

Gets if the "MultipleExpandedItems" mode of the RadPanelBar is set.

#### Parameters

#### Returns

`None` 

### get_rightToLeft

Returns whether the right-to-left support is enabled

#### Parameters

#### Returns

`Boolean` True if the right

### get_cookieName

Gets the name of the cookie that stores the control state.

#### Parameters

#### Returns

`String` Name of the cookie.

### enable

Enables all items in the panel.

#### Parameters

#### Returns

`None` 

### set_fullExpandedItem

Sets a RadPanelItem to be expanded in "FullExpandedItem" mode.

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### findItemByUrl

Returns the first RadPanelItem whose NavigateUrl property matches the passed parameter.

#### Parameters

##### value `String`

NavigateUrl of the Item

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### disableEvents

Disables RadPanelBar client side events

#### Parameters

#### Returns

`None` 

### trackChanges

Begins tracking changes to the RadPanelBar items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.

#### Parameters

#### Returns

`None` 

### get_childListElement

Gets the DOM element for the list of items in the panel.

#### Parameters

#### Returns

`Element` The UL element of the RadPanelBar. 

### set_itemData

Sets item data for RadPanelItem.

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### enableEvents

Enables the RadPanelBar client-side event emitting. Events are enabled by default.

#### Parameters

#### Returns

`None` 

### set_lastExpandedItem

Sets the last root level item to be expanded.

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### get_lastExpandedItem

Returns the last expanded item.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` RadPanelItem

### findItemByValue

Returns the first RadPanelItem object whose Value property is equal to the passed parameter.

#### Parameters

##### value `String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadPanelItem`  Returns the first RadPanelItem whose Value property matches the passed parameter. 

### get_selectedItems

Returns an array containing the selected items in the panel. Because the panel bar does not allow more than one item to be selected, the array always has 0 or 1 elements.

#### Parameters

#### Returns

`Array`  Array of RadPanelItems 

### set_selectedItem

Sets the selected item

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### get_focusedItem

Returns the focused root level item. Null if no root level item has focus.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### get_allItems

Gets a linear collection of all items. This includes all root and child items in the panel.

#### Parameters

#### Returns

`Array` 

### get_singleExpandedItem

Gets if the "SingleExpandedItem" mode of the RadPanelBar is set.

#### Parameters

#### Returns

`None` 

### set_allowCollapseAllItems

Sets the allowCollapseAllItems property value.

#### Parameters

##### value `Boolean`

The value of the allowCollapseAllItems property.

#### Returns

`None` 

### get_attributes

Returns the collection of custom attributes for the control.

#### Parameters

#### Returns

`Telerik.Web.UI.AttributeCollection` A collection of custom attributes.

### get_persistStateInCookie

Gets the value of persistStateInCookie property of the control.

#### Parameters

#### Returns

`Boolean` True if the persistStateInCookie is enabled

### saveClientState

Saves the client state to the client state hidden field

#### Parameters

#### Returns

`None` 

### set_enabled

Enables or disables the control.

#### Parameters

##### value `Boolean`

True if the control is enabled

#### Returns

`None` 

### get_enabled

Returns a value indicating if the control is enabled.

#### Parameters

#### Returns

`Boolean` True if the control is enabled

### set_multiExpandedItem

Sets  a RadPanelItem to be expanded in "MultipleExpandedItems" mode.

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### set_focusedItem

Sets the focus to explicit RadPanelItem.

#### Parameters

##### value `String`

Item value

#### Returns

`None` 

### get_expandDelay

Gets the value of the expandDelay property.

#### Parameters

#### Returns

`Number` The expandDelay value.

### disable

Disables all items in the panel. Clicking on any item has no effect, child items cannot be opened.

#### Parameters

#### Returns

`None` 

### findItemByAbsoluteUrl

Returns the first RadPanelItem object whose NavigateUrl property is equal to the passed parameter. Note that the parameter should end with "/" like: var item = sender.findItemByAbsoluteUrl("http://www.test.com/");

#### Parameters

##### value `String`

NavigateUrl of the Item

#### Returns

`Telerik.Web.UI.RadPanelItem`  Returns the first RadPanelItem whose NavigateUrl property matches the passed parameter. 

### get_expandMode

Returns the ExpandMode of the RadPanelBar

#### Parameters

#### Returns

`Telerik.Web.UI.ExpandMode` 

### get_items

Returns the collection of root level items.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItemCollection` 

### repaint

Refreshes the RadPanelBar UI.

#### Parameters

#### Returns

`None` 

### get_element

Gets the DOM element for the panel.

#### Parameters

#### Returns

`Element` 

### set_collapseDelay

Sets the value of the collapseDelay property.

#### Parameters

##### value `Number`

The collapseDelay value.

#### Returns

`None` 

### set_persistStateInCookie

Sets the value of the persistStateInCookie property of the control.

#### Parameters

##### value `Boolean`

The value of the persistStateInCookie property.

#### Returns

`None` 

### findItemByAttribute

Returns the first RadPanelItem object with a custom attribute of the specified name that has the specified value.

#### Parameters

##### attributeName `String`

attributeName

##### attributeValue `String`

attributeValue

#### Returns

`Telerik.Web.UI.RadPanelItem` 

### set_cookieName

Sets the name of the cookie to be used for storing the control state.

#### Parameters

##### value `String`

Name of the cookie.

#### Returns

`None` 

### get_fullExpandedItem

Returns true if a RadPanelItem is set to be expanded in "FullExpandedItem" mode, false otherwise.

#### Parameters

#### Returns

`None` 

### get_expandedItem

Returns the last root level item that was expanded. Null if no root level items are expanded.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPanelItem`  RadPanelItem 

### get_itemData

Gets item data for RadPanelItem.

#### Parameters

#### Returns

`None` 

## Events

### load

This event is fired when the RadPanelBar client-side object is loaded.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### mouseOver

This event is fired when the mouse moves over an item in the panel bar.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelMouseOverEventArgs`

The event arguments.  

### mouseOut

This event is fired when the mouse moves off of an item in the panel bar.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelMouseOutEventArgs`

The event arguments. 

### itemClicked

This event is fired immediately after the panel bar responds to an item click.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelItemClickedEventArgs`

The event arguments.

### itemClicking

This event is fired when the user clicks on an item before the panel bar responds to the click.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelItemClickingEventArgs`

The event arguments.

### itemExpand

This event is fired immediately after an item is expanded.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelItemExpandEventArgs`

The event arguments.

### itemCollapse

This event is fired immediately after an item is collapsed.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelItemCollapseEventArgs`

The event arguments.

### itemFocus

This event is fired when an item gets focus.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelItemFocusEventArgs`

The event arguments.

### itemBlur

This event is fired when an item loses focus.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelItemBlurEventArgs`

The event arguments.

### contextMenu

This event is fired when the user right-clicks on an item in the panel bar.

#### Event Data

#####  sender `Telerik.Web.UI.RadPanelBar`

The instance of the RadPanelBar raised the event.

##### args `Telerik.Web.UI.RadPanelItemCancelEventArgs`

The event arguments.

  

