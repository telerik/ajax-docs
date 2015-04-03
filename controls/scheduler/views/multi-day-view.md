---
title: Multi-Day View
page_title: Multi-Day View | UI for ASP.NET AJAX Documentation
description: Multi-Day View
slug: scheduler/views/multi-day-view
tags: multi-day,view
published: True
position: 5
---

# Multi-Day View



## Multi-Day View

The __Multi-Day View__ allows you to display a variable number days controlled by the property__NumberOfDays__.

## Multi-Day View Settings:

* __DayStartTime__- Sets the day start time of the current view.

* __DayEndTime__- Sets the day end time of the current view.

* __WorkDayStartTime__- Sets the day start time of the business hours.

* __WorkDayEndTime__- Sets the day end time of the business hours.

* __ShowAllDayRow__- Shows/hides the __all day__ row for all day appointments on the top of the calendar area.

* __EnableExactTimeRendering__ - When it is enabled the appointment does not occupy the entire time slot if its start/end time does not match the time slot start/end time. The default value is __false__ so the advanced edit form is the only way to determine what is exact appointment start/end time.

* __ShowAllDayInsertArea__- When enabled it keeps an extra space in the __all day__ row where user to double click and have the ability to add an appointment.

* __ShowHiddenAppointmentsIndicator__- Indicates whether there is an appointment in current non-visible area. Clicking on that indicator will navigate to that area in order to show the appointment.

* __ShowInsertArea__- When enabled it keeps an extra space in each row where user to double click and have the ability to add an appointment.

* __NumberOfDays__- Indicates number of days to be displayed. For example if you want to show a week you can set it that value to 7.

* __ShowHoursColumn__- Indicates whether to show the hour labels on the left.

## Grouping

Multi-Day View will provide full support for __Resource__ and __Date__ grouping, namely:

* No groping (Basic look)![scheduer-views-multidayview-nogrouping](images/scheduer-views-multidayview-nogrouping.png)

* Grouped by Resource (__Horizontal__)![scheduler-views-multidayview-horizontalgroupingbyresource](images/scheduler-views-multidayview-horizontalgroupingbyresource.png)

* Grouped by Resource (__Vertical__)![scheduler-views-multidayview-verticalgroupingbyresource](images/scheduler-views-multidayview-verticalgroupingbyresource.png)

* Grouped by Date, Resource (__Horizontal__)![scheduler-views-multidayview-horizontalgroupingbyresourceanddate](images/scheduler-views-multidayview-horizontalgroupingbyresourceanddate.png)

* Grouped by Date, Resource (__Vertical__)![scheduler-views-multidayview-horizontalgroupingbyresourceanddate](images/scheduler-views-multidayview-horizontalgroupingbyresourceanddate.png)
