---
title: Week View
page_title: Week View | RadGantt for ASP.NET AJAX Documentation
description: Week View
slug: gantt/views/week-view
tags: week,view
published: True
position: 2
---

# Week View



The **Week View** shows all loaded tasks for a **RadGantt** distributed in columns that have duration of one day. Those columns are further grouped into weeks. 

![RadGantt in Week View](images/gantt-views-weekview.png)

## WeekViewSettings Object

**Table 1** demonstrates the properties that are available within the **WeekViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **DayHeaderDateFormat** |string|Gets or sets the day header date format string in **WeekView**.|
| **RangeEnd** |DateTime?|Gets or sets the end time of the visible range of the **WeekView**. The **RangeEnd** date will not be included within the visible range.|
| **RangeStart** |DateTime?|Gets or sets the start time of the visible range of the **WeekView**.|
| **SelectedDate** |DateTime?|Gets or sets the date to which the timeline of the **WeekView** is scrolled.|
| **SlotWidth** |Unit|Gets or sets the slot width in pixels for the **WeekView**.|
| **Type** |Telerik.Web.UI.GanttViewType enumeration|Gets the type of the **View**. In this case a **WeekView**.|
| **UserSelectable** |bool|Gets or sets a value indicating whether to render a tab for the **WeekView** in the view chooser.|
| **WeekHeaderDateFormat** |string|Gets or sets the week header date format string in **WeekView**.|

<Comment: Why does the DateTime type have a question mark?>

# See Also

 * [Views Overview]({%slug gantt/views/overview%})
 
 * [Day View]({%slug gantt/views/day-view%})

 * [Month View]({%slug gantt/views/month-view%})

 * [Year View]({%slug gantt/views/year-view%})
 
 * [View types demo](http://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/view-types/defaultcs.aspx)


