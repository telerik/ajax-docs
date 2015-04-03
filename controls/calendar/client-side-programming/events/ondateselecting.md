---
title: OnDateSelecting
page_title: OnDateSelecting | UI for ASP.NET AJAX Documentation
description: OnDateSelecting
slug: calendar/client-side-programming/events/ondateselecting
tags: ondateselecting
published: True
position: 4
---

# OnDateSelecting



## 

The __OnDateSelecting__ client-side event handler is called immediately before the selected dates collection is updated to reflect the selection or deselection of a date.

>note The __OnDateSelecting__ event is supported by: __RadCalendar__ .
>


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnDateSelecting event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_renderDay()__ |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object that represents the day being selected or unselected.|
| __get_isSelecting()__ |bool||Returns __true__ if the day is about to be selected, __false__ if it is about to be unselected.|
| __set_cancel(value)__ ||bool|Lets you prevent the selection or deselection from occurring.|

The following example uses the __OnDateSelecting__ event to confirm a change of selection and cancel the change if the user does not confirm:

````ASPNET
	<script type="text/javascript">
	    function ConfirmChange(sender, eventArgs) {
	        var date = eventArgs.get_renderDay().get_date();
	        var dfi = sender.DateTimeFormatInfo;
	        var formattedDate = dfi.FormatDate(date, dfi.ShortDatePattern);
	        eventArgs.set_cancel(!confirm("Are you sure you want to " +
	        (eventArgs.get_isSelecting() ? "select " : "unselect ") +
	        formattedDate + "?"));
	    }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server">
	    <ClientEvents OnDateSelecting="ConfirmChange" />
	</telerik:RadCalendar>
````



# See Also

 * [OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%})

 * [SelectionChanged]({%slug calendar/server-side-programming/server-side-events/selectionchanged%})

 * [OnDateClick]({%slug calendar/client-side-programming/events/ondateclick%})
