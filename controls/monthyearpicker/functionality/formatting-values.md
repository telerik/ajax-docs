---
title: Formatting Values
page_title: Formatting Values | RadMonthYearPicker for ASP.NET AJAX Documentation
description: Formatting Values
slug: monthyearpicker/functionality/formatting-values
tags: formatting,values
published: True
position: 3
---

# Formatting Values



By default, the **RadMonthYearPicker** control uses the system locale settings to determine how to format the date values. If you have specified a culture, the values will correspond to the [culture settings]({%slug monthyearpicker/accessibility-and-internationalization/specifying-a-culture%}). You can override any of the default formats using the properties of the embedded **RadDateInput** control.

## Formatting the values in the input area

The embedded **RadDateInput** has two properties that you can use to specify a format for the value as it appears in the input area:

* The **DateFormat** property specifies the format of the control's value when it has focus (when the user can edit the value).

* The **DisplayDateFormat** property specifies the format of the control's value when it does not have focus.

Both properties take a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as a value.

````ASPNET
<telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server">
    <DateInput DateFormat="MM/yyyy"></DateInput>
</telerik:RadMonthYearPicker>
````



>note 
**RadMonthYearPicker** uses **RadDateInput** to render the selected date. Note that incomplete dates are always evaluated taking the current date as a basis. For example, "January 2" means January 2 this year. If the current month is April, an entry of "10" is interpreted as April 10, this year. Therefore if the **DateFormat** property is set to "MM/yyyy" the date input ignores the selected day and tries to parse a string containing month and year values only. However, the parsing logic tries to find a day value first and parses the month value as the day one. Then it parses correctly the rest of the string as the relevant year. Since the control can not find other string value to be parsed as a month, it applies the current month value instead.
>


