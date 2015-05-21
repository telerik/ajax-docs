---
title: Telerik.Web.UI.RadMenu
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadMenu
---

# Telerik.Web.UI.RadMenu : Telerik.Web.UI.ControlItemContainer 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemContainer]({%slug Telerik.Web.UI.ControlItemContainer%})
* *[Telerik.Web.UI.RadMenu]({%slug Telerik.Web.UI.RadMenu%})*

## Methods

###  close

Closes all opened items

#### Parameters

#### Returns

`None` 

###  commitChanges

Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs.

#### Parameters

#### Returns

`None` 

###  disable

Disables all items in the menu. Clicking on any item will no longer have effect, child items cannot be opened.

#### Parameters

#### Returns

`None` 

###  disableEvents

Disables the control client-side event emitting.

#### Parameters

#### Returns

`None` 

###  enable

Enables all items in the menu.

#### Parameters

#### Returns

`None` 

###  enableEvents

Enables the control client-side event emitting. Events are enabled by default.

#### Parameters

#### Returns

`None` 

###  findItemByAbsoluteUrl

Returns the first RadMenuItem object whose NavigateUrl property is equal to the passed parameter. Note that the parameter should end with "/" for example: var item = sender.findItemByAbsoluteUrl("http://www.test.com/");

#### Parameters

##### url `String`

NavigateUrl of the Item

#### Returns

`Telerik.Web.UI.RadMenuItem` The first RadMenuItem found

###  findItemByAttribute

Returns the first RadMenuItem object with a custom attribute of the specified name and value.

#### Parameters

##### attributeName `String`

The attribute name

##### attributeValue `String`

The attribute value

#### Returns

`Telerik.Web.UI.RadMenuItem` The first RadMenuItem found

###  findItemByText

Returns the first RadMenuItem object whose Text property is equal to the passed parameter.

#### Parameters

##### text `String`

Text of the Item

#### Returns

`Telerik.Web.UI.RadMenuItem` The first RadMenuItem found

###  findItemByUrl

Returns the first RadMenuItem object whose NavigateUrl property is equal to the passed parameter.

#### Parameters

##### url `String`

NavigateUrl of the Item

#### Returns

`Telerik.Web.UI.RadMenuItem` The first RadMenuItem found

###  findItemByValue

Returns the first RadMenuItem object whose Value property is equal to the passed parameter.

#### Parameters

##### value `String`

Value of the Item

#### Returns

`Telerik.Web.UI.RadMenuItem` The first RadMenuItem found

###  focus

Brings the focus to the menu so that it can be controlled via the keyboard.

#### Parameters

#### Returns

`None` 

###  get_allItems

Gets a linear collection of all items. This includes all root and child items in the menu.

#### Parameters

#### Returns

`Array` Array

###  get_childListElement

Returns the DOM element for the root list of items in the menu.

#### Parameters

#### Returns

`Element` DOM element for the root item list

###  get_clickToOpen

Returns a boolean value indicating whether click-to-open is enabled

#### Parameters

#### Returns

`Boolean` Boolean indicating whether click

###  get_collapseDelay

Returns the delay (in milliseconds) before a menu item closes.

#### Parameters

#### Returns

`Number` The delay in milliseconds to wait before closing a menu item.

###  get_enableAutoScroll

Returns a boolean value indicating whether auto-scrolling is enabled

#### Parameters

#### Returns

`Boolean` Boolean indicating whether auto

###  get_enableRoundedCorners

Returns a boolean value indicating whether child items should have rounded corners

#### Parameters

#### Returns

`Boolean` Boolean indicating whether child items should have rounded corners

###  get_enableScreenBoundaryDetection

Returns a boolean value indicating whether screen boundary detection is enabled

#### Parameters

#### Returns

`Boolean` Boolean indicating whether screen boundary detection is enabled

###  get_enableSelection

Returns a boolean value whether item selection is enabled

#### Parameters

#### Returns

`Boolean` Boolean indicating whether item selection is enabled.

###  get_enableShadows

Returns a boolean value indicating whether child items should have shadows

#### Parameters

#### Returns

`Boolean` Boolean indicating whether child items should have shadows

###  get_expandDelay

Returns the delay (in milliseconds) before a menu item expands.

#### Parameters

#### Returns

`Number` The delay in milliseconds to wait before expanding a menu item.

###  get_focusedItem

Returns the currently focused root level item. Returns null if no root item has focus.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem` The focused root item

###  get_items

Returns the collection of root level items.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItemCollection` RadMenuItemCollection

###  get_openedItem

