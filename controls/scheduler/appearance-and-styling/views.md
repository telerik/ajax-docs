---
title: Views
page_title: Views | RadScheduler for ASP.NET AJAX Documentation
description: Views
slug: scheduler/appearance-and-styling/views
tags: views
published: False
position: 2
---

# Views



## Overview

RadScheduler displays appointments in five basic views: Day view, Week view, Month view, Timelineview, and Multi-Day view. The **SelectedView** property specifies which of theseviews the scheduler uses when it first appears. By default, the user can move between Day, Week, Month,Timeline, and Multi-Day views using the view tabs. You can remove these controls, preventing the userfrom changing the view, by setting the **ShowViewTabs** property to **False**. You can remove specific view tab bysetting the **UserSelectable** property to **False**.

>caution If you try to restrict the scheduler to Month view, be aware that it allows the user to toggleinto Day View using the **more...** link when the number of appointments in a dayexceeds the limit set by the **MonthVisibleAppointmentsPerDay** property. You canprevent this using the[NavigationCommand]({%slug scheduler/server-side-programming/server-events/navigationcommand%})event.
>


## Resource Grouping

If custom [Resources]({%slug scheduler/design-time/custom-resources-and-attributes%}) are defined, the data shown in RadScheduler can be grouped by Resources. Resource Grouping is available in **all views**.To enable it you must set the **GroupBy** property to the name of the Resource by whichyou want data to be grouped. Grouping is available only by one Resource with an exception for the special 'Date' Resource. If you set the **GroupBy** property to **"Date,[ResourceName]"**, data will be grouped by the specified Resource as well as by Date.

In addition, you can set the **GroupingDirection**propertyto **Horizontal**or **Vertical** to specify the direction of thegrouping (as the property name implies). This functionality is also available in **all views**.

## Day View

![Day view](images/scheduler_dayview.png)

## Week View

![Week view](images/scheduler_weekview.png)

## Month View

![Month view](images/scheduler_monthview.png)

## Timeline View

![Timeline view](images/scheduler_timelineview.PNG)

## Timeline View Grouped by Resource

![Timeline View group by resource](images/scheduler_timelineviewgroupbyresource.PNG)

## Timeline View Grouped by Date and Resource

![Timeline view group by date and resource](images/scheduler_timelineviewgroupbydateandresource.PNG)



**Multi-Day View**

![Multi-day view](images/scheduler_multidayview.png)



**Multi-Day View grouped by Resource**



![multi-day view grouped by resource](images/scheduler_multidayviewbyresource.png)

# See Also

 * [Navigating RadScheduler]({%slug scheduler/usability/navigating-radscheduler%})
