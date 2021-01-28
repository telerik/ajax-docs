---
title: Telerik.Web.UI.RadSlidingPane
description: Telerik.Web.UI.RadSlidingPane
slug: Telerik.Web.UI.RadSlidingPane
---

# Telerik.Web.UI.RadSlidingPane : Telerik.Web.UI.SplitterPaneBase 

## Inheritance Hierarchy

* [Telerik.Web.UI.SplitterPaneBase]({%slug Telerik.Web.UI.SplitterPaneBase%})
* *[Telerik.Web.UI.RadSlidingPane]({%slug Telerik.Web.UI.RadSlidingPane%})*


## Methods

###  getCollapseIconElement

Returns a reference to the HTML element, which represents the collapse icon of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the HTML element

### get_docked

Returns a value, indicating whether the sliding pane is docked

#### Parameters

#### Returns

`Boolean` A value

### get_dockOnOpen

Returns a value, indicating whether the sliding pane control will open in docked state

#### Parameters

#### Returns

`Boolean` A value

### get_enableDock

Returns a value, indicating whether the sliding pane control can be docked

#### Parameters

#### Returns

`Boolean` A value

### get_enableResize

Returns a value, indicating whether the sliding pane control can be resized

#### Parameters

#### Returns

`Boolean` A value

### get_expanded

Returns a value, indicating whether the sliding pane is expanded

#### Parameters

#### Returns

`Boolean` A value

### get_index

Returns the index of the sliding pane in the items collection of the sliding zone control

#### Parameters

#### Returns

`Number` The index of the sliding pane in the items collection of the sliding zone control

### get_pane

Returns a reference to the outer most HTML element of the pane control that is holding the sliding zone of the sliding pane control

#### Parameters

#### Returns

`Object` a reference to the outer most HTML element of the pane control that is holding the sliding zone of the sliding pane control

### get_paneBounds

Gets the bounds of the pane control that is holding the sliding zone of the sliding pane control in the form {width,height,x,y}

#### Parameters

#### Returns

`Object` The bounds of the pane control that is holding the sliding zone of the sliding pane control in the form 

### get_parent

Returns a reference to the sliding zone control

#### Parameters

#### Returns

`Telerik.Web.UI.RadSlidingZone` A reference to the sliding zone control

### get_parentPane

Returns a reference to the pane control that contains the sliding zone of the sliding pane control

#### Parameters

#### Returns

`Telerik.Web.UI.RadPane` A reference to the pane control that contains the sliding zone of the sliding pane control

### get_slidingPaneBounds

Gets the bounds of the sliding pane control in the form {width,height,x,y}

#### Parameters

#### Returns

`Object` The bounds of the sliding pane control in the form 

### get_splitter

Returns a reference to the splitter control

#### Parameters

#### Returns

`Telerik.Web.UI.RadSplitter` A reference to the splitter control

### get_title

Gets the title of the sliding pane control

#### Parameters

#### Returns

`String` The title of the sliding pane control

### getCollapseIconWrapperElement

Returns a reference to the HTML element, which holds the collapse icon of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the HTML element

### getContent

Returns the HTML content of the sliding pane control

#### Parameters

#### Returns

`String` The HTML content of the sliding pane control

### getContentContainer

Gets the HTML element, which is holding the pane content

#### Parameters

#### Returns

`Object` The HTML element

### getDockIconElement

Returns a reference to the HTML element, which represents the dock icon of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the HTML element

### getDockIconWrapperElement

Returns a reference to the HTML element, which holds the dock icon of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the HTML element

### getSlidingContainerTitle

Returns a reference to the title HTML element of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the title HTML element of the sliding pane control

### getSlidingPaneResizeContainer

Returns a reference to the resize HTML element of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the resize HTML element of the sliding pane control

### getTabContainer

Returns a reference to the HTML element, which holds the tab of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the HTML element

### getUndockIconElement

Returns a reference to the HTML element, which represents the undock icon of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the HTML element

### getUnDockIconWrapperElement

Returns a reference to the HTML element, which holds the undock icon of the sliding pane control

#### Parameters

#### Returns

`Object` A reference to the HTML element

### hideTab

Hides the tab for the sliding pane control

#### Parameters

#### Returns

`None` 

### isTabDisplayed

Returns true if the tab for this pane is displayed

#### Parameters

#### Returns

`Boolean` A value

### set_title

Sets the title of the sliding pane control

#### Parameters

##### value `String`

The new title of the sliding pane control

#### Returns

`None` 

### setContent

Sets the HTML content of the sliding pane control

#### Parameters

##### content `String`

The new HTML content of the sliding pane control

#### Returns

`None` 

### showTab

Shows the tab for the sliding pane control

#### Parameters

#### Returns

`None` 



## Events

### docked

Occurs when a SlidingPane has just been docked.

#### Event Data

##### sender `Telerik.Web.UI.RadSlidingPane`

The RadSlidingPane instance raised the event.

##### args `Sys.EventArgs`

The arguments of the Docked event.

### undocked

Occurs when a SlidingPane has just been undocked.

#### Event Data

##### sender `Telerik.Web.UI.RadSlidingPane`

The RadSlidingPane instance raised the event.

##### args `Sys.EventArgs`

The arguments of the Undocked event.

### docking

Occurs when a SlidingPane is just about to be docked.

#### Event Data

##### sender `Telerik.Web.UI.RadSlidingPane`

The RadSlidingPane instance raised the event.

##### args `Sys.CancelEventArgs`

The arguments of the Docking event.

### undocking

Occurs when a SlidingPane is just about to be undocked.

#### Event Data

##### sender `Telerik.Web.UI.RadSlidingPane`

The RadSlidingPane instance raised the event.

##### args `Sys.CancelEventArgs`

The arguments of the Undocking event.


