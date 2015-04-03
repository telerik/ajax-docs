---
title: TimeSlotCreated
page_title: TimeSlotCreated | UI for ASP.NET AJAX Documentation
description: TimeSlotCreated
slug: scheduler/server-side-programming/server-events/timeslotcreated
tags: timeslotcreated
published: True
position: 14
---

# TimeSlotCreated



The __TimeSlotCreatedevent__ occurs when a time slot is created. __TimeSlotCreated__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __TimeSlotCreatedEventArgs__. It has the __TimeSlot__ property.



## Example

The code sample below sets a "Disabled" css style for time slots which have one or more appointments:



>tabbedCode

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


>end
