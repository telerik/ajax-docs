---
title: Custom CDN Provider
page_title: Custom CDN Provider - RadScriptManager
description: Check our Web Forms article about Custom CDN Provider.
slug: scriptmanager/cdn-support/custom-cdn-provider
components: ["scriptmanager"]
tags: custom,cdn,provider
published: True
position: 1
---

# Custom CDN Provider

>important Starting with the **November 11, 2026 release**, the Telerik CDN no longer receives new versions of the Telerik UI for ASP.NET AJAX resources. To load the scripts and skins of newer versions from a CDN, host them on your own server or on a CDN provider of your choice, as described in this article. See the [CDN Support Overview]({%slug scriptmanager/cdn-support/overview%}#telerik-cdn-is-discontinued) for details.

A custom CDN provider is the way to deliver the Telerik UI for ASP.NET AJAX script / css files through a CDN for the versions that are not published to the Telerik CDN. It is also useful in cases where the application runs on an Intranet or the client machines are otherwise restricted from reaching external hosts.

You can use your own server (a local CDN), or a commercial CDN provider, such as Cloudflare, Amazon CloudFront, or Azure Front Door. The Telerik UI for ASP.NET AJAX resources are not published as an npm package and are not available through public CDNs such as jsDelivr or unpkg.

If you want to use your own **CDN provider** to host the Telerik UI for ASP.NET AJAX script / css files, follow the steps below.

1. Obtain the **CDN resource package** for your controls version. For example, **Telerik_UI_for_ASP.NET_AJAX_2025_2_609_CDN_Resources.zip**.

	This file is available in [your account](https://www.telerik.com/account) and can be found in the Downloads section, where all product files for the UI for ASP.NET AJAX product are located. The location may vary slightly depending on your subscription.

2. Extract the archive. The file structure will look like this:
	* Scripts
		* ajax/[version]
		* ajaxz/[version]
	* Skins
		* ajax/[version]
		* ajaxz/[version]
	* ReadMe

	> The **Scripts/ajax** and **Scripts/ajaxz** folders are identical. In earlier versions before 2025 Q1, ajaxz contained gzip-compressed files, and ajax contained uncompressed files for older browsers. Starting with 2025 Q1 (version 2025.1.211), no pre-compressed files are provided. Compression should now be handled by your deployment pipeline or CDN.

3. Copy the content of the Scripts / Skins folders to your CDN host. Scripts and skins can be hosted on separate base URLs, for example `https://scripts.my.favorite.cdn` and `https://skins.my.favorite.cdn`:
	* CDN
		* ajax/[version]
		* ajaxz/[version]

4. Using **Uncompressed Resources** in IIS
	* Enable **Dynamic** and **Static** Compression
	* Configure **RadScriptManager** and **RadStyleSheetManager**:

	  	````ASP.NET
			<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
					<CdnSettings BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn" TelerikCdn="Enabled" />
			</telerik:RadStyleSheetManager>
			<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
					<CdnSettings BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn" TelerikCdn="Enabled" />
			</telerik:RadScriptManager>
	  	````



		You can also do it from web.config:
		````XML
			<appSettings>  
				<add key="Telerik.ScriptManager.TelerikCdn" value="Enabled" />
				<add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn" />   
				<add key="Telerik.ScriptManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn" />
				<add key="Telerik.StyleSheetManager.TelerikCdn" value="Enabled" />
				<add key="Telerik.StyleSheetManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn" />
				<add key="Telerik.StyleSheetManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn" />
			</appSettings>
		````

>important `BaseUrl` and `BaseSecureUrl` **must** point to your own host. When `TelerikCdn` is `Enabled`, but `BaseUrl` and `BaseSecureUrl` are not set or still point to one of the discontinued Telerik CDN hosts (`d2i2wahzwrm1n5.cloudfront.net`, `d35islomi5rx1v.cloudfront.net`, `aspnet-scripts.telerikstatic.com`, `aspnet-skins.telerikstatic.com`), the resources are served from the embedded resources of the Telerik.Web.UI assembly (and of the version-matched Telerik.Web.UI.Skins assembly for the built-in skins other than `Default`), as if `TelerikCdn` was `Disabled`. In this case, the [combined requests]({%slug scriptmanager/cdn-support/combined-request-for-telerik-controls%}) are also not applied.

>note The `{version}` folder in the CDN must match the version of the Telerik.Web.UI assembly used by the application. When you upgrade the application, copy the CDN resources of the new version to the CDN host. The resources of the previous versions can remain, so that the applications that have not been upgraded yet keep working.



Now the HTML output of the scripts tag will be like this:

````HTML
<script src="https://my.favorite.cdn/ajaxz/2025.2.609/Common/Core.js" type="text/javascript"></script>
<script src="https://my.favorite.cdn/ajaxz/2025.2.609/Common/jQuery.js" type="text/javascript"></script>
<script src="https://my.favorite.cdn/ajaxz/2025.2.609/Common/jQueryPlugins.js" type="text/javascript"></script>
<script src="https://my.favorite.cdn/ajaxz/2025.2.609/Common/Scrolling/ScrollingScripts.js" type="text/javascript"></script>
...
````

# Custom Local CDN Provider

The solution described in the section above is also fully applicable for creating a local CDN. Just copy the `Scripts` and `Skins` folders inside a folder in the root of your application and configure the BaseUrl and BaseSecureUrl to point to the resources folder. 

For more detailed instructions, check out the Configure Local CDN for Telerik UI for ASP.NET AJAX video: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/iPcvj7Vl5TM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


> If you are using a non-IIS CDN hosting service configuration can be different.

# See Also

 * [CDN Support Overview]({%slug scriptmanager/cdn-support/overview%})