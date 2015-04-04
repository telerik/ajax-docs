---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: tooltip/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 2
---

# WAI-ARIA Support



This article demonstrates how to enable and use the WAI-ARIA support of the __RadToolTip__	and __RadToolTipManager__ controls.

## 

The[WAI-ARIA Suite	](http://www.w3.org/WAI/intro/aria)defines an approach to make web content and web applications more accessible to people with disabilities.__RadToolTip__ and __RadToolTipManager__ offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the __RadToolTip__ / __RadToolTipManager__ contol's __EnableAriaSupport__property to __true__ as shown in the example below.

__Example 1__: Setting the __EnalbeAriaSupport__ property for __RadToolTip__ and __RadToolTip__

>tabbedCode

````ASPNET
			<telerik:RadToolTip EnableAriaSupport="true" runat="server" ID="RadToolTip1"></telerik:RadToolTip>
			<telerik:RadToolTipManager EnableAriaSupport="true" runat="server" ID="RadToolTipManager1"></telerik:RadToolTipManager>
````
````C#
			RadToolTip1.EnableAriaSupport = true;
			RadToolTipManager.EnableAriaSupport = true;
````
````VB.NET
		RadToolTip1.EnableAriaSupport = True
		RadToolTipManager1.EnableAriaSupport = True
	#End Region
	End Class


>end

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


>tip According to the WAI-ARIA specifications, the first input in a dialog should get the focus when the dialog opens.	We have no control over the content, so this should be done by the developer. The[OnClientShow event]({%slug tooltip/client-side-programming/events/onclientshow%})and the[Client-side API of the control]({%slug tooltip/client-side-programming/radtooltip-object%})can be used for this.
>


>note  __RadToolTips__ created by a __RadToolTipManager__ will inherit the value of its __EnableAriaSupport__ property.
>


# See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)

 * [Demo: RadTooltip WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/tooltip/examples/waiariasupport/defaultcs.aspx)
