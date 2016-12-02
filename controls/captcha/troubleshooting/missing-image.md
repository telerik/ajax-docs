---
title: Missing Image
page_title: Missing Image | RadCaptcha for ASP.NET AJAX Documentation
description: Missing Image
slug: captcha/troubleshooting/missing-image
tags: missing,image
published: True
position: 2
---

# Missing Image

This help article treats issues with missing images in RadCaptcha and provides resolutions.

Generally, issues with missing captcha image are caused by the HttpHandler that serves the image itself. The list below shows solutions for the most common scenarios:

* [Image HttpHandler Is Not Properly Configured](#image-httphandler-is-not-properly-configured)
* [WebFarm/WebGarden Scenario](#webfarmwebgarden-scenario)
* [Open Anonymously Accessible SharePoint Site in Mobile Browser](#open-anonymously-accessible-sharepoint-site-in-mobile-browser)
* [Authentication Blockage](#authentication-blockage)
* [URL Rewrite Module or Routing](#url-rewrite-module-or-routing)
* [Proxy, Firewall or Plugin Blockage](#proxy-firewall-or-plugin-blockage)

## Image HttpHandler Is Not Properly Configured 

You should ensure that you have properly defined the HttpHandler that serves the captcha image in the `web.config` file (**Example 1**).

>caption **Example 1**: Configure the HttpHandler that serves the CAPTCHA image in the web.config file.

**XML**

	<configuration>
		<system.web>
			<httpHandlers>
				<add path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" verb="*" validate="false" /> 
			</httpHandlers>
		</system.web>
		<system.webServer>
			<handlers>
				<add name="Telerik_Web_UI_WebResource_axd" verb="*" preCondition="integratedMode" path="Telerik.Web.UI.WebResource.axd" type="Telerik.Web.UI.WebResource" /> 
			</handlers>
		</system.webServer>
	</configuration>

More information is available in the [Getting Started]({%slug captcha/getting-started%}) article.

## WebFarm/WebGarden Scenario

By default, the image is stored in the Cache. However, if more than one server is used to host the page (such as in a web-farm environment) the Session should be used, because the Cache image is stored locally on the server.

You can review the [Using WebFarm or WebGarden Environment]({%slug captcha/troubleshooting/using-webfarm-or-webgarden-environment%}) article that showcases how to store the `CaptchaImage` in the Session.

## Open Anonymously Accessible SharePoint Site in Mobile Browser

When the RadCaptcha control is placed in a SharePoint site with anonymous access enabled and the site is viewed from a mobile browser, the CAPTCHA image may not appear if the HttpHandler is not configured properly.

To resolve the issue, you should ensure the HttpHandler that serves the CAPTCHA image is requested from a folder that can be accessed by anonymous users. **Example 2** shows how to use the `HttpHandlerUrl` property of the control to  configure it to request the `Telerik.Web.UI.WebResource.axd` handler in a folder (e.g., _layouts folder) that is accessible.

>caption **Example 2**: Configure the HttpHandler that serves the CAPTCHA image to be requested in a folder that can be accessed by anonymous users.

**ASP.NET**

	<telerik:RadCaptcha ID="RadCaptcha1" Runat="server" ErrorMessage="You have entered an invalid code." 
		HttpHandlerUrl="~/_layouts/Telerik.Web.UI.WebResource.axd">
	</telerik:RadCaptcha>

## Authentication Blockage

When your project uses a form of authentication (e.g., Windows Authentication), access to most resources (like pages, images, handlers) is not allowed for anonymous (unauthorized users). This affects the Telerik controls, including the RadCaptcha, because they use a number of HTTP Handlers that also get blocked.

To resolve the issue you can add <location> elements to your web.config for all the handlers you use, so ASP.NET does not block them (**Example 3**).

>caption **Example 3**: Add a location element to the web.config for the HttpHandler that serves the CAPTCHA image.

**web.config**

	<configuration>
	...
	<location path="Telerik.Web.UI.WebResource.axd">
		<system.web>
			<authorization>
				<allow users="*"/>
			</authorization>
		</system.web>
	</location>
	...
	</configuration> 

You can find more information in the [Unauthorized Access (401) Error]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%}#unauthorized-access-401-error) section of the [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%}) article.

## URL Rewrite Module or Routing

When you configure your application to use a [Routing](https://msdn.microsoft.com/en-us/library/cc668201.aspx) or [URL Rewriting Module](https://msdn.microsoft.com/en-us/library/ms972974.aspx) the requests of the application may be changed. You should ensure that the request for the CAPTCHA's image is not modified.

## Proxy, Firewall or Plugin Blockage

It may be possible that some requests, including the CAPTCHA's image request, are blocked because of the existence of proxy, antivirus, firewall or a browser plug-in. You can try to disable all of them to ensure that is not the cause of the issue.

### See Also

* [Getting Started]({%slug captcha/getting-started%})
* [Using WebFarm or WebGarden Environment]({%slug captcha/troubleshooting/using-webfarm-or-webgarden-environment%}) 
* [Unauthorized Access (401) Error]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%}#unauthorized-access-401-error)
* [Routing](https://msdn.microsoft.com/en-us/library/cc668201.aspx)
* [URL Rewriting Module](https://msdn.microsoft.com/en-us/library/ms972974.aspx)  
* [How to Enable Anonymous Access to a SharePoint 2013 Site!](http://blog.cloudshare.com/blog/2012/10/15/how-to-enable-anonymous-access-to-a-sharepoint-2013-site)
