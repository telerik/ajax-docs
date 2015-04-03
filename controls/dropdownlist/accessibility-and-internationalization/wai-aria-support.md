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



This article demonstrates how to enable and use the WAI-ARIA support of the __RadDropDownList__

## 

The [ WAI-ARIA Suite ](http://www.w3.org/WAI/intro/aria), defines an approach to make Web content and Web applications more accessible to people with disabilities.

In order to enable the WAI-ARIA support, set the __RadDropDownList__ contol's __EnableAriaSupport__ property to __true__ as shown in the example below.

__Example 1__: Setting the __EnalbeAriaSupport__ property for __RadDropDownList__.

>tabbedCode

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


>end

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
