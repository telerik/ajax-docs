---
title: Custom CDN Provider
page_title: Custom CDN Provider - RadScriptManager
description: Check our Web Forms article about Custom CDN Provider.
slug: scriptmanager/cdn-support/custom-cdn-provider
tags: custom,cdn,provider
published: True
position: 1
---

# Custom CDN Provider

A custom (especially local) CDN provider is useful in cases where the application runs on an Intranet or the client machines are otherwise restricted from reaching the cloud where the Telerik CDN is hosted.

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

4. Copy the content of the Scripts / Skins folder to your CDN host:
	* CDN
		* ajax/[version]
		* ajaxz[version]

5. Using **Uncompressed Resources** in IIS
	* Enable **Dynamic** and **Static** Compression
	* Configure **RadScriptManager** and **RadStyleSheetManager**:

		**ASP.NET**
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
				<add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn "  />   
				<add key="Telerik.ScriptManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn "  />
			</appSettings>
		````



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