---
title: Overview
page_title: Views Overview | RadGantt for ASP.NET AJAX Documentation
description: Overview
slug: gantt/views/overview
tags: overview
published: True
position: 0
---

# Views Overview



**RadGantt** displays tasks in four basic views: **Day view, Week view, Month view and Year view**. The **SelectedView** property specifies which of these views the gantt control uses when it first appears (loads). By default, the user can move between **Day, Week and Month** views using the view tabs. You can remove specific view tab by setting the **UserSelectable** property of the view to **false**. Setting the same property to **true** for **YearView** will display a view tab for **Year** along with the default three.


## Common Settings for All Views

In this section you could find all common properties that are shared among all views.

**Table 1** lists the properties that can be set both globally for all views (on the **RadGantt** object) and per view.

| Name | Type | Description |
| ------ | ------ | ------ |
| **RangeEnd** |DateTime?|Gets or sets the end date and time of the visible range on the view. The **RangeEnd** date will not be included within the visible range.|
| **RangeStart** |DateTime?|Gets or sets the start date and time of the visible range on the view.|
| **SelectedDate** |DateTime?|Gets or sets the date and time to which the timeline of the view is scrolled.|


**Table 2** lists the properties that are available in all four View Settings Objects.

| Name | Type | Description |
| ------ | ------ | ------ |
| **SlotWidth** |Unit|Gets or sets the slot width in pixels for the respective view.|
| **Type** |Telerik.Web.UI.GanttViewType enumeration|Gets the type of the **View**, which the settings are applied to - Day, Week, Month or Year.|
| **UserSelectable** |bool|Gets or sets a value indicating whether to render a tab for the current view in the view chooser.|


## All available RadGantt views

* [Day]({%slug gantt/views/day-view%})

* [Week]({%slug gantt/views/week-view%})

* [Month]({%slug gantt/views/month-view%})

* [Year]({%slug gantt/views/year-view%})


# See Also
 
 * [View types demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/view-types/defaultcs.aspx)

 