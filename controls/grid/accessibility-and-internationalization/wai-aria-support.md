---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadGrid
description: Learn how to enable WAI-ARIA support in RadGrid and review the ARIA attributes and roles applied to the grid and its inner controls.
slug: grid/accessibility-and-internationalization/wai-aria-support
components: ["grid"]
tags: wai-aria,support
published: True
position: 10
---

# WAI-ARIA Support





## Enabling WAI-ARIA support

The **RadGrid** control offers **WAI-ARIA** support which can be easily enabled by setting the **EnableAriaSupport** server property to **true**.

RadGrid ARIA attributes are **lower case**. They are shown in the table below.


>caption  

| **Control** | **Attributes and roles** |
| ------ | ------ |
| **RadGrid** | aria-haspopup 
| **RadGrid** | `aria-hidden`, `aria-readonly`, `aria-multiselectable`, `aria-checked`, `aria-grabbed`, `aria-dropeffect`, `aria-level`, `role:group`, `role:listitem`, `role:textbox`, `role:button`, and `role:checkbox`. |
| **Inner controls** | ARIA is enabled where supported in column editors, filter headers, the pager, and other inner controls. |

>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


## See Also

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug grid/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Keyboard Support]({%slug grid/accessibility-and-internationalization/keyboard-support%})
