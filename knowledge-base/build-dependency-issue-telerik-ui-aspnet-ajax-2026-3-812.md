---
title: Build Dependency Issue When Upgrading Telerik UI for ASP.NET AJAX to 2026.3.812  
description: Resolving build dependency issues caused by Telerik.Licensing.Analyzer and Microsoft.CodeAnalysis version mismatch when upgrading to Telerik UI for ASP.NET AJAX 2026.3.812.  
type: troubleshooting  
page_title: Resolving Build Failure After Upgrading Telerik UI for ASP.NET AJAX to 2026.3.812  
meta_title: Resolving Build Failure After Upgrading Telerik UI for ASP.NET AJAX to 2026.3.812  
slug: build-dependency-issue-telerik-ui-aspnet-ajax-2026-3-812  
tags: telerik.ui.for.asp.net.ajax, licensing, analyzer, microsoft.codeanalysis, build-error, version-mismatch  
res_type: kb  
ticketid: 1718116
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

When upgrading Telerik UI for ASP.NET AJAX from version 2026.2.708 to 2026.3.812, the build may fail due to a dependency on `Telerik.Licensing 1.9.1`. This version includes the `Telerik.Licensing.Analyzer.dll`, which requires `Microsoft.CodeAnalysis 4.8.0.0`. If the build environment uses Visual Studio 2019 or MSBuild 16, which do not support Roslyn 4.8, the build fails with the error:

```
error CS8032: An instance of analyzer Telerik.Licensing.Analyzer.AttributeAnalyzerCS cannot be created ... Could not load file or assembly 'Microsoft.CodeAnalysis, Version=4.8.0.0'
```

## Cause

The issue arises due to the dependency of `Telerik.Licensing.Analyzer.dll` on `Microsoft.CodeAnalysis 4.8.0.0`, which is not compatible with Visual Studio 2019/MSBuild 16. The previous Telerik.Licensing version (1.8.2) did not include this dependency. Upgrading to Telerik UI for ASP.NET AJAX 2026.3.812 enforces a minimum Telerik.Licensing version of 1.9.1, making this conflict unavoidable.

## Solution

### Short-Term Workaround

To temporarily resolve this issue without upgrading the build toolchain to Visual Studio 2022 or MSBuild 17+, disable the Telerik.Licensing analyzer during compilation. Add the following configuration to the project file:

```xml
<Target Name="RemoveValidationsGeneratorAnalyzer" BeforeTargets="CoreCompile">
    <ItemGroup>
      <Analyzer Remove="@(Analyzer)" Condition="'%(Filename)' == 'Telerik.Licensing.Analyzer'" />
    </ItemGroup>
</Target>
```

This configuration excludes the `Telerik.Licensing.Analyzer.dll` but retains all other components of the `Telerik.Licensing` package.

### Long-Term Solution

Upgrade the build toolchain to Visual Studio 2022 (17.8+) or MSBuild 17+, which supports `Microsoft.CodeAnalysis 4.8.0.0`. Alternatively, wait for the release of `Telerik.Licensing 1.9.2`, which is expected to address this issue.

### Important Notes

1. **Avoid Downgrading Telerik.Licensing**  
   Do not attempt to downgrade `Telerik.Licensing` to version 1.8.2, as many dependencies in Telerik UI for ASP.NET AJAX (e.g., Document Processing, Telerik.Web.Spreadsheet) rely on features introduced in Telerik.Licensing 1.9.1.

2. **Runtime Behavior with Workaround**  
   Disabling the Telerik.Licensing analyzer does not affect runtime license validation, registration, or any other runtime behavior. No issues are expected as long as the runtime assembly `Telerik.Licensing.dll` is included.

3. **Monitor for Updates**  
   Replace the temporary workaround with the official fix in `Telerik.Licensing 1.9.2` when it becomes available.

## See Also

- [Telerik UI for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/introduction)  
- [Telerik Licensing Documentation](https://docs.telerik.com/devtools/aspnet-ajax/licensing/overview)  
- [Microsoft.CodeAnalysis NuGet Package](https://www.nuget.org/packages/Microsoft.CodeAnalysis)  
