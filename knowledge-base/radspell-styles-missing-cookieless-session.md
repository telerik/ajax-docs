---
title: Fix RadSpell Styles with Cookieless Sessions
description: Resolve unstyled RadSpell dialog content after upgrading to UI for ASP.NET AJAX 2026.3.812 when cookieless session state redirects stylesheet requests.
type: troubleshooting
page_title: Fix Unstyled RadSpell Dialog Content with Cookieless Sessions
meta_title: Fix Unstyled RadSpell Dialog Content with Cookieless Sessions
slug: radspell-styles-missing-cookieless-session
tags: spell, ui for asp.net ajax, radspell, stylesheet, webresource, cookieless session, cdn
res_type: kb
ticketid: 1719704
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>UI for ASP.NET AJAX</td>
        </tr>
        <tr>
            <td>Version</td>
            <td>2026.3.812</td>
        </tr>
    </tbody>
</table>

## Description

After upgrading to UI for ASP.NET AJAX 2026.3.812, the RadSpell dialog can render without its styles. The dialog content may show wide buttons or unexpected list markers while the surrounding page remains styled.

## Cause/Possible Cause(s)

The RadSpell dialog loads its stylesheets through `Telerik.Web.UI.WebResource.axd`. With ASP.NET cookieless session state, the request can be redirected to a session-enabled handler URL that does not contain the session identifier. The stylesheet is not returned, so the dialog content is unstyled.

## Solution

Enable the Telerik CDN for stylesheets in `web.config`:

````xml
<appSettings>
    <add key="Telerik.StyleSheetManager.TelerikCdn" value="Enabled" />
</appSettings>
````

This makes the RadSpell dialog load its stylesheets from the Telerik CDN instead of the local resource handler. The setting must be in `web.config`; a `RadStyleSheetManager` declared on the page does not configure the separate dialog page.

If the application cannot reach the Telerik CDN, host the required stylesheets and set the CDN base URLs in `web.config`:

````xml
<appSettings>
    <add key="Telerik.StyleSheetManager.TelerikCdn.BaseUrl" value="http://your-server-url/" />
    <add key="Telerik.StyleSheetManager.TelerikCdn.BaseSecureUrl" value="https://your-server-url/" />
</appSettings>
````

When possible, changing the application to cookie-based session state also prevents the redirect:

````xml
<sessionState cookieless="UseCookies" />
````

## Notes

Verify that requests for `Telerik.Web.UI.WebResource.axd` return the stylesheet content instead of a redirect. Keep the patched product version; reverting to an older version is not required.

## See Also

- [RadSpell overview]({%slug spell/overview%})
- [RadStyleSheetManager overview]({%slug stylesheetmanager/overview%})
- [Using Telerik CDN](https://www.telerik.com/products/aspnet-ajax/documentation/general-information/cdn-support)
