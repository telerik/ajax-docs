---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadLightBox for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: lightbox/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 2
---

# WAI-ARIA Support





## 

**RadLightBox** control offers **WAI-ARIA** support which can be easily enabled by setting the **EnableAriaSupport** server property to **true**.

All ARIA attributes are **lower case**. They are shown in the table below.

|  **Control**  |  **Attributes**  |
| ------ | ------ |
| **RadLightBox** |aria-atomic - true; aria-live – assertive; aria-relevant - text; aria-busy - false|


>tip An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
