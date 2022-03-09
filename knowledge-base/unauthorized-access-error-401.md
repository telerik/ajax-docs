---
title: Unauthorized Access (401) Error
page_title: Unauthorized Access (401) Error
description: "When working with Telerik UI for ASP.NET AJAX, an unauthorized access error (401) occurs."
slug: unauthorized-access-error-401
tags: telerik, asp, net, ajax, troubleshooting, unauthorized, access, 401, error
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

When working with Telerik UI for ASP.NET AJAX, I get an unauthorized access error (401).

## Cause

When your project uses a form of authentication, for example, Windows Authentication, access to most resources, such as pages, images, and handlers, is not allowed for anonymous (unauthorized) users. This affects the Telerik controls because they use a number of [HTTP Handlers]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig) that also get blocked.

## Solution

To solve this issue, use either of the following approaches:

* Use the CDNs Telerik provides for [scripts]({%slug scriptmanager/cdn-support/overview%}) and [skins]({%slug stylesheetmanager/cdn-support/overview%}), and the [MS AJAX CDN](https://www.asp.net/ajax/cdn#Using_ASPNET_Ajax_from_the_CDN_20) so that WebResources are used as rarely as possible. As a result, only some dialogs and the binary image and file uploads will keep using WebResources.

	You can also use a [single request for all scripts]({%slug scriptmanager/cdn-support/combined-request-for-telerik-controls%}) and a [combined base stylesheet request]({%slug stylesheetmanager/cdn-support/combined-request-for-telerik-controls%}) to greatly reduce the number of network requests.

* Alternatively, add `<location>` elements to your `web.config` for all the handlers you use, so that ASP.NET does not block them. For example:

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
		  <location path="Telerik.Web.UI.DialogHandler.aspx">
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
		  <location path="WebResource.axd">
		    <system.web>
		      <authorization>
			<allow users="*"/>
		      </authorization>
		    </system.web>
		  </location>
		  ...
		</configuration>


		
