---
title: OnCalendarViewChanged
page_title: OnCalendarViewChanged | UI for ASP.NET AJAX Documentation
description: OnCalendarViewChanged
slug: calendar/client-side-programming/events/oncalendarviewchanged
tags: oncalendarviewchanged
published: True
position: 8
---

# OnCalendarViewChanged



## 

The __OnCalendarViewChanged__ client-side event handler is called when the calendar navigates to a new view, after the calendar has been updated for the new view, but before it is rendered.

>note The __OnCalendarViewChanged__ event is supported by: __RadCalendar__ .
>


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnCalendarViewChanged event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_step()__ |int||Returns the number of views by which the calendar has changed.|

The following example uses the __OnCalendarViewChanged__ event to display an alert:

````JavaScript
	<script type="text/javascript">
	    function ViewChanged(sender, eventArgs) {
	        var step = eventArgs.get_step();
	        var msg = "The calendar moved ";
	        if (step < 0) {
	            msg = msg + "back ";
	            step = -step;
	        }
	        else
	            msg = msg + "forward "
	        msg = msg + step + " views.";
	        alert(msg);
	    }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server">
	 <ClientEvents OnCalendarViewChanged="ViewChanged" />
	</telerik:RadCalendar>		
````



# See Also

 * [OnCalendarViewChanging]({%slug calendar/client-side-programming/events/oncalendarviewchanging%})

 * [DefaultViewChanged]({%slug calendar/server-side-programming/server-side-events/defaultviewchanged%})
