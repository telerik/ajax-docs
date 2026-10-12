---
title: Loading External jQuery Using RadScriptManager with Embedded Scripts in DLL
description: Learn how to correctly load external jQuery when using RadScriptManager and scripts embedded as web resources in a DLL.
type: how-to
page_title: Correctly Load External jQuery with RadScriptManager and DLL Embedded Scripts
meta_title: Correctly Load External jQuery with RadScriptManager and DLL Embedded Scripts
slug: scriptmanager-load-external-jquery
tags: scriptmanager, radscriptmanager, externaljqueryurl, kendo-ui, asp.net-ajax
res_type: kb
ticketid: 1719288
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>ScriptManager for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.2.708</td>
</tr>
</tbody>
</table>

## Description

I need to load an external jQuery version using RadScriptManager, where the jQuery file is embedded as a web resource in a DLL. The `ExternaljQueryUrl` property does not work for this scenario. The goal is to ensure compatibility between Telerik UI's embedded jQuery and Kendo UI's external jQuery, while avoiding conflicts or errors like `jQuery is undefined`.

This knowledge base article also answers the following questions:
- How to load jQuery as a web resource in RadScriptManager?
- How to avoid conflicts between Telerik UI and Kendo UI jQuery instances?
- Why does ExternaljQueryUrl not work with DLL-embedded jQuery?

## Solution

To correctly load external jQuery as a web resource in RadScriptManager and maintain compatibility with Telerik UI and Kendo UI, follow these steps:

1. Keep the internal jQuery enabled for Telerik UI by setting `EnableEmbeddedjQuery="true"` in the RadScriptManager.
2. Add your custom external jQuery from the DLL as a script reference in the correct order.
3. Ensure the scripts are loaded in this order:
   - Internal jQuery (embedded by Telerik UI).
   - External jQuery (from the DLL for Kendo UI).
   - Kendo UI scripts.
   - Custom JavaScript scripts.

### Example RadScriptManager Configuration

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <Scripts>
        <%-- MS AJAX is always loaded first --%>

        <%-- Load your scripts in this exact order --%>

        <%-- Script 1 --%>
        <%-- Script 2 --%>
        <%-- Script 3 --%>
        <%-- etc. --%>
    </Scripts>
</telerik:RadScriptManager>
````

### Key Notes

- The `ExternaljQueryUrl` property cannot reference a WebResource. It is intended for local or external file paths.
- From the 2026 Q1 release, Telerik UI no longer relies on the global `window.jQuery` instance, which eliminates conflicts when using multiple jQuery versions.
- If you encounter errors like `$telerik.$ is undefined` or `onEvent is undefined`, ensure that jQuery and the required dependencies are loaded in the correct order.

## See Also

- [RadScriptManager Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/overview)
- [Using External jQuery in RadScriptManager](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/scriptmanager-easing-error-after-upgrade-2026-q1)

