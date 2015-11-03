---
title: Right-to-Left Support
page_title: Right-to-Left Support | RadPushButton for ASP.NET AJAX Documentation
description: Right-to-Left Support
slug: pushbutton/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-Left Support

The **RadPushButton** fully supports right-to-left (RTL) language locales (**Figure 1**). In order to turn on the RTL support you should set **dir=rtl to the html or body** element or at least to its parent element (**Figure 1**). You can also use the **direction:rtl** CSS property.

>caption Figure 1: RadPushButton in RTL mode.

![RadPushButton-rtl](images/RadPushButton-rtl.png)

>caption Example 1: Set the "direction: rtl" style to the **RadPushButton**'s wrapper element in order to enable the RTL support for the control.

````ASP.NET
<div style="direction: rtl">
	<telerik:RadPushButton runat="server" ID="RadPushButton1" Text="RadPushButton">
	</telerik:RadPushButton>
	<br />
	<br />
	<telerik:RadPushButton runat="server" ID="RadPushButton2" Text="RadPushButton with Icon">
		<Icon CssClass="rbUpload" />
	</telerik:RadPushButton>
</div>
````

## See Also

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/pushbutton/examples/righttoleft/defaultcs.aspx)

 * [WCAG 2.0 and Section 508 Accessibility Compliance]({%slug pushbutton/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})

 * [Keyboard Support]({%slug pushbutton/accessibility-and-internationalization/keyboard-support%})
