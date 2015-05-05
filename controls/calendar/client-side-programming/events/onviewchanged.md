---
title: OnViewChanged
page_title: OnViewChanged | RadCalendar for ASP.NET AJAX Documentation
description: OnViewChanged
slug: calendar/client-side-programming/events/onviewchanged
tags: onviewchanged
published: True
position: 16
---

# OnViewChanged



## 

The **OnViewChanged** client-side event handler is called when the **MonthYearView** navigates to a new view, before the viewable area rendered by the **MonthYearView** is changed.

>note The **OnViewChanged** event is supported by: **RadMonthYearPicker** .
>


The event handler receives two arguments:

1. the [RadMonthYearPicker]({%slug calendar/client-side-programming/radmonthyearpicker-object%}) object that fired the event.

1. an event arguments object that exposes the following methods:OnViewChanged event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_pickerControl()** |[RadMonthYearPicker object]({%slug calendar/client-side-programming/radmonthyearpicker-object%})||Returns the RadMonthYearPicker object.|

# See Also

 * [OnYearSelected]({%slug calendar/client-side-programming/events/onyearselected%})

 * [OnMonthSelected]({%slug calendar/client-side-programming/events/onmonthselected%})
