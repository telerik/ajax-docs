---
title: AppointmentCancelingEdit
page_title: AppointmentCancelingEdit | RadScheduler for ASP.NET AJAX Documentation
description: AppointmentCancelingEdit
slug: scheduler/server-side-programming/server-events/appointmentcancelingedit
tags: appointmentcancelingedit
published: True
position: 8
---

# AppointmentCancelingEdit



The **AppointmentCancelingEdit** event occurs when the user clicks the cancel button of the in-line editor or the edit form.

**AppointmentCancelingEdit** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **AppointmentCancelingEditEventArgs**. It has three properties:

* **Appointment** is the appointment that was being inserted or updated by the editor.

* **Container** is the editor that was being used to insert or edit an appointment.

* **Cancel** is a boolean value that lets you prevent the user from exiting the edit form or in-line editor.

## Example





````C#
	
protected void RadScheduler1_AppointmentCancelingEdit(object sender, AppointmentCancelingEditEventArgs e)
{
	if (e.Appointment.Subject == String.Empty)
	{
		e.Cancel = true;
	}
} 
	
````
````VB.NET
	
Sub RadScheduler1_AppointmentCancelingEdit(ByVal sender As Object, _
						ByVal e As AppointmentCancelingEditEventArgs) _
					 Handles RadScheduler1.AppointmentCancelingEdit
	If e.Appointment.Subject = String.Empty Then
		e.Cancel = True
	End If
End Sub
	
````

