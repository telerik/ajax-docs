---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadTreeList
description: Check our Web Forms article about WAI-ARIA Support.
slug: treelist/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 4
---

# WAI-ARIA Support





## 

The **RadTreeList** control offers **WAI-ARIA** support which can be easily enabled by setting the **EnableAriaSupport** server property to **true**.

RadTreeList ARIA attributes are **lower case**. They are shown in the table below.


>caption  

|  **Control**  |  **Attributes**  |
| ------ | ------ |
| **RadTreeList** |aria-grabbed; aria-dropeffect; aria-level; aria-checked; aria-hidden; aria-haspopup role:button (on pager); Enabled Aria for inner controls (where supported) in column editors etc.|

>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [This functionality online](https://demos.telerik.com/aspnet-ajax/treelist/examples/waiariasupport/defaultcs.aspx)

 * [WAI-ARIA basic information](https://www.w3.org/WAI/intro/aria)
