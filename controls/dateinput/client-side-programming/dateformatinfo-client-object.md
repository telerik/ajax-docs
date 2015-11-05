---
title: DateFormatInfo Client Object
page_title: DateFormatInfo Client Object | RadDateInput for ASP.NET AJAX Documentation
description: DateFormatInfo Client Object
slug: raddateinput/client-side-programming/dateformatinfo-client-object
tags: dateformatinfo,client,object
published: True
position: 8
---

# DateFormatInfo Client Object



##

The DateFormatInfo client object determines how a **RadDateInput** parses dates. It is returned by the **get_dateFormatInfo()** method of the [RadDateInput client-side object]({%slug raddateinput/client-side-programming/raddateinput-client-object%}). The following table lists its properties:


>caption  

| Property | Type | Description |
| ------ | ------ | ------ |
| **AbbreviatedDayNames** |Array|Lists the abbreviated day name strings.|
| **AbbreviatedMonthNames** |Array|Lists the abbreviated month name strings.|
| **AMDesignator** |string|Specifies the string for the AM designator.|
| **DateSeparator** |character|Specifies the date part separator character.|
| **DateSlots** |DateSlots object|The DateSlots object has three properties: **Day** , **Month** , and **Year** . Each has a value of 0, 1, or 2, indicating the position of that date part in a date part triplet.|
| **DayNames** |Array|Lists the full names for each day.|
| **FirstDayOfWeek** |integer|Gives the index of the first day of the week, where Sunday is 0, Monday is 1, and so on.|
| **MonthNames** |Array|Lists the full names of the months.|
| **PMDesignator** |string|Specifies the string for the PM designator.|
| **ShortYearCenturyEnd** |integer|Gives the last year of the 100-year span used to interpret years that contain only 1 or 2 digits.|
| **TimeInputOnly** |boolean|When **true** , values are parsed as representing time values with no date part.|
| **TimeSeparator** |character|The separator character that appears between parts of a time value.|

# See Also

 * [Parsing Dates]({%slug raddateinput/features/parsing-dates%})
