---
title: Navigating through months in Timeline view
description: Navigating through months in Timeline view - RadSCheduler. Check it now!
type: how-to
page_title: Navigating through months in Timeline view
slug: scheduler-navigating-through-months-in-timeline-view
res_type: kb
---


## HOW-TO  
   
 Navigate through months in Timeline view.  
   
## DESCRIPTION  
   
 Clicking on the previous or next arrow will take you to the previous or next month. This functionality is achieved by dynamically setting the **SelectedDate** and TimelineView.**NumberOfSlots** properties.   
   
## SOLUTION  

````ASPX
<telerik:RadScheduler ID="RadScheduler1" runat="server" SelectedView="TimelineView"
    OnNavigationComplete="RadScheduler1_NavigationComplete">
    <TimelineView ColumnHeaderDateFormat="dd" HeaderDateFormat="M" />
    <DayView UserSelectable="false" />
    <WeekView UserSelectable="false" />
    <MonthView UserSelectable="false" />
    <TimelineView UserSelectable="false" />
</telerik:RadScheduler>
````

````C#
protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack & RadScheduler1.SelectedView == SchedulerViewType.TimelineView)
        {
            int year = RadScheduler1.SelectedDate.Year;
            int month = RadScheduler1.SelectedDate.Month;
            int numberOfDaysInCurrentMonth = DateTime.DaysInMonth(year, month);
            RadScheduler1.SelectedDate = new DateTime(year, month, 1);
            RadScheduler1.TimelineView.NumberOfSlots = numberOfDaysInCurrentMonth;
        }
    }
    protected void RadScheduler1_NavigationComplete(object sender, SchedulerNavigationCompleteEventArgs e)
    {
        if (RadScheduler1.SelectedView == SchedulerViewType.TimelineView)
        {
            int year = RadScheduler1.SelectedDate.Year;
            //We need to add 3 days to make up for the largest possible difference
            //in the number of days for any two months(31-28=3).
            int month = RadScheduler1.SelectedDate.AddDays(3).Month;
            int numberOfDaysInCurrentMonth = DateTime.DaysInMonth(year, month);
            RadScheduler1.SelectedDate = new DateTime(year, month, 1);
            RadScheduler1.TimelineView.NumberOfSlots = numberOfDaysInCurrentMonth;     
        }
    }
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
    If Not IsPostBack And RadScheduler1.SelectedView = SchedulerViewType.TimelineView Then
        Dim year As Integer = RadScheduler1.SelectedDate.Year
        Dim month As Integer = RadScheduler1.SelectedDate.Month
        Dim numberOfDaysInCurrentMonth As Integer = DateTime.DaysInMonth(year, month)
        RadScheduler1.SelectedDate = New DateTime(year, month, 1)
        RadScheduler1.TimelineView.NumberOfSlots = numberOfDaysInCurrentMonth
    End If
End Sub
Protected Sub RadScheduler1_NavigationComplete(sender As Object, e As SchedulerNavigationCompleteEventArgs)
    If RadScheduler1.SelectedView = SchedulerViewType.TimelineView Then
        Dim year As Integer = RadScheduler1.SelectedDate.Year
        'We need to add 3 days to make up for the largest possible difference
        'in the number of days for any two months(31-28=3).
        Dim month As Integer = RadScheduler1.SelectedDate.AddDays(3).Month
        Dim numberOfDaysInCurrentMonth As Integer = DateTime.DaysInMonth(year, month)
        RadScheduler1.SelectedDate = New DateTime(year, month, 1)
        RadScheduler1.TimelineView.NumberOfSlots = numberOfDaysInCurrentMonth
    End If
End Sub
````

   