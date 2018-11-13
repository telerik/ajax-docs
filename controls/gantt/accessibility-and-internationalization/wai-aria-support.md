---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadGantt for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: gantt/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support





## 

The **RadGantt** offers [WAI-ARIA](http://www.w3.org/WAI/intro/aria) support and it is enabled by default for the control.

>note In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](http://www.w3.org/TR/wai-aria/roles#application)
>

>note An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
 
 * [Documentation: WCAG 2.0 and Section 508 Accessibility Compliance]({%slug gantt/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%}) 
 
 * [Demo: WCAG 2.0 and Section 508 Accessibility Compliance](http://demos.telerik.com/aspnet-ajax/gantt/examples/accessibility-and-internationalization/accessibility-compliance/defaultcs.aspx)
