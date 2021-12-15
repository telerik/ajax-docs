---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadSplitButton
description: Check our Web Forms article about WAI-ARIA Support.
slug: splitbutton/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadSplitButton")

The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadSplitButton** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadSplitButton** control's `EnableAriaSupport` property to `true` and, optionally, set the inner properties ([DescribedBy](https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) and [Label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label)) of the `AriaSettings` composite tag to the desired values as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadSplitButton

````ASP.NET
<%--AriaLabel--%>
<telerik:RadSplitButton ID="RadSplitButton1" runat="server" EnableAriaSupport="true" Text="Split Button with WAI-ARIA attributes">
    <AriaSettings Label="Some Label Value" />
</telerik:RadSplitButton>

<%--DescribedBy--%>
<asp:Label Text="SplitButton aria label" runat="server" ID="Label1" ClientIDMode="Static" />
<telerik:RadSplitButton ID="RadSplitButton2" runat="server" EnableAriaSupport="true" Text="Split Button with WAI-ARIA attributes">
    <AriaSettings DescribedBy="Label1" />
</telerik:RadSplitButton>
````

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.



## See Also

 * [Live Demo: RadSplitButton WAI-ARIA Support](https://demos.telerik.com/aspnet-ajax/splitbutton/wai-aria-support/defaultcs.aspx)

 * [W3C: WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)


