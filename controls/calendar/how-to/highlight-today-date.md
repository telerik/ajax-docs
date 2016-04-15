---
title: Highlight Today Date
page_title: Highlight Today Date | RadCalendar for ASP.NET AJAX Documentation
description: Highlight Today Date
slug: calendar/how-to/highlight-today-date
tags: highlight,today,date
published: True
position: 2
---

# Highlight Today Date


There are situations when you may want the today's date in the **RadCalendar** highlighted. You can easily achieve this with couple of lines in the markup.


````ASP.NET
<telerik:RadCalendar RenderMode="Lightweight" runat="server" ID="RadCalendar1">
    <SpecialDays>
        <telerik:RadCalendarDay Repeatable="Today">
            <ItemStyle CssClass="rcToday" />
        </telerik:RadCalendarDay>
    </SpecialDays>
</telerik:RadCalendar>
````



>note 
If you are using **RadDatePicker**  or **RadDateTimePicker** you can use the same approach to highlight the today date in the calendar popup. You need to set the **SpecialDays** for the underlying **Calendar** control.
>



