---
title: Telerik.Web.UI.RadRibbonBar
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadRibbonBar
---

# Telerik.Web.UI.RadRibbonBar : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadRibbonBar]({%slug Telerik.Web.UI.RadRibbonBar%})*

## Methods

### set_minimized

Sets state of the RibbonBar to minimized/maximized depending on the passed parameter

#### Parameters

##### value `Boolean`

Bool value indicating whether the RibbonBar is minimized 

#### Returns

`None` 

### get_defaultDesabledImageUrl

Returns the url of the default disabled image.

#### Parameters

##### string `Object`

#### Returns

`Object` 

### get_selectedTabIndex

Gets the index of the selected RibbonBarTab

#### Parameters

#### Returns

`Number` The index of the selected RibbonBarTab.

### set_defaultDesabledImageUrl

Sets the default disabled image.

#### Parameters

#### Returns

`Object` 

### findGroupByValue

Returns the first RibbonBarGroup object whose Value property equals to the passed parameter.

#### Parameters

##### value `String`

The value to search for

#### Returns

`Telerik.Web.UI.RibbonBarGroup` Returns the first RibbonBarGroup whose Value property matches the passed parameter

### get_minimized

Returns whether the RibbonBar is minimized(collapsed)

#### Parameters

#### Returns

`Boolean` Value indicating whether the RibbonBar is minimized

### set_selectedTabIndex

Selects the RibbonBarTab at the specified index

#### Parameters

##### tabIndex `Number`

The index of the RibbonBarTab to be selected

#### Returns

`None` 

### maximize

Maximizes(expands) the RibbonBar (equal to set_minimized(false))

#### Parameters

#### Returns

`None` 

### findTabByDomElement

Returns the RibbonBarTab object whose DOM element is equal to or a parent of the passed parameter.

#### Parameters

##### element `Element`

The DOM element to search for

#### Returns

`Telerik.Web.UI.RibbonBarTab` Returns the RibbonBarTab object whose DOM element is equal to or a parent of the passed parameter.

### saveClientState

Saves the client state to the client state hidden field

#### Parameters

#### Returns

`None` 

### get_applicationMenuDropDpwn

ApplicationMenu

#### Parameters

#### Returns

`Object` 

### findToggleButtonByValue

Returns the first RibbonBarToggleButton object whose Value property equals to the passed parameter.

#### Parameters

##### value `String`

The value to search for

#### Returns

`Telerik.Web.UI.RibbonBarToggleButton` Returns the first RibbonBarToggleButton whose Value property matches the passed parameter

### minimize

Minimizes(collapses) the RibbonBar (equal to set_minimized(true))

#### Parameters

#### Returns

`None` 

### get_quickAccessToolbar

RibbonBarQuickAccessToolbar

#### Parameters

##### RibbonBarQuickAccessToolbar `Object`

#### Returns

`Object` 

### set_defaultImageUrl

Sets the default  image.

#### Parameters

#### Returns

`Object` 

### findMenuItemByValue

Returns the first RibbonBarMenu object whose Value property equals to the passed parameter.

#### Parameters

##### value `String`

The value to search for

#### Returns

`Telerik.Web.UI.RibbonBarMenu` Returns the first RibbonBarMenu whose Value property matches the passed parameter

### findItemByText

Returns the first RibbonBarItem object whose Text property equals the passed parameter.

#### Parameters

##### text `String`

The text to search for

#### Returns

`Telerik.Web.UI.RibbonBarItem` 

### findButtonByValue

Returns the first RibbonBarButton object whose Value property equals to the passed parameter.

#### Parameters

##### value `String`

The value to search for

#### Returns

`Telerik.Web.UI.RibbonBarButton` Returns the first RibbonBarButton whose Value property matches the passed parameter

### get_defaultImageUrl

Returns the url of the default  image.

#### Parameters

##### string `Object`

#### Returns

`Object` 

### findItemByCommandArgument

Returns the first RibbonBarItem object whose CommandArgument property equals the passed parameter.

#### Parameters

##### commandArgument `String`

The text to search for

#### Returns

`Telerik.Web.UI.RibbonBarItem` 

### get_element

RadRibbonBar

#### Parameters

#### Returns

`Element` 

### findItemByCommandName

Returns the first RibbonBarItem object whose CommandName property equals the passed parameter.

#### Parameters

##### commandName `String`

The text to search for

#### Returns

`Telerik.Web.UI.RibbonBarItem` 

