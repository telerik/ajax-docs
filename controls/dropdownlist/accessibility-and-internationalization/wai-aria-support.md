---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: dropdownlist/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support



This article demonstrates how to enable and use the WAI-ARIA support of the **RadDropDownList**

## 

The [ WAI-ARIA Suite ](http://www.w3.org/WAI/intro/aria), defines an approach to make Web content and Web applications more accessible to people with disabilities.

In order to enable the WAI-ARIA support, set the **RadDropDownList** contol's **EnableAriaSupport** property to **true** as shown in the example below.

**Example 1**: Setting the **EnalbeAriaSupport** property for **RadDropDownList**.



````ASPNET
	        <telerik:RadDropDownList ID="RadDropDownList1" runat="server" EnableAriaSupport="true">
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


>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
