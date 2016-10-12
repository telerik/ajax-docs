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

Generally, issues with missing captcha image are caused by the HttpHandler that serves the image itself. You can find below a list with the most common scenarios for such issues:

* [Image HttpHandler is not Properly Configured](#image-httphandler-is-not-properly-configured)
* [WebFarm/WebGarden Scenario](#webfarmwebgarden-scenario)
* [Authentication Blockage](#authentication-blockage)
* [URL Rewrite Module or Routing](#url-rewrite-module-or-routing)
* [Proxy, Firewall or Plugin Blockage](#proxy-firewall-or-plugin-blockage)

## Image HttpHandler is not Properly Configured 

You should ensure to properly define the httpHandler that serves the captcha image in the `web.config` file (**Example 1**).

>caption **Example 1**: Configure the httpHandler that server the captcha image in the web.config file.

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

By default the image is stored in the Cache. However, if more than one server is used to host the page (web-farm environment) the Session should be used, because if the Cache is used the image is stored locally on the server.

You can examine the [Using WebFarm or WebGarden Environment]({%slug captcha/troubleshooting/using-webfarm-or-webgarden-environment%}) article that showcases how to store the `CaptchaImage` in the Session.

## Authentication Blockage

When your project uses a form of authentication (e.g., Windows Authentication), access to most resources (like pages, images, handlers) is not allowed for anonymous (unauthorized users). This affects the Telerik controls, including the RadCaptcha, because they use a number of HTTP Handlers that also get blocked.

To resolve the issue you can add <location> elements to your web.config for all the handlers you use, so ASP.NET does not block them (**Example 2**).

>caption **Example 2**: Add a location element to the web.config for the httpHandler that serves the captcha image.

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

More information on the matter is available in the [Unauthorized Access (401) Error]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%}#unauthorized-access-401-error) section of the [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%}) article.

## URL Rewrite Module or Routing

When you configure your application to use a [Routing](https://msdn.microsoft.com/en-us/library/cc668201.aspx) or [URL Rewriting Module](https://msdn.microsoft.com/en-us/library/ms972974.aspx) the requests of the application may be changed. You should ensure the request for the captcha's image is not modified.

## Proxy, Firewall or Plugin Blockage

It may be possible that some requests, including the captcha's image request, are blocked because of the existence of proxy, antivirus firewall or a browser plug-in. You can try to disable all of them to ensure that is not the cause of the issue.

### See Also

* [Getting Started]({%slug captcha/getting-started%})
* [Using WebFarm or WebGarden Environment]({%slug captcha/troubleshooting/using-webfarm-or-webgarden-environment%}) 
* [Unauthorized Access (401) Error]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%}#unauthorized-access-401-error)
* [Routing](https://msdn.microsoft.com/en-us/library/cc668201.aspx)
* [URL Rewriting Module](https://msdn.microsoft.com/en-us/library/ms972974.aspx)  