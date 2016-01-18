---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadTooltip for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: tooltip/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 2
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro-two-controls "control1: RadToolTip, control2: RadToolTipManager")


The [WAI-ARIA Suite	](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadToolTip** and **RadToolTipManager** offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadToolTip** / **RadToolTipManager** contol's **EnableAriaSupport** property to **true** as shown in the example below.

**Example 1**: Setting the **EnalbeAriaSupport** property for **RadToolTip** and **RadToolTipManager**.



````ASP.NET
<telerik:RadToolTip EnableAriaSupport="true" runat="server" ID="RadToolTip1"></telerik:RadToolTip>
<telerik:RadToolTipManager EnableAriaSupport="true" runat="server" ID="RadToolTipManager1"></telerik:RadToolTipManager>
````
````C#
RadToolTip1.EnableAriaSupport = true;
RadToolTipManager.EnableAriaSupport = true;
````
````VB
RadToolTip1.EnableAriaSupport = True
RadToolTipManager1.EnableAriaSupport = True
````



>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.



>tip According to the WAI-ARIA specifications, the first input in a dialog should get the focus when the dialog opens. We have no control over the content, so this should be done by the developer. The [OnClientShow event]({%slug tooltip/client-side-programming/events/onclientshow%}) and the [Client-side API of the control]({%slug tooltip/client-side-programming/radtooltip-object%}) can be used for this.



>note  **RadToolTips** created by a **RadToolTipManager** will inherit the value of its **EnableAriaSupport** property.



# See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)

 * [Demo: RadTooltip WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/tooltip/examples/waiariasupport/defaultcs.aspx)
