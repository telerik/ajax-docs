---
title: OnClientAppointmentMoveEnd
page_title: OnClientAppointmentMoveEnd | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentMoveEnd
slug: scheduler/client-side-programming/events/onclientappointmentmoveend
tags: onclientappointmentmoveend
published: True
position: 12
---

# OnClientAppointmentMoveEnd



The __OnClientAppointmenMoveEnd__ client-side event is called when the user stops moving an appointment.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* 

* __get_appointment()__ that returns the appointment instance.

* __get_editingRecurringSeries()__ returns __True__ if the user is trying to move a series to which the appointment belongs, __False__ if the user is trying to move a single occurrence of an appointment.

* __get_newStartTime()__ returns the new time of the appointment after the move operation is complete.

* __get_targetSlot()__ returns the Time Slot on which the mouse is located at this moment.

* __set_cancel()__ lets you permit or block the moving of the appointment.Calling __set_cancel(true)__ aborts the moving operation, while __set_cancel(false)__allows the scheduler to proceed with moving the appointment.

## Example

This example alerts the new start time of the moved appointment:

````ASPNET
	
	<script type="text/javascript">
	       function OnClientAppointmentMoveEnd(sender, eventArgs)
	       {
	           alert("New start time: " + eventArgs.get_newStartTime());
	       }       
	</script>
	<telerik:RadScheduler
	 ID="RadScheduler1"
	 runat="server"
	 OnClientAppointmentMoveEnd="OnClientAppointmentMoveEnd"
	 DataSourceID="AppointmentsDS" />      
			
````




