---
title: OnClientAppointmentResizeStart
page_title: OnClientAppointmentResizeStart | RadScheduler for ASP.NET AJAX Documentation
description: OnClientAppointmentResizeStart
slug: scheduler/client-side-programming/events/onclientappointmentresizestart
tags: onclientappointmentresizestart
published: True
position: 7
---

# OnClientAppointmentResizeStart



The **OnClientAppointmentResizeStart** client-side event is called before an appointment starts to resize.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** returns the appointment that is about to be resized.

* **set_cancel()** lets you permit or block the resize of the appointment. Calling **set_cancel(true)** stops the resize, while **set_cancel(false)** allows the user to give the appointment a new duration.

## Example

This example prevents the user from resizing the "Planning Session" appointment but permits all other appointments to be resized:

````ASPNET
	
<script type="text/javascript">   
function OnClientAppointmentResizeStart(sender, eventArgs)
{
	 var apt = eventArgs.get_Appointment();
	 if (apt.get_subject() == "Planning Session")
		 eventArgs.set_cancel(true);
}
</script>
<telerik:RadScheduler
 ID="RadScheduler1"
 runat="server"  
 OnClientAppointmentResizeStart="OnClientAppointmentResizeStart"
 DataSourceID="AppointmentsDS" /> 
			
````



# See Also

 * [OnClientAppointmentResizing]({%slug scheduler/client-side-programming/events/onclientappointmentresizing%})

 * [OnClientAppointmentResizeEnd]({%slug scheduler/client-side-programming/events/onclientappointmentresizeend%})
