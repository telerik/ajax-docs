---
title: Agenda View
page_title: Agenda View | UI for ASP.NET AJAX Documentation
description: Agenda View
slug: scheduler/views/agenda-view
tags: agenda,view
published: True
position: 6
---

# Agenda View



## Agenda View

As of Q3 2013 the new __Agenda View__ is introduced for the __RadScheduler__ control.

The __Agenda View__ is a table structured like a simple list, which lists appointments for a specific period of time that is defined by the property __NumberOfDays__.

>note Please note that each Appointment represents a separate row. Unlike the other available views in the __RadScheduler__ , it doesn’t have empty rows/cell representing timeslots since days with no appointments are not shown. Therefore user is not able to insert, move or resize appointments . However, editing is allowed and a delete operation could be achievedby using the delete handler shown on hover.
>


## Agenda View Settings:

* __ResourceMarkerType__ - This property will be an enumeration with three values – __None__ (default) , __Block__ and __Bar__. Combined with Resource style mappings, this will enable the appointments to show a colored square or bar at the beginning of the appointment to indicate it’s resource.

* __ResourceColumnWidth__ - Sets the resource column's width when the __RadScheduler__ is grouped by resource.

* __DateColumnWidth__ - Sets the date column's width.

* __TimeColumnWidth__ - Sets the width of the column showing the appointment start and end time.

* __ShowColumnHeaders__ - Shows/hides the header text of all __AgendaView__ columns.

* __NumberOfDays__ - Indicates number of days to be displayed. For example if you want to show a week you can set it that value to 7.

## Grouping

__Agenda View__ will provide full support for Resource and Date grouping, namely:

* Basic look (__Horizontal__ grouping)![scheduler-views-agendaview-horizontalgrouping](images/scheduler-views-agendaview-horizontalgrouping.png)

* Basic look (__Vertical__ grouping)![scheduler-views-agendaview-verticalgrouping](images/scheduler-views-agendaview-verticalgrouping.png)

* Grouped by Resource (__Horizontal__)![scheduler-views-agendaview-horizontalgroupingbyresource](images/scheduler-views-agendaview-horizontalgroupingbyresource.png)

* Grouped by Resource (__Vertical__)![scheduler-views-agendaview-verticalgroupingbyresource](images/scheduler-views-agendaview-verticalgroupingbyresource.png)

* Grouped by Date, Resource (__Horizontal__)![scheduler-views-agendaview-horizontalgroupingbydateandresource](images/scheduler-views-agendaview-horizontalgroupingbydateandresource.png)

* Grouped by Date, Resource (__Vertical__)![scheduler-views-agendaview-verticalgroupingbydateandresource](images/scheduler-views-agendaview-verticalgroupingbydateandresource.png)

# See Also>
     
