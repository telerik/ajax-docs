---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadPushButton for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: pushbutton/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadPushButton** control.

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadPushButton** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadPushButton** control's `EnableAriaSupport` property to `true` and, optionally, set the inner properties ([DescribedBy](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) and [Label](http://www.w3.org/TR/wai-aria/states_and_properties#aria-label)) of the `AriaSettings` composite tag to the desired values as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadPushButton

````ASP.NET
<telerik:RadPushButton ID="RadPushButton1" runat="server" EnableAriaSupport="true" Text="Push Button with WAI-ARIA attributes">
	<AriaSettings DescribedBy="someElementId" Label="Some Label Value" />
</telerik:RadPushButton>
````

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.




## See Also

 * [Live Demo: RadPushButton WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/pushbutton/wai-aria-support/defaultcs.aspx)

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)


