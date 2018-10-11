---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadDropDownList for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: dropdownlist/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadDropDownList")

The [ WAI-ARIA Suite ](http://www.w3.org/WAI/intro/aria), defines an approach to make Web content and Web applications more accessible to people with disabilities.

In order to enable the WAI-ARIA support, set the **RadDropDownList** contol's **EnableAriaSupport** property to **true** as shown in the example below.


>caption **Example 1**: Setting the **EnalbeAriaSupport** property for **RadDropDownList**.

````ASPNET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1" runat="server" EnableAriaSupport="true">
    <Items>
        <telerik:DropDownListItem Text="RadDropDownListItem 1" Value="1" />
        <telerik:DropDownListItem Text="RadDropDownListItem 2" Value="2" />
        <telerik:DropDownListItem Text="RadDropDownListItem 3" Value="3" />
    </Items>
</telerik:RadDropDownList>
````
````C#
	
RadDropDownList1.EnableAriaSupport = true;
	
````
````VB
	
RadDropDownList1.EnableAriaSupport = true
	
````


>tip In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](http://www.w3.org/TR/wai-aria/roles#application)
>

>tip An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

>tip The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


Enabling WAI-ARIA support of a **RadDropDownList** will also allow you to adjust the [aria-label](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-label) and [aria-describedby](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-describedby) attributes of the control by using the **Label** and **DescribedBy** properties in the **AriaSettings** tag.

>caption Example 2: Adjusting `aria-label` and `aria-describedby` attributes in **RadDropDownList**.

````ASP.NET
<telerik:RadDropDownList RenderMode="Lightweight" runat="server" ID="RadDropDownList1" EnableAriaSupport="true">
    <AriaSettings Label="Label for this drop-down." DescribedBy="describe_drop-down" />
	<Items>
		<telerik:DropDownListItem Text="DropDownListItem 1" Value="1" />
		<telerik:DropDownListItem Text="DropDownListItem 2" Value="2" />
		<telerik:DropDownListItem Text="DropDownListItem 3" Value="3" />
	</Items>
</telerik:RadDropDownList>
````


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)

 * [Documentation: WCAG 2.0 and Section 508 Accessibility Compliance]({%slug dropdownlist/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%}) 
 
 * [Demo: WCAG 2.0 and Section 508 Accessibility Compliance](http://demos.telerik.com/aspnet-ajax/dropdownlist/examples/accessibility/accessibility-compliance/defaultcs.aspx)

