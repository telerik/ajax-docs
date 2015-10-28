---
title: OnDateSelecting
page_title: OnDateSelecting | RadCalendar for ASP.NET AJAX Documentation
description: OnDateSelecting
slug: calendar/client-side-programming/events/ondateselecting
tags: ondateselecting
published: True
position: 4
---

# OnDateSelecting



The **OnDateSelecting** client-side event handler is called immediately before the selected dates collection is updated to reflect the selection or deselection of a date.


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnDateSelecting event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_renderDay()** |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object that represents the day being selected or unselected.|
| **get_isSelecting()** |bool||Returns **true** if the day is about to be selected, **false** if it is about to be unselected.|
| **set_cancel(value)** ||bool|Lets you prevent the selection or deselection from occurring.|

The following example uses the **OnDateSelecting** event to confirm a change of selection and cancel the change if the user does not confirm:

````ASPNET
<telerik:RadCalendar ID="RadCalendar1" runat="server">
    <ClientEvents OnDateSelecting="confirmChange" />
</telerik:RadCalendar>
````
````JavaScript
function confirmChange(sender, eventArgs) {
	var date = eventArgs.get_renderDay().get_date();
	var dfi = sender.DateTimeFormatInfo;
	var formattedDate = dfi.FormatDate(date, dfi.ShortDatePattern);
	
	eventArgs.set_cancel(!confirm("Are you sure you want to " +	(eventArgs.get_isSelecting() ? "select " : "unselect ") + formattedDate + "?"));
}
````


# See Also

 * [OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%})

 * [SelectionChanged]({%slug calendar/server-side-programming/server-side-events/selectionchanged%})

 * [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})
