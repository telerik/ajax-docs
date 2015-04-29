---
title: Date Format Patterns
page_title: Date Format Patterns | RadCalendar for ASP.NET AJAX Documentation
description: Date Format Patterns
slug: calendar/accessibility-and-internationalization/date-format-patterns
tags: date,format,patterns
published: True
position: 2
---

# Date Format Patterns


The table below shows a list of the standard format characters. For each standard pattern, it shows the pattern from the current [CultureInfo]({%slug calendar/accessibility-and-internationalization/specifying-a-culture%}) settings that the pattern represents. The format characters are case-sensitive, for example, 'f' and 'F' represent different patterns.


| Format Character | Description |
| ------ | ------ |
|d|Short date pattern|
|D|Long date pattern|
|f|Full date and time (long date and short time)|
|F|Full date time pattern (long date and long time)|
|g|General (short date and short time)|
|G|General (short date and long time)|
|m, M|Month day pattern|
|r, R|RFC1123 pattern|
|s|Sortable date time pattern (based on ISO 8601) using local time|
|t|Short time pattern|
|T|Long time pattern|
|y|Month year pattern|

The table below shows a list of patterns that can be combined to create date format patterns.The patterns are case-sensitive; for example, "MM" is recognized, but "mm" is not. If the date format pattern contains white-space characters or characters enclosed in single quotation marks, the formatted string will also contain those characters. Characters not defined as part of a format pattern or as format characters are reproduced literally.


| Format Pattern | Description |
| ------ | ------ |
|d|The day of the month. Single-digit days have no leading zero. (Only if used in the context of a longer pattern. A single "d" on its own represents the Short date pattern.)|
|dd|The day of the month. Single-digit days have a leading zero.|
|ddd|The abbreviated name of the day of the week.|
|dddd|The full name of the day of the week.|
|M|The numeric month. Single-digit months have no leading zero. (Only if used in the context of a longer pattern. A single "M" on its own represents the Month day pattern.)|
|MM|The numeric month. Single-digit months have a leading zero.|
|MMM|The abbreviated name of the month.|
|MMMM|The full name of the month.|
|y|The year without the century. If the year without the century is less than 10, with no leading zero. (Only if used in the context of a longer pattern. A single "y" on its own represents the Month year pattern.)|
|yy|the year without the century. If the year without the century is less than 10, with a leading zero.|
|yyy|The year in four digits, including the century.|
|gg|The period or era (e.g. "A.D."). This pattern is ignored if the date to be formatted does not have an associated period or era.|
|h|The hour in a 12-hour clock. Single-digit hours have no leading zero.|
|hh|The hour in a 12-hour clock. Single-digit hours have a leading zero.|
|H|The hour in a 24-hour clock. Single-digit hours have no leading zero.|
|HH|The hour in a 24-hour clock. Single-digit hours have a leading zero.|
|m|The minute. Single-digit minutes have no leading zero. (Only if used in the context of a longer pattern. A single "m" on its own represents the Month day pattern)|
|mm|The minute. Single-digit minutes have a leading zero.|
|s|The second. Single-digit seconds have no leading zero. (Only if used in the context of a longer pattern. A single "s" on its own represents the sortable time pattern.)|
|ss|The second. Single-digit seconds have a leading zero.|
|t|The first character in the AM/PM designator. (Only if used in the context of a longer pattern. A single "t" on its own represents the short time pattern.)|
|tt|The AM/PM designator.|
