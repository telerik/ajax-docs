---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: window/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support



This article demonstrates how to enable and use the WAI-ARIA support of the __RadWindow__and __RadWindowManager__ controls.

## 

The[WAI-ARIA Suite	](http://www.w3.org/WAI/intro/aria)defines an approach to make web content and web applications more accessible to people with disabilities.__RadWindow__ and __RadWindowManager__ offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the __RadWindow__ / __RadWindowManager__ control's __EnableAriaSupport__property to __true__ as shown in the example below.

__Example 1__: Setting the __EnalbeAriaSupport__ property for __RadWindow__ and __RadWindowManager__

>tabbedCode

````ASPNET
			<telerik:RadWindow EnableAriaSupport="true" runat="server" ID="RadWindow1"></telerik:RadWindow>
			<telerik:RadWindowManager EnableAriaSupport="true" runat="server" ID="RadWindowManager1"></telerik:RadWindowManager>
````



````C#
		RadWindow1.EnableAriaSupport = true;
		RadWindowManager1.EnableAriaSupport = true;
````



````VB.NET
		RadWindow1.EnableAriaSupport = true
		RadWindowManager1.EnableAriaSupport = true
	#End Region
	End Class


>end

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


>tip According to the WAI-ARIA specifications, the first input in a dialog should get the focus when the dialog opens.	This is done out of the box for the[RadAlert]({%slug window/alert,-confirm,-prompt-dialogs/radalert-dialog%}),[RadConfirm]({%slug window/alert,-confirm,-prompt-dialogs/radconfirm-dialog%})and[RadPrompt]({%slug window/alert,-confirm,-prompt-dialogs/radprompt-dialog%})dialogs.	For custom __RadWindows__ this should be done by the developer.
>


>note  __RadWindows__ in the Windows collection of a __RadWindowManager__ , or ones dynamically created by a manager,will inherit the value of its __EnableAriaSupport__ property.
>


# See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)

 * [Demo: RadWindow WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/window/examples/waiariasupport/defaultcs.aspx)
