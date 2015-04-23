---
title: OnDateClick
page_title: OnDateClick | RadCalendar for ASP.NET AJAX Documentation
description: OnDateClick
slug: calendar/client-side-programming/events/ondateclick
tags: ondateclick
published: True
position: 6
---

# OnDateClick



## 

The **OnDateClick**client-side event handler is called when the user clicks on a date in the day matrix or presses the ENTER key while a date has focus. If the day is selectable, this event occurs before the **OnDateSelecting** event. If the day is not selectable (but in the valid range), this event occurs, but not the **OnDateSelecting** event.

>note The **OnDateClick** event is supported by: **RadCalendar** .
>


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnDateClick event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_renderDay()** |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object that represents the day that was just clicked.|
| **get_domEvent()** |DOM event object||Returns the DOM event object for the mouse click event.|
| **set_cancel(value)** ||bool|Lets you prevent the click from selecting the date that is clicked. However, even after calling **set_cancel(true)** , focus still moves to the clicked date.|

The following example uses the **OnDateClick**event to confirm the selection of a date:

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
