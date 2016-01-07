---
title: Telerik.Web.UI.RadTabStrip
page_title: Client-side API Reference
description: Telerik.Web.UI.RadTabStrip
slug: Telerik.Web.UI.RadTabStrip
---

# Telerik.Web.UI.RadTabStrip : Telerik.Web.UI.ControlItemContainer 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemContainer]({%slug Telerik.Web.UI.ControlItemContainer%})
* *[Telerik.Web.UI.RadTabStrip]({%slug Telerik.Web.UI.RadTabStrip%})*

## Methods

### findTabByText

Returns the first RadTab object whose Text property is equal to the passed parameter.

#### Parameters

##### text `String`

Text to find

#### Returns

`Telerik.Web.UI.RadTab` The first RadTab instance with matching text

### isVertical

Checks if the orientation of the RadTabStrip is vertical (Orientation can be Horizontal and Vertical).

#### Parameters

#### Returns

`Boolean` true if the orientation is vertical

### trackChanges

Begins tracking changes to the RadTabStrip items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.

#### Parameters

#### Returns

`None` 

### get_attributes

Returns the collection of custom attributes for the tab strip.

#### Parameters

#### Returns

`Object` 

### isHorizontal

Checks if the orientation of the RadTabStrip is horizontal (Orientation can be Horizontal and Vertical).

#### Parameters

#### Returns

`Boolean` true if the orientation is horizontal

### set_causesValidation

Sets a boolean value indicating whether the RadTabStrip causes validation.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_clickSelectedTab

Gets a value indicating whether the tabstrip should postback when the user clicks the currently selected tab.

#### Parameters

#### Returns

`Boolean`  A value indicating whether the tabstrip should postback when the user clicks the currently selected tab 

### get_element

Gets the DOM element for the tab strip.

#### Parameters

#### Returns

`Element` 

### findTabByUrl

Returns the first;RadTab object whose NavigateUrl property is equal to the passed parameter.

#### Parameters

##### value `String`

The navigateUrl to find

#### Returns

`Telerik.Web.UI.RadTab` The first RadTab instance with matching navigateUrl

### get_enabled

True if the tab strip is enabled. To enable a tab strip, use the enable() or set_enabled(true) methods.

#### Parameters

#### Returns

`Object` 

### get_selectedTab

