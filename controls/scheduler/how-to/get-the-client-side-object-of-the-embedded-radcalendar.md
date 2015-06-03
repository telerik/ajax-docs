---
title: Get the Client-side Object of the Embedded RadCalendar
page_title: Get the Client-side Object of the Embedded RadCalendar | RadScheduler for ASP.NET AJAX Documentation
description: Get the Client-side Object of the Embedded RadCalendar
slug: scheduler/how-to/get-the-client-side-object-of-the-embedded-radcalendar
tags: get,the,client-side,object,of,the,embedded,radcalendar
published: True
position: 4
---

# Get the Client-side Object of the Embedded RadCalendar



## 

Since the popup calendar in RadScheduler is RadCalendar, its client-side object is registered on the page and can be obtained as usual by using:

````JavaScript
	     
<script type="text/javascript">
function pageLoad()
{       
   var schedulerPopupCalendar = $find('<%= RadScheduler1.ClientID + "_SelectedDateCalendar" %>');
   alert(schedulerPopupCalendar.get_id());
}        
</script> 
				
````



The RadCalendar client object can be further operated with by using its [client-side API]({%slug calendar/client-side-programming/radcalendar-object%}).
