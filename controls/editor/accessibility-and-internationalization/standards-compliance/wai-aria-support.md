---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadEditor
description: Check our Web Forms article about WAI-ARIA Support.
slug: editor/accessibility-and-internationalization/standards-compliance/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro-two-controls "control1: RadEditor, control2: AccessibleRadEditor")

The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadEditor** and **AccessibleRadEditor** offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadEditor** / **AccessibleRadEditor** control's **EnableAriaSupport** property to **true** as shown in the example below.

>caption Example 1: Setting the **EnableAriaSupport** property for **RadEditor** and **AccessibleRadEditor**


````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" EnableAriaSupport="true" runat="server" ID="RadEditor1"></telerik:RadEditor>
<telerik:AccessibleRadEditor EnableAriaSupport="true" runat="server" ID="AccessibleRadEditor1"></telerik:AccessibleRadEditor>
````
````C#
RadEditor1.EnableAriaSupport = true;
AccessibleRadEditor1.EnableAriaSupport = true;
````
````VB
RadEditor1.EnableAriaSupport = True
AccessibleRadEditor1.EnableAriaSupport = True
````

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.


## See Also

 * [W3C: WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
