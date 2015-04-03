---
title: AppointmentCommand
page_title: AppointmentCommand | UI for ASP.NET AJAX Documentation
description: AppointmentCommand
slug: scheduler/server-side-programming/server-events/appointmentcommand
tags: appointmentcommand
published: True
position: 2
---

# AppointmentCommand



The __AppointmentCommand__ event occurs when the user clicks any button in the appointment template. This event is typically used to handle button controls with a custom CommandName value.

__AppointmentCommand__ has two parameters:

* __sender__ is the scheduler that contains the appointment with the button the user clicked.

* __e__ is an object of type __AppointmentCommandEventArgs__. It has three properties:

* __CommandName__ is the __CommandName__ attribute of the button that was clicked.

* __CommandArgument__ is the __CommandArgument__ attribute of the button that was clicked.

* __Container__ is an object of type __SchedulerAppointmentContainer__ that represents the appointment in the scheduler.

## Example



>tabbedCode

````C#
	
	    protected void RadScheduler1_AppointmentCommand(object sender, AppointmentCommandEventArgs e)
	    {
	        if (e.CommandName == "Delete")
	        {
	            Delete(e.Container.Appointment);
	        }
	    }
	
````



````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentCommand(ByVal sender As Object, ByVal e As AppointmentCommandEventArgs) Handles RadScheduler1.AppointmentCommand
	        If e.CommandName = "Delete" Then
	            Delete(e.Container.Appointment)
	        End If
	    End Sub
	
````


>end

# See Also

 * [AppointmentCreated]({%slug scheduler/server-side-programming/server-events/appointmentcreated%})

 * [Templates]({%slug scheduler/appearance-and-styling/templates%})

 * [Export to ICalendar]({%slug scheduler/export/export-to-icalendar%})
