---
title: OnLoad
page_title: OnLoad | RadCalendar for ASP.NET AJAX Documentation
description: OnLoad
slug: calendar/client-side-programming/events/onload
tags: onload
published: True
position: 2
---

# OnLoad



## 

The **OnLoad** client-side event handler is called when the calendar is loaded on the client.

>note The **OnLoad** event is supported by: **RadCalendar** .
>


The event handler receives one argument:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.



The following example uses the **OnLoad** event to navigate to December when the page loads:

````ASPNET
<telerik:RadCalendar ID="RadCalendar1" runat="server">
    <ClientEvents OnLoad="navigateToDecember"  />
</telerik:RadCalendar>			
````
````JavaScript
function navigateToDecember(sender) {
	var todaysDate = new Date();
	var triplet;
	
	if (todaysDate.getMonth() != 11) {
		triplet = [todaysDate.getFullYear() - 1, 12, 25];
	}
	else {
		triplet = [todaysDate.getFullYear(), 12, 25];
	}
		
	sender.navigateToDate(triplet);
}
````




# See Also

 * [OnInit]({%slug calendar/client-side-programming/events/oninit%})
