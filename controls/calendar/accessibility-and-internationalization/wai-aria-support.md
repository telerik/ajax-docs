---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: calendar/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 8
---

# WAI-ARIA Support





## 

The __RadCalendar__, __RadDatePicker__, __RadTimePicker__ and __RadMonthYearPicker__ controls offer__WAI-ARIA__ support which can be easily enabled by setting the __EnableAriaSupport__ server property to __true__.

All ARIA attributes are __lower case__. They are shown in the table below.


>caption  

|  __Control__  |  __Attributes__  |
| ------ | ------ |
| __RadCalendar__ |Role:gridcellRole: rowAria-mulltiselectableAria-selected|
| __RadDatePicker__ |Role:button|
| __RadTimePicker__ |For timeview table:Role:gridAria-atomic:trueAria-labelledby: element idFor rows: role:rowFor cells: role:gridcellFor column headers: role:column headerFor main element:Role:presentation|
| __RadMonthYearPicker__ |For MonthYearTableView element:Role:gridAria-atomic:trueAria-labelledby: element idFor rows: role:rowFor cells: role:gridcellFor column headers: role:column headerFor main element:Role:presentation|

>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [This functionality online](http://demos.telerik.com/aspnet-ajax/calendar/examples/functionality/waiariasupport/defaultcs.aspx)

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
