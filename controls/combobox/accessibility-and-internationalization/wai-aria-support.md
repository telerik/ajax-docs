---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadComboBox for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: combobox/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadComboBox")

The [ WAI-ARIA Suite ](http://www.w3.org/WAI/intro/aria), defines an approach to make Web content and Web applications more accessible to people with disabilities.RadComboBox control offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadComboBox** contol's **EnableAriaSupport** property to **true** as shown in the example below.

**Example 1**: Setting the **EnalbeAriaSupport** property for **RadComboBox**.



````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" runat="server" id="RadComboBox2" EnableAriaSupport="true">
	<Items>
		<telerik:RadComboBoxItem Text="RadComboBoxItem 1" Value="1" />
		<telerik:RadComboBoxItem Text="RadComboBoxItem 2" Value="2" />
		<telerik:RadComboBoxItem Text="RadComboBoxItem 3" Value="3" />
	</Items>
</telerik:RadComboBox>
	
````
````C#
	     
RadComboBox1.EnableAriaSupport = true;
	
````
````VB
	
RadComboBox1.EnableAriaSupport = true
	
````


>note In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](http://www.w3.org/TR/wai-aria/roles#application)
>

>note An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>

Enabling WAI-ARIA support of a **RadComboBox** will also allow you to adjust the [aria-label](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-label) and [aria-describedby](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-describedby) attributes of the control by using the **Label** and **DescribedBy** properties in the **AriaSettings** tag.

>caption Example 2: Adjusting `aria-label` and `aria-describedby` attributes in **RadComboBox**.

````ASP.NET
<telerik:RadComboBox RenderMode="Lightweight" runat="server" ID="RadComboBox1" EnableAriaSupport="true">
    <AriaSettings Label="Label for this combo." DescribedBy="describe_combo" />
	<Items>
		<telerik:RadComboBoxItem Text="RadComboBoxItem 1" Value="1" />
		<telerik:RadComboBoxItem Text="RadComboBoxItem 2" Value="2" />
		<telerik:RadComboBoxItem Text="RadComboBoxItem 3" Value="3" />
	</Items>
</telerik:RadComboBox>
````


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
 
 * [Demo: WAI-ARIA](http://demos.telerik.com/aspnet-ajax/combobox/examples/wai-aria-support/defaultcs.aspx)
 
 * [Documentation: WCAG 2.0 and Section 508 Accessibility Compliance]({%slug combobox/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%}) 
 
 * [Demo: WCAG 2.0 and Section 508 Accessibility Compliance](http://demos.telerik.com/aspnet-ajax/combobox/examples/accessibility/defaultcs.aspx)
