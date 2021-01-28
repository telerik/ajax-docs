---
title: OnClientTimeSlotClick
page_title: OnClientTimeSlotClick - RadScheduler
description: Check our Web Forms article about OnClientTimeSlotClick.
slug: scheduler/client-side-programming/events/onclienttimeslotclick
tags: onclienttimeslotclick
published: True
position: 13
---

# OnClientTimeSlotClick



The **OnClientTimeSlotClick** client-side event is called when the user clicks on a time slot in the scheduler.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has two methods:

* **get_time()** - returns the time of the slot that was clicked.

* **get_domEvent()**- returns a reference to the raw DOM event.

>note This event is not raised if the user clicks on the all-day row.
>


## Example

````ASPNET
	
<script type="text/javascript">   
function OnClientTimeSlotClick(sender, eventArgs)
{
	alert(eventArgs.get_time());
}
</script>
<telerik:RadScheduler
ID="RadScheduler1"
runat="server"  
OnClientTimeSlotClick="OnClientTimeSlotClick"
DataSourceID="AppointmentsDS" />
	
````



# See Also

 * [OnClientAppointmentClick]({%slug scheduler/client-side-programming/events/onclientappointmentclick%})