Returns the root level selected tab. Null if no root tab has been selected.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTab` The selected root tab

### saveClientState

Saves the client state to the client state hidden field.

#### Parameters

#### Returns

`None` 

### findTabByAbsoluteUrl

Returns the first RadTab instance whose NavigateUrl property is equal to the passed parameter. Note that the parameter should end with "/" like "http://www.test.com/"

#### Parameters

##### value `String`

The absolute Url to find

#### Returns

`Telerik.Web.UI.RadTab` The RadTab instance with matching absolute Url

### findTabByAttribute

Returns the first RadTab object with a custom attribute of the specified name that has the specified value.

#### Parameters

##### attributeName `String`

The attribute name to search for

##### attributeValue `String`

The attribute value to search for

#### Returns

`Telerik.Web.UI.RadTab` The first RadTab instance with matching attribute

### get_validationGroup

Gets the name of the validation group to which the RadTabStrip belongs.

#### Parameters

#### Returns

`String` The name of the validation group.

### set_enabled

Enables or disables all tabs in the tab strip.

#### Parameters

##### value `Boolean`

true to enable the tab strip

#### Returns

`None` 

### commitChanges

Ends tracking changes to the tabs. Only changes to the tabs that occur between a call to trackChanges and commitChanges persist after a postback.

#### Parameters

#### Returns

`None` 

### get_allTabs

Gets a collection of all tabs. This includes all root and child tabs in the tab strip.

#### Parameters

#### Returns

`Array` An array of all tabs

### get_multiPageID

Returns the ID of the associated RadMultiPage, if any.

#### Parameters

#### Returns

`String` 

### set_clickSelectedTab

Sets a value indicating whether the tabstrip should postback when the user clicks the currently selected tab.

#### Parameters

##### value `Boolean`

A value indicating whether the tabstrip should postback when the user clicks the currently selected tab

#### Returns

`None` 

### disable

Disables all tabs in the tab strip. Clicking on any tab has no effect, child tabs cannot be opened.

#### Parameters

#### Returns

`None` 

### set_unselectChildren

Sets a value determining whether child tabs are unselected when a parent tab is unselected.

#### Parameters

##### value `Boolean`

 true if child tabs are unselected when a parent tab is unselected

#### Returns

`None` 

### set_validationGroup

Sets the name of the validation group to which the RadTabStrip belongs.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_levelElement

Gets the DOM element of the root level wrapper (rtsLevel)

#### Parameters

#### Returns

`Element`  The DOM element of the root level wrapper 

### findTabByValue

Returns the first RadTab object whose Value property is equal to the passed parameter.

#### Parameters

##### value `String`

Value to find

#### Returns

`Telerik.Web.UI.RadTab` The first RadTab instance with matching value

### set_multiPageID

Sets the ID of the associated RadMultiPage.

#### Parameters

##### value `String`

The ID of the associated RadMultiPage

#### Returns

`None` 

### enable

Enables all tabs in the tab strip.

#### Parameters

#### Returns

`None` 

### get_unselectChildren

Gets a value determining whether child tabs are unselected when a parent tab is unselected.

#### Parameters

#### Returns

`Boolean`  true if child tabs are unselected when a parent tab is unselected. false if the tabs persist their state even when hidden. The default value is false. 

### get_selectedIndexes

Gets a collection of the indexes of all selected tabs.

#### Parameters

#### Returns

`Array`  an array with the indexes of all selected tabs. 

### repaint

Refreshes the RadTabStrip UI

#### Parameters

#### Returns

`None` 

### get_childListElement

Gets the root tab list (rtsUL) DOM element.

#### Parameters

#### Returns

`Element` 

### get_selectedIndex

Returns the index of the currently selected root tab

#### Parameters

#### Returns

`String` The index of the currently selected root tab

### get_causesValidation

Gets a value indicating whether the RadTabStrip causes validation.

#### Parameters

#### Returns

`Boolean` true or false

### get_tabs

Returns a collection of root level tabs.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTabCollection` 

### get_multiPage

Gets the RadMultiPage instance associated with this tab strip

#### Parameters

#### Returns

`Telerik.Web.UI.RadMultiPage` The RadMultiPage instance associated with this tab strip

## Events


### load

Occurs after the RadTabStrip has been fully initialized on the client-side. 

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Sys.EventArgs`

The arguments of the Load event.


### tabDragStart

Occurs when a drag-to-reorder operation is about to start.

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripCancelEventArgs`

The arguments of the TabDragStart event.


### reordered

Occurs after the reorder operation is completed and the dragged tab is being inserted into its new position. 

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.TabStripReorderedEventArgs`

The arguments of the Reordered event.


### reordering

Occurs just before the drag-to-reorder operation is completed and the dragged tab is still in its initial position. 

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.TabStripReorderingEventArgs`

The arguments of the Reordering event.


### tabSelecting

Occurs when the user selects a tab, before the tab is selected.  

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripCancelEventArgs`

The arguments of the TabSelecting event.


### tabSelected

Occurs when the user selects a tab, after the tab has been selected.   

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripEventArgs`

The arguments of the TabSelected event.


### tabUnSelected

Occurs when the user selects a new tab, after the previously selected tab has been unselected. 

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripEventArgs`

The arguments of the TabUnSelected event.


### mouseOver

Occurs when the mouse moves over a tab in the Tab Strip.  

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripEventArgs`

The arguments of the MouseOver event.


### mouseOut

Occurs when the mouse moves off a tab in the Tab Strip. 

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripEventArgs`

The arguments of the MouseOut event.


### contextMenu

Occurs when the user right-clicks on a tab in the Tab Strip. 

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripEventArgs`

The arguments of the ContextMenu event.


### doubleClick

Occurs when the user double-clicks on a tab. 

#### Event Data

##### sender `Telerik.Web.UI.RadTabStrip`

The RadTabStrip instance raised the event.

##### args `Telerik.Web.UI.RadTabStripEventArgs`

The arguments of the DoubleClick event.