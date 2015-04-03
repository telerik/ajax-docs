---
title: OnClientAppointmentDoubleClick
page_title: OnClientAppointmentDoubleClick | UI for ASP.NET AJAX Documentation
description: OnClientAppointmentDoubleClick
slug: scheduler/client-side-programming/events/onclientappointmentdoubleclick
tags: onclientappointmentdoubleclick
published: True
position: 2
---

# OnClientAppointmentDoubleClick



The __OnClientAppointmentDoubleClick__ client-side event is called when the user double-clicks on an appointment.

Two parameters are passed to the event handler:

* __sender__ is the scheduler client object.

* __eventArgs__ has one method - __get_appointment()__ that returns the appointment instance.

## Example

````ASPNET
	
	<script type="text/javascript">   
	  function OnClientAppointmentDoubleClick(sender, eventArgs)
	  {
	    var apt = eventArgs.get_appointment();
	    alert("You double-clicked on an appointment with the subject: " + apt.get_subject());
	  }
	</script>
	<telerik:RadScheduler
	 ID="RadScheduler1"
	 runat="server"  
	 OnClientAppointmentDoubleClick="OnClientAppointmentDoubleClick"
	 DataSourceID="AppointmentsDS" />
	
````



# See Also

 * [OnClientAppointmentClick]({%slug scheduler/client-side-programming/events/onclientappointmentclick%})
