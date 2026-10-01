---
title: FileLoadException with Telerik.Licensing.Runtime After Upgrading to 2026.3.812 
description: Resolve Telerik.Licensing.Runtime and Telerik.Web.Spreadsheet assembly errors after upgrading to UI for ASP.NET AJAX 2026.3.812, when the RadSpreadsheet dependency changed to Telerik.Spreadsheet.Web.
type: troubleshooting
page_title: Telerik.Licensing.Runtime Error After Upgrading to UI for ASP.NET AJAX 2026.3.812
meta_title: Telerik.Licensing.Runtime Error After Upgrading to UI for ASP.NET AJAX 2026.3.812
slug: licensing-runtime-error-ui-aspnet-ajax-2026-3-812
tags: telerik.licensing.runtime,telerik.ui.aspnet-ajax,telerik.web.ui,radspreadsheet,telerik.spreadsheet.web,telerik.web.spreadsheet,renamed,which version
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

Starting with version 2026 Q3 (2026.3.812), the `RadSpreadsheet` component uses a new dependency, `Telerik.Spreadsheet.Web`, which is distributed as a standalone NuGet package. The old `Telerik.Web.Spreadsheet.dll` is no longer valid in this version. Therefore, the rename from `Telerik.Web.Spreadsheet.dll` to `Telerik.Spreadsheet.Web.dll` occurred in Telerik UI for ASP.NET AJAX 2026.3.812.

## Solution

1. Check the `bin` folder and deployment packages for leftover assemblies, such as `Telerik.Web.Spreadsheet.dll`, and delete them.

2. Update all project references to the following:
   - `Telerik.Licensing` 
   - `Telerik.Web.UI` 
   - Replace `Telerik.Web.Spreadsheet` with the new dependency, `Telerik.Spreadsheet.Web`. Add it via NuGet or from the `AdditionalLibraries/Bin462` folder in the Telerik installation package if the `RadSpreadsheet` component is used.

3. Review Document Processing Library references for stale or duplicate files, but do not remove an assembly solely because its file name begins with `Telerik.Windows`. The platform-agnostic namespace migration changes source namespaces, while supported assembly identities can retain `Telerik.Windows.Documents.*` and `Telerik.Windows.Zip` names. Compare the resolved package assets, assembly versions, and deployed files for the target framework before removing anything. For RadGrid XLSX export, follow the [Excel XLSX export requirements]({%slug grid/functionality/exporting/excel-export/excel-xlsx%}); the `Telerik.Spreadsheet.Web` dependency is specific to RadSpreadsheet.

4. Review the [Release History for Telerik UI for ASP.NET AJAX 2026 Q3 (2026.3.812)](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history/telerik-ui-for-asp-net-ajax-2026-3-812-(2026-q3)) for additional breaking changes or updates.

If the error still requests an older runtime version, such as `1.6.16.0`, do not assume that the NuGet package version or file version is the CLR assembly version. Check the following values separately:

* Inspect `obj/project.assets.json` and the transitive package graph for every project that contributes assemblies to the application.
* Inspect the deployed `Telerik.Licensing.Runtime.dll` with an assembly inspection tool and record its `AssemblyVersion`, file version, public key token, and physical path.
* Identify the assembly that contains the reference to the requested runtime version by using .NET Framework Fusion logging or equivalent loader diagnostics.
* Check all `bin` and publish directories, the GAC, and `web.config` binding redirects for duplicate or stale copies. If you add a redirect, set `newVersion` to the verified `AssemblyVersion` of the deployed DLL; do not copy a package version into `newVersion` without verifying the assembly metadata.
* Delete stale `bin`, `obj`, publish output, and ASP.NET temporary files, then restore, rebuild, and redeploy the application. Confirm that the final deployment contains one intended runtime assembly.

The reported version must therefore be identified as a package version, file version, or CLR `AssemblyVersion` before a binding redirect can be evaluated. The example version in the exception identifies the assembly requested by a compiled dependency; it does not by itself identify the version that should be deployed.

## See Also

- [Telerik UI for ASP.NET AJAX Overview](https://www.telerik.com/products/aspnet-ajax.aspx)
- [Telerik.Spreadsheet.Web NuGet Package](https://www.nuget.org/packages/Telerik.Spreadsheet.Web)
- [RadSpreadsheet Documentation](https://docs.telerik.com/aspnet-ajax/spreadsheet/overview)
- [Telerik Licensing Documentation](https://docs.telerik.com/devtools/overview/licensing-overview)