Returns the currently opened root level item. If no item is opened at the root level the method will return null.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem` The opened root item

###  get_persistLoadOnDemandItems

Returns whether items loaded on demand persist on the server.

#### Parameters

#### Returns

`Boolean` Boolean indicating whether items loaded on demand persist on the server.

###  get_selectedItem

Returns the selected menu item. If no item is selected returns null.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem` The selected menu item.

###  repaint

Refreshes the RadMenu UI.

#### Parameters

#### Returns

`None` 

###  set_clickToOpen

Sets whether click-to-open is enabled

#### Parameters

##### value `Boolean`

true if click

#### Returns

`None` 

###  set_collapseDelay

Sets the delay (in milliseconds) before a menu item closes.

#### Parameters

##### delay `Number`

The delay in milliseconds to wait before closing a menu item.

#### Returns

`None` 

###  set_enableAutoScroll

Sets whether auto-scrolling is enabled

#### Parameters

##### value `Boolean`

true if auto

#### Returns

`None` 

###  set_enableRoundedCorners

Sets whether child items should have rounded corners

#### Parameters

##### value `Boolean`

true if child items should have rounded corners

#### Returns

`None` 

###  set_enableScreenBoundaryDetection

Sets whether screen boundary detection is enabled

#### Parameters

##### value `Boolean`

true if screen boundary detection should be enabled

#### Returns

`None` 

###  set_enableSelection

Sets whether item selection is enabled

#### Parameters

##### value `Boolean`

true to enable item selection or false to disable it.

#### Returns

`None` 

###  set_enableShadows

Sets whether child items should have shadows

#### Parameters

##### value `Boolean`

true if child items should have shadows

#### Returns

`None` 

###  set_enabled

Disables or enables the entire RadMenu. Items will not open and client events will not firee when the Menu is disabled

#### Parameters

##### value `Boolean`

true to enable the Menu or false to disable it.

#### Returns

`None` 

###  set_expandDelay

Sets the delay (in milliseconds) before a menu item expands.

#### Parameters

##### delay `Number`

The delay in milliseconds to wait before expanding a menu item.

#### Returns

`None` 

### showAt

Displays the menu as a pop-up at the coordinates specified by the parameters. 

#### Parameters

#### X coordinate  `Number`

The horizontal value in a pair of coordinates.

#### Y coordinate  `Number`

The vertical value in a pair of coordinates.

#### Returns

`None` 


###  trackChanges

Begins tracking changes to the RadMenu items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.

#### Parameters

#### Returns

`None` 

## Events

### load

The load event is fired when the menu is first loaded. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Sys.EventArgs`

The event arguments for the event.

### itemClicking

The ItemClicking event occurs when the user clicks on an item before the menu responds to the click.

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemClickingEventArgs`

The event arguments for the event.

### itemClicked

The itemClicked event is fired immediately after the menu responds to an item click. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemClickedEventArgs`

The event arguments for the event.

### mouseOver

The mouseOver event is fired when the mouse moves over the menu. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuMouseOverEventArgs`

The event arguments for the event.

### mouseOut

The mouseOut event is fired when the mouse moves off of the menu. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuMouseOutEventArgs`

The event arguments for the event.

### itemOpening

The itemOpening event is fired immediately before an item expands to show its child items. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemOpeningEventArgs`

The event arguments for the event.

### itemOpened

The itemOpened event is fired immediately after an item expands to show its child items. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemOpenedEventArgs`

The event arguments for the event.

### itemClosing

The itemClosing event is fired immediately before an item contracts, hiding its child items. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemClosingEventArgs`

The event arguments for the event.

### itemClosed

The itemClosed event is fired immediately after an item contracts to hide its child items. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemClosedEventArgs`

The event arguments for the event.

### itemFocus

The itemFocus event is fired when focus moves to an item. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemFocusEventArgs`

The event arguments for the event.

### itemBlur

The itemBlur event is fired when focus leaves an item. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemBlurEventArgs`

The event arguments for the event.

### itemPopulating

The itemPopulating event is fired when an item with ExpandMode set to "WebService" is opened, immediately before the menu calls the Web service to populate the list of child items. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemPopulatingEventArgs`

The event arguments for the event.

### itemPopulated

The itemPopulated event is fired immediately after the list of child items for an item with ExpandMode set to "WebService" has been populated by a Web service. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemPopulatedEventArgs`

The event arguments for the event.

### itemPopulationFailed 

The itemPopulationFailed event is fired when an attempt to populate a list of child items using a Web service fails. 

#### Event Data

##### sender `Telerik.Web.UI.RadMenu`

The RadMenu that fired the event.

##### args `Telerik.Web.UI.RadMenuItemPopulatingEventArgs`

The event arguments for the event.