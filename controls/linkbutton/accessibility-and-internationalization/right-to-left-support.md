---
title: Right-to-Left Support
page_title: Right-to-Left Support | RadLinkButton for ASP.NET AJAX Documentation
description: Right-to-Left Support
slug: linkbutton/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-Left Support

The **RadLinkButton** fully supports right-to-left (RTL) language locales (**Figure 1**). In order to turn on the RTL support you should set **dir=rtl to the html or body** element or at least to its parent element (**Example 1**). You can also use the **direction:rtl** CSS property.

>caption Figure 1: RadLinkButton in RTL mode.

![RadLinkButton-rtl](images/RadLinkButton-rtl.png)

>caption Example 1: Set the "direction: rtl" style to the **RadLinkButton**'s wrapper element in order to enable the RTL support for the control.

````ASP.NET
<div style="direction: rtl">
	<telerik:RadLinkButton runat="server" ID="RadLinkButton1" Text="RadLinkButton" NavigateUrl="http://www.telerik.com" Target="_blank">
	</telerik:RadLinkButton>
	<br />
	<br />
	<telerik:RadLinkButton runat="server" ID="RadLinkButton2" Text="RadLinkButton with Icon" NavigateUrl="http://www.telerik.com" Target="_blank">
		<Icon CssClass="rbUpload" />
	</telerik:RadLinkButton>
</div>
````

## See Also

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/linkbutton/examples/righttoleft/defaultcs.aspx)

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug linkbutton/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Keyboard Support]({%slug linkbutton/accessibility-and-internationalization/keyboard-support%})
