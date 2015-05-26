---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadWindow for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: window/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadWindow** and **RadWindowManager** controls.

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadWindow** and **RadWindowManager** offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadWindow** / **RadWindowManager** control's **EnableAriaSupport** property to **true** as shown in the example below.

>caption **Example 1**: Setting the **EnalbeAriaSupport** property for **RadWindow** and **RadWindowManager**

````ASP.NET
<telerik:RadWindow EnableAriaSupport="true" runat="server" ID="RadWindow1"></telerik:RadWindow>
<telerik:RadWindowManager EnableAriaSupport="true" runat="server" ID="RadWindowManager1"></telerik:RadWindowManager>
````
````C#
RadWindow1.EnableAriaSupport = true;
RadWindowManager1.EnableAriaSupport = true;
````
````VB
RadWindow1.EnableAriaSupport = true
RadWindowManager1.EnableAriaSupport = true
````

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.


>tip According to the WAI-ARIA specifications, the first input in a dialog should get the focus when the dialog opens.	This is done out of the box for the [RadAlert]({%slug window/alert,-confirm,-prompt-dialogs/radalert-dialog%}), [RadConfirm]({%slug window/alert,-confirm,-prompt-dialogs/radconfirm-dialog%}) and [RadPrompt]({%slug window/alert,-confirm,-prompt-dialogs/radprompt-dialog%}) dialogs.	For custom **RadWindows** this should be done by the developer.


>note  **RadWindows** in the Windows collection of a **RadWindowManager** , or ones dynamically created by a manager,will inherit the value of its **EnableAriaSupport** property.


## See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)

 * [Demo: RadWindow WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/window/examples/waiariasupport/defaultcs.aspx)
