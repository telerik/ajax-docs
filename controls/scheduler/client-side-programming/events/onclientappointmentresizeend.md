---
title: OnClientAppointmentResizeEnd
page_title: OnClientAppointmentResizeEnd | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentResizeEnd
slug: scheduler/client-side-programming/events/onclientappointmentresizeend
tags: onclientappointmentresizeend
published: True
position: 9
---

# OnClientAppointmentResizeEnd



The **OnClientAppointmentResizeEnd** client-side event is called when the user releases the mouse after resizing an appointment.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** returns the appointment instance.

* **get_editingRecurringSeries()** returns **True** ifthe user is trying to delete a series to which the appointment belongs, **False** if the user is tryingto delete a single occurrence of an appointment.

* **get_newStartTime()** returns the new start time of the appointment if user has resized the upper part of the appointment - the appointment start time.

* **get_newEndTime()** returns the new end time of the appointment if user has resized the bottom part of the appointment - the appointment end time.

* **get_targetSlot()** returns the instance of the time slot that the appointment has been resized to.

* **set_cancel()**lets you permit or block the resize of the appointment. Calling **set_cancel(true)** cancels the resize,while **set_cancel(false)** allows the scheduler to proceed with updating the appointment to reflect the resize.

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
