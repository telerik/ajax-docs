---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadAsyncUpload
description: Check our Web Forms article about WAI-ARIA Support.
slug: asyncupload/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadAsyncUpload** control.

The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadAsyncUpload** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the control's **EnableAriaSupport** property to **true** as shown in the example below.

>caption **Example 1**: Setting the **EnalbeAriaSupport** property for **RadAsyncUpload**

````ASP.NET

<telerik:RadAsyncUpload runat="server"
	ID="RadAsyncUpload1"
	RenderMode="Lightweight"
	EnableAriaSupport="true">
</telerik:RadAsyncUpload>

````
````C#

RadAsyncUpload1.EnableAriaSupport = true;

````
````VB

RadAsyncUpload1.EnableAriaSupport = true

````

>note In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#application)
>

>note An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

>note The implementation of the WAI-ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass WAI-ARIA validation if they are added on the server.
>


## See Also

 * [W3C: WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)

 * [Demo: WCAG 2.0 and Section 508 Accessibility Compliance](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/accessibility/defaultcs.aspx)
 
