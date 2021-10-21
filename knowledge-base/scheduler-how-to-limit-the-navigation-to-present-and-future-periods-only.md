---
title: How to limit the navigation to present and future periods only
description: How to limit the navigation to present and future periods only - RadScheduler. Check it now!
type: how-to
page_title: How to limit the navigation to present and future periods only
slug: scheduler-how-to-limit-the-navigation-to-present-and-future-periods-only
res_type: kb
---


   
## HOW-TO  
 Limit the navigation in RadScheduler to present and future periods only. In Week/Month/Timeline View the first valid period will be the one containing the Today's Date.  
   
## DESCRIPTION  
RadScheduler's interface allows the user to navigate to any date either through its embedded Calendar or the rest of the navigational controls - the Previous, Next and Today buttons.  
   
 Sometimes, you may want to limit the user from navigating to periods which are in the past.  
   
## SOLUTION  
Handle the NavigationCommand event of RadScheduler and verify if the user tries to navigate to a past period. If so, just cancel the event. Additionally, you could set the selected Date to be Today in case the user navigates through the Calendar to a past Date. Below is the code for the NavigationCommand event handler.  
   
````C#
protected void RadScheduler1_NavigationCommand(object sender, SchedulerNavigationCommandEventArgs e) 
{ 
    if (e.Command == SchedulerNavigationCommand.NavigateToSelectedDate) 
    { 
        if (e.SelectedDate < DateTime.Today) 
        { 
            e.Cancel = true; 
 
            //Uncomment if you want to navigate to the first available range. 
            //this.RadScheduler1.SelectedDate = DateTime.Today; 
        } 
    } 
    else 
    { 
        if ((e.Command == SchedulerNavigationCommand.DisplayPreviousAppointmentSegment) || 
            (e.Command == SchedulerNavigationCommand.NavigateToPreviousPeriod)) 
        { 
            if (this.RadScheduler1.SelectedView == SchedulerViewType.DayView) 
            { 
                if (this.RadScheduler1.SelectedDate == DateTime.Today) 
                { 
                    e.Cancel = true; 
                } 
            } 
            else if (this.RadScheduler1.SelectedView == SchedulerViewType.WeekView) 
            { 
                if (this.RadScheduler1.SelectedDate.AddDays(-7) < DateTime.Today) 
                { 
                    e.Cancel = true; 
                } 
            } 
            else if (this.RadScheduler1.SelectedView == SchedulerViewType.MonthView) 
            { 
                if (this.RadScheduler1.SelectedDate.AddMonths(-1) < DateTime.Today) 
                { 
                    e.Cancel = true; 
                } 
            } 
            else if (this.RadScheduler1.SelectedView == SchedulerViewType.TimelineView) 
            { 
                if (this.RadScheduler1.SelectedDate.AddDays(-1) < DateTime.Today) 
                { 
                    e.Cancel = true; 
                } 
            } 
        } 
    } 
} 
````
````VB

Protected Sub RadScheduler1_NavigationCommand(ByVal sender As Object, _ 
    ByVal e As SchedulerNavigationCommandEventArgs) 
    If e.Command = SchedulerNavigationCommand.NavigateToSelectedDate Then 
        If e.SelectedDate < DateTime.Today Then 
            e.Cancel = True 
 
            'Uncomment if you want to navigate to the first available range. 
            'this.RadScheduler1.SelectedDate = DateTime.Today; 
        End If 
    Else 
        If (e.Command = SchedulerNavigationCommand.DisplayPreviousAppointmentSegment) OrElse _ 
           (e.Command = SchedulerNavigationCommand.NavigateToPreviousPeriod) Then 
            If Me.RadScheduler1.SelectedView = SchedulerViewType.DayView Then 
                If Me.RadScheduler1.SelectedDate = DateTime.Today Then 
                    e.Cancel = True 
                End If 
            ElseIf Me.RadScheduler1.SelectedView = SchedulerViewType.WeekView Then 
                If Me.RadScheduler1.SelectedDate.AddDays(-7) < DateTime.Today Then 
                    e.Cancel = True 
                End If 
            ElseIf Me.RadScheduler1.SelectedView = SchedulerViewType.MonthView Then 
                If Me.RadScheduler1.SelectedDate.AddMonths(-1) < DateTime.Today Then 
                    e.Cancel = True 
                End If 
            ElseIf Me.RadScheduler1.SelectedView = SchedulerViewType.TimelineView Then 
                If Me.RadScheduler1.SelectedDate.AddDays(-1) < DateTime.Today Then 
                    e.Cancel = True 
                End If 
            End If 
        End If 
    End If 
End Sub 
````
 


    