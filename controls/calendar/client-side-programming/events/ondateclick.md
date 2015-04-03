---
title: OnDateClick
page_title: OnDateClick | UI for ASP.NET AJAX Documentation
description: OnDateClick
slug: calendar/client-side-programming/events/ondateclick
tags: ondateclick
published: True
position: 6
---

# OnDateClick



## 

The __OnDateClick__client-side event handler is called when the user clicks on a date in the day matrix or presses the ENTER key while a date has focus. If the day is selectable, this event occurs before the __OnDateSelecting__ event. If the day is not selectable (but in the valid range), this event occurs, but not the __OnDateSelecting__ event.

>note The __OnDateClick__ event is supported by: __RadCalendar__ .
>


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnDateClick event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_renderDay()__ |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object that represents the day that was just clicked.|
| __get_domEvent()__ |DOM event object||Returns the DOM event object for the mouse click event.|
| __set_cancel(value)__ ||bool|Lets you prevent the click from selecting the date that is clicked. However, even after calling __set_cancel(true)__ , focus still moves to the clicked date.|

The following example uses the __OnDateClick__event to confirm the selection of a date:

````ASPNET
	<script type="text/javascript">
	       function confirmClick(sender, eventArgs) {
	           var day = eventArgs.get_renderDay();
	           if (day.get_isSelectable()) {
	               var date = day.get_date();
	               var dfi = sender.DateTimeFormatInfo;
	               var formattedDate = dfi.FormatDate(day.get_date(), dfi.ShortDatePattern);
	               var confirmClick = confirm("Are you sure you want to " +
	               (day.get_isSelected() ? "unselect " : "select ") + formattedDate + "?");
	               eventArgs.set_cancel(!confirmClick);
	           }
	       }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server">
	    <ClientEvents OnDateClick="confirmClick" />
	</telerik:RadCalendar>		
````



# See Also

 * [OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%})

 * [OnColumnHeaderClick]({%slug calendar/client-side-programming/events/oncolumnheaderclick%})

 * [OnRowHeaderClick]({%slug calendar/client-side-programming/events/onrowheaderclick%})

 * [OnViewSelectorClick]({%slug calendar/client-side-programming/events/onviewselectorclick%})
