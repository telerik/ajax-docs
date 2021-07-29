---
title: How to scroll into view a specific time slot on initial page load in RadScheduler
description: How to scroll into view a specific time slot on initial page load in RadScheduler. Check it now!
type: how-to
page_title: How to scroll into view a specific time slot on initial page load in RadScheduler
slug: scheduler-how-to-scroll-into-view-a-specific-time-slot-on-initial-page-load
res_type: kb
---

## How to
   

Scroll into view a specific time slot on initial page load.  
   
## Description


This KB article shows how to scroll to the 8AM time slot on initial page load. The **CssClass** property of the 8AM time slot is set to "TimeSlotCssFor8AM" in the **TimeSlotCreated** event handler. Then, using javascript the table cell (td) element of the specific time slot is found by its **ClassName** and the **scrollIntolView**() method is called.  
   
 ![Scroll into view the 8am time slot](images/scheduler-how-to-scroll-into-view-a-specific-time-slot-on-initial-page-load.png)  
   
## Solution
   
````C#
protected void RadScheduler1_TimeSlotCreated(object sender, Telerik.Web.UI.TimeSlotCreatedEventArgs e)  
{  
    if (e.TimeSlot.Start.Hour == 8)  
        e.TimeSlot.CssClass = "TimeSlotCssFor8AM";  
} 
````

````ASPX
<script type="text/javascript">       
function pageLoad()       
{       
    var scheduler = $find('<%= RadScheduler1.ClientID %>');       
    var scrolledIntoViewSlot = $telerik.getElementByClassName(scheduler.get_element(), "TimeSlotCssFor8AM", "td");       
    if(scrolledIntoViewSlot)     
      setTimeout(function(){ scrolledIntoViewSlot.scrollIntoView();}, 200);      
}     
````

 