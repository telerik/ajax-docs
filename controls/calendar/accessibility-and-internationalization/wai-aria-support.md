---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadCalendar
description: Check our Web Forms article about WAI-ARIA Support.
slug: calendar/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 6
---

# WAI-ARIA Support


The **RadCalendar** control offers **WAI-ARIA** support which can be easily enabled by setting the **EnableAriaSupport** server property to **true**.

All ARIA attributes are **lower case**. They are shown in the table below.


>caption  

|  Control  |  Attributes  |
| ------ | ------ |
| **RadCalendar** | Role:gridcell, Role: row, Aria-mulltiselectable, Aria-selected |


>note 
An issue with the use of WAI-ARIA in HTML documents is that they do not pass validation. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document that includes elements, attributes, and attribute values, not detailed in its DTDs.
>


# See Also

 * [This functionality online](https://demos.telerik.com/aspnet-ajax/calendar/examples/functionality/waiariasupport/defaultcs.aspx)

 * [WAI-ARIA basic information](https://www.w3.org/WAI/intro/aria)
