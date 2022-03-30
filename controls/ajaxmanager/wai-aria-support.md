---
title: WAI-ARIA Support
page_title: AjaxManager WAI-ARIA Support
description: "Learn about the accessibility support provided by the Telerik UI for ASP.NET AjaxManager."
slug: ajaxmanager/accessibility-and-internationalization/wai-aria-support
previous_url: controls/ajaxmanager/accessibility-and-internationalization/wai-aria-support
tags: telerik, aspnet, ajax, ajaxmanager, waiaria, support, accessibility
published: True
position: 8
---

# WAI-ARIA Support

The AjaxManager provides the WAI-ARIA accessibility support for people with disabilities. 

To enable WAI-ARIA, set the `EnableAriaSupport` server property to `true`. All WAI-ARIA attribute values are lowercase.

The AjaxManager supports the `Aria-live: assertive` WAI-ARIA property. 

> HTML documents using WAI-ARIA do not validate and the W3C Validator shows errors in the results for any WAI-ARIA attributes. The `DOCTYPE` declarations do not include any information about the WAI-ARIA attributes and you cannot have a valid document, which includes elements, attributes, and attribute values, that are not detailed in its DTDs.


## See Also

* [WAI-ARIA Overview at W3C.org](https://www.w3.org/WAI/intro/aria)
