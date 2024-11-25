---
title: Sys Is Undefined Microsoft JScript Runtime Error Occurs
page_title: Sys Is Undefined Microsoft JScript Runtime Error Occurs
description: "When working with Telerik UI for ASP.NET AJAX, I get a Microsoft JScript runtime error that Sys is undefined."
slug: sys-is-undefined-ms-js-runtime-error
tags: telerik, asp, net, ajax, troubleshooting, microsoft, jscript, runtime, error, sys, is, undefined
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When working with Telerik UI for ASP.NET AJAX, I get a Microsoft JScript runtime error that Sys is undefined.

## Error Message

`Microsoft JScript runtime error: 'Sys' is undefined`

## Cause

The possible cause for this issue is that you have added a Telerik UI for ASP.NET AJAX control but your application is not configured to use ASP.NET AJAX.

## Solution

To solve this issue, follow the steps described in the [Common reasons for the Sys is undefined error in ASP.NET Ajax applications](https://www.telerik.com/blogs/common-reasons-for-the-lsquo-sys-is-undefined-rsquo-error-in-asp-net-ajax-applications) blog post.

More troubleshooting steps are listed below:
* Ensure that a page with <asp:ScriptManager>, an <asp:UpdatePanel> with a <asp:Button> inside operates as expected (i.e, performs AJAX requests)
* Add location elements that allow access to all our handlers (http://docs.telerik.com/devtools/aspnet-ajax/general-information/web-config-settings-overview#mandatory-additions-to-the-webconfig) and to the ScriptResource.axd handler from the framework:

	```<configuration>
	  <location path="Telerik.Web.UI.WebResource.axd">
	    <system.web>
	      <authorization>
	        <allow users="*"/>
	      </authorization>
	    </system.web>
	  </location>
	  <location path="ScriptResource.axd">
	    <system.web>
	      <authorization>
	        <allow users="*"/>
	      </authorization>
	    </system.web>
	  </location>
	```
</configuration>

* Enable the Microsoft and Telerik CDN (http://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/cdn-support/overview):

```
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableCdn="true" CdnSettings-TelerikCdn="Enabled"></telerik:RadScriptManager>
```

You can find more information at:
* [Resolving ASP.NET Ajax Client-Side Framework Load Failure](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/common-resolve-aspnet-ajax-client-side-framework-load-failure)
* [Sys is undefined](https://stackoverflow.com/questions/75322/sys-is-undefined)
* ['Sys' is undefined.](https://social.msdn.microsoft.com/Forums/en-US/e74c84a9-b2a7-40cd-bf2b-365e3b92e6f3/sys-is-undefined?forum=aspdotnetajax)
* [Sys is undefined](https://www.telerik.com/forums/sys-is-undefined-026d9a4c6c1e#3801667)
* [Use Telerik Controls with ScriptManager on Login Page Throws an Error](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/using-controls-with-scriptmanager-login-page-error)

   
    
