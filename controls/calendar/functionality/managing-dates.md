---
title: Managing Dates
page_title: Managing Dates | RadCalendar for ASP.NET AJAX Documentation
description: Managing Dates
slug: calendar/functionality/managing-dates
tags: managing,dates
published: True
position: 6
---

# Managing Dates



The **Dates Management** section of the **RadCalendar** properties pane includes several properties for specifying special dates that affect the layout and behavior of the calendar:

* The **FirstDayOfWeek** property specifies the day to use as the first day of each week. You can set **FristDayOfWeek** to the name of a specific week day, such as "Saturday", or you can set it to "Default", in which case it uses the value of the **CultureInfo** property to determine the first day of the week.

* The **FocusedDate** property specifies the date that has focus. By default, **RadCalendar** uses the current date as the focused date. When the calendar shows more than one month (either in [multi-view mode]({%slug calendar/radcalendar/multi-view-mode%}) or with an enlarged [day matrix]({%slug calendar/radcalendar/customizing-the-day-matrix%})), the focused date appears by default in the first month that the calendar shows. When the calendar is in multi-view mode, you can change which view contains the focused date by setting the **FocusedDateColumn** and **FocusedDateRow** properties.

* The **SelectedDate** property specifies the currently selected date when the calendar allows single-date selection. When the calendar [allows multiple days to be selected]({%slug calendar/radcalendar/date-selection%}), the **SelectedDates** property specifies the initially selected dates.

* The **RangeMinDate** property specifies the earliest valid date in the range available for selection. The **RangeMaxDate** property specifies the latest valid date in the range available for selection.

In addition, you can define your own special dates, and specify their properties, using the [RadCalendarDay Collection Editor]({%slug calendar/design-time/radcalendarday-collection-editor%}).
