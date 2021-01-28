---
title: OnClientAppointmentMoveEnd
page_title: OnClientAppointmentMoveEnd - RadScheduler
description: Check our Web Forms article about OnClientAppointmentMoveEnd.
slug: scheduler/client-side-programming/events/onclientappointmentmoveend
tags: onclientappointmentmoveend
published: True
position: 12
---

# OnClientAppointmentMoveEnd



The **OnClientAppointmentMoveEnd** client-side event is called when the user stops moving an appointment.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** that returns the appointment instance.

* **get_editingRecurringSeries()** returns **True** if the user is trying to move a series to which the appointment belongs, **False** if the user is trying to move a single occurrence of an appointment.

* **get_newStartTime()** returns the new time of the appointment after the move operation is complete.

* **get_targetSlot()** returns the Time Slot on which the mouse is located at this moment.

* **set_cancel()** lets you permit or block the moving of the appointment. Calling **set_cancel(true)** aborts the moving operation, while **set_cancel(false)** allows the scheduler to proceed with moving the appointment.

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




