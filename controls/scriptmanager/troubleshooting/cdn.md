---
title: CDN
page_title: CDN - RadScriptManager
description: Check our Web Forms article about CDN.
slug: scriptmanager/troubleshooting/cdn
tags: cdn
published: True
position: 1
---

# CDN



## Links to web resources are non-secure although the page is requested through SSL

### Cause:

In certain cases, e.g. the web server is behind a load balancer, which is the SSL endpoint, the generated links to the web resources are non-secure. (SSL terminates on the load balancer and the web server receives a non-secure request, so it generates non-secure links.)

### Solution:

In these cases, a solution is to force secure links by setting the **BaseUrl** property to the value of the **BaseSecureUrl**. There are three alternative ways of doing this (identically applicable to **RadStyleSheetManager**).

The URL values used in the examples below are the official CDN links for the Styles and Scripts explained in [CDN support overview]({%slug scriptmanager/cdn-support/overview%}). If you use a [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}), you can use your custom link instead.

#### Solution 1 - Globally in the web.config file

````XML
<appsettings>      	
    <!-- use secure Telerik CDN for scripts -->
    <add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="https://d2i2wahzwrm1n5.cloudfront.net"  />   
    <add key="Telerik.ScriptManager.TelerikCdn.BaseSecureUrl" value="https://d2i2wahzwrm1n5.cloudfront.net"  />
    <!-- use secure Telerik CDN for styles and images -->
    <add key="Telerik.StyleSheetManager.TelerikCdn.BaseSecureUrl" value="https://d35islomi5rx1v.cloudfront.net" />
    <add key="Telerik.StyleSheetManager.TelerikCdn.BaseUrl" value="https://d35islomi5rx1v.cloudfront.net" />
</appsettings>
````



#### Solution 2 -  Page setup in the markup 

````XML
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <CdnSettings TelerikCdn="Enabled" BaseUrl="https://d2i2wahzwrm1n5.cloudfront.net" />
</telerik:RadScriptManager>
<telerik:RadStyleSheetManager runat="server" ID="RadStyleSheetManager1">
    <CdnSettings TelerikCdn="Enabled" BaseUrl="https://d35islomi5rx1v.cloudfront.net" />
</telerik:RadStyleSheetManager>
````



#### Solution 3 -  Page setup from the code-behind



````C#
	
protected void Page_Init(object sender, EventArgs e)
{
	RadScriptManager1.CdnSettings.BaseUrl = RadScriptManager1.CdnSettings.BaseSecureUrl;
	RadStyleSheetManager1.CdnSettings.BaseUrl = RadStyleSheetManager1.CdnSettings.BaseSecureUrl;
}
	
````
````VB.NET
	
Protected Sub Page_Init(sender As Object, e As System.EventArgs) Handles Me.Init
	RadScriptManager1.CdnSettings.BaseUrl = RadScriptManager1.CdnSettings.BaseSecureUrl
	RadStyleSheetManager1.CdnSettings.BaseUrl = RadStyleSheetManager1.CdnSettings.BaseSecureUrl
End Sub

````



## See Also

* [CDN support overview]({%slug scriptmanager/cdn-support/overview%})

* [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%})
