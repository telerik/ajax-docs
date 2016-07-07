---
title: Weeek View
page_title: Weeek View | RadGantt for ASP.NET AJAX Documentation
description: Weeek View
slug: gantt/views/week-view
tags: week,view
published: True
position: 2
---

# Weeek View



The **Weeek View** shows all loaded tasks for a RadGantt, distributed in columns that have duration of one day. Those columns are further grouped in weeks. 

![RadGantt in Week View](images/gantt-views-weekview.png)

## Weeek View Settings:

**Table 1** demonstrates the properties, that are available within the **WeeekViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **DayHeaderDateFormat** |string|Gets or sets the day header date format string in **WeekView**.|
| **SlotWidth** |Unit|Gets or sets the slot width in pixels for the respective view.|
| **Type** |Telerik.Web.UI.GanttViewType enumeration|Gets the type of the **View**, which the settings are applied to - Day, Week, Month or Year.|
| **UserSelectable** |bool|Gets or sets a value indicating whether to render a tab for the current view in the view chooser.|
| **WeekHeaderDateFormat** |string|Gets or sets the week header date format string in **WeekView**.|


# See Also

 * [Views Overview]({%slug gantt/views/overview%})
 
 * [Day View]({%slug gantt/views/day-view%})

 * [Month View]({%slug gantt/views/month-view%})

 * [Year View]({%slug gantt/views/year-view%})
 
 * [View types demo](http://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/view-types/defaultcs.aspx)


