---
title: Right-to-left Support
page_title: Right-to-left Support | UI for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: socialshare/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 1
---

# Right-to-left Support



## 

The __RadSocialShare__ fully supports right-to-left (RTL) language locales. It is created and added to the page as a child of the form element and in order to turn on the RTL support you should set __dir=rtl to the html or body__ element.

````ASPNET
	        html
	        {
	            direction: rtl;
	        } 
````



````ASPNET
	        <telerik:RadSocialShare runat="server" ID="RadSocialShare1" UrlToShare="http://www.telerik.com/products/aspnet-ajax.aspx" Skin="Sunset">
	            <MainButtons>
	                <telerik:RadSocialButton SocialNetType="ShareOnFacebook" />
	                <telerik:RadSocialButton SocialNetType="ShareOnTwitter" />
	                <telerik:RadSocialButton SocialNetType="StumbleUpon" />
	                <telerik:RadSocialButton SocialNetType="Tumblr" />
	                <telerik:RadSocialButton SocialNetType="MailTo" />
	                <telerik:RadSocialButton SocialNetType="SendEmail" />
	                <telerik:RadCompactButton />
	            </MainButtons>
	        </telerik:RadSocialShare>
````

![radsocialshare-rtl-screenshot](images/radsocialshare-rtl-screenshot.png)

# See Also

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/socialshare/examples/righttoleft/defaultcs.aspx)
