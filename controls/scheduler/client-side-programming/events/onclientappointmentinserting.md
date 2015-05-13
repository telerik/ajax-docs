---
title: OnClientAppointmentInserting
page_title: OnClientAppointmentInserting | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentInserting
slug: scheduler/client-side-programming/events/onclientappointmentinserting
tags: onclientappointmentinserting
published: True
position: 6
---

# OnClientAppointmentInserting



The **OnClientAppointmentInserting** client-side event is called before an appointment is inserted.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_startTime()** returns the starting date and time for the appointment.

* **get_targetSlot()** returns the Time Slot at which the appointment is being inserted.

* **get_isAllDay()** returns **True** if the inserted appointment defaults to anall-day event (as in Month View), or **False** if the new appointment starts at the time returned by get_startTime().

* **set_cancel()** lets you permit or block the insertion of the appointment.Calling **set_cancel(true)** stops the insertion, while **set_cancel(false)** allowsthe scheduler to bring up an edit form or in-line editor for the appointment.

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
