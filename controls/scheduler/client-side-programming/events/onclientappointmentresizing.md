---
title: OnClientAppointmentResizing
page_title: OnClientAppointmentResizing - RadScheduler
description: Check our Web Forms article about OnClientAppointmentResizing.
slug: scheduler/client-side-programming/events/onclientappointmentresizing
tags: onclientappointmentresizing
published: True
position: 8
---

# OnClientAppointmentResizing



The **OnClientAppointmentResizing** client-side event is called when the mouse moves while an appointment is being resized.

Two parameters are passed to the event handler:

* **sender** is the scheduler client object.

* **eventArgs** has the following methods:

* **get_appointment()** - returns the appointment instance.

* **get_targetSlot()** returns the Time Slot which the appointment is being resized to.

* **set_cancel()** lets you permit or block the resizing of the appointment. Calling **set_cancel(true)** stops the resizing, while **set_cancel(false)** allows the scheduler to finish resizing of the appointment.

## Example

This example displays a message giving the name and duration of the resizing event:

````ASPNET
	
<script type="text/javascript">   
function OnClientAppointmentResizing(sender, eventArgs)
{
	var apt = eventArgs.get_appointment();
	var startStr = apt.get_start();
	var endStr = apt.get_end();
	LogEvent(apt.get_subject()+ ":" + startStr + " to " + endStr);
}
function LogEvent(eventString)
{
	var d = new Date();
	var dateStr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds();
	var console = document.getElementById("eventConsole");
	console.innerHTML = "[" + dateStr + "] " + eventString + "<br/ >" + console.innerHTML;
}
</script>
<div id="eventConsole" style="OVERFLOW:auto; WIDTH:698px; LINE-HEIGHT:1.5;HEIGHT:150px;" class="module" />
<telerik:RadScheduler
ID="RadScheduler1"
runat="server"  
OnClientAppointmentResizing="OnClientAppointmentResizing"
DataSourceID="AppointmentsDS" /> 
	
````



# See Also

 * [OnClientAppointmentResizeStart]({%slug scheduler/client-side-programming/events/onclientappointmentresizestart%})

 * [OnClientAppointmentResizeEnd]({%slug scheduler/client-side-programming/events/onclientappointmentresizeend%})
