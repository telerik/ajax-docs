---
title: Uncaught TypeError Cannot read properties of undefined reading easing after upgrading to 2026 Q1
description: Learn how to resolve the jQuery easing JavaScript error that occurs after upgrading Telerik UI for ASP.NET AJAX to version 2026.1.211 when using an external jQuery library.
type: troubleshooting  
page_title: JavaScript Error reading easing After Upgrading to 2026 Q1 with External jQuery Configuration
meta_title: Fix jQuery easing Error After Upgrading Telerik UI for ASP.NET AJAX to 2026 Q1
slug: scriptmanager-easing-error-after-upgrade-2026-q1
tags: ui-for-aspnet-ajax, radscriptmanager, breaking-changes, externaljqueryurl, enableembeddedjquery  
res_type: kb  
ticketid: 1709862
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
<td>2026.1.211</td>  
</tr>  
</tbody>  
</table>  

## Description  

After upgrading to Telerik UI for ASP.NET AJAX 2026.1.211 (2026 Q1), pages with Telerik controls throw JavaScript errors in the browser console:

* `Uncaught TypeError: Cannot read properties of undefined (reading 'easing')`
* `Uncaught TypeError: $telerik.$ is not a function`
* `Uncaught TypeError: h is not a constructor`

These errors occur on pages that previously worked with an older version and use the legacy approach for disabling the embedded jQuery — a manual `<script>` tag in the `<head>` combined with explicit `ScriptReference` entries in `RadScriptManager`:

````aspx
<head runat="server">
    <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
</head>

...

<telerik:RadScriptManager runat="server" ID="RadScriptManager1" EnableEmbeddedjQuery="false">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
    </Scripts>
</telerik:RadScriptManager>
````

## Cause  

Starting with the 2026 Q1 release, Telerik UI for ASP.NET AJAX initializes an isolated internal jQuery instance exposed through `$telerik.$`. The controls no longer attach to the global `window.jQuery` object automatically.

This behavior occurs when:  

1. **`EnableEmbeddedjQuery` is set to `false`** — Telerik does not load its own jQuery.
2. **No `ExternaljQueryUrl` is provided** — Telerik has no jQuery source to create its internal `$telerik.$` instance.
3. **The old manual `ScriptReference` approach is used** — The legacy `Core.js` / `jQueryExternal.js` / `jQueryPlugins.js` script references and a standalone `<script>` tag in the `<head>` no longer wire up `$telerik.$` correctly.

As a result, `$telerik.$` remains `undefined`, the easing/animation extensions in `jQueryPlugins.js` cannot attach, and controls fail during initialization.

## Solution  

Remove the legacy `<script>` tag and `ScriptReference` entries, and use the new `ExternaljQueryUrl` property instead.

### Option 1: Configure per page in markup

Replace the old `RadScriptManager` declaration:

````aspx
<telerik:RadScriptManager runat="server" ID="RadScriptManager1"
    EnableEmbeddedjQuery="false"
    ExternaljQueryUrl="~/scripts/jquery-3.7.1.min.js">
</telerik:RadScriptManager>
````

Remove the manual `<script>` tag from the `<head>` and the `<Scripts>` section entirely. The `ExternaljQueryUrl` property handles everything automatically.

### Option 2: Configure globally in web.config (recommended)

Set both properties in `<appSettings>` so every `RadScriptManager` in the application picks them up automatically — no per-page markup changes needed:

````xml
<appSettings>
    <add key="Telerik.ScriptManager.EnableEmbeddedjQuery" value="false" />
    <add key="Telerik.ScriptManager.ExternaljQueryUrl" value="~/scripts/jquery-3.7.1.min.js" />
</appSettings>
````

Then simplify the `RadScriptManager` declaration to:

````aspx
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
````

Remove the manual `<script>` tag from the `<head>` and the `<Scripts>` section.

### Steps

1. Remove the manual jQuery `<script>` tag from the `<head>`.
2. Remove the `<Scripts>` section containing `Core.js`, `jQueryExternal.js`, and `jQueryPlugins.js` references from `RadScriptManager`.
3. Set the `ExternaljQueryUrl` property either in the `RadScriptManager` markup (Option 1) or in the `web.config` `<appSettings>` (Option 2).
4. Confirm the external jQuery script (`~/scripts/jquery-3.7.1.min.js`) is accessible and correctly resolves. Use app-relative paths (`~/`), absolute paths (`/`), or CDN URLs (`https://code.jquery.com/jquery-3.7.1.min.js`) based on your application's requirements.  

>important The `<head>` tag must have `runat="server"` for the external jQuery script to be injected. If `runat="server"` is missing, the `Page.Header` property is `null` and the external jQuery script will not render.

### Verification  
1. Apply the changes above and load a page with Telerik controls.  
2. Check the browser console for errors.  
3. If the page works without errors, the configuration is successful.  
4. Type in the console `jQuery.fn.jquery` and `$telerik.$.fn.jquery` to verify that the setup and the new jQuery version is loaded as expected.

## See Also  
- [RadScriptManager Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/overview)  
- [Using External jQuery](https://docs.telerik.com/devtools/aspnet-ajax/integration/jquery/using-jquery#including-external-jquery)  
- [Release Notes - Telerik UI for ASP.NET AJAX 2026 Q1](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/telerik-ui-for-asp-net-ajax-2026-1-211-(2026-q1))  
- [Breaking Changes in Telerik UI for ASP.NET AJAX](https://www.telerik.com/forums/known-issues-and-important-changes#6054750)  

