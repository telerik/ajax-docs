---
title: FormCreated
page_title: FormCreated | RadScheduler for ASP.NET AJAX Documentation
description: FormCreated
slug: scheduler/server-side-programming/server-events/formcreated
tags: formcreated
published: True
position: 12
---

# FormCreated



The **FormCreated** event occurs when the edit form or in-line editor has just been created.

**FormCreated** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **SchedulerFormCreatedEventArgs**. It has the following properties:

* **Appointment** is the appointment that is about to be inserted or updated using an editor.

* **Container** is the edit form or in-line editor that has just been instantiated.

You can use this event to make modifications to the editor template.

## Example





````C#
	
protected void RadScheduler1_FormCreated(object sender, SchedulerFormCreatedEventArgs e)
{
	if (e.Container.Mode == SchedulerFormMode.Insert)
	{
		Label startDate = (Label)e.Container.FindControl("StartDate");
		startDate.Text = e.Container.Appointment.Start.ToString();
	}
}
	
````
````VB.NET
	
Protected Sub RadScheduler1_FormCreated(ByVal sender As Object, _
 ByVal e As SchedulerFormCreatedEventArgs) Handles RadScheduler1.FormCreated
	If e.Container.Mode = SchedulerFormMode.Insert Then
		Dim startDate As Label = _
			   CType(e.Container.FindControl("StartDate"), Label)
		startDate.Text = e.Container.Appointment.Start.ToString()
	End If
End Sub
	
````


# See Also

 * [FormCreating]({%slug scheduler/server-side-programming/server-events/formcreating%})
