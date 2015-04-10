---
title: OnClientAppointmentInserting
page_title: OnClientAppointmentInserting | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentInserting
slug: scheduler/client-side-programming/events/onclientappointmentinserting
tags: onclientappointmentinserting
published: True
position: 6
---

# OnClientAppointmentInserting



The __OnClientAppointmentInserting__ client-side event is called before an appointment is inserted.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_startTime()__ returns the starting date and time for the appointment.

* __get_targetSlot()__ returns the Time Slot at which the appointment is being inserted.

* __get_isAllDay()__ returns __True__ if the inserted appointment defaults to anall-day event (as in Month View), or __False__ if the new appointment starts at the time returned by get_startTime().

* __set_cancel()__ lets you permit or block the insertion of the appointment.Calling __set_cancel(true)__ stops the insertion, while __set_cancel(false)__ allowsthe scheduler to bring up an edit form or in-line editor for the appointment.

## Example

This example prevents the user from inserting appointments that have already happened:

````JavaScript
	
	<script type="text/javascript">   
	  function OnClientAppointmentInserting(sender, eventArgs)
	  {
	     var now = new Date();
	     if (eventArgs.get_startTime() < now)
	         eventArgs.set_cancel(true);
	  }
	</script>
	<telerik:RadScheduler
	 ID="RadScheduler1"
	 runat="server"  
	 OnClientAppointmentInserting="OnClientAppointmentInserting"
	 DataSourceID="AppointmentsDS" /> 
		
````



# See Also

 * [AppointmentUpdate]({%slug scheduler/server-side-programming/server-events/appointmentupdate%})

 * [AppointmentCancelingEdit]({%slug scheduler/server-side-programming/server-events/appointmentcancelingedit%})

 * [Replace the Edit Form]({%slug scheduler/how-to/replace-the-edit-form%})
