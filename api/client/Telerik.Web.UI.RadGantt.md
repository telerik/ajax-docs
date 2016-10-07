---
title: Telerik.Web.UI.RadGantt
page_title: Client-side API Reference
description: Telerik.Web.UI.RadGantt
slug: Telerik.Web.UI.RadGantt
---

# Telerik.Web.UI.RadGantt : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadGantt]({%slug Telerik.Web.UI.RadGantt%})*


## Methods

### get_tasks

Gets a collection with all root level tasks.

#### Parameters

#### Returns

`Telerik.Web.UI.GanttTaskCollection` a collection of tasks

### get_allTasks

Gets a collection with all tasks.

#### Parameters

#### Returns

`Telerik.Web.UI.GanttTask` Array

### get_dependencies

Gets a collection with all dependencies.

#### Parameters

#### Returns

`Telerik.Web.UI.GanttDependencyCollection` a collection of dependencies

### get_resources

Gets a collection with all resources.

#### Parameters

#### Returns

`Telerik.Web.UI.GanttResourceCollection` a collection of resources

### get_assignments

Gets a collection with all resource assignments.

#### Parameters

#### Returns

`Telerik.Web.UI.GanttAssignmentCollection` a collection of assignments

### get_selectedView

Gets the selected view mode.

#### Parameters

#### Returns

`Telerik.Web.UI.GanttViewType` enum with view modes

### get_scrollTop

Returns the vertical scroll bar position.

#### Parameters

#### Returns

`Number`

### get_scrollLeft

Returns the horizontal scroll bar position.

#### Parameters

#### Returns

`Number`

### get_element

Gets the control's DOM element.

#### Parameters

#### Returns

`Element` DOM element

### get_enabled

Returns a boolean value indicating whether the control is enabled.

#### Parameters

#### Returns

`Boolean` boolean value

### exportToPdf

Exports the RadGantt to .pdf if the EnablePdfExport property is true.

#### Parameters

#### Returns

`None`

### get_allowColumnResize

True if the allowColumnResize property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### get_clientTemplate

Returns the value of the Gantt's clientTemplate property.

#### Parameters

#### Returns

`String` String 

### get_currentTimeMarkerInterval

Returns the value of the Gantt's currentTimeMarkerInterval property.

#### Parameters

#### Returns

Number `Number` 

### get_displayDeleteConfirmation

True if the displayDeleteConfirmation property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### get_height

Returns the value of the Gantt's height property.

#### Parameters

#### Returns

Number `Number` 

### get_hourSpan

Returns the value of the Gantt's hourSpan property.

#### Parameters

#### Returns

Number `Number` 

### get_listWidth

Returns the value of the RadGantt's listWidth property.

#### Parameters

#### Returns

`String` String 

### get_readOnly

Returns the value of the Gantt's readOnly property indicating whether the control is read-only.

#### Parameters

#### Returns

`Boolean` Boolean

### get_rowHeight

Returns the value of the Gantt's rowHeight property.

#### Parameters

#### Returns

Number `Number` 

### get_rangeStart

Returns the value of the Gantt's rangeStart property.

#### Parameters

#### Returns

`Date` Date 

### get_rangeEnd

Returns the value of the Gantt's rangeEnd property.

#### Parameters

#### Returns

`Date` Date 

### get_selectedDate

Returns the value of the Gantt's selectedDate property.

#### Parameters

#### Returns

`Date` Date 

### get_showCurrentTimeMarker

Returns the value of the Gantt's showCurrentTimeMarker property.

#### Parameters

#### Returns

`Boolean` Boolean

### get_showFullTime

Returns the value of the Gantt's showFullTime property.

#### Parameters

#### Returns

`Boolean` Boolean

### get_showFullWeek

Returns the value of the Gantt's showFullWeek property.

#### Parameters

#### Returns

`Boolean` Boolean

### get_showTooltip

Returns the value of the Gantt's showTooltip property.

#### Parameters

#### Returns

`Boolean` Boolean

### get_snapToGrid

Returns the value of the Gantt's snapToGrid property.

#### Parameters

#### Returns

`Boolean` Boolean

### get_width

Returns the value of the Gantt's width property.

#### Parameters

#### Returns

Number `Number` 

