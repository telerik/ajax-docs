---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadCheckBoxList
description: Check our Web Forms article about WAI-ARIA Support.
slug: checkboxlist/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadCheckBoxList")

The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadCheckBoxList** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadCheckBoxList** control's `EnableAriaSupport` property to `true` and, optionally, set the inner properties ([DescribedBy](https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) and [Label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label)) of the `AriaSettings` composite tag to the desired values as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadCheckBoxList

````ASP.NET
<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1" EnableAriaSupport="true">
    <Items>
        <telerik:ButtonListItem Text="English" Selected="true" />
        <telerik:ButtonListItem Text="German" />
        <telerik:ButtonListItem Text="French" />
    </Items>
</telerik:RadCheckBoxList>
````

>note The implementation of the WAI-ARIA support is achieved entirely on the client side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.




## See Also

 * [W3C: WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)


