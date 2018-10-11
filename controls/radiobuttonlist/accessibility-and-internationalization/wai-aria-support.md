---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadRadioButtonList for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: radiobuttonlist/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadRadioButtonList")

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadRadioButtonList** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadRadioButtonList** control's `EnableAriaSupport` property to `true` and, optionally, set the inner properties ([DescribedBy](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby) and [Label](http://www.w3.org/TR/wai-aria/states_and_properties#aria-label)) of the `AriaSettings` composite tag to the desired values as shown in **Example 1**.

>caption **Example 1**: Enabling WAI-ARIA support for RadRadioButtonList

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1" EnableAriaSupport="true">
    <Items>
        <telerik:RadioButtonListItem Text="English" Selected="true" />
        <telerik:RadioButtonListItem Text="German" />
        <telerik:RadioButtonListItem Text="French" />
    </Items>
</telerik:RadRadioButtonList>
````

>tip The implementation of the WAI-ARIA support is achieved entirely on the client side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.




## See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)


