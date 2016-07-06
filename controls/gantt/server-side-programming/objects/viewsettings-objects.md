---
title: ViewSettings Objects
page_title: ViewSettings Objects | RadGantt for ASP.NET AJAX Documentation
description: ViewSettings Objects
slug: gantt/server-side-programming/objects/viewsettings-objects
tags: viewsettings-objects
published: True
position: 1
---

# ViewSettings Objects

**RadGantt** provides the ability to customize each of its four different views independently. The control has a separate **Settings** object for each of its **View Types**, which allow customization of the control behavior and appearance. The four objects are part of the **Telerik.Web.UI.Gantt** namespace:

 * **DayViewSettings**;
 
 * **WeekViewSettings**;
   
 * **MonthViewSettings**;
 
 * **YearViewSettings**;

## Properties Available for all View Settings Objects

**Table 1** lists the properties that are available in all four View Settings Objects.

| Name | Type | Description |
| ------ | ------ | ------ |
| **SlotWidth** |Unit|Gets or sets the slot width in pixels for the respective view.|
| **Type** |Telerik.Web.UI.GanttViewType enumeration|Gets the type of the **View**, which the settings are applied to - Day, Week, Month or Year.|
| **UserSelectable** |bool|Gets or sets a value indicating whether to render a tab for the current view in the view chooser.|


## DayViewSettings Object

**Table 2** demonstrates the properties of the **DayViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **DayHeaderDateFormat** |string|Gets or sets the day header date format string in **DayView**.|
| **HourSpan** |int|Gets or sets the hour span for each cell in **DayView**.|
| **TimeHeaderDateFormat** |string|Gets or sets the time header date format string in **DayView**.|


## WeekViewSettings Object

**Table 3** demonstrates the properties of the **WeekViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **DayHeaderDateFormat** |string|Gets or sets the day header date format string in **WeekView**.|
| **WeekHeaderDateFormat** |string|Gets or sets the week header date format string in **WeekView**.|


## MonthViewSettings Object

**Table 4** demonstrates the properties of the **MonthViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **MonthHeaderDateFormat** |string|Gets or sets the month header date format string in **MonthView**.|
| **WeekHeaderDateFormat** |string|Gets or sets the week header date format string in **MonthView**.|


## YearViewSettings Object

**Table 5** demonstrates the properties of the **YearViewSettings** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **MonthHeaderDateFormat** |string|Gets or sets the month header date format string in **YearView**.|
| **YearHeaderDateFormat** |string|Gets or sets the year header date format string in **YearView**.|


# See Also

 * [Server-side Programming Overview]({%slug gantt/server-side-programming/overview%})
 
 * [RadGantt Object]({%slug gantt/server-side-programming/objects/radgantt-object%})
 
 * [View types demo](http://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/view-types/defaultcs.aspx)
 
