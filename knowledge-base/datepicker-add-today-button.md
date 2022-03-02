---
title: Add Today Button in RadDatePicker's Popup Calendar
description: Check out how to add Today Button in RadDatePicker's Popup Calendar. 
type: how-to
page_title: Add Today Button in RadDatePicker's Popup Calendar
slug: datepicker-add-today-button
position: 
tags: 
ticketid: 1555351
res_type: kb
---

## How to

Add a Today Button in the **RadDatePicker** so users can pick today's date with one click in the embedded **Calendar**:


## Description

By default, **RadCalendar** is exposing a built-in *Today* button that is placed inside the FastNavigation menu and can be enabled with the dedicated property - `Calendar.FastNavigationSettings.EnableTodayButtonSelection`. 

In some cases, it is required to have a *Today* button inside the Calendar itself so there is no need to open the FastNavigation menu to reach it.

Here is how to add a custom Today button in the FooterTemplate of the DatePicker's popup Calendar. And then attach its onclick event so it will select the today's date in the **RadDatePicker**

````ASPX
<telerik:RadDatePicker ID="RadDateTimePicker1" runat="server">
    <Calendar runat="server">
        <FooterTemplate>
            <input type="button" value="Today" style="margin-left: 40%" onclick="setTodayDate();return false;" />
        </FooterTemplate>
    </Calendar>
</telerik:RadDatePicker>

<script>
    function setTodayDate() {
        var picker = $find("<%= RadDateTimePicker1.ClientID %>");
        var date = new Date();
        date.setDate(date.getDate());
        picker.set_selectedDate(date);
        picker.hidePopup();
    }
</script>
````

 