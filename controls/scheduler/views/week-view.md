---
title: Week View
page_title: Week View | UI for ASP.NET AJAX Documentation
description: Week View
slug: scheduler/views/week-view
tags: week,view
published: True
position: 2
---

# Week View



## Week View

The __Week view__ is a standard table list, which shows appointments for specific week. Each day represents a vertical column with header showing its date formatted by the __ColumnHeaderDateFormat__ property. Similarly to the__Day view__ the __Week View__ has also two different approaches for showing time slots representing the available hours:

* Business hours (default) - shows only the working hours (by default those values are from 9 am to 5 pm). Those values can be modified by the __WorkDayStartTime__ and __WorkDayEndTime__ properties.

* 24-hour - shows entire day hours ( from midnight to 23 o'clock including). Those values can be modified by the __DayStartTime__ and __DayEndTime__ properties.

The __All day__ row is a special row positioned at the top (when enabled) to show the appointments last the entire day. That way you can have easy and fast access to your all day appointments and at same time they do not occupy the calendar area.

## Week View Settings:

* __DayStartTime__- Sets the day start time of the current view.

* __DayEndTime__- Sets the day end time of the current view.

* __WorkDayStartTime__- Sets the day start time of the business hours.

* __WorkDayEndTime__- Sets the day end time of the business hours.

* __ShowAllDayRow__- Shows/hides the __all day__ row for all day appointments on the top of the calendar area.

* __EnableExactTimeRendering__- When it is enabled the appointment does not occupy the entire time slot if its start/end time does not match the time slot start/end time. The default value is __false__ so the advanced edit form is the only way to determine what is exact appointment start/end time.

* __ShowAllDayInsertArea__- When enabled it keeps an extra space in __the all day__ row where user to double click and have the ability to add an appointment.

* __ShowHiddenAppointmentsIndicator__- Indicates whether there is an appointment in current non-visible area. Clicking on that indicator will navigate to that area in order to show the appointment.

* __ShowInsertArea__- When enabled it keeps an extra space in each row where user to double click and have the ability to add an appointment.

* __ShowFullTime__- When enabled it shows entire day hours ( from midnight to 23 o'clock including) instead of the business hours which is the default behavior.

* __FirstDayOfWeek__- The default first day of each week is Sunday andlast day is Saturday. When you set a new value only for __FirstDayOfWeek__ it keeps last day to be Saturday, so some weekdays might be missing if __LastDayOfWeek__ is not set explicitly.

* __LastDayOfWeek__- It works in absolute same way as __FirstDayOfWeek__.

## Grouping

__Week View__ will provide full support for Resource and Date grouping, namely:

* No groping (Basic look)![scheduler-views-weekview-nogrouping](images/scheduler-views-weekview-nogrouping.png)

* Grouped by Resource (__Horizontal__)![scheduler-views-weekview-horizontalgroupingbyresource](images/scheduler-views-weekview-horizontalgroupingbyresource.png)

* Grouped by Resource (__Vertical__)![scheduler-views-weekview-verticalgroupingbyresource](images/scheduler-views-weekview-verticalgroupingbyresource.png)

* Grouped by Date, Resource (__Horizontal__)![scheduler-views-weekview-horizontalgroupingbyresourceanddate](images/scheduler-views-weekview-horizontalgroupingbyresourceanddate.png)

* Grouped by Date, Resource (__Vertical__)![scheduler-views-weekview-horizontalgroupingbyresourceanddate](images/scheduler-views-weekview-horizontalgroupingbyresourceanddate.png)
