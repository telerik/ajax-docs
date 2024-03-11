---
title: Display an indicator at the current time in Day/Week view
description: Using CSS to display an indicator at the current time in Day/Week view of the Scheduler.
type: how-to
page_title: Display an indicator at the current time in Day/Week view. | Scheduler 
slug: scheduler-display-indicator-at-the-current-time-in-day-and-week-view
res_type: kb
ticket-id: 1642811
---

## ENVIRONMENT

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms Scheduler for ASP.NET AJAX</td>
    </tr>
</table>

## DESCRIPTION

In certain scenarios, you may wish to incorporate a horizontal indicator to denote the current time within the Day or Week view of the Scheduler.

## SOLUTION  

While the Scheduler does not natively support this feature, you can achieve a comparable outcome by utilizing a workaround. Specifically, you can use the [`TimeSlotCreated`]({%slug scheduler/server-side-programming/server-events/timeslotcreated%}) event to apply a CSS class to the current time slot. This method allows for custom styling and functionality to highlight or modify the appearance of the current time slot in the Scheduler.

Example

````CSS
html body .RadScheduler .nowCss {
    border-bottom: 1px solid red;
}
````
````C#
protected void RadScheduler1_TimeSlotCreated(object sender, TimeSlotCreatedEventArgs e)
{
    if ((e.TimeSlot.End < DateTime.Now.AddMinutes(30)) && (e.TimeSlot.End > DateTime.Now))
    {
        e.TimeSlot.CssClass = "nowCss";
    }
}
````
````VB
Protected Sub RadScheduler1_TimeSlotCreated(ByVal sender As Object, ByVal e As TimeSlotCreatedEventArgs)
    If (e.TimeSlot.[End] < DateTime.Now.AddMinutes(30)) AndAlso (e.TimeSlot.[End] > DateTime.Now) Then
        e.TimeSlot.CssClass = "nowCss"
    End If
End Sub
````

### See Also

* [Display indicator at the current time in TimeLine view](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/scheduler-display-indicator-at-the-current-time)
* [RadScheduler horizontal time line](https://www.telerik.com/forums/408602-radscheduler-horizontal-time-line)
