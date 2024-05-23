---
title: OnDayRender
page_title: OnDayRender - RadCalendar
description: Check our Web Forms article about OnDayRender.
slug: calendar/client-side-programming/events/ondayrender
tags: ondayrender
published: True
position: 3
---

# OnDayRender



The **OnDayRender** client-side event handler of the [ASP NET AJAX Calendar](https://www.telerik.com/products/aspnet-ajax/calendar.aspx) is called for every calendar day cell when the calendar is rendered as a result of client-side navigation. This event mimics the server-side **DayRender** event, giving final control over the output of a specific calendar day cell. This event can be used to apply changes to the calendar cells when the user navigates that are identical to the server-side event handler applied to the cells in the initial view.


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnDayRender event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_renderDay()** |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object that represents the day being rendered. This value is null if the cell represents a valueoutside the range specified by **RangeMinDate** and **RangeMaxDate** .|
| **get_date()** |Array object||Returns the triplet for the date the cell represents.|
| **get_cell()** |Cell element||Returns object for the cell being rendered.|

The following example uses the **OnDayRender** event to change the text for the non-current month and for dates that fall outside the selectable range. It also changes the background color on weekend days:

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" ID="RadCalendar1" runat="server">
    <ClientEvents OnDayRender="dayRender" />
</telerik:RadCalendar>  			
````
````JavaScript
function dayRender(sender, eventArgs) {
	var cell = eventArgs.get_cell();
	var day = eventArgs.get_renderDay();
	var view;
	
	if (day) {
		view = day.RadCalendarView;
		
		if (eventArgs.get_date()[1] != view._MonthStartDate[1]) {
			cell.innerText = "(" + cell.innerText + ")";
		}

		if (day.get_isWeekend()) {
			cell.style.backgroundColor = "#efefef";
		}
	}
	else {
		cell.innerText = "";
	}
}
````


# See Also

 * [DayRender]({%slug calendar/server-side-programming/events/dayrender%})
