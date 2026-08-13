---
title: FileLoadException with Telerik.Licensing.Runtime After Upgrading to 2026.3.812 
description: Resolve the "Could not load file or assembly 'Telerik.Licensing.Runtime'" error after upgrading to UI for ASP.NET AJAX 2026.3.812.
type: troubleshooting
page_title: Telerik.Licensing.Runtime Error After Upgrading to UI for ASP.NET AJAX 2026.3.812
meta_title: Telerik.Licensing.Runtime Error After Upgrading to UI for ASP.NET AJAX 2026.3.812
slug: licensing-runtime-error-ui-aspnet-ajax-2026-3-812
tags: telerik.licensing.runtime,telerik.ui.aspnet-ajax,telerik.web.ui,radspreadsheet,telerik.spreadsheet.web
res_type: kb
ticketid: 1717765
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
<td> 2026.3.812 </td>
</tr>
</tbody>
</table>

## Description

I encounter the following error after upgrading to UI for ASP.NET AJAX 2026.3.812 and Licensing 1.9.1:

`Could not load file or assembly 'Telerik.Licensing.Runtime, Version=1.8.2.0, Culture=neutral, PublicKeyToken=98bb5b04e55c09ef' or one of its dependencies.`

This issue occurs even though no binding redirects are present in the `web.config` file. 

## Cause

The error arises from leftover references to older Telerik assemblies, such as `Telerik.Web.Spreadsheet.dll` or other outdated Document Processing Library assemblies, still present in the `bin` folder or project references. These old assemblies reference `Telerik.Licensing.Runtime, Version=1.8.2.0`, which conflicts with the updated Licensing 1.9.1 runtime.

Starting with version 2026 Q3 (2026.3.812), the `RadSpreadsheet` component uses a new dependency, `Telerik.Spreadsheet.Web`, which is distributed as a standalone NuGet package. The old `Telerik.Web.Spreadsheet.dll` is no longer valid in this version.

## Solution

1. Check the `bin` folder and deployment packages for leftover assemblies, such as `Telerik.Web.Spreadsheet.dll`, and delete them.

2. Update all project references to the following:
   - `Telerik.Licensing` 
   - `Telerik.Web.UI` 
   - Replace `Telerik.Web.Spreadsheet` with the new dependency, `Telerik.Spreadsheet.Web`. Add it via NuGet or from the `AdditionalLibraries/Bin462` folder in the Telerik installation package if the `RadSpreadsheet` component is used.

3. Remove any outdated Document Processing Library assemblies such as `Telerik.Windows.Documents.*` and `Telerik.Windows.Zip*`. Replace them with their updated equivalents.

4. Review the [Release History for Telerik UI for ASP.NET AJAX 2026 Q3 (2026.3.812)](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/telerik-ui-for-asp-net-ajax-2026-3-812-(2026-q3)) for additional breaking changes or updates.

## See Also

- [Telerik UI for ASP.NET AJAX Overview](https://www.telerik.com/products/aspnet-ajax.aspx)
- [Telerik.Spreadsheet.Web NuGet Package](https://www.nuget.org/packages/Telerik.Spreadsheet.Web)
- [RadSpreadsheet Documentation](https://docs.telerik.com/aspnet-ajax/spreadsheet/overview)
- [Telerik Licensing Documentation](https://docs.telerik.com/devtools/overview/licensing-overview)
