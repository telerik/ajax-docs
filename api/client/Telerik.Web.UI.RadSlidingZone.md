---
title: Telerik.Web.UI.RadSlidingZone
page_title: Client-side API Reference
description: Telerik.Web.UI.RadSlidingZone
slug: Telerik.Web.UI.RadSlidingZone
---

# Telerik.Web.UI.RadSlidingZone : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadSlidingZone]({%slug Telerik.Web.UI.RadSlidingZone%})*

## Methods

###  collapsePane

Collapses the sliding pane with the given id

#### Parameters

##### paneId `String`

The id of the sliding pane to collapse

#### Returns

`Boolean` A value

###  dockPane

Docks the sliding pane with the given id

#### Parameters

##### paneId `String`

The id of the sliding pane to dock

#### Returns

`Boolean` A value

###  expandPane

Expands the sliding pane with the given id

#### Parameters

##### paneId `String`

The id of the sliding pane to expand

#### Returns

`Boolean` A value

###  getPaneById

Returns a reference to the sliding pane with the specified id

#### Parameters

##### paneId `String`

The id of the sliding pane to search for

#### Returns

`Telerik.Web.UI.RadSlidingPane` A reference to the sliding pane with the specified id

###  getPanes

Returns an array with all the sliding panes, defined in the items collection of the sliding zone control

#### Parameters

#### Returns

`Array` An array with all the sliding panes

###  getTabsContainer

Returns a reference to the HTML element that holds all tab elements of sliding panes

#### Parameters

#### Returns

`Object` A reference to the HTML element that holds all tab elements of sliding panes

###  get_clickToOpen

Gets the value of the ClickToOpen property of the sliding zone control

#### Parameters

#### Returns

`Boolean` The value of the ClickToOpen property of the sliding zone control

###  get_dockedPaneId

Gets the ID of the currently docked sliding pane

#### Parameters

#### Returns

`String` The ID of the currently docked sliding pane

###  get_expandedPaneId

Gets the ID of the currently expanded sliding pane

#### Parameters

#### Returns

`String` The ID of the currently expanded sliding pane

###  get_height

Gets the height of the sliding zone control

#### Parameters

#### Returns

`Number` The height of the sliding zone control

###  get_parent

Returns a reference to the pane control, which holds the sliding zone control

#### Parameters

#### Returns

`Telerik.Web.UI.RadPane` A reference to the pane control

###  get_resizeStep

Gets the value of the ResizeStep property of the sliding zone control

#### Parameters

#### Returns

`Number` The value of the ResizeStep property of the sliding zone control

###  get_slideDuration

Gets the value of the SlideDuration property of the sliding zone control

#### Parameters

#### Returns

`Number` The value of the SlideDuration property of the sliding zone control

###  get_splitter

Returns a reference to the splitter control, which holds the sliding zone control

#### Parameters

#### Returns

`Telerik.Web.UI.RadSplitter` A reference to the splitter control

###  get_width

Gets the width of the sliding zone control

#### Parameters

#### Returns

`Number` The width of the sliding zone control

###  isBottomDirection

Returns a value, indicating whether the SlideDirection of the sliding zone control is bottom

#### Parameters

#### Returns

`Boolean` A value

###  isLeftDirection

Returns a value, indicating whether the SlideDirection of the sliding zone control is left

#### Parameters

#### Returns

`Boolean` A value

###  isRightDirection

Returns a value, indicating whether the SlideDirection of the sliding zone control is right

#### Parameters

#### Returns

`Boolean` A value

###  isTopDirection

Returns a value, indicating whether the SlideDirection of the sliding zone control is top

#### Parameters

#### Returns

`Boolean` A value

###  undockPane

Undocks the sliding pane with the given id

#### Parameters

##### paneId `String`

The id of the sliding pane to undock

#### Returns

`Boolean` A value


## Events

### load

Occurs when a RadSlidingZone is successfully loaded on the client. 

#### Event Data

##### sender `Telerik.Web.UI.RadSlidingZone`

The RadSplitter instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.