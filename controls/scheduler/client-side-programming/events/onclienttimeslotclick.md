---
title: OnClientTimeSlotClick
page_title: OnClientTimeSlotClick | UI for ASP.NET AJAX Documentation
description: OnClientTimeSlotClick
slug: scheduler/client-side-programming/events/onclienttimeslotclick
tags: onclienttimeslotclick
published: True
position: 13
---

# OnClientTimeSlotClick



The __OnClientTimeSlotClick__ client-side event is called when the user clicks on a time slot in the scheduler.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has two methods:

* __get_time()__ - returns the time of the slot that was clicked.

* __get_domEvent()__-____returns a reference to the raw DOM event.

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
