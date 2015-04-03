---
title: RenderDay object
page_title: RenderDay object | UI for ASP.NET AJAX Documentation
description: RenderDay object
slug: calendar/client-side-programming/renderday-object
tags: renderday,object
published: True
position: 7
---

# RenderDay object



## 

The __RenderDay__ client object represents a day in the calendar. It is available through the eventArgs of the [OnDayRender]({%slug calendar/client-side-programming/events/ondayrender%}), [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%}), [OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%}), and [OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%}) client-side events.

The following tables lists the most important properties and methods of the __RenderDay__ object:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_date__ |none|Array (triplet)|returns the triplet for the day represented by the render day object.|
| __set_date__ |Array (triplet)|none|sets the date of the render day object to the date encoded by the triplet.|
| __get_isWeekend__ |none|boolean|returns __true__ if the day falls on a weekend.|
| __get_isToday__ |none|boolean|returns __true__ if the day has today's date.|
| __get_isSelected__ |none|boolean|returns __true__ if the day is selected.|
| __get_isSelectable__ |none|boolean|returns __true__ if the day can be selected.|
| __DayRow__ |none|integer|The zero-based index of the row of the calendar view in which the day appears.|
| __DayColumn__ |none|integer|The zero-based index of the column of the calendar view in which the day appears.|
| __RadCalendar__ |none|RadCalendar|The calendar that contains the day.|
| __RadCalendarView__ |none|RadCalendarView|The month view in which the day appears.|
| __DomElement__ |none|DOM element|The DOM element for the day cell.|
| __IsRecurring__ |none|integer|Indicates the recurrence patterns that include the day. The value is one of the following:

* 1: DayInMonth

* 2: DayAndMonth

* 4: Week

* 8: WeekAndMonth

* 16: Today

* 32: None|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __Click__ |none|none|simulates a mouse click on the day.|
| __Select__ |boolean|none|selects or un-selects the day.|
