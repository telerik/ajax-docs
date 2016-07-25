---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadPanelBar for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: panelbar/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadPanelBar** control.

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadPanelBar** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the control's **EnableAriaSupport** property to **true** as shown in the example below.

>caption **Example 1**: Setting the **EnalbeAriaSupport** property for **RadPanelBar**

````ASP.NET
<telerik:RadPanelBar runat="server"
    ID="RadPanelBar1"
    RenderMode="Lightweight"
    EnableAriaSupport="true">
</telerik:RadPanelBar>
````
````C#
RadPanelBar1.EnableAriaSupport = true;
````
````VB
RadPanelBar1.EnableAriaSupport = true
````

>note In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](http://www.w3.org/TR/wai-aria/roles#application)
>

>note An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

>note When IE browser is used together with JAWS reader the control UP functionality is not working as in the default keyboard implementation because the reader is using the event and is preventing it from triggering for the control.
>


Enabling WAI-ARIA support of a **RadPanelBar** will also allow you to adjust the [aria-label](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-label) and [aria-describedby](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-describedby) attributes of the control by using the **Label** and **DescribedBy** properties in the **AriaSettings** tag.

>caption Example 2: Adjusting `aria-label` and `aria-describedby` attributes in **RadPanelBar**.

````ASP.NET
<telerik:RadPanelBar runat="server" ID="RadPanelBar1" RenderMode="Lightweight" EnableAriaSupport="true">
    <AriaSettings Label="Label for this panelbar." DescribedBy="describe_panelbar" />
</telerik:RadPanelBar
````


## See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)
