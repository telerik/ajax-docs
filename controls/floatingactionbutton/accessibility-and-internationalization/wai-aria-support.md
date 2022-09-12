---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadFloatingActionButton
description: Check our Web Forms article about WAI-ARIA Support.
slug: floatingactionbutton/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 2
---

# WAI-ARIA Support

**RadFloatingActionButton** follows the WAI-ARIA Authoring Practices for implementing the keyboard navigation for its component role.

The FloatingActionButton uses the *aria-disabled* property to mark the disabled state of the Control or of any of its items when disabled.

>note An issue with the use of WAI-ARIA in HTML documents is that they don’t validate. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>


# See Also

 * [WAI-ARIA basic information](https://www.w3.org/WAI/intro/aria)


