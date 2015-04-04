---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | UI for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: notification/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support



This article demonstrates how to enable and use the WAI-ARIA support of the __RadNotification__ control.

## 

The[WAI-ARIA Suite	](http://www.w3.org/WAI/intro/aria)defines an approach to make web content and web applications more accessible to people with disabilities.__RadNotification__ offers WAI-ARIA support.

In order to enable the WAI-ARIA support, set the __RadNotification__'s __EnableAriaSupport__property to __true__ as shown in the example below.

__Example 1__: Setting the __EnableAriaSupport__ property for __RadNotification__

>tabbedCode

````ASPNET
		<telerik:RadNotification EnableAriaSupport="true" runat="server" ID="RadNotification1"></telerik:RadNotification>
````
````C#
			RadNotification1.EnableAriaSupport = true;
````
````VB.NET
			RadNotification1.EnableAriaSupport = True
			#End Region
		End Sub
	End Class


>end

>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


>tip According to the WAI-ARIA specifications, the first input in a dialog should get the focus when the dialog opens.	In case the __ContentTemplate__ of the control is used and it contains inputs, their focus should be handled by the developer.	The[OnClientShown event]({%slug notification/client-side-programming/events/onclientshown%})and the[control's Client-side API]({%slug notification/client-side-programming/radnotification-object%})can be used for this.
>


# See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)

 * [Demo: RadNotification WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/notification/examples/waiariasupport/defaultcs.aspx)
