---
title: OnClientAppointmentResizeStart
page_title: OnClientAppointmentResizeStart | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentResizeStart
slug: scheduler/client-side-programming/events/onclientappointmentresizestart
tags: onclientappointmentresizestart
published: True
position: 7
---

# OnClientAppointmentResizeStart



The __OnClientAppointmentResizeStart__ client-side event is called before an appointment starts to resize.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has the following methods:

* __get_appointment()__ returns the appointment that is about to be resized.

* __set_cancel()__ lets you permit or block the resize of the appointment. Calling __set_cancel(true)__ stops the resize, while __set_cancel(false)__ allows the user to give the appointment a new duration.

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
