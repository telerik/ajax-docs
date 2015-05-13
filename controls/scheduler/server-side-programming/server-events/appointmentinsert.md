---
title: AppointmentInsert
page_title: AppointmentInsert | RadScheduler for ASP.NET AJAX Documentation
description: AppointmentInsert
slug: scheduler/server-side-programming/server-events/appointmentinsert
tags: appointmentinsert
published: True
position: 3
---

# AppointmentInsert



The **AppointmentInsert** event occurs when an appointment is about to be inserted in the data source.

**AppointmentInsert** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **SchedulerCancelEventArgs**.It has two properties:

* **Appointment** is the appointment that is about to be inserted.You can modify this object to change the data that is sent to the data source.

* **Cancel** is a boolean value that lets you prevent the insertion.

## Example





````C#
	
protected void RadScheduler1_AppointmentInsert(object sender, SchedulerCancelEventArgs e)
{
	if (e.Appointment.Subject == String.Empty)
	{
		e.Cancel = true;
	}
}
	
````
````VB.NET
	
Protected Sub RadScheduler1_AppointmentInsert(ByVal sender As Object, _
   ByVal e As SchedulerCancelEventArgs) Handles RadScheduler1.AppointmentInsert
	If e.Appointment.Subject = String.Empty Then
		e.Cancel = True
	End If
End Sub
	
````


# See Also

 * [AppointmentUpdate]({%slug scheduler/server-side-programming/server-events/appointmentupdate%})

 * [AppointmentDelete]({%slug scheduler/server-side-programming/server-events/appointmentdelete%})

 * [OnClientAppointmentInserting]({%slug scheduler/client-side-programming/events/onclientappointmentinserting%})

 * [Using the Data Source Property]({%slug scheduler/data-binding/using-the-data-source-property%})
