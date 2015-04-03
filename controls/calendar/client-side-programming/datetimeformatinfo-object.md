---
title: DateTimeFormatInfo object
page_title: DateTimeFormatInfo object | UI for ASP.NET AJAX Documentation
description: DateTimeFormatInfo object
slug: calendar/client-side-programming/datetimeformatinfo-object
tags: datetimeformatinfo,object
published: True
position: 8
---

# DateTimeFormatInfo object



## 

The __DateTimeFormatInfo__ object is used by the __RadCalendar__ control for formatting date and time values so that they reflect the current culture. It is accessible through the __DateTimeFormatInfo__ property of the [RadCalendar client-side object]({%slug calendar/client-side-programming/radcalendar-object%}).

>note The DateTimeFormatInfo class is defined in the System.Globalization namespace.
>


The following table lists the methods of the __DateTimeFormatInfo__ object:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __FormatDate__ |Array (triplet), string|string|Formats a date, using the specified date and format string (see sample below).|
| __LeadZero__ |integer|string|Formats the integer, adding a leading zero if necessary so that the integer is a minimum of two digits.|

````JavaScript
	     
	     <script type="text/javascript">
	         function OnDateSelected(sender, e) {
	             var calendarDay = e.get_renderDay();
	             if (calendarDay.IsSelected) {
	                 var selectedDate = calendarDay.get_Date();
	                 var calendar = $find("<%= RadCalendar1.ClientID %>");
	                 var shortDatePattern = calendar.DateTimeFormatInfo.ShortDatePattern;
	                 var formattedDate = calendar.DateTimeFormatInfo.FormatDate(selectedDate, shortDatePattern);
	                 alert(formattedDate);
	             }
	         }
	        </script>	
````



The following table lists the properties of the __DateTimeFormatInfo__ object:


| Property | type | Description |
| ------ | ------ | ------ |
| __AbbreviatedDayNames__ |Array|Lists the 3-letter abbreviations for the names of the days of the week, starting with the abbreviation for Sunday at element 0.|
| __DayNames__ |Array|Lists the names of the days of the week, starting with the name for Sunday at element 0.|
| __AbbreviatedMonthNames__ |Array|Lists the 3-letter abbreviations for the names of the months, starting with the abbreviation for January at element 0.|
| __MonthNames__ |Array|Lists the names of the months, starting with the name for January at element 0.|
| __AMDesignator__ |String|The string for the AM designator.|
| __PMDesignator__ |String|The string for the PM designator.|
| __DateSeparator__ |Character|The separator character that appears between parts of a date.|
| __TimeSeparator__ |Character|The separator character that appears between parts of a time value.|
| __FirstDayOfWeek__ |integer|The index of the first day of the week, where 0 indicates Sunday.|
| __FullDateTimePattern__ |String|The format string for the full date time pattern.|
| __LongDatePattern__ |String|The format string for the long date pattern.|
| __LongTimePattern__ |String|The format string for the long time pattern.|
| __MonthDayPattern__ |String|The format string for the month day pattern.|
| __ShortDatePattern__ |String|The format string for the short date pattern.|
| __ShortTimePattern__ |String|The format string for the short time pattern.|
| __YearMonthPattern__ |String|The format string for the year month pattern.|
| __SortableDateTimePattern__ |String|The format string for the sortable date time pattern.|
| __UniversalSortableDateTimePattern__ |String|The format string for the universal sortable date time pattern.|
| __RFC1123Pattern__ |String|The format string for the RFC 1123 pattern.|
| __Calendar__ |Object|A helper object for performing calculations about date and time values.|
| __CalendarWeekRule__ |integer|Used by the Calendar object to determine which week is the first week of the year.|

# See Also

 * [Date Format Patterns]({%slug calendar/accessibility-and-internationalization/date-format-patterns%})
