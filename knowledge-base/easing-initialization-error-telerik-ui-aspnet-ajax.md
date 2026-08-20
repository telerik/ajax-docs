```markdown
---
title: Client-Side "easing" Initialization Error After Upgrading Telerik UI for ASP.NET AJAX
description: Resolve the "easing" initialization error in Telerik UI for ASP.NET AJAX after upgrading to version 2026.3.810.462 by configuring external jQuery settings properly.
type: troubleshooting
page_title: Easing Initialization Error Post Telerik UI for ASP.NET AJAX Update
meta_title: Easing Initialization Error Post Telerik UI for ASP.NET AJAX Update
slug: easing-initialization-error-telerik-ui-aspnet-ajax
tags: telerik-ui-for-aspnet-ajax, radscriptmanager, jquery, client-side-error, initialization-error
res_type: kb
ticketid: 1717990
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> 2026.3.810.462 </td>
</tr>
</tbody>
</table>

## Description

I face a `TypeError: Cannot read properties of undefined (reading 'easing')` error during client-side initialization in Telerik UI for ASP.NET AJAX after upgrading to version 2026.3.810.462. The error occurs when the application uses an external jQuery file, but the Telerik internal jQuery instance is not properly initialized. This issue prevents the page from completing its load cycle and disrupts application functionality.

## Cause

Starting with version 2026 Q1, Telerik UI for ASP.NET AJAX isolates its internal jQuery instance. If `EnableEmbeddedjQuery="false"` is set in `RadScriptManager` without a valid `ExternaljQueryUrl`, the Telerik client scripts may fail to initialize properly, leading to the error.

## Solution

To resolve the issue, configure the `RadScriptManager` to use a valid external jQuery source. Follow these steps:

1. Open the affected page or Master Page containing the `RadScriptManager` declaration.
2. Update the `RadScriptManager` configuration to include a valid `ExternaljQueryUrl` pointing to a supported jQuery 3.x file. For example:
   ```html
   <telerik:RadScriptManager
       ID="RadScriptManager1"
       runat="server"
       EnablePageMethods="true"
       EnableEmbeddedjQuery="false"
       ExternaljQueryUrl="https://code.jquery.com/jquery-3.7.1.min.js" />
   ```
3. Ensure the following:
   - The `ExternaljQueryUrl` points to a valid jQuery 3.x file.
   - The `<head>` element of the page contains `runat="server"`.
   - No duplicate jQuery instances are loaded in the page, Master Page, bundles, or custom scripts.
   - Custom scripts requiring jQuery do not execute before the Telerik scripts are initialized.
   - No manual script references (e.g., `Core.js`, `jQuery.js`, `jQueryExternal.js`, or `jQueryPlugins.js`) are added to the `RadScriptManager` unless required for specific diagnostics.
   - The application does not use jQuery 4.x, as Telerik UI for ASP.NET AJAX supports only jQuery 3.x.

4. If using an external jQuery source, you can temporarily set `EnableEmbeddedjQuery="true"` to confirm that the issue is related to the external jQuery setup or script order.

## See Also

- [RadScriptManager Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/integration/jquery#including-external-jquery)
- [Unload Event Listeners Are Deprecated](https://developercommunity.visualstudio.com/t/unload-event-listeners-are-deprecated-an/10620446)
- [ASP.NET WebForms ScriptManager Permission Policy Violation](https://developercommunity.visualstudio.com/t/ASPNET-WebForms-ScriptManager-triggers/11060697)
```
