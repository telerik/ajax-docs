---
title: Displaying Appointment Count in RadScheduler MonthView
description: Learn how to show the count of appointments for each day in the MonthView of the RadScheduler for UI for ASP.NET AJAX.
type: how-to
page_title: Setting Up Daily Appointment Counts in RadScheduler MonthView
meta_title: Setting Up Daily Appointment Counts in RadScheduler MonthView
slug: scheduler-monthview-daily-appointment-count
tags: scheduler, ui for asp.net ajax, timeslotcreated, monthview, daily appointment count
res_type: kb
ticketid: 1695244
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Scheduler for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to show the count of appointments for each day in the MonthView of the RadScheduler control for UI for ASP.NET AJAX. My stored procedure also returns the daily count, so I need guidance for either using the built-in appointment count or mapping my stored procedure results.

This knowledge base article also answers the following questions:

- How to customize RadScheduler MonthView cells?
- How to display appointment counts using RadScheduler TimeSlotCreated?

## Solution

Use the [TimeSlotCreated](https://www.telerik.com/products/aspnet-ajax/documentation/controls/scheduler/server-side-programming/server-events/timeslotcreated) server-side event to customize each day cell in the MonthView of the RadScheduler. You can use `e.TimeSlot.Appointments.Count` to display the count of built-in appointments or map the results of your stored procedure to show the daily count.

Example Using Built-In Appointment Count

````C#
protected void RadScheduler1_TimeSlotCreated(object sender, TimeSlotCreatedEventArgs e)
{
    if (RadScheduler1.SelectedView == SchedulerViewType.MonthView)
    {
        int count = e.TimeSlot.Appointments.Count;

        if (count > 0)
        {
            RadLabel lbl = new RadLabel()
            {
                Text = $"<div>{count}</div>",
                CssClass = "daily-count-label",
            };

            e.TimeSlot.Control.Controls.Add(lbl); // Add label to the day cell
        }
    }
}
````

Example Styling for Appointment Count

````CSS
.daily-count-label {
    background-color: red;
    border-radius: 50%;
    color: white;
    padding: 5px;
}
````

