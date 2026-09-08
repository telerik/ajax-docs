---
title: Scrollbar Does Not Resize After Telerik Web UI Upgrade
description: Troubleshoot RadPane scrollbar issues after upgrading Telerik Web UI from version 2013.2.611.40 to 2028.3.812.
type: troubleshooting
page_title: RadPane Scrollbar Missing or Not Resizing After Telerik Web UI Upgrade
meta_title: RadPane Scrollbar Missing or Not Resizing After Telerik Web UI Upgrade
slug: radpane-scrollbar-not-resizing-upgrade
tags: telerik web ui, radpane, scrollbar, upgrade issue
res_type: kb
ticketid: 1718495
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> 
Telerik UI for ASP.NET AJAX
</td>
</tr>
<tr>
<td> Version </td>
<td> 2028.3.812 </td>
</tr>
</tbody>
</table>

## Description
After upgrading Telerik Web UI from version 2013.2.611.40 to version 2028.3.812, the vertical scrollbar of the [RadPane](https://www.telerik.com/products/aspnet-ajax/documentation/controls/splitter/getting-started/structure#panes) does not resize properly, preventing users from scrolling up or down. This issue occurs in Google Chrome version 152.0.7977.65 and might be related to the pane's border settings.

## Cause
The issue is likely caused by a conflict in the calculation of the RadPane's content dimensions when specific border-related attributes (`BorderColor`, `BorderWidth`, `BorderStyle`) are applied. This can disrupt the rendering of the inner scrollbar.

## Solution
To resolve the issue, test the following steps:

1. Open the affected page (e.g., `Tasklist2.aspx`) and locate the RadPane declarations.
2. Temporarily comment out or remove the border-related attributes from the affected RadPane. For example:
   ```aspnet
   <telerik:RadPane ID="LeftPane" runat="server" Scrolling="Y" Width="30%" 
       MinWidth="200" MinHeight="300" PersistScrollPosition="true">
   </telerik:RadPane>
   ```
   Remove attributes like `BorderColor="gradientInactiveCaption"`, `BorderWidth`, and `BorderStyle`.
3. Reload the page in a new browser tab to ensure no cached styles affect the result.
4. Check if the vertical scrollbar now appears and works correctly.



## See Also
- [RadPane Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/splitter/getting-started/structure#panes)
- [Upgrade Telerik UI for ASP.NET AJAX](https://www.telerik.com/products/aspnet-ajax/documentation/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-to-a-newer-version-of-telerik-ui-for-asp-net-ajax)
- [Setting Up the Telerik UI for ASP.NET AJAX License Key](https://www.telerik.com/products/aspnet-ajax/documentation/licensing/license-key)
