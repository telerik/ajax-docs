---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadAutoCompleteBox
description: Check our Web Forms article about WAI-ARIA Support.
slug: autocompletebox/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadAutoCompleteBox** control.

The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadAutoCompleteBox** offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the control's **EnableAriaSupport** property to **true** as shown in the example below.

>caption **Example 1**: Setting the **EnalbeAriaSupport** property for **RadAutoCompleteBox**

````ASP.NET
<telerik:RadAutoCompleteBox runat="server"
	ID="RadAutoCompleteBox1"
	RenderMode="Lightweight"
	EnableAriaSupport="true">
</telerik:RadAutoCompleteBox>
````
````C#
RadAutoCompleteBox1.EnableAriaSupport = true;
````
````VB
RadAutoCompleteBox1.EnableAriaSupport = true
````

>note In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#application)
>

>note An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

Enabling WAI-ARIA support of a **RadAutoCompleteBox** will also allow you to adjust the [aria-label](https://www.w3.org/WAI/PF/aria/states_and_properties#aria-label) and [aria-describedby](https://www.w3.org/WAI/PF/aria/states_and_properties#aria-describedby) attributes of the control by using the **Label** and **DescribedBy** properties in the **AriaSettings** tag.

>caption Example 2: Adjusting `aria-label` and `aria-describedby` attributes in **RadAutoCompleteBox**.

````ASP.NET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server" EnableAriaSupport="true">
	<AriaSettings Label="Label for this autocomplete." DescribedBy="describe_autocomplete" />
</telerik:RadAutoCompleteBox>
````


## See Also

 * [W3C: WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)

 * [Demo: RadAutoCompleteBox WAI-ARIA Support](https://demos.telerik.com/aspnet-ajax/autocompletebox/examples/accessibility-and-internationalization/wai-aria-support/defaultcs.aspx)
 
