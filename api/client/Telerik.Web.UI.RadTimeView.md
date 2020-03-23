---
title: Telerik.Web.UI.RadTimeView
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadTimeView
slug: Telerik.Web.UI.RadTimeView
---

# Telerik.Web.UI.RadTimeView : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadTimeView]({%slug Telerik.Web.UI.RadTimeView%})*


## Methods

###  getTime

Returns the selected date and time, or null if no value is selected.

#### Parameters

#### Returns

`Date` 

### get_columns

Returns the number of columns used to lay out values in the time view.

#### Parameters

#### Returns

`Number` 

### get_culture

Returns a string that contains the current culture

#### Parameters

#### Returns

`String` 

### get_customTimes

Gets the custom times of the TimeView object.

#### Parameters

#### Returns

`Array` 

### get_dataSource

Returns the assigned datasource of the TimeView object.

#### Parameters

#### Returns

`Array` 

### get_enableAriaSupport

Returns a boolean value indicating whether the Aria support has been enabled.

#### Parameters

#### Returns

`Boolean` 

### get_endTime

Returns the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.

#### Parameters

#### Returns

`Date` 

### get_interval

Returns the time interval between successive values in the time view.

#### Parameters

#### Returns

`Date` 

### get_itemStyles

Returns an array that determines the classes used for the predined styles.

#### Parameters

#### Returns

`Array` 

### get_showFooter

Returns whether the time view displays its footer.

#### Parameters

#### Returns

`Boolean` 

### get_showHeader

Returns whether the time view displays its header.

#### Parameters

#### Returns

`Boolean` 

### get_startTime

Returns the earliest time that is displayed by the time view.

#### Parameters

#### Returns

`Date` 

### get_timeFormat

Returns the time format of the RadTimeView control.

#### Parameters

#### Returns

`String` 

### raise_clientTimeSelected

Raises the clientTimeSelected event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_clientTimeSelecting

Raises the clientTimeSelecting event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### set_columns

Sets the number of columns used to lay out values in the time view.

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_customTimes

Adds an array of custom times to the TimeView object.

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_dataSource

Sets a new datasource to the TimeView object.

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_endTime

Sets the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.

#### Parameters

##### value `Date`

#### Returns

`None` 

### set_interval

Sets the time interval between successive values in the time view.

#### Parameters

##### value `Date`

#### Returns

`None` 

### set_itemStyles

Determines the classes used for the predined styles.

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_showFooter

Determines whether the time view displays its footer.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_showHeader

Shows/hides the time view header.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_startTime

Sets the earliest time that is displayed by the time view.

#### Parameters

##### value `Date`

#### Returns

`None` 


### setTime

Assigns the value of the time view.

#### Parameters

##### hours `Number`

##### minutes `Number`

##### seconds `Number`

##### Date `Date`

#### Returns

`None` 


## Events

### clientTimeSelected

The clientTimeSelected event is fired when the user selects a time cell in the time view control.

#### Event Data

##### sender `Telerik.Web.UI.RadTimeView`

The instance of the RadTimeView raised the event.

##### args `Telerik.Web.UI.TimeViewSelectedEventArgs`

The event arguments.

### clientTimeSelecting

The clientTimeSelecting event is fired immediately before the selected time cell collection is updated to reflect the selection or deselection of a time cell.

#### Event Data

##### sender `Telerik.Web.UI.RadTimeView`

The instance of the RadTimeView raised the event.

##### args `Telerik.Web.UI.TimeViewSelectingEventArgs`

The event arguments.

