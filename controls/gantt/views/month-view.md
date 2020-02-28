---
title: Month View
page_title: Month View | RadGantt for ASP.NET AJAX Documentation
description: Month View
slug: gantt/views/month-view
tags: month,view
published: True
position: 3
---

# Month View



The **Month View** shows all loaded tasks for a **RadGantt**, distributed in columns, that have duration of one week. Months are displayed as super-headers of those columns. 

![RadGantt in Month View](images/gantt-views-monthview.png)

## MonthViewSettings Object

**Table 1** demonstrates the properties that are available within the **MonthViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **MonthHeaderDateFormat** |string|Gets or sets the month header date format string in **MonthView**.|
| **RangeEnd** |DateTime?|Gets or sets the end date and time of the visible range on the **MonthView**. The **RangeEnd** date will not be included within the visible range.|
| **RangeStart** |DateTime?|Gets or sets the start date and time of the visible range on the **MonthView**.|
| **SelectedDate** |DateTime?|Gets or sets the date and time to which the timeline of the **MonthView** is scrolled.|
| **SlotWidth** |Unit|Gets or sets the slot width in pixels for the **MonthView**.|
| **Type** |Telerik.Web.UI.GanttViewType enumeration|Gets the type of the **View**. In this case a **MonthView**.|
| **UserSelectable** |bool|Gets or sets a value indicating whether to render a tab for the **MonthView** in the view chooser.|
| **WeekHeaderDateFormat** |string|Gets or sets the week header date format string in **MonthView**.|


# See Also

 * [Views Overview]({%slug gantt/views/overview%})
 
 * [Day View]({%slug gantt/views/day-view%})

 * [Week View]({%slug gantt/views/week-view%})

 * [Year View]({%slug gantt/views/year-view%})
 
 * [View types demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/view-types/defaultcs.aspx)


