---
title: Fine-tune
page_title: Fine-tune | RadPushButton for ASP.NET AJAX Documentation
description: Fine-tune
slug: pushbutton/functionality/icons/fine-tune
tags: fine,tune
published: True
position: 1
---

# Fine-tune Icons

This help article shows how to modify the position, size and color of icons in **RadPushButton**.

* [Fine-tune Position](#fine-tune-position)

* [Configure Font-size and Color](#configure-font-size-and-color)

## Fine-tune Position

You can change the position of font or image icons to match your concrete requirements. To do this, use the `Icon.Top` and `Icon.Left` properties to directly offset the icon (**Example 1**).

>caption Figure 1: The icon in RadPushButton can be offset from its original top and left position. See Example 1.

![RadPushButton Icon Top Left](images/button-icon-top-left.png)

>caption Example 1: Offset RadPushButton Icon from the top and left. You can see the result in Figure 1.

````ASP.NET
<telerik:RadPushButton ID="RadPushButton1" runat="server" Text="Fine Tune Icon Position" Height="40px">
	<Icon CssClass="rbRefresh"
		Top="12px" Left="7px" />
</telerik:RadPushButton>
````

## Configure Font-size and Color

The embedded **RadPushButton** icons are font icons. Using a font facilitates the customization of the icons. For example, you can change the icons color and font size with a single line of CSS (see **Figure 2** and **Example 2**).

>caption Figure 2: Customize the font size and color of the embedded icons of RadPushButton with CSS.

![Button Icon Customized](images/button-icon-customized.png)

>caption Example 2: Use CSS to modify the font size and color of the embedded icons in RadPushButton.

````CSS
<style type="text/css">
	button.RadButton.customizeIcon .rbPrimaryIcon:before {
		color: red;
		font-size: 17px;
	}
</style>
````

````ASP.NET
<telerik:RadPushButton ID="RadPushButton1" runat="server" Text="Icon Custom Size and Color" CssClass="customizeIcon">
	<Icon CssClass="rbSave" />
</telerik:RadPushButton>
````

## See Also

 * [Icons Overview]({%slug pushbutton/functionality/icons/overview%})

 * [Custom Icons]({%slug pushbutton/functionality/icons/custom-icons%})

 * [PushButton - Embedded Icons Demo](http://demos.telerik.com/aspnet-ajax/pushbutton/functionality/embedded-icons/defaultcs.aspx)
 
 * [PushButton - Custom Icons Demo](http://demos.telerik.com/aspnet-ajax/pushbutton/functionality/custom-icons/defaultcs.aspx)
 


 