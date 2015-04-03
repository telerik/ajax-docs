---
title: AppointmentDelete
page_title: AppointmentDelete | UI for ASP.NET AJAX Documentation
description: AppointmentDelete
slug: scheduler/server-side-programming/server-events/appointmentdelete
tags: appointmentdelete
published: True
position: 6
---

# AppointmentDelete



The __AppointmentDelete__ event occurs just before the scheduler calls its data source to delete an appointment.

__AppointmentDelete__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __SchedulerCancelEventArgs__. It has two properties:

* __Appointment__ is the appointment that is about to be deleted.

* __Cancel__ is a boolean value that lets you prevent the deletion.

## Example



>tabbedCode

````C#
	
	    protected void RadScheduler1_AppointmentDelete(object sender, SchedulerCancelEventArgs e)
	    {
	        if (e.Appointment.Attributes["ReadOnly"] == "true")
	        {
	            e.Cancel = true;
	        }
	    } 
	
````



````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentDelete(ByVal sender As Object, _
	       ByVal e As SchedulerCancelEventArgs) Handles RadScheduelr1.AppointmentDelete
	        If e.Appointment.Attributes("ReadOnly") = "true" Then
	            e.Cancel = True
	        End If
	    End Sub
	
````


>end

# See Also

 * [AppointmentInsert]({%slug scheduler/server-side-programming/server-events/appointmentinsert%})

 * [AppointmentUpdate]({%slug scheduler/server-side-programming/server-events/appointmentupdate%})

 * [OnClientAppointmentDeleting]({%slug scheduler/client-side-programming/events/onclientappointmentdeleting%})

 * [Using the Data Source Property]({%slug scheduler/data-binding/using-the-data-source-property%})
