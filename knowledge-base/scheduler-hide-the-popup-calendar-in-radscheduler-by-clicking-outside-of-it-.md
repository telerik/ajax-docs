---
title: Hide the popup calendar in RadScheduler by clicking outside of it
description: Hide the popup calendar in RadScheduler by clicking outside of it. Check it now!
type: how-to
page_title: Hide the popup calendar in RadScheduler by clicking outside of it
slug: scheduler-hide-the-popup-calendar-in-radscheduler-by-clicking-outside-of-it-
res_type: kb
---

## How to

Hide the popup calendar in RadScheduler by clicking outside of it.   
   
## Description

Jquery and general javascript is used to achieve this.  

![hide popup calendar](images/scheduler-hide-the-popup-calendar-in-radscheduler-by-clicking-outside-of-it-.png)  
   
## Solution
   
````JavaScript
window.$ = $telerik.$  
var scheduler = null;         
function pageLoad()   
{  
   scheduler = $find('<%= RadScheduler1.ClientID %>');  
}  
$(document).click(function(event) {  
   var target = event.target || event.srcElement;  
      
   if (!$(target).parents().is(".RadCalendar") & !$(target).is(".rsDatePickerActivator"))   
   {  
         if (scheduler._datePickerCalendarExpanded)  
            scheduler._onDatePickerToggle();  
   }  
});  
````   

 