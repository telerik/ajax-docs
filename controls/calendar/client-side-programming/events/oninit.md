---
title: OnInit
page_title: OnInit | RadCalendar for ASP.NET AJAX Documentation
description: OnInit
slug: calendar/client-side-programming/events/oninit
tags: oninit
published: True
position: 1
---

# OnInit



The **OnInit** client-side event handler is called when the calendar is first constructed.


The event handler receives one argument:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

The following example uses the **OnInit** event to initialize the selection to today's date:

````ASPNET
<telerik:RadCalendar RenderMode="Lightweight" ID="RadCalendar1" runat="server" >
    <ClientEvents OnInit="initializeCalendar" />
</telerik:RadCalendar>
````
````JavaScript
function initializeCalendar(sender) {
	var todaysDate = new Date();
	var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
	
	sender.selectDate(todayTriplet, true);
}
````


# See Also

 * [OnLoad]({%slug calendar/client-side-programming/events/onload%})
