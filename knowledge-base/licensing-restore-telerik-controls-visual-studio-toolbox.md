---
title: Unable to place Telerik controls in Visual Studio toolbox after 2025 Q1
description: This article provides a workaround for when Telerik controls do not appear in the Visual Studio toolbox following the installation of Telerik UI for ASP.NET AJAX.
type: troubleshooting
page_title: How to Restore Telerik Controls in Visual Studio Toolbox Post Installation
slug: licensing-restore-telerik-controls-visual-studio-toolbox
tags: visual studio, toolbox, installation, controls, dll, workaround
res_type: kb
ticketid: 1679086
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Progress® Telerik® UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2025.1.211</td>
</tr>
</tbody>
</table>

## Description

After installing the 2025 Q1 release of Telerik UI for ASP.NET AJAX, the Telerik controls disappeared from the Visual Studio toolbox, making it impossible to place the Telerik controls again.

## Cause

The issue is due to the 2025 Q1 MSI installer not placing the `Telerik.Licensing.Runtime.dll` (which is now referenced by the `Telerik.Web.UI.dll` assembly) in the Bin folder. This omission prevents the Toolbox from recognizing the controls.

## Solution

To resolve the issue, manually copy the `Telerik.Licensing.Runtime.dll` into the same directory as the `Telerik.Web.UI.dll`. For example, copy it to `C:\Program Files (x86)\Progress\Telerik UI for ASP.NET AJAX 2025 Q1\Bin462\`. After copying the DLL, re-add the controls to the Visual Studio Toolbox. This manual workaround has been confirmed by several users to resolve the problem.

A fix is currently in progress, and a hotfix release is targeted for the near future, which should eliminate the need for this manual step.

For more details on this issue, see the bug report: [AJAX Visual Studio extensions don't add Telerik references when creating or upgrading projects](https://feedback.telerik.com/aspnet-ajax/1678809-ajax-visual-studio-extensions-don-t-add-telerik-references-when-creating-or-upgrading-projects).

## See Also

- [Telerik UI for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/introduction)
- [How to Manually Add Telerik Controls to the Visual Studio Toolbox](https://docs.telerik.com/devtools/aspnet-ajax/general-information/adding-the-telerik-controls-to-the-visual-studio-toolbox)
- [Troubleshooting Telerik UI for ASP.NET AJAX Installation](https://docs.telerik.com/devtools/aspnet-ajax/installation/installing-the-controls/troubleshooting-installation)

