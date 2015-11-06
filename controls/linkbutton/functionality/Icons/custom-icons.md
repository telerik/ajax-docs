---
title: Custom Icons
page_title: Custom Icons | RadLinkButton for ASP.NET AJAX Documentation
description: Custom Icons
slug: linkbutton/functionality/icons/custom-icons
tags: custom,icons
published: True
position: 1
---

# Custom Icons

This help article shows how to use custom icons (images or font icons) in **RadLinkButton**.

* [Image Icons](#image-icons)

* [Font Icons](#font-icons)

## Image Icons

To display an image icon on the button, you need to set the **Icon.Url** property to point to the URL of the desired image.

>caption Figure 1: RadLinkButton with custom icon set through the **Icon.Url** property.

![Icons](images/button-custom-icon-url.png)

>caption Example 1: Configure a **RadLinkButton** with an icon through the **Icon.Url** property.

````ASP.NET
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Button With Custom Image Icon" NavigateUrl="http://www.telerik.com" Target="_blank">
	<Icon Url="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eFind.png" Top="5" Left="8" />
</telerik:RadLinkButton>
````

### Hovered and Active States

**RadLinkButton** also provides an easy way to show different icon when the mouse is over the control, or the button is pressed (see **Figure 2** and **Example 2**). To do this, use the **HoveredCssClass** and **PressedCssClass** properties exposed by the **Icon** tag.

>caption Figure 2: A RadLinkButton can have different icons for its normal, hovered and active state.

![RadLinkButton icons normal hovered pressed](images/button_icons_normal_hovered_pressed.png)

**Example 2:** Setup unique icons for the normal, hovered and active state of a **RadLinkButton**.

````ASP.NET
<telerik:RadLinkButton ID="RadLinkButton1" runat="server" Text="Normal Hover Active State Icons" NavigateUrl="http://www.telerik.com" Target="_blank">
	<Icon Url="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/ePlayer.png"
		HoveredUrl="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eFlash.png"
		PressedUrl="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eTime.png" />
</telerik:RadLinkButton>
````

## Font Icons

You can use custom font icons in **RadLinkButton** as well. To do that, follow the steps below:

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

		<telerik:RadLinkButton ID="RadButton1" runat="server" Text="Button With Custom Font Icon" NavigateUrl="http://www.telerik.com" Target="_blank">
			<Icon CssClass="myCustomFontIconClass" />
		</telerik:RadLinkButton>

You can find below an example with [Font Awesome Icons](https://fortawesome.github.io/Font-Awesome/icons/).

>caption Figure 3: RadLinkButton with Font Awesome icon.

![Button Custon Icon CssClass](images/button-custom-icon-cssclass.png)

**Example 3:** Using FontAwesome font icons in RadLinkButton.

````CSS
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
<style>
	button.RadButton.fa .rbIcon:before {
		font-family: FontAwesome;
	}
</style>
````

````ASP.NET
<telerik:RadLinkButton ID="RadButton1" runat="server" Text="Button With Custom Font Icon" CssClass="fa" NavigateUrl="http://www.telerik.com" Target="_blank">
	<Icon CssClass="fa-bed" />
</telerik:RadLinkButton>
````

You can also change the font-size and color of the font icon as described in the [Fine Tune]({%slug linkbutton/functionality/icons/fine-tune%}) help article.

## See Also

 * [PushButton - Custom Icons Demo](http://demos.telerik.com/aspnet-ajax/linkbutton/functionality/custom-icons/defaultcs.aspx)

 * [Font Awesome Icons](https://fortawesome.github.io/Font-Awesome/icons/)
 
 * [PushButton - Embedded Icons Demo](http://demos.telerik.com/aspnet-ajax/linkbutton/functionality/embedded-icons/defaultcs.aspx)
 
 * [Icons Overview]({%slug linkbutton/functionality/icons/embedded-icons%})
 
 * [Fine Tune Icons Position, Size and Color]({%slug linkbutton/functionality/icons/fine-tune%})
 
 