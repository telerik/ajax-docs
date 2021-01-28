---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadDataPager
description: Check our Web Forms article about WAI-ARIA Support.
slug: datapager/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support





## 

The **RadDataPager** control offers **WAI-ARIA** support which can be easily enabled by setting the **EnableAriaSupport** server property to **true**.

RadDataPager ARIA attributes are **lower case**. They are shown in the table below.


>caption  

|  **Control**  |  **Attributes**  |
| ------ | ------ |
| **RadDataPager** |Role: presentationAria-atomic:trueAria-label – control client-side idRole:button for the following buttons (when present):PrevButton, NextButton, FirstButton, LastButton, PageSizeButton, GoToPageButton|

>note When aria support is enabled also turns on the aria support for any related RadInput and RadComboBox controlsin the pager.
>


>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [WAI-ARIA basic information](https://www.w3.org/WAI/intro/aria)
