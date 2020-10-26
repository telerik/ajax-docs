---
title: Custom Icons
page_title: Custom Icons | RadPushButton for ASP.NET AJAX Documentation
description: Custom Icons
slug: pushbutton/functionality/icons/custom-icons
tags: custom,icons
published: True
position: 1
---

# Custom Icons

This help article shows how to use custom icons (images or font icons) in **RadPushButton**.

* [Image Icons](#image-icons)

* [Font Icons](#font-icons)

## Image Icons

To display an image icon on the button, you need to set the **Icon.Url** property to point to the URL of the desired image.

>caption Figure 1: RadPushButton with custom icon set through the **Icon.Url** property.

![Icons](images/button-custom-icon-url.png)

>caption Example 1: Configure a **RadPushButton** with an icon through the **Icon.Url** property.

````ASP.NET
<telerik:RadPushButton ID="RadPushButton1" runat="server" Text="Button With Custom Image Icon">
	<Icon Url="https://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eFind.png" Top="5" Left="8" />
</telerik:RadPushButton>
````

### Hovered and Active States

**RadPushButton** also provides an easy way to show different icon when the mouse is over the control, or the button is pressed (see **Figure 2** and **Example 2**). To do this, use the **HoveredCssClass** and **PressedCssClass** properties exposed by the **Icon** tag.

>caption Figure 2: A RadPushButton can have different icons for its normal, hovered and active state.

![RadPushButton icons normal hovered pressed](images/button_icons_normal_hovered_pressed.png)

**Example 2:** Setup unique icons for the normal, hovered and active state of a **RadPushButton**.

````ASP.NET
<telerik:RadPushButton ID="RadPushButton1" runat="server" Text="Normal Hover Active State Icons">
	<Icon Url="https://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/ePlayer.png"
		HoveredUrl="https://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eFlash.png"
		PressedUrl="https://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eTime.png" />
</telerik:RadPushButton>
````

## Font Icons

You can use custom font icons in **RadPushButton** as well. To do that, follow the steps below:

1. Load the stylesheet with the desired font icons on the page.

	**CSS**

		<link rel="stylesheet" href="myCustomFontStyleSheet.css" />

1. Override the font-family of the button's icon element with the target one (see **Example 3**).

	**CSS**

		button.RadButton .rbIcon:before {
			font-family: myCustomFont;
		}

1. Set the custom font icon class to the **Icon.CssClass** property.

	**ASP.NET**

		<telerik:RadPushButton ID="RadButton1" runat="server" Text="Button With Custom Font Icon">
			<Icon CssClass="myCustomFontIconClass" />
		</telerik:RadPushButton>

You can find below an example with [Font Awesome Icons](https://fortawesome.github.io/Font-Awesome/icons/).

>caption Figure 3: RadPushButton with Font Awesome icon.

![Button Custon Icon CssClass](images/button-custom-icon-cssclass.png)

**Example 3:** Using FontAwesome font icons in RadPushButton.

````CSS
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<style>
	button.RadButton.fa .rbIcon:before {
		font-family: FontAwesome;
	}
</style>
````

````ASP.NET
<telerik:RadPushButton ID="RadButton1" runat="server" Text="Button With Custom Font Icon" CssClass="fa">
	<Icon CssClass="fa-bed" />
</telerik:RadPushButton>
````

You can also change the font-size and color of the font icon as described in the [Fine Tune]({%slug pushbutton/functionality/icons/fine-tune%}) help article.

Find out more information on how to use Font Awesome icons along with Telerik controls in the [4 Ways to Embed Font Awesome in Telerik UI for ASP.NET AJAX Controls](https://www.telerik.com/blogs/4-ways-embed-font-awesome-telerik-ui-for-asp-dotnet-ajax) blog post.

## See Also

 * [PushButton - Custom Icons Demo](https://demos.telerik.com/aspnet-ajax/pushbutton/functionality/custom-icons/defaultcs.aspx)

 * [Font Awesome Icons](https://fortawesome.github.io/Font-Awesome/icons/)
 
 * [PushButton - Embedded Icons Demo](https://demos.telerik.com/aspnet-ajax/pushbutton/functionality/embedded-icons/defaultcs.aspx)
 
 * [Icons Overview]({%slug pushbutton/functionality/icons/embedded-icons%})
 
 * [Fine Tune Icons Position, Size and Color]({%slug pushbutton/functionality/icons/fine-tune%})
 
 
