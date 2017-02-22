---
title: AppointmentUpdate
page_title: AppointmentUpdate | RadScheduler for ASP.NET AJAX Documentation
description: AppointmentUpdate
slug: scheduler/server-side-programming/server-events/appointmentupdate
tags: appointmentupdate
published: True
position: 4
---

# AppointmentUpdate



The **AppointmentUpdate** event occurs just before the scheduler calls its data source to update an appointment.

**AppointmentUpdate** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **AppointmentUpdateEventArgs**. It has three properties:

* **Appointment** is the original appointment before any updates. Any modifications you make to this object are discarded.

* **ModifiedAppointment** is the updated appointment that is about to be written to the data source. You can modify the updated appointment to change the way the updates are written to the data source.

* **Cancel** is a boolean value that lets you prevent the update.

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

It is a known issue that occurs in cases when a recurring Appointment is dragged or resized the recurrence rule of the ModifiedAppointment is not updated properly. It can be generated correctly by using the following code:





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
