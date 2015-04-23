---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadCalendar for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: calendar/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 8
---

# WAI-ARIA Support





## 

The **RadCalendar**, **RadDatePicker**, **RadTimePicker** and **RadMonthYearPicker** controls offer**WAI-ARIA** support which can be easily enabled by setting the **EnableAriaSupport** server property to **true**.

All ARIA attributes are **lower case**. They are shown in the table below.


>caption  

|  **Control**  |  **Attributes**  |
| ------ | ------ |
| **RadCalendar** |Role:gridcellRole: rowAria-mulltiselectableAria-selected|
| **RadDatePicker** |Role:button|
| **RadTimePicker** |For timeview table:Role:gridAria-atomic:trueAria-labelledby: element idFor rows: role:rowFor cells: role:gridcellFor column headers: role:column headerFor main element:Role:presentation|
| **RadMonthYearPicker** |For MonthYearTableView element:Role:gridAria-atomic:trueAria-labelledby: element idFor rows: role:rowFor cells: role:gridcellFor column headers: role:column headerFor main element:Role:presentation|

>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [This functionality online](http://demos.telerik.com/aspnet-ajax/calendar/examples/functionality/waiariasupport/defaultcs.aspx)

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
