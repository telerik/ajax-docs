---
title: AppointmentUpdate
page_title: AppointmentUpdate | UI for ASP.NET AJAX Documentation
description: AppointmentUpdate
slug: scheduler/server-side-programming/server-events/appointmentupdate
tags: appointmentupdate
published: True
position: 4
---

# AppointmentUpdate



The __AppointmentUpdate__ event occurs just before the scheduler calls its data source to update an appointment.

__AppointmentUpdate__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __AppointmentUpdateEventArgs__.It has three properties:

* __Appointment__ is the original appointment before any updates. Any modificationsyou make to this object are discarded.

* __ModifiedAppointment__ is the updated appointment that is about to bewritten to the data source. You can modify the updated appointment to change the way the updatesare written to the data source.

* __Cancel__ is a boolean value that lets you prevent the update.

## Example





````C#
	
	    protected void RadScheduler1_AppointmentUpdate(object sender, AppointmentUpdateEventArgs e)
	    {
	        e.ModifiedAppointment.End = e.ModifiedAppointment.End.AddHours(1);
	    }
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentUpdate(ByVal sender As Object, _
	          ByVal e As AppointmentUpdateEventArgs) Handles RadScheduler1.AppointmentUpdate
	        e.ModifiedAppointment.End = _
	           e.ModifiedAppointment.End.AddHours(1)
	    End Sub
	
````


## Getting recurrence rule when a recurring appointment is dragged or resized

It is a known issue that occurs in cases when a recurring Appointment is dragged or resized the recurrence rule of the ModifiedAppointment is not updated properly.It can be generated correctly by use the following code:





````C#
	
	    protected void RadScheduler1_AppointmentUpdate(object sender, AppointmentUpdateEventArgs e)
	    {
	        RecurrenceRule rrule;
	        if (RecurrenceRule.TryParse(e.ModifiedAppointment.RecurrenceRule, out rrule))
	        {
	            rrule.Range.Start = e.ModifiedAppointment.Start;
	            rrule.Range.EventDuration = e.ModifiedAppointment.End - e.ModifiedAppointment.Start;
	            TimeSpan startTimeChange = e.ModifiedAppointment.Start - e.Appointment.Start;
	            for (int i = 0; i < rrule.Exceptions.Count; i++)
	            {
	                rrule.Exceptions[i] = rrule.Exceptions[i].Add(startTimeChange);
	            }
	
	            e.ModifiedAppointment.RecurrenceRule = rrule.ToString();
	        }
	        //here goes your custom logic for the appointment update event handler
	
	    }
	
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentUpdate(sender As Object, e As AppointmentUpdateEventArgs)
	        Dim rrule As RecurrenceRule
	        If RecurrenceRule.TryParse(e.ModifiedAppointment.RecurrenceRule, rrule) Then
	            rrule.Range.Start = e.ModifiedAppointment.Start
	            rrule.Range.EventDuration = e.ModifiedAppointment.[End] - e.ModifiedAppointment.Start
	            Dim startTimeChange As TimeSpan = e.ModifiedAppointment.Start - e.Appointment.Start
	            For i As Integer = 0 To rrule.Exceptions.Count - 1
	                rrule.Exceptions(i) = rrule.Exceptions(i).Add(startTimeChange)
	            Next
	
	            e.ModifiedAppointment.RecurrenceRule = rrule.ToString()
	        End If
	        'here goes your custom logic for the appointment update event handler
	
	    End Sub
	
	
````


# See Also

 * [AppointmentInsert]({%slug scheduler/server-side-programming/server-events/appointmentinsert%})

 * [AppointmentDelete]({%slug scheduler/server-side-programming/server-events/appointmentdelete%})

 * [OnClientAppointmentEditing]({%slug scheduler/client-side-programming/events/onclientappointmentediting%})

 * [Using the Data Source Property]({%slug scheduler/data-binding/using-the-data-source-property%})
