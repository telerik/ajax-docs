---
title: OnLoad
page_title: OnLoad | UI for ASP.NET AJAX Documentation
description: OnLoad
slug: calendar/client-side-programming/events/onload
tags: onload
published: True
position: 2
---

# OnLoad



## 

The __OnLoad__client-side event handler is called when the calendar is loaded on the client.

>note The __OnLoad__ event is supported by: __RadCalendar__ .
>


The event handler receives one argument:

1. the [RadCalendar object]({%slug calendar/client-side-programming/radcalendar-object%}) that fired the event.



The following example uses the __OnLoad__event to navigate to december when the page loads:

````ASPNET
	 <script type="text/javascript">
	     function moveToDecember(sender) {
	         var todaysDate = new Date();
	         if (todaysDate.getMonth() != 11)
	             var triplet = [todaysDate.getFullYear() - 1, 12, 25];
	         else
	             var triplet = [todaysDate.getFullYear(), 12, 25];
	         sender.navigateToDate(triplet);
	     }
	</script>
	<telerik:RadCalendar ID="RadCalendar1" runat="server">
	    <ClientEvents OnLoad="moveToDecember"  />
	</telerik:RadCalendar>			
````





# See Also

 * [OnInit]({%slug calendar/client-side-programming/events/oninit%})
