---
title: Telerik License Error CS0234 in Telerik UI for ASP.NET AJAX
description: Resolve the CS0234 error in Telerik UI for ASP.NET AJAX related to licensing dependencies.
type: troubleshooting
page_title: Fix CS0234 Error in Telerik UI for ASP.NET AJAX Licensing Dependency
meta_title: Fix CS0234 Error in Telerik UI for ASP.NET AJAX Licensing Dependency
slug: fix-cs0234-error-telerik-licensing-dependency
tags: telerik, ui for asp.net ajax, licensing, cs0234, error
res_type: kb
ticketid: 1717130
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
<td>2025 Q1 and newer</td>
</tr>
</tbody>
</table>

## Description

I receive the error `CS0234: The type or namespace name 'EvidenceAttributeAttribute' does not exist in the namespace 'Telerik.Licensing' (are you missing an assembly reference?)` when working with the `TelerikLicense.cs` file in a project using Telerik UI for ASP.NET AJAX. This error occurs after installing the controls through the Telerik Control Panel.

## Cause

Starting with version 2025 Q1, Telerik UI for ASP.NET AJAX requires activation using a License/Script Key. Additionally, the `Telerik.Web.UI.dll` assembly now depends on the `Telerik.Licensing.Runtime.dll` assembly, which is essential for proper licensing.

## Solution

To resolve this issue, ensure the `Telerik.Licensing.Runtime.dll` assembly is properly included in your project. Follow these steps:

1. Verify that the `Telerik.Licensing.Runtime.dll` assembly is present in the project's `BIN` folder. 

2. If the assembly is missing, add it to your project by performing one of the following:
   - Obtain the `Telerik.Licensing.Runtime.dll` assembly from the official [Telerik Licensing NuGet package](https://www.nuget.org/packages/Telerik.Licensing).
   - Download a manual installation from https://www.telerik.com/account/downloads/product-download?product=RCAJAX. locate the `Telerik.Licensing.Runtime.dll` file in the Bin462 folder and manually reference it in your project.

3. For web application projects, it is recommended to add the assembly via NuGet. Run the following command in the NuGet Package Manager Console:
   ```
   Install-Package Telerik.Licensing
   ```

4. Rebuild the project and ensure no errors appear.

5. If the issue persists, verify that the `.csproj` file includes a reference to `Telerik.Licensing.Runtime.dll`. Example:
   ```xml
   <Reference Include="Telerik.Licensing.Runtime">
       <HintPath>path-to-bin-folder\Telerik.Licensing.Runtime.dll</HintPath>
   </Reference>
   ```

6. Confirm that the correct version of the `Telerik.Web.UI.dll` and `Telerik.Licensing.Runtime.dll` assemblies are being used.

## See Also

- [Telerik UI for ASP.NET AJAX Licensing Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/licensing/license-key)
- [Telerik Licensing NuGet Package](https://www.nuget.org/packages/Telerik.Licensing)
