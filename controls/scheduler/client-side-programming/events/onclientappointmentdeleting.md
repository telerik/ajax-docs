---
title: OnClientAppointmentDeleting
page_title: OnClientAppointmentDeleting | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentDeleting
slug: scheduler/client-side-programming/events/onclientappointmentdeleting
tags: onclientappointmentdeleting
published: True
position: 4
---

# OnClientAppointmentDeleting



The **OnClientAppointmentDeleting** client-side event is called before an appointment is deleted.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** returns the appointment instance.

* **get_editingRecurringSeries()** returns **True** if the user is tryingto delete a series to which the appointment belongs, **False** if the user is trying to delete a single occurrenceof an appointment.

* **set_cancel()** lets you permit or block the deletion of the appointment.Calling **set_cancel(true)** aborts the deletion, while **set_cancel(false)** allows thescheduler to proceed with deleting the appointment.

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
