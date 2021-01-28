---
title: RecurrenceExceptionCreated
page_title: RecurrenceExceptionCreated - RadScheduler
description: Check our Web Forms article about RecurrenceExceptionCreated.
slug: scheduler/server-side-programming/server-events/recurrenceexceptioncreated
tags: recurrenceexceptioncreated
published: True
position: 13
---

# RecurrenceExceptionCreated





The **RecurrenceExceptionCreated** event occurs when the user creates an exception in a recurrent series. **RecurrenceExceptionCreated** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **RecurrenceExceptionCreatedEventArgs**. It has four properties:- **Appointment**- the master appointment;- **ExceptionAppointment**- the newly created exception appointment;- **OccurenceAppointment**- the original occurrencebefore the exception was created;- **Cancel** is a boolean value that lets you prevent the creation of the exception;

## Example





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


# See Also

 * [Working with Recurring Appointments]({%slug scheduler/server-side-programming/working-with-recurring-appointments%})
