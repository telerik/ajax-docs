---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadAjaxLoadingPanel
description: Check our Web Forms article about WAI-ARIA Support.
slug: ajaxloadingpanel/accessibility-and-internationalization/wai-aria-support
previous_url: ajax/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 0
---

# WAI-ARIA Support





## 

If your web applications need to be more accessible to people with disabilities, the **RadAjaxLoadingPanel** control offers **WAI-ARIA** support, which a developer can easily enable by setting the **EnableAriaSupport** property to true. **RadAjaxLoadingPanel** WAI-ARIA attributes values are lower case.


>caption  

|  **Control**  |  **Attributes**  |
| ------ | ------ |
| **RadAjaxLoadingPanel** |Aria-busy:true|

>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run an HTML document containing WAI-ARIA attributes through the W3C Validator, it shows errors in the results for any WAI-ARIA attributes. The DOCTYPE declarations do not include any information about the WAI-ARIA attributes and you cannot have a valid document, which includes elements, attributes, and attribute values, not detailed in its DTD-s.
>


## See Also

 * [WAI-ARIA Overview at W3C.org](https://www.w3.org/WAI/intro/aria)
