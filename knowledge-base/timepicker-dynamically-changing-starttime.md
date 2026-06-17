---
title: Dynamically Changing the StartTime in TimePicker
description: Learn how to dynamically update the StartTime and interval of a TimePicker control in UI for ASP.NET AJAX.
type: how-to
page_title: Modifying TimePicker StartTime and Interval Dynamically
meta_title: Modifying TimePicker StartTime and Interval Dynamically
slug: timepicker-dynamically-changing-starttime
tags: timepicker, asp.net ajax, starttime, interval, timeview
res_type: kb
ticketid: 1715636
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>TimePicker for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to dynamically update the `StartTime` and interval of a `RadTimePicker` based on the selected time in another `RadTimePicker`. However, calling `set_startTime` and `set_interval` only updates internal JavaScript properties, and the time slot HTML in the popup does not reflect the changes. Validation works, but the `RadTimePicker` shows the previously rendered time slots.

This knowledge base article also answers the following questions:
- How to update TimePicker time slots dynamically?
- Why does TimePicker show old time slots after setting StartTime in JavaScript?
- How to re-render TimePicker TimeView with a dynamic StartTime?

## Solution

To dynamically update the `StartTime` and interval of the `RadTimePicker` and ensure the changes are reflected in the popup, trigger a server-side re-render of the `RadTimePicker`'s `TimeView`.

1. Enable `AutoPostBack` on the first `RadTimePicker` (e.g., `tpStartTime`) and handle the `SelectedDateChanged` event.
2. Use `RadAjaxManager` to update the second `RadTimePicker` (e.g., `tpEndTime`) on selection change.


````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="tpStartTime">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="tpEndTime" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadTimePicker ID="tpStartTime" runat="server" AutoPostBack="true" OnSelectedDateChanged="tpStartTime_SelectedDateChanged" />
<telerik:RadTimePicker ID="tpEndTime" runat="server" />
````

````C#
protected void tpStartTime_SelectedDateChanged(object sender, SelectedDateChangedEventArgs e)
{
    TimeSpan startTime = e.NewDate.HasValue ? e.NewDate.Value.TimeOfDay : TimeSpan.Zero;

    // Set the new StartTime and interval
    tpEndTime.TimeView.StartTime = startTime;
    tpEndTime.TimeView.Interval = TimeSpan.FromMinutes(15);

    // Clear the end time selection if it is now invalid
    if (tpEndTime.SelectedDate.HasValue && tpEndTime.SelectedDate.Value.TimeOfDay <= startTime)
    {
        tpEndTime.SelectedDate = null;
    }
}
````

### Explanation

- The `StartTime` and `Interval` are updated on the server side in the `SelectedDateChanged` event handler.
- The `RadAjaxManager` ensures that the `tpEndTime` control is re-rendered on the client side after the server-side changes, which updates the time slot HTML in the popup.

## See Also

- [RadTimePicker - SelectedDateChanged Event](https://www.telerik.com/products/aspnet-ajax/documentation/controls/timepicker/server-side-programming/events/selecteddatechanged#selecteddatechanged)
- [RadTimePicker Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/timepicker/overview)
