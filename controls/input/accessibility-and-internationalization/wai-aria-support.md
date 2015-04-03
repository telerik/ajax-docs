---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: input/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 2
---

# WAI-ARIA Support





## 

The __RadInput__, __RadDateInput__, __RadNumericTextBox__ controls offer __WAI-ARIA__support which can be easily enabled by setting the __EnableAriaSupport__ server property to __true__.

All ARIA attributes are __lower case__. They are shown in the table below.


>caption  

|  __Control__  |  __Attributes__  |
| ------ | ------ |
| __RadInput-common__ |Aria-atomic = trueAria-hidden – removed (no longer applicable to current rendering)|
| __RadDateInput__ |Aria-valuemax : max dateAria-valuemin: min date|
| __RadNumericTextBox__ |Aria-valuemax : max valueAria-valuemin: min valueChange:Role:spinbutton|

>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [This functionality online](http://demos.telerik.com/aspnet-ajax/input/examples/common/waiariasupport/defaultcs.aspx)

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
