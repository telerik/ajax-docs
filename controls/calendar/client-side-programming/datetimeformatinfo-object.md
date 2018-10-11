---
title: DateTimeFormatInfo object
page_title: DateTimeFormatInfo object | RadCalendar for ASP.NET AJAX Documentation
description: DateTimeFormatInfo object
slug: calendar/client-side-programming/datetimeformatinfo-object
tags: datetimeformatinfo,object
published: True
position: 8
---

# DateTimeFormatInfo object



The **DateTimeFormatInfo** object is used by the **RadCalendar** control for formatting date and time values so that they reflect the current culture. It is accessible through the **DateTimeFormatInfo** property of the [RadCalendar Client-side Object]({%slug calendar/client-side-programming/radcalendar-object%}).

>tip 
The **DateTimeFormatInfo** class is defined in the **System.Globalization** namespace.
>


The following table lists the methods of the **DateTimeFormatInfo** object:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **FormatDate** |Array (triplet), string|string|Formats a date, using the specified date and format string (see sample below).|
| **LeadZero** |integer|string|Formats the integer, adding a leading zero if necessary so that the integer is a minimum of two digits.|

````JavaScript
<script type="text/javascript">
	function OnDateSelected(sender, e) {
        var calendarDay = e.get_renderDay();
        if (calendarDay.IsSelected) {
            var selectedDate = calendarDay.get_date();
            var calendar = $find("<%= RadCalendar1.ClientID %>");
            var shortDatePattern = calendar.DateTimeFormatInfo.ShortDatePattern;
            var formattedDate = calendar.DateTimeFormatInfo.FormatDate(selectedDate, shortDatePattern);
            alert(formattedDate);
        }
    }
</script>	
````



The following table lists the properties of the **DateTimeFormatInfo** object:


| Property | type | Description |
| ------ | ------ | ------ |
| **AbbreviatedDayNames** |Array|Lists the 3-letter abbreviations for the names of the days of the week, starting with the abbreviation for Sunday at element 0.|
| **DayNames** |Array|Lists the names of the days of the week, starting with the name for Sunday at element 0.|
| **AbbreviatedMonthNames** |Array|Lists the 3-letter abbreviations for the names of the months, starting with the abbreviation for January at element 0.|
| **MonthNames** |Array|Lists the names of the months, starting with the name for January at element 0.|
| **AMDesignator** |String|The string for the AM designator.|
| **PMDesignator** |String|The string for the PM designator.|
| **DateSeparator** |Character|The separator character that appears between parts of a date.|
| **TimeSeparator** |Character|The separator character that appears between parts of a time value.|
| **FirstDayOfWeek** |integer|The index of the first day of the week, where 0 indicates Sunday.|
| **FullDateTimePattern** |String|The format string for the full date time pattern.|
| **LongDatePattern** |String|The format string for the long date pattern.|
| **LongTimePattern** |String|The format string for the long time pattern.|
| **MonthDayPattern** |String|The format string for the month day pattern.|
| **ShortDatePattern** |String|The format string for the short date pattern.|
| **ShortTimePattern** |String|The format string for the short time pattern.|
| **YearMonthPattern** |String|The format string for the year month pattern.|
| **SortableDateTimePattern** |String|The format string for the sortable date time pattern.|
| **UniversalSortableDateTimePattern** |String|The format string for the universal sortable date time pattern.|
| **RFC1123Pattern** |String|The format string for the RFC 1123 pattern.|
| **Calendar** |Object|A helper object for performing calculations about date and time values.|
| **CalendarWeekRule** |integer|Used by the Calendar object to determine which week is the first week of the year.|

# See Also

 * [Date Format Patterns]({%slug calendar/accessibility-and-internationalization/date-format-patterns%})
