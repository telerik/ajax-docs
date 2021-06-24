---
title: How to make the Today button in RadCalendar to actually select the date
description: How to make the Today button in RadCalendar to actually select the date. Check it now!
type: how-to
page_title: How to make the Today button in RadCalendar to actually select the date
slug: calendar-how-to-make-the-today-button-to-actually-select-the-date
res_type: kb
---

## Description  

By default the Today button of the fast navigation window of RadCalendar navigates to the corresponding month view, but does not select the date automatically. The user then may click one of the available date cells to actually make the selection.  
  
![calendar_today](images/calendar-how-to-make-the-today-button-to-actually-select-the-date.png)

## Solution

In order to enable the Today button to make an actual date selection, you can make avail of the [EnableTodayButtonSelection]({%slug calendar/functionality/navigation-controls-settings%}#monthyear-popup) property.  
  
````ASPX
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <Calendar runat="server">
        <FastNavigationSettings EnableTodayButtonSelection="true">
        </FastNavigationSettings>
    </Calendar>
</telerik:RadDatePicker>
````
 
