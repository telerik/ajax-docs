---
title: Formatting Values
page_title: Formatting Values | RadTimePicker for ASP.NET AJAX Documentation
description: Formatting Values
slug: timepicker/functionality/formatting-values
tags: formatting,values
published: True
position: 4
---

# Formatting Values



By default, the **RadTimePicker** control uses the system locale settings to determine how they format date and time values. If you have specified a culture, they display their values based on the [culture settings]({%slug calendar/accessibility-and-internationalization/specifying-a-culture%}). You can override any of the default formats using the properties of the embedded **RadDateInput**, **RadCalendar** and **RadTimeView** controls.

## Formatting the values in the input area

The embedded **RadDateInput** control present **RadTimePicker** has two properties that you can use to specify a format for the value as it appears in the input area:

* The **DateFormat** property specifies the format of the control's value when it has focus (when the user can edit the value).

* The **DisplayDateFormat** property specifies the format of the control's value when it does not have focus.

Both properties take a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as a value.

````ASPNET
<telerik:RadTimePicker RenderMode="Lightweight" ID="RadTimePicker1" runat="server">
   <DateInput
       DateFormat="hh:mm t"
       DisplayDateFormat="hh:mm tt">
   </DateInput>
</telerik:RadTimePicker>
````



## Formatting values in the popup time view

The value for the **TimeFormat** property of the embedded **RadTimeView** is a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) that controls how it displays the time values it displays for the user to choose.

````ASPNET
<telerik:RadTimePicker RenderMode="Lightweight" ID="RadTimePicker1" runat="server">
    <TimeView TimeFormat="h:mm t"></TimeView>
</telerik:RadTimePicker>
````


