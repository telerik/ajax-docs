---
title: Month View
page_title: Month View | UI for ASP.NET AJAX Documentation
description: Month View
slug: scheduler/views/month-view
tags: month,view
published: True
position: 3
---

# Month View



## Month View

The __Month View__ is a standard cell list, which shows all appointments for a specific month. Each cell represents a separate day.

## Month View Settings

* __AdaptiveRowHeight__- Increase the cell height when containing appointments and reduces its height if there are no appointments for that specific day.

* __DayHeaderDateFormat__- Sets the date format for each cell header.

* __FirstDayHeaderDateFormat__- Sets the date format only for first day of the current month.

* __MinimumRowHeight__- Sets the minimum cell height.

* __VisibleAppointmentsPerDay__- Indicates how many appointments could be listed for a day. When there are more appointments for a specific day a "more" link will be placed at the bottom of the day cell and will navigate to the day view if clicked.

## Grouping

__Month View__ will provide full support for Resource and Date grouping, namely:

* No groping (Basic look)![scheduler-views-dayview-nogrouping](images/scheduler-views-dayview-nogrouping.png)

* Grouped by Resource (__Horizontal__)![scheduler-views-monthview-horizontalgroupingbyresource](images/scheduler-views-monthview-horizontalgroupingbyresource.png)

* Grouped by Resource (__Vertical__)![scheduler-views-monthview-verticalgroupingbyresource](images/scheduler-views-monthview-verticalgroupingbyresource.png)

* Grouped by Date, Resource (__Horizontal__)![scheduler-views-monthview-horizontalgroupingbyresourceanddate](images/scheduler-views-monthview-horizontalgroupingbyresourceanddate.png)

* Grouped by Date, Resource (__Vertical__)![scheduler-views-monthview-horizontalgroupingbyresourceanddate](images/scheduler-views-monthview-horizontalgroupingbyresourceanddate.png)
