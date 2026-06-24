---
title: Dynamically Changing StartTime in RadTimePicker for ASP.NET AJAX
description: Learn how to dynamically update the StartTime of a RadTimePicker while ensuring the TimeView reflects the new settings.
type: how-to
page_title: Updating RadTimePicker StartTime Dynamically in ASP.NET AJAX
meta_title: Updating RadTimePicker StartTime Dynamically in ASP.NET AJAX
slug: timepicker-dynamically-update-starttime
tags: radtimepicker, asp.net ajax, starttime, timeview, dynamic-update, autopostback
res_type: kb
ticketid: 1715636
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX RadTimePicker</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When dynamically changing the `StartTime` of one RadTimePicker based on the selection of another, the changes may not reflect in the popup TimeView. Even after using JavaScript methods like `set_startTime()` and `set_interval()`, the time slot HTML in the TimeView remains unchanged because it is pre-rendered on the server at page load. This results in validation working correctly while the TimeView still shows outdated slots.

This knowledge base article also answers the following questions:
- How do I update the TimeView in RadTimePicker after changing StartTime dynamically?
- Why doesn't RadTimePicker TimeView update after setting a new StartTime?
- How can I ensure RadTimePicker reflects dynamic changes in StartTime?

## Solution

To reliably update the `TimeView`, trigger a server-side re-render of the RadTimePicker using AutoPostBack and the `SelectedDateChanged` event.

1. Enable `AutoPostBack` on the first RadTimePicker (e.g., `tpStartTime`) and handle the `SelectedDateChanged` event.
2. Use a RadAjaxManager to ensure the second RadTimePicker (e.g., `tpEndTime`) updates asynchronously.
3. In the server-side event handler, set the `StartTime` and `Interval` for the second RadTimePicker and clear invalid selections if necessary.

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

    tpEndTime.TimeView.StartTime = startTime;
    tpEndTime.TimeView.Interval = TimeSpan.FromMinutes(15);

    // Clear end time selection if it is now invalid
    if (tpEndTime.SelectedDate.HasValue && tpEndTime.SelectedDate.Value.TimeOfDay <= startTime)
    {
        tpEndTime.SelectedDate = null;
    }
}
````

- `AutoPostBack="true"` ensures that the `SelectedDateChanged` event is triggered when a new time is selected in `tpStartTime`.
- In the server-side event handler, the `StartTime` and `Interval` of `tpEndTime` are updated dynamically.
- The RadAjaxManager ensures the changes to `tpEndTime` are applied without a full-page reload.

## See Also

- [RadTimePicker Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/timepicker/overview)
- [RadTimePicker SelectedDateChanged Event](https://www.telerik.com/products/aspnet-ajax/documentation/controls/timepicker/server-side-programming/events/selecteddatechanged#selecteddatechanged)
- [RadAjaxManager Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/ajaxmanager/overview)
