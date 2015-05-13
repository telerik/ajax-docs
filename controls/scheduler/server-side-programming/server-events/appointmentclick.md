---
title: AppointmentClick
page_title: AppointmentClick | RadScheduler for ASP.NET AJAX Documentation
description: AppointmentClick
slug: scheduler/server-side-programming/server-events/appointmentclick
tags: appointmentclick
published: True
position: 1
---

# AppointmentClick



The **AppointmentClick** event occurs when the user clicks on an appointment and **RadScheduler** is inReadOnly mode- either **ReadOnly="true"** or **AllowEdit="false"**. You can use this event to perform additional actions when an appointment is clicked.

**AppointmentClick** has two parameters:

* **sender** is the scheduler that contains the appointment the user clicked.

* **e** is an object of type **SchedulerEventArgs**. It has an Appointment property thatgives you access to the appointment that was clicked.

## Example





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


# See Also

 * [OnClientAppointmentClick]({%slug scheduler/client-side-programming/events/onclientappointmentclick%})
