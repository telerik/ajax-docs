---
title: Combined CDN Request for Telerik Controls
page_title: Combined CDN Request for Telerik Controls - RadStyleSheetManager
description: Check our Web Forms article about Combined CDN Request for Telerik Controls for performance improvement.
slug: stylesheetmanager/cdn-support/combined-request-for-telerik-controls
tags: cdn,request,combined,performance,improvement
published: True
position: 2
---

# Combined CDN Request for Telerik Controls

The Telerik stylesheets CDN can be optimized to request a single file that contains all the [base stylesheets]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}#base-stylesheets) for all the controls from the UI for ASP.NET AJAX suite (**Examples 1-2**).

This resource combination will result in a single request for the Telerik controls base stylesheets on each page that can be cached aggressively by the browser, as opposed to a number of different files that may not all be already cached. While this file will usually be larger than the sum of all individual files for an average page, if the end user downloads it once, they will get it from the browser cache for all pages in your application that have this setting enabled.

The skin-specific stylesheets are not combined into a single request and each control will initiate a request for it.


>caption **Example 1**: Enable combined base stylesheet resource for the Telerik controls for the entire application in the web.config.

````XML
<configuration>
    <appSettings>
        <add key="Telerik.StyleSheetManager.TelerikCdn.CombinedResource" value="Enabled" />
    </appSettings>
</configuration>
````

You can see the rest of the settings you can set globally via appSettings keys in the [web.config Settings Overview](/general-information/web-config-settings-overview#control-properties-you-can-set-from-the-webconfig) article.

>caption **Example 2**: Enable combined base stylesheet resource for the Telerik controls for a concrete page in the markup.

````ASP.NET
<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
	<CdnSettings TelerikCdn="Enabled" CombinedResource="Enabled" />
</telerik:RadStyleSheetManager>
````

>important Since all the base stylesheets are combined into one and are present on the page, all controls (including the RadStyleSheetManager) must have the same [Render Mode]({%slug controls/render-modes%}) on the page. 
>
>The RenderMode property of the RadStyleSheetManager determines whether to load the combined resource for Classic or Lightweight mode, so if it is not in sync with the rest of the controls, there will be appearance issues with the Telerik controls.


# See Also

 * [Telerik Scripts CDN Overview]({%slug scriptmanager/cdn-support/overview%})

 * [Telerik Styles CDN Overview]({%slug stylesheetmanager/cdn-support/overview%})

 * [web.config Settings Overview]({%slug general-information/web-config-settings-overview%}) 
