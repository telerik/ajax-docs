---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadNotification
description: Check our Web Forms article about WAI-ARIA Support.
slug: notification/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadNotification")


The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadNotification** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadNotification**'s **EnableAriaSupport** property to **true** as shown in the examples below. Screenreaders will also require this functionality to be enabled.

**Example 1**: Setting the **EnableAriaSupport** property for **RadNotification** in the markup

````XML
<telerik:RadNotification RenderMode="Lightweight" EnableAriaSupport="true" runat="server" ID="RadNotification1"></telerik:RadNotification>
````

**Example 2**: Setting the **EnableAriaSupport** property for **RadNotification** in the code-behind

````C#
RadNotification1.EnableAriaSupport = true;
````
````VB
RadNotification1.EnableAriaSupport = True
````


>note The implementation of the WAI-ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.

>tip According to the WAI-ARIA specifications, the first input in a dialog should get the focus when the dialog opens. In case the **ContentTemplate** of the control is used and it contains inputs, their focus should be handled by the developer. The [OnClientShown event](slug://notification/client-side-programming/events/onclientshown) and the [control's Client-side API](slug://notification/client-side-programming/radnotification-object) can be used for this.



# See Also

 * [W3C: WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)

 * [Demo: RadNotification WAI-ARIA Support](https://demos.telerik.com/aspnet-ajax/notification/examples/waiariasupport/defaultcs.aspx)
  
