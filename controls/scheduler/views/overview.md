---
title: Overview
page_title: Views Overview | RadScheduler for ASP.NET AJAX Documentation
description: Overview
slug: scheduler/views/overview
tags: overview
published: True
position: 0
---

# Views Overview



**RadScheduler** displays appointments in seven basic views: **Day view, Week view, Month view, Timeline view, Multi-Day, Agenda view, and Year view**. The **SelectedView** property specifies which of these views the scheduler uses when it first appears (loads). By default, the user can move between**Day, Week, Month, Timeline, and Multi-Day** views using the view tabs. You can remove these controls and prevent the user from changing the view, by setting the **ShowViewTabs** property to **false**. You can remove specific view tab by setting the **UserSelectable** property to **false**.

>caution If you try to restrict the **RadScheduler** to **Month view** , be aware that it allows the user to toggle into **Day View** using the **more...** link whenever the number of appointments in a day exceeds the limit that is set by the **MonthVisibleAppointmentsPerDay** property. To prevent this, however you can use the [NavigationCommand]({%slug scheduler/server-side-programming/server-events/navigationcommand%}) event and set your desired logic.
>


## Common Settings for All Views

In this section you may find all common properties that are shared among all views. That way you can set them (or modify)globally and thus apply them for all views instead of only to a single view.

* **HeaderDateFormat** - Sets the date format shown in the **RadScheduler** header section on the left side.

* **ReadOnly** - Restricts users from inserting, editing (moving or resizing) and deleting appointments.

* **UserSelectable** - Restricts user from accessing the current view.

* **ShowResourceHeaders** - Shows/hides the appointments resource headers.

## Resource Grouping

If custom [Resources]({%slug scheduler/design-time/custom-resources-and-attributes%}) are defined, the data shown in the RadScheduler can be grouped by Resources. Resource Grouping is available in **all views**. To enable it, you must set the **GroupBy** property to the name of the Resource by which you want data to be grouped. Grouping is available only by one Resource with an exception for the special 'Date' Resource. If you set the **GroupBy** property to **"Date,[ResourceName]"**, data will be grouped by the specified Resource as well as by Date.

In addition, you can set the **GroupingDirection** property to **Horizontal** or **Vertical** to specify the direction of the grouping (as the property name implies). This functionality is also available in **all views**.

## All available RadScheduler views

1. [Day]({%slug scheduler/views/day-view%})

1. [Week]({%slug scheduler/views/week-view%})

1. [Month]({%slug scheduler/views/month-view%})

1. [Timeline]({%slug scheduler/views/timeline-view%})

1. [Multi-day]({%slug scheduler/views/multi-day-view%})

1. [Agenda]({%slug scheduler/views/agenda-view%})

1. [Year]({%slug scheduler/views/year-view%})
