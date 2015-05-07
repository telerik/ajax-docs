---
title: Overview
page_title: Getting Started Overview | RadSocialShare for ASP.NET AJAX Documentation
description: Overview
slug: socialshare/getting-started/overview
tags: overview
published: True
position: 0
---

# Getting Started Overview




The following tutorial demonstrates how a simple **RadSocialShare** control can be used to share an URL. The end result will be similar to the following image once the **CompactButtons** are shown:

![getting-started-result](images/getting-started-result.png)

1. In a new AJAX-Enabled Web Application add a **RadSocialShare** control to the default web page:

	__ASP.NET__

		<telerik:RadSocialShare runat="server" ID="RadSocialShare1">
		</telerik:RadSocialShare>



1. Set the **UrlToShare** property to **http://www.telerik.com/products/aspnet-ajax.aspx** .

1. Set the **TitleToShare** property to **ASP.NET AJAX Controls, .NET Web UI Components | Telerik** .

1. Add some buttons to the **MainButtons** collection. You can choose the social network which they target via the **SocialNetType** property. For example add a Facebook share button, a Twitter tweet button and a Blogger button. The last button is the **RadCompactButton** so that you can pop up a **RadWindow** with the rest of the networks:

	__ASP.NET__

		<telerik:RadSocialShare runat="server" ID="RadSocialShare1" UrlToShare="http://www.telerik.com/products/aspnet-ajax.aspx"
		        TitleToShare="ASP.NET AJAX Controls, .NET Web UI Components | Telerik">
		    <MainButtons>
		        <telerik:RadSocialButton SocialNetType="ShareOnTwitter" />
		        <telerik:RadSocialButton SocialNetType="Blogger" />
		        <telerik:RadSocialButton SocialNetType="ShareOnFacebook" />
		        <telerik:RadCompactButton />
		    </MainButtons>
		</telerik:RadSocialShare>




1. Press F5 to run the application. You will see a simple bar in the top left corner of the browser. If you click the last button the popup with the rest shows up.