### get_workWeekEnd

Returns the value of the RadGantt's workWeekEnd property.

#### Parameters

#### Returns

`Telerik.Web.UI.DayOfWeek` Telerik.Web.UI.DayOfWeek 

### get_workWeekStart

Returns the value of the RadGantt's workWeekStart property.

#### Parameters

#### Returns

`Telerik.Web.UI.DayOfWeek` Telerik.Web.UI.DayOfWeek 

### set_allowColumnResize

Enables/Disables column resizing.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_clientTemplate

Sets the value of the Gantt's clientTemplate property.

#### Parameters

##### value `String`

value

#### Returns

`None`

### set_currentTimeMarkerInterval

Sets the value of the Gantt's currentTimeMarkerInterval property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### set_displayDeleteConfirmation

Enables/Disables confirmation dialog when the user deletes a task or a dependency.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_enabled

Enables/Disables the control.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_height

Sets the value of the Gantt's height property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### set_hourSpan

Sets the value of the Gantt's hourSpan property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### set_listWidth

Sets the value of the Gantt's listWidth property in pixels or percents.

#### Parameters

##### value `String`

value

#### Returns

`None`

### set_readOnly

Sets or disables the Gantt's read-only state.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_rowHeight

Sets the value of the Gantt's rowHeight property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### set_rangeStart

Sets the value of the Gantt's rangeStart property.

#### Parameters

##### date `Date`

The DateTime object which should be set as a start date of visible range.

#### Returns

`None` 

### set_rangeEnd

Sets the value of the Gantt's rangeEnd property.

#### Parameters

##### date `Date`

The DateTime object which should be set as an end date of visible range.

#### Returns

`None` 

### selectDate

Sets the value of the Gantt's selectedDate property.

#### set_selectedDate

##### date `Date`

The DateTime object which should be set as a selected date.

#### Returns

`None` 

### set_selectedView

Sets the selected view mode.

#### Parameters

##### view `Number`

#### Returns

`None`

### set_scrollTop

Sets the vertical scroll bar position.

#### Parameters

##### position `Number`

#### Returns

`None`

### set_scrollLeft

Sets the horizontal scroll bar position.

#### Parameters

##### position `Number`

#### Returns

`None`

### set_showCurrentTimeMarker

Shows/Hides the Gantt's current time marker.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_showFullTime

Enables displaying the Gantt's complete day or displays a range between 8:00 AM and 5:00 PM.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_showFullWeek

Enables displaying all days of the Gantt's week or diplays the range between WorkWeekStart and WorkWeekEnd.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_showTooltip

Enables/Disables displaying tooltips for Gantt tasks.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_snapToGrid

Enables/Disables the Gantt tasks snapping to the nearest grid cell.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_width

Sets the value of the Gantt's width property.

#### Parameters

##### value `Number`

value

#### Returns

`None`

### set_workWeekEnd

Sets the Gantt's last day of the work week.

#### Parameters

##### value `Telerik.Web.UI.DayOfWeek`

value

#### Returns

`None`

### set_workWeekStart

Sets the Gantt's first day of the work week.

#### Parameters

##### value `Telerik.Web.UI.DayOfWeek`

value

#### Returns

`None`


## Events

### clientNavigationCommand 

Occurs when the current View is changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttNavigationCommandEventArgs`

The event arguments.  
### clientTaskMoving 

Occurs when the Task is just about to be moved.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskMovingEventArgs`

The event arguments.  

### clientTaskResizing 

Occurs when the Task is just about to be resized.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskResizingEventArgs`

The event arguments.  

### clientTaskMoveEnd 

Occurs when the Task moving is ended.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskMoveEndEventArgs`

The event arguments.  

### clientTaskMoveStart 

Occurs when the Task moving is started.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskMoveStartEventArgs`

The event arguments.  

### clientTaskResizeEnd 

Occurs when the Task resizing is ended.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskResizeEndEventArgs`

The event arguments.  

### clientTaskResizeStart 

Occurs when the Task resizing is started.

#### Event Data

##### sender `Telerik.Web.UI.RadGantt`

The instance of the RadGantt raised the event.

##### args `Telerik.Web.UI.GanttTaskResizeStartEventArgs`

The event arguments.  


