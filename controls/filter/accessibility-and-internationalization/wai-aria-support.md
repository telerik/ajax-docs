---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadFilter
description: Check our Web Forms article about WAI-ARIA Support.
slug: filter/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support





## 

The **RadFilter** control offers **WAI-ARIA** support which can be easily enabled by setting the **EnableAriaSupport** server property to **true**.

RadFilter ARIA attributes are **lower case**. They are shown in the table below.


>caption  

|  **Control**  |  **Attributes**  |
| ------ | ------ |
| **RadFilter** |Aria-atomic:trueRole: presentationAria-label – control client-side idRole: group - on hierarchilcal filter expressions that have child filter expressionsRole: listitem – on filter expressions without childrenAria-level: number specifying the hierarchy level of the filter expressionRole: presentation – on inner div elementsRole:button for the buttons in the filter expressionRole:checkbox – for checkbox in Boolean filter expressionsRole:textbox: for input type textAria-disabled:false for input type text|

>note RadContextMenu is not aria compliant yet.
>


>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [WAI-ARIA basic information](https://www.w3.org/WAI/intro/aria)
