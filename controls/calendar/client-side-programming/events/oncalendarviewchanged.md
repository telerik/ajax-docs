---
title: OnCalendarViewChanged
page_title: OnCalendarViewChanged - RadCalendar
description: Check our Web Forms article about OnCalendarViewChanged.
slug: calendar/client-side-programming/events/oncalendarviewchanged
tags: oncalendarviewchanged
published: True
position: 8
---

# OnCalendarViewChanged



The **OnCalendarViewChanged** client-side event handler of the [ASP NET AJAX Calendar](https://www.telerik.com/products/aspnet-ajax/calendar.aspx) is called when the calendar navigates to a new view, after the calendar has been updated for the new view. The event is raised after the action is complete.


The event handler receives two arguments:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnCalendarViewChanged event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_step()** |int||Returns the number of views by which the calendar has changed.|

The following example uses the **OnCalendarViewChanged** event to display an alert:

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" ID="RadCalendar1" runat="server">
 <ClientEvents OnCalendarViewChanged="viewChanged" />
</telerik:RadCalendar>		
````
````JavaScript
function viewChanged(sender, eventArgs) {
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
````



# See Also

 * [OnCalendarViewChanging]({%slug calendar/client-side-programming/events/oncalendarviewchanging%})

 * [DefaultViewChanged]({%slug calendar/server-side-programming/events/defaultviewchanged%})
