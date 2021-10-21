---
title: Set Default Time to RadDateTimePicker
description: Set Default Time to RadDateTimePicker. Check it now!
type: how-to
page_title: Set Default Time to RadDateTimePicker
slug: datetimepicker-set-default-time
res_type: kb
---

## Description 
 Generally, you can select an initial date and time for the picker control using its `SelectedDate` property. However, if you want the control to be empty until the user selects a date, when a date is actually selected, the time will be automatically set to `12:00 AM` midnight.    
  

## Solution

In order to configure the control to set your predefined time automatically when a date is selected, you can use the following approach:

````ASP.NET
<telerik:RadDateTimePicker runat="server" ID="RadDateTimePicker1">
    <TimeView runat="server" StartTime="08:00" EndTime="20:00"
        OnClientTimeSelecting="timeSelecting" />
    <ClientEvents OnDateSelected="dateSelected" />
    <DateInput runat="server">
        <ClientEvents OnValueChanging="valueChanging" />
    </DateInput>
</telerik:RadDateTimePicker>
````


````JavaScript
<script type="text/javascript">
    // using a variable to prevent infinite loop
    var isTimeSet = false;
    function timeSelecting(sender, args) {
        isTimeSet = true;
    }
    function dateSelected(sender, args) {
        if (args.get_newDate() && !isTimeSet) {
            args.set_cancel(true);
            isTimeSet = true;
            sender.get_timeView().setTime(8, 0, 0, 0);
        }
        if (isTimeSet) {
            isTimeSet = false;
        }
    }
    function valueChanging(sender, args) {
        if (args.get_newValue().indexOf(":") > 0) {
            isTimeSet = true;
        }
    }
</script>
````






