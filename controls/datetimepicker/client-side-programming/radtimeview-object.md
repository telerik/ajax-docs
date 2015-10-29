---
title: RadTimeView object
page_title: RadTimeView object | RadDateTimePicker for ASP.NET AJAX Documentation
description: RadTimeView object
slug: datetimepicker/client-side-programming/radtimeview-object
tags: radtimeview,object
published: True
position: 2
---

# RadTimeView object



The **RadTimeView** client object represents the popup time view on[RadDateTimePicker]({%slug datetimepicker/client-side-programming/raddatetimepicker-object%}). To obtain a reference to this object, use the **get_timeView** method of the control to which it belongs.

The following tables lists the most important properties methods of the **RadTimeView** client-side object:

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **getTime** |none|Date|Returns the selected date and time, or null if no value is selected.|
| **setTime** |hours, minutes, seconds, Date object|none|Assigns the value of the time view.|
| **get_interval** |none|Date|Returns the time interval between successive values in the time view.|
| **get_endTime** |none|Date|Returns the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.|
| **get_startTime** |none|Date|Returns the earliest time that is displayed by the time view.|
| **get_showHeader** |none|boolean|Returns whether the time view displays its header.|
| **get_showFooter** |none|boolean|Returns whether the time view displays its footer.|
| **get_columns** |none|integer|Returns the number of columns used to lay out values in the time view.|
| **get_element** |none|HTML element|Returns the DOM element for the entire **RadTimeView** control.|
| **get_timeFormat** |none|string|Returns the time format of the **RadTimeView** control.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **clear** |none|none|Clears the selection, leaving the value as unassigned.|

# See Also

 * [Overview]({%slug datetimepicker/client-side-programming/overview%})
