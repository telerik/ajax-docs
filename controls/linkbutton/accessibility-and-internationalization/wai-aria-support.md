---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadLinkButton for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: linkbutton/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadLinkButton")

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadLinkButton** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadLinkButton** control's `EnableAriaSupport` property to `true` and, optionally, set the inner properties ([DescribedBy](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) and [Label](http://www.w3.org/TR/wai-aria/states_and_properties#aria-label)) of the `AriaSettings` composite tag to the desired values as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadLinkButton

````ASP.NET
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" EnableAriaSupport="true" Text="Link Button with WAI-ARIA attributes" NavigateUrl="http://www.w3.org/WAI/intro/aria">
	<AriaSettings DescribedBy="someElementId" Label="Some Label Value" />
</telerik:RadLinkButton>
````

>tip The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.




## See Also

 * [Live Demo: RadLinkButton WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/linkbutton/wai-aria-support/defaultcs.aspx)

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)


