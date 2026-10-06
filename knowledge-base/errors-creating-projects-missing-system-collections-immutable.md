---
title: Errors When Creating New VB or C# Projects After Installing Latest Application Version
description: Resolve errors related to missing System.Collections.Immutable assembly when creating new VB or C# projects after installing the latest Telerik application version.
type: troubleshooting
page_title: Fix Missing System.Collections.Immutable Error in Telerik VS Extension
meta_title: Fix Missing System.Collections.Immutable Error in Telerik VS Extension
slug: errors-creating-projects-missing-system-collections-immutable
tags: installer, visual studio extensions, asp.net ajax, system.collections.immutable, visual studio
res_type: kb
ticketid: 1719207
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Installer and VS Extensions/UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.812</td>
</tr>
</tbody>
</table>

## Description

When creating new VB or C# projects using the Telerik Visual Studio extension, the following error occurs:

```
System.IO.FileNotFoundException: Could not load file or assembly 'System.Collections.Immutable, Version=9.0.0.0'
```

This issue arises due to a mismatch between the Telerik Visual Studio extension's compiled dependencies and the runtime components available in the Visual Studio environment. The `System.Collections.Immutable` assembly version 9.0.0.0 is part of the .NET 9 SDK. If this SDK or its runtime components are unavailable, the extension fails to load the required dependencies.

## Cause

The error occurs because the Telerik Visual Studio extension expects the `System.Collections.Immutable` assembly version 9.0.0.0, which ships with the .NET 9 SDK. If .NET 9 SDK is not installed or Visual Studio cannot resolve the required version, the assembly fails to load, resulting in the error.

## Solution

Follow these steps to resolve the issue:

1. Install the .NET 9 SDK if it is not already installed. Download it from the official .NET website: [Download .NET 9.0](https://dotnet.microsoft.com/en-us/download/dotnet/9.0).

2. Repair your Visual Studio installation to ensure all necessary runtime components are available:
   - Open the Visual Studio Installer.
   - Locate your Visual Studio installation.
   - Select **More** > **Repair**.
   - Follow the instructions to complete the repair process. Refer to the [Visual Studio repair guide](https://learn.microsoft.com/en-us/visualstudio/install/repair-visual-studio?view=vs-2022).

3. After completing these steps, try creating a new VB or C# project using the Telerik Visual Studio extension.

## See Also

- [Download .NET 9.0](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [Repair Visual Studio](https://learn.microsoft.com/en-us/visualstudio/install/repair-visual-studio?view=visualstudio)
- [Telerik Visual Studio Extensions Overview](https://www.telerik.com/products/aspnet-ajax/documentation/integration/visual-studio/visual-studio-extensions/overview)
