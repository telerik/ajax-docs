---
title: DateFormatInfo Client Object
page_title: DateFormatInfo Client Object | RadInput for ASP.NET AJAX Documentation
description: DateFormatInfo Client Object
slug: input/client-side-programming/dateformatinfo-client-object
tags: dateformatinfo,client,object
published: True
position: 8
---

# DateFormatInfo Client Object



## 

The DateFormatInfo client object determines how a __RadDateInput__parses dates. It is returned by the __get_dateFormatInfo()__ method of the [RadDateInput client-side object]({%slug input/client-side-programming/raddateinput-client-object%}). The following table lists its properties:


>caption  

| Property | Type | Description |
| ------ | ------ | ------ |
| __AbbreviatedDayNames__ |Array|Lists the abbreviated day name strings.|
| __AbbreviatedMonthNames__ |Array|Lists the abbreviated month name strings.|
| __AMDesignator__ |string|Specifies the string for the AM designator.|
| __DateSeparator__ |character|Specifies the date part separator character.|
| __DateSlots__ |DateSlots object|The DateSlots object has three properties: __Day__ , __Month__ , and __Year__ . Each has a value of 0, 1, or 2, indicating the position of that date part in a date part triplet.|
| __DayNames__ |Array|Lists the full names for each day.|
| __FirstDayOfWeek__ |integer|Gives the index of the first day of the week, where Sunday is 0, Monday is 1, and so on.|
| __MonthNames__ |Array|Lists the full names of the months.|
| __PMDesignator__ |string|Specifies the string for the PM designator.|
| __ShortYearCenturyEnd__ |integer|Gives the last year of the 100-year span used to interpret years that contain only 1 or 2 digits.|
| __TimeInputOnly__ |boolean|When __true__ , values are parsed as representing time values with no date part.|
| __TimeSeparator__ |character|The separator character that appears between parts of a time value.|

# See Also

 * [Parsing Dates]({%slug input/raddateinput/parsing-dates%})
