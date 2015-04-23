---
title: RenderDay object
page_title: RenderDay object | RadCalendar for ASP.NET AJAX Documentation
description: RenderDay object
slug: calendar/client-side-programming/renderday-object
tags: renderday,object
published: True
position: 7
---

# RenderDay object



## 

The **RenderDay** client object represents a day in the calendar. It is available through the eventArgs of the [OnDayRender]({%slug calendar/client-side-programming/events/ondayrender%}), [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%}), [OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%}), and [OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%}) client-side events.

The following tables lists the most important properties and methods of the **RenderDay** object:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_date** |none|Array (triplet)|returns the triplet for the day represented by the render day object.|
| **set_date** |Array (triplet)|none|sets the date of the render day object to the date encoded by the triplet.|
| **get_isWeekend** |none|boolean|returns **true** if the day falls on a weekend.|
| **get_isToday** |none|boolean|returns **true** if the day has today's date.|
| **get_isSelected** |none|boolean|returns **true** if the day is selected.|
| **get_isSelectable** |none|boolean|returns **true** if the day can be selected.|
| **DayRow** |none|integer|The zero-based index of the row of the calendar view in which the day appears.|
| **DayColumn** |none|integer|The zero-based index of the column of the calendar view in which the day appears.|
| **RadCalendar** |none|RadCalendar|The calendar that contains the day.|
| **RadCalendarView** |none|RadCalendarView|The month view in which the day appears.|
| **DomElement** |none|DOM element|The DOM element for the day cell.|
| **IsRecurring** |none|integer|Indicates the recurrence patterns that include the day. The value is one of the following:

* 1: DayInMonth

* 2: DayAndMonth

* 4: Week

* 8: WeekAndMonth

* 16: Today

* 32: None|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **Click** |none|none|simulates a mouse click on the day.|
| **Select** |boolean|none|selects or un-selects the day.|
