---
title: Telerik.Web.UI.SplitterPaneBase
page_title: Client-side API Reference
description: Telerik.Web.UI.SplitterPaneBase
slug: Telerik.Web.UI.SplitterPaneBase
---

# Telerik.Web.UI.SplitterPaneBase : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.SplitterPaneBase]({%slug Telerik.Web.UI.SplitterPaneBase%})*

## Methods

###  getScrollPos

Gets the position of the scrollbar of the control

#### Parameters

#### Returns

`Object` The position of the scrollbar of the control in the form 

###  get_collapsed

Returns a value, indicating whether the control is collapsed

#### Parameters

#### Returns

`Boolean` A value

###  get_height

Gets the height in pixels of the control

#### Parameters

#### Returns

`Number` The height in pixels of the control

###  get_maxHeight

Returns the maximum possible height of the control

#### Parameters

#### Returns

`Number` The maximum possible height of the control

###  get_maxWidth

Returns the maximum possible width of the control

#### Parameters

#### Returns

`Number` The maximum possible width of the control

###  get_minHeight

Returns the minimum possible height of the control

#### Parameters

#### Returns

`Number` The minimum possible height of the control

###  get_minWidth

Returns the minimum possible width of the control

#### Parameters

#### Returns

`Number` The minimum possible width of the control

###  get_persistScrollPosition

Returns a value, indicating whether the control persists the position of the scrollbar

#### Parameters

#### Returns

`Boolean` A value

###  get_scrolling

Returns the value of the Scrolling property of the control

#### Parameters

#### Returns

`Telerik.Web.UI.SplitterPaneScrolling` The value of the Scrolling property of the control

###  get_width

Gets the width in pixels of the control

#### Parameters

#### Returns

`Number` The width in pixels of the control

###  setScrollPos

Sets the position of the scrollbar of the control

#### Parameters

##### scrollLeft `Number`

The left position of the scrollbar

##### scrollTop `Number`

The top position of the scrollbar

#### Returns

`None` 

###  set_height

Sets the height in pixels of the control

#### Parameters

##### value `Number`

The new height in pixels of the control

#### Returns

`None` 

###  set_scrolling

Sets new value for the Scrolling property of the control

#### Parameters

##### value `Telerik.Web.UI.SplitterPaneScrolling`

The new value for the Scrolling property of the control

#### Returns

`None` 

###  set_width

Sets the width in pixels of the control

#### Parameters

##### value `Number`

The new width in pixels of the control

#### Returns

`None` 


## Events

### collapsed

Occurs when a SlidingPane has just been collapsed.

#### Event Data

##### sender `Telerik.Web.UI.SplitterPaneBase`

The RadPane or RadSlidingPane instance raised the event.

##### args `Sys.EventArgs`

The arguments of the Collapsed event.

### collapsing

Occurs when a SlidingPane is just about to be collapsed.

#### Event Data

##### sender `Telerik.Web.UI.SplitterPaneBase`

The RadPane or RadSlidingPane instance raised the event.

##### args `Sys.CancelEventArgs`

The arguments of the Collapsing event.

### expanded

Occurs when a SlidingPane has just been expanded.

#### Event Data

##### sender `Telerik.Web.UI.SplitterPaneBase`

The RadPane or RadSlidingPane instance raised the event.

##### args `Sys.EventArgs`

The arguments of the Expanded event.

### expanding

Occurs when a SlidingPane is just about to be expanded.

#### Event Data

##### sender `Telerik.Web.UI.SplitterPaneBase`

The RadPane or RadSlidingPane instance raised the event.

##### args `Sys.CancelEventArgs`

The arguments of the Expanding event.

### resized

Occurs when a SlidingPane has just been resized.

#### Event Data

##### sender `Telerik.Web.UI.SplitterPaneBase`

The RadPane or RadSlidingPane instance raised the event.

##### args `Telerik.Web.UI.PaneResizedEventArgs`

The arguments of the Resized event.

### resizing

Occurs when a SlidingPane is just about to be resized.

#### Event Data

##### sender `Telerik.Web.UI.SplitterPaneBase`

The RadPane or RadSlidingPane instance raised the event.

##### args `Telerik.Web.UI.PaneResizingEventArgs`

The arguments of the Resizing event.