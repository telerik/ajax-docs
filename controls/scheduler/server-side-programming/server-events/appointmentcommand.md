---
title: AppointmentCommand
page_title: AppointmentCommand | RadScheduler for ASP.NET AJAX Documentation
description: AppointmentCommand
slug: scheduler/server-side-programming/server-events/appointmentcommand
tags: appointmentcommand
published: True
position: 2
---

# AppointmentCommand



The **AppointmentCommand** event occurs when the user clicks any button in the appointment template. This event is typically used to handle button controls with a custom CommandName value.

**AppointmentCommand** has two parameters:

* **sender** is the scheduler that contains the appointment with the button the user clicked.

* **e** is an object of type **AppointmentCommandEventArgs**. It has three properties:

* **CommandName** is the **CommandName** attribute of the button that was clicked.

* **CommandArgument** is the **CommandArgument** attribute of the button that was clicked.

* **Container** is an object of type **SchedulerAppointmentContainer** that represents the appointment in the scheduler.

## Example





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


# See Also

 * [AppointmentCreated]({%slug scheduler/server-side-programming/server-events/appointmentcreated%})

 * [Templates]({%slug scheduler/appearance-and-styling/templates%})

 * [Export to ICalendar]({%slug scheduler/export/export-to-icalendar%})
