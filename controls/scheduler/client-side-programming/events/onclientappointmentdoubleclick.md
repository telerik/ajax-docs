---
title: OnClientAppointmentDoubleClick
page_title: OnClientAppointmentDoubleClick - RadScheduler
description: Check our Web Forms article about OnClientAppointmentDoubleClick.
slug: scheduler/client-side-programming/events/onclientappointmentdoubleclick
tags: onclientappointmentdoubleclick
published: True
position: 2
---

# OnClientAppointmentDoubleClick



The **OnClientAppointmentDoubleClick** client-side event is called when the user double-clicks on an appointment.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has one method - **get_appointment()** that returns the appointment instance.

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
