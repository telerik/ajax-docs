---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadCheckBox for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: checkbox/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadCheckBox")

The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadCheckBox** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadCheckBox** control's `EnableAriaSupport` property to `true` and, optionally, set the inner properties ([DescribedBy](https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) and [Label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label)) of the `AriaSettings` composite tag to the desired values as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadCheckBox

````ASP.NET
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" EnableAriaSupport="true">
	<AriaSettings DescribedBy="someElementId" Label="Some Label Value" />
</telerik:RadCheckBox>
````

>note The implementation of the WAI-ARIA support is achieved entirely on the client side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.




## See Also

 * [Live Demo: RadCheckBox WAI-ARIA Support](https://demos.telerik.com/aspnet-ajax/checkbox/examples/wai-aria-support/defaultcs.aspx)

 * [W3C: WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)


