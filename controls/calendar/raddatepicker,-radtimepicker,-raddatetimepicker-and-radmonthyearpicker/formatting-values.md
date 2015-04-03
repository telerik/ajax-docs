---
title: Formatting Values
page_title: Formatting Values | UI for ASP.NET AJAX Documentation
description: Formatting Values
slug: calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/formatting-values
tags: formatting,values
published: True
position: 5
---

# Formatting Values



By default, the __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__ controls use the system locale settings to determine how they format date and time values. If you have specified a culture, they display their values based on the [culture settings]({%slug calendar/accessibility-and-internationalization/specifying-a-culture%}). You can override any of the default formats using the properties of the embedded __RadDateInput__, __RadCalendar__, and __RadTimeView__ controls.

## Formatting the values in the input area

The embedded __RadDateInput__ control is present in __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__.It has two properties that you can use to specify a format for the value as it appears in the input area:

* The __DateFormat__ property specifies the format of the control's value when it has focus (when the user can edit the value).

* The __DisplayDateFormat__ property specifies the format of the control's value when it does not have focus.

Both properties take a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as a value.

````ASPNET
	     
	
	<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
	    <DateInput
	         DateFormat="MMM d  yyyy"
	         DisplayDateFormat="dddd, MMMM  d, yyyy">
	    </DateInput>
	</telerik:RadDatePicker>
	<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
	    <DateInput
	        DateFormat="M/d/yyyy hh:mm tt"
	        DisplayDateFormat="MMMM d, yyyy  hh:mm tt"  >
	    </DateInput>
	</telerik:RadDateTimePicker>
	<telerik:RadTimePicker ID="RadTimePicker1" runat="server">
	   <DateInput
	       DateFormat="hh:mm t"
	       DisplayDateFormat="hh:mm tt">
	   </DateInput>
	</telerik:RadTimePicker>
````



>note RadDatePicker, RadDateTimePicker and RadMonthYearPicker uses RadDateInput to render the selected date.Note that incomplete dates are always evaluated taking the current date as a basis. For example, "January 2" means January 2 this year.If the current month is April, an entry of "10" is interpreted as April 10, this year.Therefore if the DateFormat property is set to "MM/yyyy" the date input ignores the selected day and tries to parse a string containing month and year values only.However the parsing logic tries to find a day value first and parses the month value as the day one. Then it parses correctly the rest of the string as the relevant year. Since the control can not find other string value to be parsed as a month, it applies the current month value instead.
>


## Formatting values on the embedded popup calendar

The embedded __RadCalendar__ control is present in __RadDatePicker__ and __RadDateTimePicker__.It has two properties that you can use to configure the format of dates:

* The __TitleFormat__ property specifies the format of the date that appears in the title bar.

* The __DayCellToolTipFormat__ property specifies the format of the date that appears when the user hovers the mouse over a cell in the calendar.

Both properties take a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as a value.

In addition, the __CellDayFormat__ property lets you specify how to format the numbers that label each day in the day matrix. This is a standard ASP.NET number format string.

````ASPNET
	     
	<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
	     <Calendar UseColumnHeadersAsSelectors="False" UseRowHeadersAsSelectors="False"
	         CellDayFormat="[ %d ]"
	         DayCellToolTipFormat="MMM d, yyyy"
	         TitleFormat="MMM yy">
	     </Calendar>
	</telerik:RadDatePicker>
````



## Formatting values in the popup time view

The embedded __RadTimeView__ control is present in __RadTimePicker__ and __RadDateTimePicker__ controls. The value of its __TimeFormat__ property is a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) that controls how it displays the time values it displays for the user to choose.

````ASPNET
	     
	<telerik:RadTimePicker ID="RadTimePicker1" runat="server">
	    <TimeView TimeFormat="h:mm t"></TimeView>
	</telerik:RadTimePicker>
````


