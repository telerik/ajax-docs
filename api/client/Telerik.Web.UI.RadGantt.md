---
title: Telerik.Web.UI.RadGantt
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadGantt
---

# Telerik.Web.UI.RadGantt : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadGantt]({%slug Telerik.Web.UI.RadGantt%})*

## Methods

### get_allowColumnResize

True if the allowColumnResize property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### set_allowColumnResize

Enables/Disables column resizing.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_clientTemplate

Returns the value of the Gantts's clientTemplate property.

#### Parameters

#### Returns

`String` String 

### set_clientTemplate

Sets the value of the Gantts's clientTemplate property.

#### Parameters

##### value `String`

value

#### Returns

`None`

### get_currentTimeMarkerInterval

Returns the value of the Gantts's currentTimeMarkerInterval property.

#### Parameters

#### Returns

Number `Number` 

### set_currentTimeMarkerInterval

Sets the value of the Gantts's currentTimeMarkerInterval property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### get_displayDeleteConfirmation

True if the displayDeleteConfirmation property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### set_displayDeleteConfirmation

Enables/Disables confirmation dialog when the user deletes a task or a dependency.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_height

Returns the value of the Gantts's height property.

#### Parameters

#### Returns

Number `Number` 

### set_height

Sets the value of the Gantts's height property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### get_hourSpan

Returns the value of the Gantts's hourSpan property.

#### Parameters

#### Returns

Number `Number` 

### set_hourSpan

Sets the value of the Gantts's hourSpan property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### get_listWidth

Returns the value of the RadGantt's listWidth property.

#### Parameters

#### Returns

`String` String 

### set_listWidth

Sets the value of the Gantts's listWidth property in pixels or percents.

#### Parameters

##### value `String`

value

#### Returns

`None`

### get_readOnly

Returns the value of the Gantt's readOnly property indicating whether the control is read-only.

#### Parameters

#### Returns

`Boolean` Boolean

### set_readOnly

Sets or disables the Gantt's read-only state.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_rowHeight

Returns the value of the Gantts's rowHeight property.

#### Parameters

#### Returns

Number `Number` 

### set_rowHeight

Sets the value of the Gantts's rowHeight property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### get_snapToGrid

Returns the value of the Gantt's snapToGrid property.

#### Parameters

#### Returns

`Boolean` Boolean

### set_snapToGrid

Enables/Disables the Gantt tasks snapping to the nearest grid cell.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_showCurrentTimeMarker

Returns the value of the Gantt's showCurrentTimeMarker property.

#### Parameters

#### Returns

`Boolean` Boolean

### set_showCurrentTimeMarker

Shows/Hides the Gantt's current time marker.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_showFullTime

Returns the value of the Gantt's showFullTime property.

#### Parameters

#### Returns

`Boolean` Boolean

### set_showFullTime

Enables displaying the Gantt's complete day or displays a range between 8:00 AM and 5:00 PM.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_showFullWeek

Returns the value of the Gantt's showFullWeek property.

#### Parameters

#### Returns

`Boolean` Boolean

### set_showFullWeek

Enables displaying all days of the Gantt's week or diplays the range between WorkWeekStart and WorkWeekEnd.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_showTooltip

Returns the value of the Gantt's showTooltip property.

#### Parameters

#### Returns

`Boolean` Boolean

### set_showTooltip

Enables/Disables displaying tooltips for Gantt tasks.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_width

Returns the value of the Gantts's width property.

#### Parameters

#### Returns

Number `Number` 

### set_width

Sets the value of the Gantts's width property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### get_workWeekStart

Returns the value of the RadGantt's workWeekStart property.

#### Parameters

#### Returns

`Telerik.Web.UI.DayOfWeek` Telerik.Web.UI.DayOfWeek 

### set_workWeekStart

Sets the Gantts's first day of the work week.

#### Parameters

##### value `Telerik.Web.UI.DayOfWeek`

value

#### Returns

`None`

### get_workWeekEnd

Returns the value of the RadGantt's workWeekEnd property.

#### Parameters

#### Returns

`Telerik.Web.UI.DayOfWeek` Telerik.Web.UI.DayOfWeek 

### set_workWeekEnd

Sets the Gantts's last day of the work week.

#### Parameters

##### value `Telerik.Web.UI.DayOfWeek`

value

#### Returns

`None`

## Events

### clientTaskMoveStart 

Occurs when the Task moving is started.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskMoveStartEventArgs`

The event arguments.  

### clientTaskMoving 

Occurs when the Task is just about to be moved.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskMovingEventArgs`

The event arguments.  

### clientTaskMoveEnd 

Occurs when the Task moving is ended.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskMoveEndEventArgs`

The event arguments.  

### clientTaskResizeStart 

Occurs when the Task resizing is started.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskResizeStartEventArgs`

The event arguments.  

### clientTaskResizing 

Occurs when the Task is just about to be resized.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskResizingEventArgs`

The event arguments.  

### clientTaskResizeEnd 

Occurs when the Task resizing is ended.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskResizeEndEventArgs`

The event arguments.  

### clientNavigationCommand 

Occurs when the current View is changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttNavigationCommandEventArgs`

The event arguments.  
