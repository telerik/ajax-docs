---
title: How to show all appointments in Month View
description: How to show all appointments in Month View of RadScheduler. Check it now!
type: how-to
page_title: How to show all appointments in Month View
slug: scheduler-how-to-show-all-appointments-in-month-view
res_type: kb
---


## HOW TO 
   
 Show all appointments in Month View of RadScheduler
   
## DESCRIPTION  
   
Each row should expand to accommodate all appointments in the given week. Weeks that don't contain appointments should not take extra space.
   
## SOLUTION   
   
 Set the MonthView-VisibleAppointmentsPerDay property to the maximum number of appointments that you want to show. Then set MonthView-AdaptiveRowHeight to "true" to allow independent row height:  
   
````ASPX
<telerik:RadScheduler ... >
    <MonthView VisibleAppointmentsPerDay="30" AdaptiveRowHeight="true" />
</telerik:RadScheduler>
````

  