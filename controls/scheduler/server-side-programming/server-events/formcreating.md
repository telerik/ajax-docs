---
title: FormCreating
page_title: FormCreating | UI for ASP.NET AJAX Documentation
description: FormCreating
slug: scheduler/server-side-programming/server-events/formcreating
tags: formcreating
published: True
position: 11
---

# FormCreating



The __FormCreating__ event occurs when the edit form or in-line editor is about to be created to insert or edit an appointment.

__FormCreating__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __SchedulerFormCreatingEventArgs__.It has the following properties:

* __Appointment__ is the appointment that is about to be inserted or updated using an editor.

* __Mode__ indicates the type of editor that is about to be created and what action it isto perform. It can have one of the following values:

* __SchedulerFormMode.Edit__ indicates that the appointment is about to be updated usingthe in-line editor.

* __SchedulerFormMode.AdvancedEdit__ indicates that the appointment is about to be updatedusing the edit form.

* __SchedulerFormMode.Insert__ indicates that a new appointment is about to be inserted usingthe in-line editor.

* __SchedulerFormMode.AdvancedInsert__ indicates that a new appointment is about to be insertedusing the edit form.

* __Cancel__ is a boolean value that lets you prevent the scheduler from displaying an edit form or in-line editor.

## Example

This example prevents the user from updating an appointment using the edit form until it has been given a subject using the in-line editor.



>tabbedCode

````C#
	
	    protected void RadScheduler1_FormCreating(object sender, SchedulerFormCreatingEventArgs e)
	    {
	        if (e.Appointment.Subject == String.Empty &&
	            e.Mode == SchedulerFormMode.AdvancedEdit)
	            e.Cancel = true;
	    }
	   
````



````VB.NET
	
	    Protected Sub RadScheduler1_FormCreating(ByVal sender As Object, _
	                           ByVal e As SchedulerFormCreatingEventArgs) _
	          Handles RadScheduler1.FormCreating
	        If e.Appointment.Subject = [String].Empty AndAlso
	           e.Mode = SchedulerFormMode.AdvancedEdit Then
	            e.Cancel = True
	        End If
	    End Sub
	
	
	
````


>end

# See Also

 * [FormCreated]({%slug scheduler/server-side-programming/server-events/formcreated%})