### get_defaultDesabledImageUrlLarge

Returns the url of the default disabled large image.

#### Parameters

##### string `Object`

#### Returns

`Object` 

### set_defaultDesabledImageUrlLarge

Sets the default disabled large image.

#### Parameters

#### Returns

`Object` 

### get_selectedTab

Gets the selected RibbonBarTab.

#### Parameters

#### Returns

`Telerik.Web.UI.RibbonBarTab` The selected RibbonBarTab

### findItemByAttribute

Gets the first instance of a RibbonBarItem with the specified attribute/value pair.

#### Parameters

##### attributeName `String`

The attribute name to search for

##### attributeValue `String`

The attribute value to search for

#### Returns

`Telerik.Web.UI.RibbonBarItem` Returns the first RibbonBarItem which has an attribute that matches the passed parameters

### repaint

Refreshes the RadListBox UI

#### Parameters

#### Returns

`None` 

### findTabByValue

Returns the first RibbonBarTab object whose Value property equals to the passed parameter.

#### Parameters

##### value `String`

The value to search for

#### Returns

`Telerik.Web.UI.RibbonBarTab` Returns the first RibbonBarTab whose Value property matches the passed parameter

### get_tabs

Gets a collection with all tabs

#### Parameters

#### Returns

`Telerik.Web.UI.RibbonBarTabCollection` RibbonBarTabCollection 

## Events

### applicationMenuItemClicked 

Occurs after an ApplicationMenu items is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### applicationMenuItemClicking

Occurs when an ApplicationMenu items is clicked, before the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### buttonClicked 

Occurs when the user clicks on a ribbonbar button, after the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### buttonClicking

Occurs when the user clicks on a ribbonbar button, before the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### buttonToggled 

Occurs after a toggle button is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### buttonToggling 

Occurs when the user clicks on a ribbonbar toggle button, before the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### colorPickerColorChanged 

Occurs when the user has already changed the color in the ColorPicker.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### colorPickerColorChanging

Occurs when the user is changing the color in the ColorPicker.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### comboBoxSelectedIndexChanged 

Occurs when the user has already changed the selected item in the Combobox.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### comboBoxSelectedIndexChanging 

Occurs when the user is changing the item in the ComboBox.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### comboBoxTextChanged 

Occurs when the user has already changed the text in the Combobox.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### dropDownSelectedIndexChanged 

Occurs when the user has already changed the selected item in the DropDown.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### dropDownSelectedIndexChanging 

Occurs when the user is changing the selected item in the DropDown.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### galleryCommand 

Occurs when the user clicks a GalleryItem

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### galleryCommandPreview 

Occurs when the user moves the mouse over a GalleryItem.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### galleryCommandPreviewEnd 

Occurs when the user moves the mouse out of a GalleryItem.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### launcherClicked 

Occurs when the user clicks on a ribbonbar group, after the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### launcherClicking 

Occurs when the user clicks on a ribbonbar group, before the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### load 

Occurs when the RadRibbonBar is first loaded and fully initialized on the client. The event handler receives a single parameter: the instance of the ribbonbar firing the event.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### maximized 

Occurs after an ApplicationMenu items is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### maximizing 

Occurs after an ApplicationMenu items is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### minimized 

Occurs after an ApplicationMenu items is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Telerik.Web.UI.RibbonBarMinimizedEventArgs`

The event arguments.  

### minimizing 

Occurs after an ApplicationMenu items is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Telerik.Web.UI.RibbonBarMinimizedEventArgs`

The event arguments.  

### menuItemClicked 

Occurs when the user clicks on a ribbonbar menu item, after the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### menuItemClicking 

Occurs when the user clicks on a ribbonbar menu item, before the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### numericTextBoxValueChanged 

Occurs after the user has already changed the value in the NumericTextBox.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### numericTextBoxValueChanging 

Occurs when the user is changing the value in the NumericTextBox.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### selectedTabChanged 

Occurs when a non-selected tab is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### selectedTabChanging 

Occurs when the user clicks on a ribbonbar tab, before the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### toggleListToggled 

Occurs after a toggle button is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### toggleListToggling 

Occurs when the user clicks on a ribbonbar toggle button, before the ribbonbar responds to the mouse click.

#### Event Data

##### sender `Telerik.Web.UI.RadRibbonBar`

The instance of the RadRibbonBar raised the event.

##### args `Sys.EventArgs`

The event arguments.  