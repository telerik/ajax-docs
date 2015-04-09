---
title: Telerik.Web.UI.RadSplitter
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadSplitter : Telerik.Web.UI.RadWebControl

## Methods

###  getContainerElement

Returns the TABLE element of the splitter control

#### Parameters

#### Returns

`Object` The TABLE element of the splitter control

###  getEndPane

Gets the last pane in the items collection of the splitter control

#### Parameters

#### Returns

`Telerik.Web.UI.RadPane` The last pane in the items collection of the splitter control

###  getInnerHeight

Returns the height of the splitter control, excluding borders of the splitter

#### Parameters

#### Returns

`Number` The height of the splitter control

###  getInnerWidth

Returns the width of the splitter control, excluding borders of the splitter

#### Parameters

#### Returns

`Number` The width of the splitter control

###  getMaxHeight

Returns the sum of the maximum possible height of a range of the panes in the items collection of the splitter control

#### Parameters

##### startPaneIndex `Number`

The index of the first pane to include in the sum. In case the parameter is not specified

##### endPaneIndex `Number`

The index of the last pane to include in the sum. In case the parameter is not specified

#### Returns

`Number` The sum of the maximum possible height of a range of the panes in the items collection of the splitter control

###  getMaxWidth

Returns the sum of the maximum possible width of a range of the panes in the items collection of the splitter control

#### Parameters

##### startPaneIndex `Number`

The index of the first pane to include in the sum. In case the parameter is not specified

##### endPaneIndex `Number`

The index of the last pane to include in the sum. In case the parameter is not specified

#### Returns

`Number` The sum of the maximum possible width of a range of the panes in the items collection of the splitter control

###  getMinHeight

Returns the sum of the minimum possible height of a range of the panes in the items collection of the splitter control

#### Parameters

##### startPaneIndex `Number`

The index of the first pane to include in the sum. In case the parameter is not specified

##### endPaneIndex `Number`

The index of the last pane to include in the sum. In case the parameter is not specified

#### Returns

`Number` The sum of the minimum possible height of a range of the panes in the items collection of the splitter control

###  getMinWidth

Returns the sum of the minimum possible width of a range of the panes in the items collection of the splitter control

#### Parameters

##### startPaneIndex `Number`

The index of the first pane to include in the sum. In case the parameter is not specified

##### endPaneIndex `Number`

The index of the last pane to include in the sum. In case the parameter is not specified

#### Returns

`Number` The sum of the minimum possible width of a range of the panes in the items collection of the splitter control

###  getPaneById

Returns the pane with the specified id in the panes collection of the splitter control

#### Parameters

##### paneID `String`

The id of the pane to search for

#### Returns

`Telerik.Web.UI.RadPane` The pane with the specified id in the panes collection of the splitter control

###  getPaneByIndex

Returns the pane with the specified index in the panes collection of the splitter control

#### Parameters

##### paneIndex `Number`

The index of the pane to search for

#### Returns

`Telerik.Web.UI.RadPane` The pane with the specified index in the panes collection of the splitter control

###  getPanes

Returns an array with all the panes, defined in the items collection of the splitter control

#### Parameters

#### Returns

`Array` An array with all the panes

###  getSplitBarById

Returns the splitbar with the specified id in the splitbars collection of the splitter control

#### Parameters

##### splitBarID `String`

The id of the splitbar to search for

#### Returns

`Telerik.Web.UI.RadSplitBar` The splitbar with the specified id in the splitbars collection of the splitter control

###  getSplitBarByIndex

Returns the splitbar with the specified index in the splitbars collection of the splitter control

#### Parameters

##### index `Number`

The index of the splitbar to search for

#### Returns

`Telerik.Web.UI.RadSplitBar` The splitbar with the specified index in the splitbars collection of the splitter control

###  getSplitBars

Returns an array with all the splitbars, defined in the items collection of the splitter control

#### Parameters

#### Returns

`Array` An array with all the splitbars

###  getStartPane

Gets the first pane in the items collection of the splitter control

#### Parameters

#### Returns

`Telerik.Web.UI.RadPane` The first pane in the items collection of the splitter control

###  get_borderSize

Gets the size of the borders in the splitter control

#### Parameters

#### Returns

`Number` The size of the borders in the splitter control

###  get_height

Gets the height in pixels of the splitter control

#### Parameters

#### Returns

`Number` The height in pixels of the splitter control

###  get_heightOffset

Gets the value of the HeightOffset property of the splitter control

#### Parameters

#### Returns

`Number` The value of the HeightOffset property of the splitter control

###  get_liveResize

Returns a value, indicating whether the panes of the splitter control will resize while the user is dragging the splitbar control or when the user releases the splitbar control

#### Parameters

#### Returns

`Boolean` A value

###  get_parent

Gets a reference to the first parent RadPane object of the splitter control, in case the ResizeWithParentPane property of the splitter is set to true

#### Parameters

#### Returns

`Telerik.Web.UI.RadPane` 

###  get_resizeMode

Gets the resize mode of the splitter control

#### Parameters

#### Returns

`Telerik.Web.UI.SplitterResizeMode` The resize mode of the splitter

###  get_splitBarSize

Gets the size of the splitbar controls in the splitter control

#### Parameters

#### Returns

`Number` The size of the splitbar controls in the splitter control

###  get_width

Gets the width in pixels of the splitter control

#### Parameters

#### Returns

`Number` The width in pixels of the splitter control

###  isNested

Returns a value, indicating whether the splitter is nested in a RadPane control and its ResizeWithParentPane property is set to true

#### Parameters

#### Returns

`Boolean` A value

###  isVertical

Returns a value, indicating whether the Orientation of the splitter control is Telerik.Web.UI.Orientation.Vertical

#### Parameters

#### Returns

`Boolean` A value

###  repaint

Repaints the splitter control and forces it to recalculate the size of its elements

#### Parameters

#### Returns

`None` 

###  resize

Resizes the splitter control to the specified width and height

#### Parameters

##### width `Number`

The new width in pixels for the splitter control

##### height `Number`

The new height in pixels for the splitter control

#### Returns

`None` 

###  set_height

Sets the height of the splitter control

#### Parameters

##### value `String`

The new height for the splitter control

#### Returns

`None` 

###  set_width

Sets the width of the splitter control

#### Parameters

##### value `String`

The new width for the splitter control

#### Returns

`None` 


## Events

### load

Occurs when a RadSplitter is successfully loaded on the client. 

#### Event Data

##### sender `Telerik.Web.UI.RadSplitter`

The RadSplitter instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### resized

Occurs when a RadSplitter is resized.

#### Event Data

##### sender `Telerik.Web.UI.RadSplitter`

The RadSplitter instance raised the event.

##### args `Telerik.Web.UI.SplitterResizedEventArgs`

The arguments of the Resized event.

### resizing

Occurs when a RadSplitter is about to be resized.

#### Event Data

##### sender `Telerik.Web.UI.RadSplitter`

The RadSplitter instance raised the event.

##### args `Telerik.Web.UI.SplitterResizingEventArgs`

The arguments of the Resizing event.