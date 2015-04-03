---
title: Views Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: scheduler/views/overview
tags: overview
published: True
position: 0
---

# Views Overview



## Overview

__RadScheduler__ displays appointments in six basic views:__Day view, Week view, Month view, Timeline view, Multi-Day and Agenda view__. The __SelectedView__ property specifies which of these views the scheduler uses when it first appears (loads). By default, the user can move between__Day, Week, Month, Timeline, and Multi-Day__ views using the view tabs. You can remove these controls and prevent the user from changing the view, by setting the __ShowViewTabs__ property to __false__. You can remove specific view tab by setting the __UserSelectable__ property to __false__.

>caution If you try to restrict the __RadScheduler__ to __Month view__ , be aware that it allows the user to toggle into __Day View__ using the __more...__ link whenever the number of appointments in a day exceeds the limit that is set by the __MonthVisibleAppointmentsPerDay__ property. To prevent this, however you can use the[NavigationCommand]({%slug scheduler/server-side-programming/server-events/navigationcommand%})event and set your desired logic.
>


## Common Settings for All Views

In this section you may find all common properties that are shared among all views. That way you can set them (or modify)globally and thus apply them for all views instead of only to a single view.

* __HeaderDateFormat__ - Sets the date format shown in the __RadScheduler__ header section on the left side.

* __ReadOnly__ - Restricts users from inserting, editing (moving or resizing) and deleting appointments.

* __UserSelectable__ - Restricts user from accessing the current view.

* __ShowResourceHeaders__ - Shows/hides the appointments resource headers.

## Resource Grouping

If custom [Resources]({%slug scheduler/design-time/custom-resources-and-attributes%}) are defined, the data shown in the RadScheduler can be grouped by Resources. Resource Grouping is available in __all views__. To enable it, you must set the __GroupBy__ property to the name of the Resource by which you want data to be grouped. Grouping is available only by one Resource with an exception for the special 'Date' Resource. If you set the __GroupBy__ property to __"Date,[ResourceName]"__, data will be grouped by the specified Resource as well as by Date.

In addition, you can set the __GroupingDirection__property to __Horizontal__or __Vertical__ to specify the direction of the grouping (as the property name implies). This functionality is also available in __all views__.

## All available RadScheduler views

1. [Day]({%slug scheduler/views/day-view%})

1. [Week]({%slug scheduler/views/week-view%})

1. [Month]({%slug scheduler/views/month-view%})

1. [Timeline]({%slug scheduler/views/timeline-view%})

1. [Multi-day]({%slug scheduler/views/multi-day-view%})

1. [Agenda]({%slug scheduler/views/agenda-view%})
