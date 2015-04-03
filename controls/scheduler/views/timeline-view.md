---
title: Timeline View
page_title: Timeline View | UI for ASP.NET AJAX Documentation
description: Timeline View
slug: scheduler/views/timeline-view
tags: timeline,view
published: True
position: 4
---

# Timeline View



## Timeline View

The __Timeline View__ allows you to display a variable number of slots and define the duration of those slots. You can also group time slots under the same column header using the __Time label span__ property.

## Timeline View Settings:

* __Slot duration__- Sets each time slot (vertical column) duration.

* __Time label span__- Indicates how many subsequent time slots are sharing same header.

* __Number Of Slots__- Sets how many time slots are rendered in the calendar area.

* __EnableExactTimeRendering__- When it is enabled the appointment does not occupy the entire time slot if its start/end time does not match the time slot start/end time. The default value is __false__ so the advanced edit form is the only way to determine what is exact appointment start/end time.

* __ShowInsertArea__- When enabled it keeps an extra space in each row where user to double click and have the ability to add an appointment.

* __SortingMode__- Specifies the sorting mode to use when rendering the appointments. The value __PerSlot__ sorts appointments individually for each slot, but __Global__ will sort the appointments as a single list. The default value is __PerSlot__.

## Grouping

__Timeline View__ will provide full support for Resource and Date grouping, namely:

* No groping (Basic look)![scheduer-views-timelineview-nogrouping](images/scheduer-views-timelineview-nogrouping.png)

* Grouped by Resource (__Horizontal__)![scheduler-views-timelineview-horizontalgroupingbyresource](images/scheduler-views-timelineview-horizontalgroupingbyresource.png)

* Grouped by Resource (__Vertical__)![scheduler-views-timelineview-verticalgroupingbyresource](images/scheduler-views-timelineview-verticalgroupingbyresource.png)

* Grouped by Date, Resource (__Horizontal__)![scheduler-views-timelineview-horizontalgroupingbyresourceanddate](images/scheduler-views-timelineview-horizontalgroupingbyresourceanddate.png)

* Grouped by Date, Resource (__Vertical__)![scheduler-views-timelineview-horizontalgroupingbyresourceanddate](images/scheduler-views-timelineview-horizontalgroupingbyresourceanddate.png)
