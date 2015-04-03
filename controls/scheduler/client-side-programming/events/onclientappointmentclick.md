---
title: OnClientAppointmentClick
page_title: OnClientAppointmentClick | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentClick
slug: scheduler/client-side-programming/events/onclientappointmentclick
tags: onclientappointmentclick
published: True
position: 1
---

# OnClientAppointmentClick



The __OnClientAppointmentClick__ client-side event is called when the user clicks on an appointment with the mouse.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has one method - __get_appointment()__ that returns the appointment instance.

## Example

````ASPNET
	
	<script type="text/javascript">   
	  function OnClientAppointmentClick(sender, eventArgs)
	  {
	    var apt = eventArgs.get_appointment();
	    alert("You clicked on an appointment with the subject: " + apt.get_subject());
	  }
	</script>
	<telerik:RadScheduler
	 ID="RadScheduler1"
	 runat="server"  
	 OnClientAppointmentClick="OnClientAppointmentClick"
	 DataSourceID="AppointmentsDS" />
	
````



# See Also

 * [OnClientAppointmentDoubleClick]({%slug scheduler/client-side-programming/events/onclientappointmentdoubleclick%})

 * [AppointmentClick]({%slug scheduler/server-side-programming/server-events/appointmentclick%})
