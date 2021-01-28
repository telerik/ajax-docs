---
title: Year View
page_title: Year View - RadGantt
description: Check our Web Forms article about Year View.
slug: gantt/views/year-view
tags: year,view
published: True
position: 4
---

# Year View


The **Year View** shows all loaded tasks for a **RadGantt** distributed in columns that have duration of one month. Those columns are further grouped into years.

![RadGantt in Year View](images/gantt-views-yearview.png)

## YearViewSettings Object

**Table 1** demonstrates the properties that are available within the **YearViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **MonthHeaderDateFormat** |string|Gets or sets the month header date format string in **YearView**.|
| **RangeEnd** |DateTime?|Gets or sets the end date and time of the visible range on the **YearView**. The **RangeEnd** date will not be included within the visible range.|
| **RangeStart** |DateTime?|Gets or sets the start date and time of the visible range on the **YearView**.|
| **SelectedDate** |DateTime?|Gets or sets the date and time to which the timeline of the **YearView** is scrolled.|
| **SlotWidth** |Unit|Gets or sets the slot width in pixels for the **YearView**.|
| **Type** |Telerik.Web.UI.GanttViewType enumeration|Gets the type of the **View**. In this case a **YearView**.|
| **UserSelectable** |bool|Gets or sets a value indicating whether to render a tab for the **YearView** in the view chooser.|
| **YearHeaderDateFormat** |string|Gets or sets the year header date format string in **YearView**.|


# See Also

 * [Views Overview]({%slug gantt/views/overview%})
 
 * [Day View]({%slug gantt/views/day-view%})

 * [Week View]({%slug gantt/views/week-view%})

 * [Month View]({%slug gantt/views/month-view%})
 
 * [View types demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/view-types/defaultcs.aspx)


