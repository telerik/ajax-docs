---
title: OnClientAppointmentDeleting
page_title: OnClientAppointmentDeleting | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentDeleting
slug: scheduler/client-side-programming/events/onclientappointmentdeleting
tags: onclientappointmentdeleting
published: True
position: 4
---

# OnClientAppointmentDeleting



The __OnClientAppointmentDeleting__ client-side event is called before an appointment is deleted.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ returns the appointment instance.

* __get_editingRecurringSeries()__ returns __True__ if the user is tryingto delete a series to which the appointment belongs, __False__ if the user is trying to delete a single occurrenceof an appointment.

* __set_cancel()__ lets you permit or block the deletion of the appointment.Calling __set_cancel(true)__ aborts the deletion, while __set_cancel(false)__ allows thescheduler to proceed with deleting the appointment.

## Example

This example stops the deletion if the user is about to delete an appointment's series:

````ASPNET
	
	<script type="text/javascript">   
	  function OnClientAppointmentDeleting(sender, eventArgs)
	  {
	    if(eventArgs.get_editingRecurringSeries())
	          eventArgs.set_cancel(true);
	  }
	</script>
	<telerik:RadScheduler
	 ID="RadScheduler1"
	 runat="server"  
	 OnClientAppointmentDeleting="OnClientAppointmentDeleting"
	 DataSourceID = "AppointmentsDS" />
	
````



# See Also

 * [AppointmentDelete]({%slug scheduler/server-side-programming/server-events/appointmentdelete%})
