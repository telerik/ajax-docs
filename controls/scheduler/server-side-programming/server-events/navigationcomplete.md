---
title: NavigationComplete
page_title: NavigationComplete - RadScheduler
description: Check our Web Forms article about NavigationComplete.
slug: scheduler/server-side-programming/server-events/navigationcomplete
tags: navigationcomplete
published: True
position: 10
---

# NavigationComplete



The **NavigationComplete** event occurs when a navigation action has been completed.

**NavigationComplete** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **SchedulerNavigationCompleteEventArgs**. It has a single **Command** property that indicates what navigation event occurred. Command is of type **SchedulerNavigationCommand**, and can have any of the following values:

* **SchedulerNavigationCommand.NavigateToNextPeriod** - the schedule moved to the next time period in response to the user clicking the right-arrow button in the navigation pane.

* **SchedulerNavigationCommand.NavigateToPreviousPeriod** - the scheduler moved to the previous time period in response to the user clicking the left-arrow button in the navigation pane.

* **SchedulerNavigationCommand.SwitchFullTime** - the scheduler changed from full-day mode to business hours, or vice versa.

* **SchedulerNavigationCommand.SwitchToDayview** - the scheduler switched from Week or Month view into Day view.

* **SchedulerNavigationCommand.SwitchToWeekView** - the scheduler switched from Day or Month view into Week view.

* **SchedulerNavigationCommand.SwitchToMonthView** - the scheduler switched from Day or Week view into Month view.

* **SchedulerNavigationCommand.SwitchToSelectedDay** - the scheduler changed to Day view displaying the currently selected day.

* **SchedulerNavigationCommand.DisplayNextAppointmentSegment** - the scheduler moved to the next segment of an appointment that spans multiple days.

* **SchedulerNavigationCommand.DisplayPreviousAppointmentSegment** - the scheduler moved to the previous segment of an appointment that spans multiple days.

You can use this event to perform custom actions when a navigation action has been completed.

## Example





````C#
	
protected void RadScheduler1_NavigationComplete(object sender, SchedulerNavigationCompleteEventArgs e) 
{ 
	Label1.Text = RadScheduler1.SelectedDate.ToString(); 
}
	
````
````VB.NET
	
Protected Sub RadScheduler1_NavigationComplete(ByVal sender As Object, _
		   ByVal e As SchedulerNavigationCompleteEventArgs) _
	   Handles RadScheduler1.NavigationComplete
	Label1.Text = RadScheduler1.SelectedDate.ToString()
End Sub
	
````


# See Also

 * [NavigationCommand]({%slug scheduler/server-side-programming/server-events/navigationcommand%})

 * [Views]({%slug scheduler/views/overview%})

 * [Navigating RadScheduler]({%slug scheduler/usability/navigating-radscheduler%})
