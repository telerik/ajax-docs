---
title: RadTimeView object
page_title: RadTimeView object | UI for ASP.NET AJAX Documentation
description: RadTimeView object
slug: calendar/client-side-programming/radtimeview-object
tags: radtimeview,object
published: True
position: 6
---

# RadTimeView object



The __RadTimeView__ client object represents the popup time view on __[RadTimePicker]({%slug calendar/client-side-programming/radtimepicker-object%})__ and __[RadDateTimePicker]({%slug calendar/client-side-programming/raddatetimepicker-object%})__. To obtain a reference to this object, use the __get_timeView__ method of the control to which it belongs.

The following tables lists the most important properties methods of the __RadTimeView__ client-side object:

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __getTime__ |none|Date|Returns the selected date and time, or null if no value is selected.|
| __setTime__ |hours, minutes, seconds, Date object|none|Assigns the value of the time view.|
| __get_interval__ |none|Date|Returns the time interval between successive values in the time view.|
| __get_endTime__ |none|Date|Returns the last time that can appear in the time view. The last time that actually appears is the latest time that is a whole number of intervals after the start time which is less than this time.|
| __get_startTime__ |none|Date|Returns the earliest time that is displayed by the time view.|
| __get_showHeader__ |none|boolean|Returns whether the time view displays its header.|
| __get_showFooter__ |none|boolean|Returns whether the time view displays its footer.|
| __get_columns__ |none|integer|Returns the number of columns used to lay out values in the time view.|
| __get_element__ |none|HTML element|Returns the DOM element for the entire __RadTimeView__ control.|
| __get_timeFormat__ |none|string|Returns the time format of the __RadTimeView__ control.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __clear__ |none|none|Clears the selection, leaving the value as unassigned.|

# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
