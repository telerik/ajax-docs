---
title: FormCreated
page_title: FormCreated | UI for ASP.NET AJAX Documentation
description: FormCreated
slug: scheduler/server-side-programming/server-events/formcreated
tags: formcreated
published: True
position: 12
---

# FormCreated



The __FormCreated__ event occurs when the edit form or in-line editor has just been created.

__FormCreated__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __SchedulerFormCreatedEventArgs__.It has the following properties:

* __Appointment__ is the appointment that is about to be inserted or updated using an editor.

* __Container__ is the edit form or in-line editor that has just been instantiated.

You can use this event to make modifications to the editor template.

## Example



>tabbedCode

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


>end

# See Also

 * [FormCreating]({%slug scheduler/server-side-programming/server-events/formcreating%})
