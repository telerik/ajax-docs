---
title: Formatting Values
page_title: Formatting Values | RadDatePicker for ASP.NET AJAX Documentation
description: Formatting Values
slug: datepicker/formatting-values
tags: formatting,values
published: True
position: 5
---

# Formatting Values



By default, the **RadDatePicker** control uses the system locale settings to determine how to format date values. If you have specified a culture, **RadDatePicker** will display values based on the [culture settings]({%slug datepicker/accessibility-and-internationalization/specifying-a-culture%}). You can override any of the default formats using the properties of the embedded **RadDateInput** and **RadCalendar** controls.

## Formatting the values in the input area

The embedded **RadDateInput** has two properties that you can use to specify a format for the value as it appears in the input area:

* The **DateFormat** property specifies the format of the control's value when it has focus (when the user can edit the value).

* The **DisplayDateFormat** property specifies the format of the control's value when it does not have focus.

Both properties take a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as a value.

````ASPNET
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <DateInput
         DateFormat="MMM d  yyyy"
         DisplayDateFormat="dddd, MMMM  d, yyyy">
    </DateInput>
</telerik:RadDatePicker>
````



>note 
**RadDatePicker**, **RadDateTimePicker** and **RadMonthYearPicker** uses **RadDateInput** to render the selected date. Note that incomplete dates are always evaluated taking the current date as a basis. For example, "January 2" means January 2 this year. If the current month is April, an entry of "10" is interpreted as April 10, this year. Therefore if the **DateFormat** property is set to "MM/yyyy" the date input ignores the selected day and tries to parse a string containing month and year values only. However, the parsing logic tries to find a day value first and parses the month value as the day one. Then it parses correctly the rest of the string as the relevant year. Since the control can not find other string value to be parsed as a month, it applies the current month value instead.
>


## Formatting values on the embedded popup calendar

The embedded **RadCalendar** control is present in **RadDatePicker** and **RadDateTimePicker**. It has two properties that you can use to configure the format of dates:

* The **TitleFormat** property specifies the format of the date that appears in the title bar.

* The **DayCellToolTipFormat** property specifies the format of the date that appears when the user hovers the mouse over a cell in the calendar.

Both properties take a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as a value.

In addition, the **CellDayFormat** property lets you specify how to format the numbers that label each day in the day matrix. This is a standard ASP.NET number format string.

````ASPNET
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
     <Calendar UseColumnHeadersAsSelectors="False" UseRowHeadersAsSelectors="False"
         CellDayFormat="[ %d ]"
         DayCellToolTipFormat="MMM d, yyyy"
         TitleFormat="MMM yy">
     </Calendar>
</telerik:RadDatePicker>
````


