---
title: CDN
page_title: CDN | UI for ASP.NET AJAX Documentation
description: CDN
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

In these cases, a solution is to force secure links by setting the __BaseUrl__ property to the value of the __BaseSecureUrl__. There are three alternative ways of doing this (identically applicable to __RadStyleSheetManager__):

* 

````XML
	<appsettings>  
	    <add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="https://my.favorite.cdn"  />   
	</appsettings>
````



* 

````XML
	<telerik:RadScriptManager 
	    ID="RadScriptManager1" 
	    runat="server">
	    <CdnSettings TelerikCdn="Enabled" 
	        BaseUrl="https://my.favorite.cdn" />
	</telerik:RadScriptManager>
````



* 

>tabbedCode

````C#
	
	    protected void Page_Init(object sender, EventArgs e)
	    {
	        RadScriptManager1.CdnSettings.BaseUrl = RadScriptManager1.CdnSettings.BaseSecureUrl;
	    }
	
````
````VB.NET
	
	    Protected Sub Page_Init(sender As Object, e As System.EventArgs) Handles Me.Init
	        RadScriptManager1.CdnSettings.BaseUrl = RadScriptManager1.CdnSettings.BaseSecureUrl
	    End Sub
	
	#End Region
	
	End Class


>end

# See Also
