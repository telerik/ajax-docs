---
title: Use Custom Icons for Styled Buttons
page_title: Use Custom Icons for Styled Buttons - RadSocialShare
description: Check our Web Forms article about Use Custom Icons for Styled Buttons.
slug: socialshare/appearance-and-styling/use-custom-icons-for-styled-buttons
tags: use,custom,icons,for,styled,buttons
published: True
position: 4
---

# Use Custom Icons for Styled Buttons




The **RadSocialShare** offers several ways to change the default icons that the [Styled Buttons]({%slug socialshare/configuring-buttons/styled%}) have. You can see it live in [this online demo](https://demos.telerik.com/aspnet-ajax/socialshare/examples/customicons/defaultcs.aspx) and here follows a short explanation with some simpler examples:

* Via the **CustomIconUrl** property for each button. Note that it requires a 16 x 16px icon by default. You can change these dimensions by using the **CustomIconWidth** and **CustomIconHeight** properties of the button and thus each button may have different size, for example:

	__ASP.NET__

	    <telerik:RadSocialButton SocialNetType="MailTo" CustomIconUrl="custom-mailto-icon-32px.png" CustomIconHeight="32px" CustomIconWidth="32px" />


* Via the **CssClass** property of the **RadSocialShare** you can override the default sizes and then set the imagevia the **CustomIconUrl** property:

	__CSS__

		.RadSocialShare.myClass
		{
		    background-image: url(myBackgroundImage.png);
		    border: 0;
		    background-color: transparent;
		}
		
		.RadSocialShare.myClass .sshCustomIcon
		{
		    width: 24px !important;
		    height: 24px !important;
		}



	__ASP.NET__

		<telerik:RadSocialShare RenderMode="Lightweight" ID="RadSocialShare1" runat="server" CssClass="myClass">
		    <MainButons>
		        <telerik:RadSocialButton SocialNetType="MailTo" CustomIconUrl="custom-mailto-icon-24px.png" />
		    </MainButons>
		</telerik:RadSocialShare>



* By using image sprites which contain all the icons and overriding the specific classes for each button to have the background position from your sprite:

	__CSS__

		span.sshCustomSpriteMailTo,
		span.sshCustomSpriteCompactButton
		{
		    background-image: url(myCustomSprite.png);
		    background-repeat: no-repeat;
		    width: 32px;
		    height: 32px;
		}
		
		a.sshLinkItem .sshCustomSpriteMailTo,
		a.sshLinkItem:hover .sshCustomSpriteMailTo
		{
		    background-position: 0 0;
		}
		
		a.sshLinkItem .sshCustomSpriteCompactButton,
		a.sshLinkItem:hover .sshCustomSpriteCompactButton
		{
		    background-position: -40px 0;
		}


	__ASP.NET__

		<telerik:RadSocialShare RenderMode="Lightweight" ID="RadSocialShare1" runat="server">
		    <MainButons>
		        <telerik:RadSocialButton SocialNetType="MailTo" CssClass="sshCustomSpriteMailTo" />
		        <telerik:RadCompactButton CssClass="sshCustomSpriteCompactButton" />
		    </MainButons>
		</telerik:RadSocialShare>


# See Also

 * [Custom icons online demo](https://demos.telerik.com/aspnet-ajax/socialshare/examples/customicons/defaultcs.aspx)

 * [CSS Image Sprites](https://www.w3schools.com/css/css_image_sprites.asp)
