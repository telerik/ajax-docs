---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: combobox/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support



This article demonstrates how to enable and use the WAI-ARIA support of the __RadComboBox__

## 

The [ WAI-ARIA Suite ](http://www.w3.org/WAI/intro/aria), defines an approach to make Web content and Web applications more accessible to people with disabilities.RadComboBox control offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the __RadComboBox__ contol's __EnableAriaSupport__ property to __true__ as shown in the example below.

__Example 1__: Setting the __EnalbeAriaSupport__ property for __RadComboBox__.

>tabbedCode

````ASPNET
	        <telerik:RadComboBox runat="server" id="RadComboBox2" EnableAriaSupport="true">
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
>end

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
