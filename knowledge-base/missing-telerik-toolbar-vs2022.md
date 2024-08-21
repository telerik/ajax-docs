---
title: Resolving Telerik Toolbar Not Showing Up in Visual Studio 2022
description: A guide to troubleshoot and fix the issue of Telerik toolbar not appearing in Visual Studio 2022 for Telerik UI for ASP.NET AJAX users.
type: troubleshooting
page_title: How to Fix Missing Telerik Toolbar in Visual Studio 2022 for ASP.NET AJAX Projects
slug: missing-telerik-toolbar-vs2022
tags: visual studio 2022, toolbar, telerik ui for asp.net ajax, installation, extensions
res_type: kb
ticketid: 1661992
---

## Environment

| Product | Progress® Telerik® UI for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description

After upgrading to Visual Studio 2022, the Telerik toolbar does not show up, even after uninstalling previous versions, resetting, and checking components.

## Cause

The Telerik toolbar may not appear due to missing Visual Studio Extensions for Telerik® UI for ASP.NET AJAX or an unsuccessful installation process.

## Solution

To resolve the issue with the Telerik toolbar not showing up in Visual Studio 2022, follow these steps:

1. Ensure you have installed the Visual Studio Extensions for Telerik UI for ASP.NET AJAX. These extensions are required for the Telerik menu to appear in the Visual Studio toolbar. Download and install them from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=TelerikInc.ProgressTelerikASPNETAJAXVSExtensions) for Visual Studio 2012 and later versions.

2. After installing the extension, restart Visual Studio 2022 to ensure that the changes take effect.

3. If the toolbar still does not appear, try reinstalling the Telerik UI for ASP.NET AJAX, making sure the installation process completes successfully.

4. If the issue persists, generate a Visual Studio ActivityLog file before contacting support:
   - Open Developer Command Prompt for Visual Studio 20xx with Administrative rights.
   - Execute `devenv /log %userprofile%\desktop\ActivityLog.xml` to start Visual Studio and create logs on your Desktop.
   - Reproduce the problem.
   - Attach the ActivityLog files to the support ticket.

## See Also

- [Visual Studio Extensions Overview](https://docs.telerik.com/devtools/aspnet-ajax/integration/visual-studio/visual-studio-extensions/overview)
- [Missing Telerik Menu in Visual Studio](https://docs.telerik.com/reporting/knowledge-base/missing-telerik-menu-in-visual-studio)

