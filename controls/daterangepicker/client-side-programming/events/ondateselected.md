---
title: OnDateSelected 
page_title: OnDateSelected - RadDateRangePicker
description: Check our Web Forms article about OnDateSelected.
slug: daterangepicker/client-side-programming/events/ondateselected
tags: ondateselected
published: True
position: 3
---

# OnDateSelected


The **OnDateSelected** client-side event handler is called immediately after the value of the control's selection has changed.

>note The **OnDateSelected** event fires when selection is done on each of the child controls - the StartDatePicker, EndDatePicker or the Calendar.
>

The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_sender()** |Control instance||Returns instance of the Control whose date has been changed - RadCalendar or RadDatePicker|
| **get_shouldPostBack()** |bool||Returns If the control should automatically perform a postback|
| **set_shouldPostBack()** ||bool|Sets If the control should automatically perform a postback|

Check out sample use of this event in the [Client-Side Events demo](https://demos.telerik.com/aspnet-ajax/daterangepicker/client-sideprogramming/client-sideevents/defaultcs.aspx)

## Examples

````ASPX
<telerik:RadDateRangePicker RenderMode="Lightweight" ID="RadDateRangePicker1" runat="server" Width="100%">
    <ClientEvents OnDateSelected="OnDateSelected" />
</telerik:RadDateRangePicker>
````

 - Use get_sender() to define the control that triggered the event and log the selection on the console:

````JavaScript
function OnDateSelected(sender, e) {
    var dateRangePicker = sender;
    var senderChildControl = e.get_sender();
    if (senderChildControl === dateRangePicker.get_startDatePicker() || senderChildControl === dateRangePicker.get_endDatePicker()) {
        //DatePicker triggered the event
        var selectedDate = senderChildControl.get_selectedDate();
        if (selectedDate != null) {
            console.log("OnDateSelected: " + selectedDate.toDateString() + " selected in " + senderChildControl.get_id() + "<br />");
        }
        else {
            console.log("OnDateSelected: Date cleared in " + senderChildControl.get_id() + "<br />");
        }
    }
    else {
        //Calendar triggered the event
        var calendarSelectedDates = senderChildControl.get_selectedDates();
        if (calendarSelectedDates.length == 0) {
            console.log("OnDateSelected: Date range cleared in " + senderChildControl.get_id() + "<br />");
        }
        else {
            if (calendarSelectedDates.length == 1) {
                var selectedDate = new Date(calendarSelectedDates[0])
                console.log("OnDateSelected: " + selectedDate.toDateString() + " selected in " + senderChildControl.get_id() + "<br />");
            }
            else {
                var selectedStartDate = new Date(calendarSelectedDates[0]);
                var selectedEndDate = new Date(calendarSelectedDates[calendarSelectedDates.length - 1]);

                console.log("OnDateSelected: Date Range from " + selectedStartDate.toDateString() + " to " + selectedEndDate.toDateString() + " selected in " + senderChildControl.get_id() + "<br />");
            }
        }
    }
}
````

 - Use set_shouldPostBack() to trigger a Postback when both Start and End date have been set:

````JavaScript
function OnDateSelected(sender, args) {
    // trigger a postback when both start and end dates are selected
    if (sender.get_rangeSelectionStartDate() && sender.get_rangeSelectionEndDate()) {
        args.set_shouldPostBack(true);
    }
}
````

# See Also

 * [Client-side Events Overview]({%slug datepicker/client-side-programming/events/overview%})

 * [Server-side Events Overview]({%slug daterangepicker/server-side-programming/events/overview%})


