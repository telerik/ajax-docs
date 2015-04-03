---
title: OnClientAppointmentResizeEnd
page_title: OnClientAppointmentResizeEnd | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentResizeEnd
slug: scheduler/client-side-programming/events/onclientappointmentresizeend
tags: onclientappointmentresizeend
published: True
position: 9
---

# OnClientAppointmentResizeEnd



The __OnClientAppointmentResizeEnd__ client-side event is called when the user releases the mouse after resizing an appointment.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ returns the appointment instance.

* __get_editingRecurringSeries()__ returns __True__ ifthe user is trying to delete a series to which the appointment belongs, __False__ if the user is tryingto delete a single occurrence of an appointment.

* __get_newStartTime()__ returns the new start time of the appointment if user has resized the upper part of the appointment - the appointment start time.

* __get_newEndTime()__ returns the new end time of the appointment if user has resized the bottom part of the appointment - the appointment end time.

* __get_targetSlot()__ returns the instance of the time slot that the appointment has been resized to.

* __set_cancel()__lets you permit or block the resize of the appointment. Calling __set_cancel(true)__ cancels the resize,while __set_cancel(false)__ allows the scheduler to proceed with updating the appointment to reflect the resize.

## Example

This example cancels the resize if the user tried to resize an appointment's series:

````ASPNET
	
	<script type="text/javascript">   
	  function OnClientAppointmentResizeEnd(sender, eventArgs)
	  {                                  
	      if(eventArgs.get_editingRecurringSeries())
	           eventArgs.set_cancel(true);
	      else
	          alert("Appointment start time: " + eventArgs.get_newStartTime() + ", Appointment end time: " + eventArgs.get_newEndTime());
	  }
	
	</script>
	<telerik:RadScheduler
	 ID="RadScheduler1"
	 runat="server"  
	 OnClientAppointmentResizeEnd="OnClientAppointmentResizeEnd"
	 DataSourceID="AppointmentsDS" />       
		
````



# See Also

 * [OnClientAppointmentResizeStart]({%slug scheduler/client-side-programming/events/onclientappointmentresizestart%})

 * [OnClientAppointmentResizeEnd]({%slug scheduler/client-side-programming/events/onclientappointmentresizeend%})
