---
title: RecurrenceExceptionCreated
page_title: RecurrenceExceptionCreated | UI for ASP.NET AJAX Documentation
description: RecurrenceExceptionCreated
slug: scheduler/server-side-programming/server-events/recurrenceexceptioncreated
tags: recurrenceexceptioncreated
published: True
position: 13
---

# RecurrenceExceptionCreated





The __RecurrenceExceptionCreated__ event occurs when the user creates an exception in a recurrent series. __RecurrenceExceptionCreated__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __RecurrenceExceptionCreatedEventArgs__.It has four properties:- __Appointment__- the master appointment;- __ExceptionAppointment__- the newly created exception appointment;- __OccurenceAppointment__- the original occurrencebefore the exception was created;- __Cancel__ is a boolean value that lets you prevent the creation of the exception;

## Example



>tabbedCode

````C#
	
	    protected void RadScheduler1_RecurrenceExceptionCreated(object sender, Telerik.Web.UI.RecurrenceExceptionCreatedEventArgs e)
	    {
	        Response.Write("An exception with subject: " + e.ExceptionAppointment.Subject + " was created");
	    } 
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_RecurrenceExceptionCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.RecurrenceExceptionCreatedEventArgs)
	        Response.Write("An exception with subject: " + e.ExceptionAppointment.Subject + " was created")
	    End Sub
	
````
>end

# See Also

 * [Working with Recurring Appointments]({%slug scheduler/server-side-programming/working-with-recurring-appointments%})
