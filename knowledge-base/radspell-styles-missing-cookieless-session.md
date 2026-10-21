---
title: RadSpell dialog styles are missing with cookieless session state
description: Resolve missing RadSpell dialog styles after upgrading to UI for ASP.NET AJAX 2026.3.812 when cookieless session state redirects WebResource.axd requests.
type: troubleshooting
page_title: RadSpell Styles Missing with Cookieless Session State
slug: radspell-styles-missing-cookieless-session
tags: radspell, ui for asp.net ajax, cookieless session state, stylesheet manager, webresource.axd
res_type: kb
ticketid: 1719704
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX RadSpell</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.812</td>
</tr>
</tbody>
</table>

## Description

After upgrading to UI for ASP.NET AJAX 2026.3.812, the RadSpell dialog can render without its styles. Symptoms include unusually wide buttons, unexpected bullet points, and other unstyled dialog content. Changing the RadSpell `Skin` or `RenderMode` does not resolve the issue when the application uses cookieless session state.

## Cause/Possible Cause(s)

In the 2026 releases, the `Telerik.Web.UI.WebResource.axd` handler uses read-only session state. With cookieless sessions, ASP.NET redirects requests that do not include the session identifier in the URL. The RadSpell dialog requests its stylesheets from an absolute `Telerik.Web.UI.WebResource.axd` URL without the cookieless session prefix, so the request returns a `302` redirect instead of the stylesheet. The dialog CSS is therefore not loaded.

## Solution

1. Open the application `web.config` file.
2. Add the Telerik CDN setting under `appSettings`:

````xml
<appSettings>
    <add key="Telerik.StyleSheetManager.TelerikCdn" value="Enabled" />
</appSettings>
````

3. Make sure the server and client browsers can reach the Telerik CDN.
4. Verify the `Telerik.Web.UI.WebResource.axd` requests in the browser Network tools. The stylesheet requests should no longer be redirected and the RadSpell dialog should be styled.

As a longer-term option, change the ASP.NET session state to `cookieless="UseCookies"` or `cookieless="AutoDetect"` after regression testing. This sends the session identifier in a cookie and removes the redirect condition.

## Notes

A `RadStyleSheetManager` declared on the page may not affect the separate RadSpell dialog page. Configure the CDN setting in `web.config` so it applies to the dialog resources as well.

## See Also

- [RadSpell Documentation]({%slug spell/overview%})
- [RadStyleSheetManager Overview]({%slug stylesheetmanager/overview%})
- [Web.config Settings Overview]({%slug getting-started/installation/web-config-settings-overview%})

