---
title: Use Custom Icons for Styled Buttons
page_title: Use Custom Icons for Styled Buttons | UI for ASP.NET AJAX Documentation
description: Use Custom Icons for Styled Buttons
slug: socialshare/appearance-and-styling/use-custom-icons-for-styled-buttons
tags: use,custom,icons,for,styled,buttons
published: True
position: 4
---

# Use Custom Icons for Styled Buttons



## 

The __RadSocialShare__ offers several ways to change the default icons that the [Styled Buttons]({%slug socialshare/configuring-buttons/styled%}) have. You can see it live in [this online demo]() and here follows a short explanation with some simpler examples:

* Via the __CustomIconUrl__ property for each button. Note that it requires a 16 x 16px icon by default. You can change these dimensions by using the__CustomIconWidth__ and __CustomIconHeight__ properties of the button and thus each button may have different size, for example:

````ASPNET
	    <telerik:RadSocialButton SocialNetType="MailTo" CustomIconUrl="custom-mailto-icon-32px.png" CustomIconHeight="32px" CustomIconWidth="32px" />
````



* Via the __CssClass__ property of the __RadSocialShare__ you can override the default sizes and then set the imagevia the __CustomIconUrl__ property:

````ASPNET
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
````



````ASPNET
	    <telerik:RadSocialShare ID="RadSocialShare1" runat="server" CssClass="myClass">
	        <MainButons>
	            <telerik:RadSocialButton SocialNetType="MailTo" CustomIconUrl="custom-mailto-icon-24px.png" />
	        </MainButons>
	    </telerik:RadSocialShare>
````



* By using image sprites which contain all the icons and overriding the specific classes for each button to have the background position from your sprite:

````ASPNET
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
````



````ASPNET
	    <telerik:RadSocialShare ID="RadSocialShare1" runat="server">
	        <MainButons>
	            <telerik:RadSocialButton SocialNetType="MailTo" CssClass="sshCustomSpriteMailTo" />
	            <telerik:RadCompactButton CssClass="sshCustomSpriteCompactButton" />
	        </MainButons>
	    </telerik:RadSocialShare>
````



# See Also

 * [Custom icons online demo]()

 * [CSS Image Sprites](http://www.w3schools.com/css/css_image_sprites.asp)
