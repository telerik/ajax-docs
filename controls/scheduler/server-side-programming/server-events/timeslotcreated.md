---
title: TimeSlotCreated
page_title: TimeSlotCreated - RadScheduler
description: Check our Web Forms article about TimeSlotCreated.
slug: scheduler/server-side-programming/server-events/timeslotcreated
tags: timeslotcreated
published: True
position: 14
---

# TimeSlotCreated



The **TimeSlotCreated** event occurs when a time slot is created. **TimeSlotCreated** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **TimeSlotCreatedEventArgs**. It has the **TimeSlot** property.

The `TimeSlotCreated` event is not fired after the [advanced edit form]({%slug scheduler/customizing-the-advanced-form/overview%}) is opened (it fires before that, and rendering the advanced form renders the scheduler anew). Thus, customizations for the time slots made in the handler are not rendered while the advanced edit form is visible.

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


When customizing a Timeslot based on the start time hours, the start time should be converted to the Timezone of the Scheduler, if it is set. 

## Example

````C#
	
protected void RadScheduler1_TimeSlotCreated(object sender, Telerik.Web.UI.TimeSlotCreatedEventArgs e)
{
        RadScheduler scheduler = sender as RadScheduler;
        DateTime startdate = e.TimeSlot.Start.Add(scheduler.TimeZoneOffset);
        if (startdate.Hour == 8)
        {
            e.TimeSlot.CssClass += "Disabled";
        }
}  
	
````
````VB.NET
	
Protected Sub RadScheduler1_TimeSlotCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.TimeSlotCreatedEventArgs)
	Dim scheduler As RadScheduler = DirectCast(sender, RadScheduler)
	Dim startdate = e.TimeSlot.Start.Add(scheduler.TimeZoneOffset)

	If startdate.Hour = 8 Then
	    e.TimeSlot.CssClass += "Disabled"
	End If
End Sub
	
````


## See Also

 * [Advanced Edit Form vs. Inline Editing](https://demos.telerik.com/aspnet-ajax/scheduler/examples/appointment-editing/defaultcs.aspx)

 * [Scheduler - Customizing the Time Slots](https://demos.telerik.com/aspnet-ajax/scheduler/examples/customizetimeslots/defaultcs.aspx)

