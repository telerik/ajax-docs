---
title: Include external jQuery for Telerik prior to version 2026 Q1
description: "Instructions to include external jQuery for Telerik UI for ASP.NET AJAX components prior to verion 2026 Q1."
type: how-to
page_title: Include external jQuery for Telerik prior to version 2026 Q1
slug: common-include-external-jquery-prior-2026-q1
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
        <tr>
			<td>Version</td>
			<td>All versions before 2026 Q1</td>
		</tr>
	</tbody>
</table>

## Description

Instructions to include external jQuery for Telerik UI for ASP.NET AJAX components prior to verion 2026 Q1.

This article also answers the following question:

- How can I include an external jQuery for Telerik UI for ASP.NET AJAX before version 2026 Q1? 

## Solution

To include an external jQuery for Telerik UI for ASP.NET AJAX versions before **2026 Q1**:

1. Load the jQuery script in the `<head>`
2. Disable the Embedded jQuery using one of the following options:
   - Set the `EnableEmbeddedjQuery` property of the RadScriptManager to `false`.
   - Add `<add key="Telerik.ScriptManager.EnableEmbeddedjQuery" value="false"/>` to the `<appSettings>` element in the `web.config`.
3. Reference the following scripts in this exact order RadScriptManager in this order:
   1. `Telerik.Web.UI.Common.Core.js` - Initializes Telerik client objects
   2. `Telerik.Web.UI.Common.jQueryExternal.js` - Assigns jQuery to Telerik client objects and clears the globals to remove conflicts.
   3. `Telerik.Web.UI.Common.jQueryInclude.js` - Assigns jQuery aliases to globals (`window.jQuery` and `window.$`).

>caption Example

````ASP.NET
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="Default" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Telerik UI for ASP.NET AJAX Web Application</title>
    <%-- Load the jQuery in the head --%>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <%-- Set the EnableEmbeddedjQuery property to false --%>
        <telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
            <Scripts>
                <%-- Reference the Script dependencies --%>
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
                <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
            </Scripts>
        </telerik:RadScriptManager>
    </form>
</body>
</html>
````

>caption Demo video

<iframe width="560" height="315" src="https://www.youtube.com/embed/krq1zMFIezA?si=p9xGj92efVweL2TW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
