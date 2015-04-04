---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: editor/accessibility-and-internationalization/standards-compliance/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support



This article demonstrates how to enable and use the WAI-ARIA support of the __RadEditor__	and __AccessibleRadEditor__ controls.

## 

The[WAI-ARIA Suite	](http://www.w3.org/WAI/intro/aria)defines an approach to make web content and web applications more accessible to people with disabilities.__RadEditor__ and __AccessibleRadEditor__ offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the __RadEditor__ / __AccessibleRadEditor__ contol's __EnableAriaSupport__property to __true__ as shown in the example below.

__Example 1__: Setting the __EnableAriaSupport__ property for __RadEditor__ and __AccessibleRadEditor__



````ASPNET
		<telerik:RadEditor EnableAriaSupport="true" runat="server" ID="RadEditor1"></telerik:RadEditor>
		<telerik:AccessibleRadEditor EnableAriaSupport="true" runat="server" ID="AccessibleRadEditor1"></telerik:AccessibleRadEditor>
````
````C#
			RadEditor1.EnableAriaSupport = true;
			AccessibleRadEditor1.EnableAriaSupport = true;
````
````VB.NET
			RadEditor1.EnableAriaSupport = True
			AccessibleRadEditor1.EnableAriaSupport = True
	#End Region
	End Class
````



>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


# See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)
