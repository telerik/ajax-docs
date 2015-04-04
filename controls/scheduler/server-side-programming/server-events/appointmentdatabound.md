---
title: AppointmentDataBound
page_title: AppointmentDataBound | UI for ASP.NET AJAX Documentation
description: AppointmentDataBound
slug: scheduler/server-side-programming/server-events/appointmentdatabound
tags: appointmentdatabound
published: True
position: 7
---

# AppointmentDataBound



The __AppointmentDataBound__ event occurs when an appointment has been added to the Appointmentscollection from the data source.

__AppointmentDataBound__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __SchedulerEventArgs__.It has an Appointment property that lets you access the appointment that was just loaded.

You can use this event to make adjustments to the appointments as they are loaded.

## Example





````C#
	
	    protected void RadScheduler1_AppointmentDataBound(object sender, SchedulerEventArgs e)
	    {
	        e.Appointment.Start = e.Appointment.Start.AddHours(1);
	    } 
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentDataBound(ByVal sender As Object, ByVal e As SchedulerEventArgs) Handles RadScheduler1.AppointmentDataBound
	        e.Appointment.Start = e.Appointment.Start.AddHours(1)
	    End Sub
	
````


# See Also

 * [AppointmentCreated]({%slug scheduler/server-side-programming/server-events/appointmentcreated%})

 * [Working with Resources]({%slug scheduler/server-side-programming/working-with-resources%})
