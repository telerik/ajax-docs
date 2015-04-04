---
title: AppointmentClick
page_title: AppointmentClick | UI for ASP.NET AJAX Documentation
description: AppointmentClick
slug: scheduler/server-side-programming/server-events/appointmentclick
tags: appointmentclick
published: True
position: 1
---

# AppointmentClick



The __AppointmentClick__ event occurs when the user clicks on an appointment and __RadScheduler__ is inReadOnly mode- either __ReadOnly="true"__ or __AllowEdit="false"__. You can use this event to perform additional actions when an appointment is clicked.

__AppointmentClick__ has two parameters:

* __sender__ is the scheduler that contains the appointment the user clicked.

* __e__ is an object of type __SchedulerEventArgs__. It has an Appointment property thatgives you access to the appointment that was clicked.

## Example



>tabbedCode

````C#
	
	    protected void RadScheduler1_AppointmentClick(object sender, SchedulerEventArgs e)
	    {
	        Response.Redirect("Page.aspx");
	    }  
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentClick(ByVal sender As Object, ByVal e As SchedulerEventArgs) Handles RadScheduler1.AppointmentClick
	        Response.Redirect("Page.aspx")
	    End Sub
	
````
>end

# See Also

 * [OnClientAppointmentClick]({%slug scheduler/client-side-programming/events/onclientappointmentclick%})
