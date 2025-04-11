---
title: Prevent Time Getting Reset to 12:00 AM Midnight in RadDateTimePicker
description: Prevent Time Getting Reset to 12:00 AM Midnight in RadDateTimePicker. Check it now!
type: how-to
page_title: Prevent Time Getting Reset to 12:00 AM Midnight in RadDateTimePicker
slug: common-prevent-time-getting-reset-to-12-00-am-midnight-in-raddatetimepicker
res_type: kb
---


## DESCRIPTION  
 
 When a date is selected in the picker control, the time will be automatically set to 12:00 AM midnight. It may happen that even when the user selects a time slot explicitly from the timeview pop-up, the time still to be set and remain at 12:00 AM.

## SOLUTION  


This issue indicates that probably the following property is defined and upon removing it, the problem should be resolved:

 
````ASP.NET
<telerik:RadDateTimePicker ...>
  <DateInput ... DateFormat="M/d/yy">
````

  
  
## SEE ALSO  
  
 You can also check the following article addressing a related subject:  
* [Set Default Time to RadDateTimePicker](slug://datetimepicker-set-default-time)

 