---
title: TimeSlotCreated
page_title: TimeSlotCreated | RadScheduler for ASP.NET AJAX Documentation
description: TimeSlotCreated
slug: scheduler/server-side-programming/server-events/timeslotcreated
tags: timeslotcreated
published: True
position: 14
---

# TimeSlotCreated



The **TimeSlotCreatedevent** occurs when a time slot is created. **TimeSlotCreated** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **TimeSlotCreatedEventArgs**. It has the **TimeSlot** property.



## Example

The code sample below sets a "Disabled" css style for time slots which have one or more appointments:





````C#
	
protected void RadScheduler1_TimeSlotCreated(object sender, Telerik.Web.UI.TimeSlotCreatedEventArgs e)
{
	if (e.TimeSlot.Appointments.Count > 0)
	{
		e.TimeSlot.CssClass = "Disabled";
	}
}  
	
````
````VB.NET
	
Protected Sub RadScheduler1_TimeSlotCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.TimeSlotCreatedEventArgs)
	If e.TimeSlot.Appointments.Count > 0 Then
		e.TimeSlot.CssClass = "Disabled"
	End If
End Sub
	
````

