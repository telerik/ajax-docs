---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadToggleButton for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: togglebutton/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadToggleButton** control.

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadToggleButton** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadToggleButton** control's `EnableAriaSupport` property to `true` and set the inner properties of the `AriaSettings` composite tag to the desired values as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadToggleButton

````ASP.NET
<telerik:RadToggleButton ID="RadToggleButton1" runat="server" EnableAriaSupport="true">
	<AriaSettings DescribedBy="Described By Value" Label="Label Value" />
	<ToggleStates>
		<telerik:ButtonToggleState Text="First state">
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="Second state">
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadToggleButton>
````

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.




## See Also

 * [Live Demo: RadToggleButton WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/togglebutton/examples/wai-aria-support/defaultcs.aspx)

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)


