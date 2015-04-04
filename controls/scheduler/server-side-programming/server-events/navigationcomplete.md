---
title: NavigationComplete
page_title: NavigationComplete | UI for ASP.NET AJAX Documentation
description: NavigationComplete
slug: scheduler/server-side-programming/server-events/navigationcomplete
tags: navigationcomplete
published: True
position: 10
---

# NavigationComplete



The __NavigationComplete__ event occurs when a navigation action has been completed.

__NavigationComplete__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __SchedulerNavigationCompleteEventArgs__. It has a single __Command__ property that indicates what navigation event occurred. Command is of type __SchedulerNavigationCommand__, and can have any of the following values:

* __SchedulerNavigationCommand.NavigateToNextPeriod__ - the schedule moved to the next time period in response to the user clicking the right-arrow button in the navigation pane.

* __SchedulerNavigationCommand.NavigateToPreviousPeriod__ - the scheduler moved to the previous time period in response to the user clicking the left-arrow button in the navigation pane.

* __SchedulerNavigationCommand.SwitchFullTime__ - the scheduler changed from full-day mode to business hours, or vice versa.

* __SchedulerNavigationCommand.SwitchToDayview__ - the scheduler switched from Week or Month view into Day view.

* __SchedulerNavigationCommand.SwitchToWeekView__ - the scheduler switched from Day or Month view into Week view.

* __SchedulerNavigationCommand.SwitchToMonthView__ - the scheduler switched from Day or Week view into Month view.

* __SchedulerNavigationCommand.SwitchToSelectedDay__ - the scheduler changed to Day view displaying the currently selected day.

* __SchedulerNavigationCommand.DisplayNextAppointmentSegment__ - the scheduler moved to the next segment of an appointment that spans multiple days.

* __SchedulerNavigationCommand.DisplayPreviousAppointmentSegment__ - the scheduler moved to the previous segment of an appointment that spans multiple days.

You can use this event to perform custom actions when a navigation action has been completed.

## Example



>tabbedCode

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
>end

# See Also

 * [NavigationCommand]({%slug scheduler/server-side-programming/server-events/navigationcommand%})

 * [Views]({%slug scheduler/appearance-and-styling/views%})

 * [Navigating RadScheduler]({%slug scheduler/usability/navigating-radscheduler%})
