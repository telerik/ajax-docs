---
title: Custom CDN Provider
page_title: Custom CDN Provider | RadScriptManager for ASP.NET AJAX Documentation
description: Custom CDN Provider
slug: scriptmanager/cdn-support/custom-cdn-provider
tags: custom,cdn,provider
published: True
position: 1
---

# Custom CDN Provider



## 

In case you want to use your own **CDN provider** for hosting RadControls script / css files you need to follow these steps:

1. Obtain the **CDN resource package** for your controls version. For example **Telerik.Web.UI_2011_2_712_CDN_Resources.zip**.This file is available on demand and can be found where all product files for the RadControls for ASP.NET AJAX are located.
For this purpose you need to log in to your Telerik account and follow the steps below:
	1. Choose the *Products and Subscriptions* item from the menu;
	1. Select the product name (this can be the *DevCraft Ultimate* for example);
	1. From the newly opened page select the **Download** Installer and other resources* option;
	1. From the **RadControls for ASP.NET AJAX** section you will need to choose the *Browse all products files*;
	1. In the *Other* field section you can find the *CDN Resources*.

2. Extract the archive. The file structure will look like this:
	* Scripts
	* ajax/[version]
	* ajaxz/[version]
	* Skins
	* ajax/[version]
	* ajaxz/[version]
	* ReadMe
	Scripts/**ajaxz** folder contains the compressed (gzipped) javascript files. The Scripts/**ajax** folder contains the uncompressed javascript files for compatibility with older browsers (IE6).

3. Deploy the content of the Scripts / Skins folder to your CDN host.

4. Set HTTP headers
	* Cache-Control: public, max-age=31536000
	* Expires - 1 year from the date of the request, if set dynamically. Far-future date (10 years) if set statically.
	* For all files in the Scripts/ajaxz folder: Content-Encoding: gzip
	* For .css files in the Skins/ajaxz folder: Content-Encoding: gzip

5. Set the **BaseUrl** attribute of the **CdnSettings** property to the domain name of your CDN and TelerikCdn="Enabled":

	````ASPNET
	<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
		<CdnSettings BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn"
			TelerikCdn="Enabled" />
	</telerik:RadScriptManager>
	````

You can also do it from web.config:

	````XML
	<appsettings>  
		<add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn "  />   
		<add key="Telerik.ScriptManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn "  />
	</appsettings>
````





Now the HTML output of the scripts tag will be like this:

````HTML
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/Common/Core.js" type="text/javascript"></script>
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/Common/jQuery.js" type="text/javascript"></script>
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/Common/jQueryPlugins.js" type="text/javascript"></script>
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/Common/Scrolling/ScrollingScripts.js"
	type="text/javascript"></script>
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/Common/Navigation/NavigationScripts.js"
	type="text/javascript"></script>
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/Menu/RadMenuScripts.js" type="text/javascript"></script>
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/TabStrip/RadTabStripScripts.js"
	type="text/javascript"></script>
<script src="http://my.favorite.cdn/ajaxz/2009.3.1203/ListBox/RadListBoxScripts.js"
	type="text/javascript"></script>
````



# See Also

 * [Overview]({%slug scriptmanager/cdn-support/overview%})
