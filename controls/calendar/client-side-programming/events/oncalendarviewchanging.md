---
title: OnCalendarViewChanging
page_title: OnCalendarViewChanging | UI for ASP.NET AJAX Documentation
description: OnCalendarViewChanging
slug: calendar/client-side-programming/events/oncalendarviewchanging
tags: oncalendarviewchanging
published: True
position: 7
---

# OnCalendarViewChanging



## 

The __OnCalendarViewChanging__ client-side event handler is called when the calendar navigates to a new view, before the viewable area rendered by the calendar is changed.

>note The __OnCalendarViewChanging__ event is supported by: __RadCalendar__ .
>


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnCalendarViewChanging event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_step()__ |int||Returns the number of views by which the calendar is about to change.|
| __set_cancel(value)__ ||bool|Lets you prevent the view from changing.|

This event can be used to pre-process some conditions or visual styles and content before the final rendering of the calendar. The following example uses the __OnCalendarViewChanging__ event to prevent the view from changing unless a date in the current month is selected:

````JavaScript
	 <script type="text/javascript">
	     function CheckSelections(sender, eventArgs) {
	         var selDates = sender.get_selectedDates();
	         var focus = sender.get_focusedDate();
	         var viewHasSelection = false;
	         for (var i = 0; i < selDates.length; i++) {
	             if ((selDates[i][0] == focus[0]) &&
	         (selDates[i][1] == focus[1]))
	                 viewHasSelection = true;
	         }
	         eventArgs.set_cancel(!viewHasSelection);
	         if (eventArgs.get_cancel()) {
	             alert("You must select a value before moving " +
	        (eventArgs.get_step() > 0 ? "forward " : "back ") +
	        "to another month.");
	         }
	     }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server" ShowOtherMonthsDays="False" >
	 <ClientEvents OnCalendarViewChanging="CheckSelections" />
	</telerik:RadCalendar>		
````



# See Also

 * [OnCalendarViewChanged]({%slug calendar/client-side-programming/events/oncalendarviewchanged%})

 * [DefaultViewChanged]({%slug calendar/server-side-programming/server-side-events/defaultviewchanged%})
