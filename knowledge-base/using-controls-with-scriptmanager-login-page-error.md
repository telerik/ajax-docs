---
title: Use Telerik Controls with ScriptManager on Login Page Throws an Error
page_title: Use Telerik Controls with ScriptManager on Login Page Throws an Error
description: "When working with Telerik UI for ASP.NET AJAX, using the Telerik controls with RadScriptManager on your login page throws an error."
slug: using-controls-with-scriptmanager-login-page-error
tags: telerik, asp, net, ajax, troubleshooting, control, stylesheet, not, registered, after, ajax, request
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

When working with Telerik UI for ASP.NET AJAX, using the Telerik controls with the ScriptManager on my login page throws an error.

## Error Messages

* `ASP.NET Ajax client-side framework failed to load`

* `'Sys' is undefined`

* `"Telerik.Web.UI" is undefined`

## Cause

As the website denies access to all pages to unauthorized users, access to the `Telerik.Web.UI.WebResource.axd` handler is unauthorized and the handler serves the content of the login page instead of the combined scripts.

Alternatively, if a website was migrated from a previous ASP.NET version to the latest, a `preCondition` attribute might have been added to the `Telerik.Web.UI.WebResource.axd` handler declaration stating that the runtime version is 2.0:

```
 preCondition="integratedMode,runtimeVersionv2.0"
```

## Solution

Depending on the possible cause of this issue, use either of the following approaches:

* (Unauthorized handler) Add a `<location>` section to the application configuration file thus allowing access to `Telerik.Web.UI.WebResource.axd` to all users, for example:

	````XML
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
````

* (Previous version) Remove `runtimeVersionv2.0` from the handler declaration.
