---
title: Telerik.Web.UI.CdnSettings
page_title: Telerik.Web.UI.CdnSettings
description: Telerik.Web.UI.CdnSettings
---

# Telerik.Web.UI.CdnSettings

Base class for CDN Related settings

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.CdnSettings

## Properties

###  TelerikCdn `TelerikCdnMode`

Gets or sets a value indicating whether to use the Telerik CDN network to load control scripts.

#### Remarks
By default the Telerik CDN is not used. If you enable it the scripts will be loaded from the Telerik CDN.
            	
            	The Telerik CDN is hosted on Amazon CloudFront. This is a global content delivery service with edge
            	locations in US, Europe and Asia. It automatically routes requests to the nearest location,
            	so content is delivered with the best possible performance.
            	
            	The Telerik CDN uses the following host names:
            	Host name (HTTP)Served contentaspnet-scripts.telerikstatic.comTelerik ASP.NET controls scriptsaspnet-skins.telerikstatic.comTelerik ASP.NET controls skins and imagesHost name (HTTPS)Served contenthttps://d2i2wahzwrm1n5.cloudfront.netTelerik ASP.NET controls scriptshttps://d35islomi5rx1v.cloudfront.netTelerik ASP.NET controls skins and images
            	RadScriptManager only manages the control scripts.
            	See RadStyleSheetManager for enabling CDN support for the control skins.
            	
            	You can globally configure CDN-related settings from web.config by using the following application settings:
            	Application settingMaps toTelerik.ScriptManager.TelerikCdnRadScriptManager.CdnSettings.TelerikCdnTelerik.ScriptManager.TelerikCdn.BaseUrlRadScriptManager.CdnSettings.BaseUrlTelerik.ScriptManager.TelerikCdn.BaseSecureUrlRadScriptManager.CdnSettings.BaseSecureUrl
            	For example:
            	
            		<appSettings><br />
            		<add key="Telerik.ScriptManager.TelerikCdn" value="Enabled" /><br />
            		<add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="http://myserver" /><br />
            		<add key="Telerik.ScriptManager.TelerikCdn.BaseSecureUrl" value="https://myserver" /><br />
            		</appSettings><br />
            	Note:
            	Ensure that your customers have unlimited access to the telerikstatic.com domain before turning on this feature.

###  CombinedResource `CombinedResourceMode`

Gets or sets a value indicating whether to use one combined resource files (skins, scripts) or let each control request its scripts and styles separately.

###  BaseUrl `String`

Gets or sets the base URL of the CDN that hosts the control scripts.

#### Remarks
In order to obtain the URL for a specific resource, RadScriptManager will combine the
            	base URL with the suite name (ajax) and the current version.
            	For example: http://aspnet-scripts.telerikstatic.com/ajax/2009.3.1207/Common/Core.js
            	
            	If the browser supports it, the RadScriptManager will serve a gzip compressed version from the "ajaxz" folder.
            	
            
            	See TelerikCdn for detailed description of the Telerik CDN network.

###  BaseSecureUrl `String`

Gets or sets the base secure (HTTPS) URL of the CDN that hosts the control scripts.

#### Remarks
The BaseSecureUrl will be used when the page is served over a secure connection.
            	
            	In order to obtain the URL for a specific resource, RadScriptManager will combine the
            	base URL with the suite name (ajax) and the current version.
            	For example: https://d2i2wahzwrm1n5.cloudfront.net/ajax/2009.3.1207/Common/Core.js
            	
            	If the browser supports it, the RadScriptManager will serve a gzip compressed version from the "ajaxz" folder.
            	
            
            	See TelerikCdn for detailed description of the Telerik CDN network.

