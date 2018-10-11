---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadButton for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: button/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadButton** control.

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadButton** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadButton** control's `EnableAriaSupport` property to `true` as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadButton

````ASP.NET
<telerik:RadButton RenderMode="Lightweight" ID="RadButton1" runat="server" EnableAriaSupport="true" Text="Button with WAI-ARIA attributes">
</telerik:RadButton>
````

>tip The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.




## See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)


