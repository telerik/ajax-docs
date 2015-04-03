---
title: OnInit
page_title: OnInit | UI for ASP.NET AJAX Documentation
description: OnInit
slug: calendar/client-side-programming/events/oninit
tags: oninit
published: True
position: 1
---

# OnInit



## 

The __OnInit__client-side event handler is called when the calendar is first constructed.

>note The __OnInit__ event is supported by: __RadCalendar__ .
>


The event handler receives one argument:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.

The following example uses the __OnInit__event to initialize the selection to today's date:

````ASPNET
	<script type="text/javascript">
	       function InitializeCalendar(sender) {
	           var todaysDate = new Date();
	           var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
	           sender.selectDate(todayTriplet, true);
	       }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server" >
	    <ClientEvents OnInit="InitializeCalendar" />
	</telerik:RadCalendar>
````



# See Also

 * [OnLoad]({%slug calendar/client-side-programming/events/onload%})
