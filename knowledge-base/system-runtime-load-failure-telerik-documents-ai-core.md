---
title: Resolve System.Runtime 10.0.0.0 Load Failure for Telerik.Documents.AI.Core in .NET Framework 4.8
description: Fix System.Runtime 10.0.0.0 load failures caused by Telerik.Documents.AI.Core.dll targeting .NET 10 instead of .NET Standard 2.0 in .NET Framework 4.8 applications.
type: troubleshooting
page_title: System.Runtime 10.0.0.0 Load Failure in Telerik.Documents.AI.Core.dll for .NET Framework 4.8
meta_title: System.Runtime 10.0.0.0 Load Failure in Telerik.Documents.AI.Core.dll for .NET Framework 4.8
slug: system-runtime-load-failure-telerik-documents-ai-core
tags: telerik.documents.ai.core,telerik ui for asp.net ajax,system.runtime,net framework 4.8
res_type: kb
ticketid: 1719126
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.812</td>
</tr>
</tbody>
</table>

## Description

When using `Telerik.Documents.AI.Core` from the `AdditionalLibraries\Bin462` folder of Telerik UI for ASP.NET AJAX version 2026.3.812 in a .NET Framework 4.8 application, the CLR throws the following error:

```
System.IO.FileLoadException: Could not load file or assembly 'System.Runtime, Version=10.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a' or one of its dependencies. The located assembly's manifest definition does not match the assembly reference. (Exception from HRESULT: 0x80131040)
```

This occurs because the distributed `Telerik.Documents.AI.Core.dll` is incorrectly compiled for .NET 10 instead of .NET Standard 2.0, making it incompatible with .NET Framework 4.8.

## Cause

The `Telerik.Documents.AI.Core.dll` assembly in the `Bin462` folder is incorrectly built for .NET 10 instead of .NET Standard 2.0, which is incompatible with the .NET Framework 4.8 runtime.

## Solution

To resolve the issue, use one of the following solutions:

1. **Upgrade to 2026 Q3 SP1 (available October 2026):**  
   Upgrade to the 2026 Q3 SP1 release of Telerik UI for ASP.NET AJAX, which includes the corrected `Telerik.Documents.AI.Core.dll`. This version is compiled for .NET Standard 2.0 and is compatible with .NET Framework 4.6.2 and higher.

2. **Request Corrected Assembly:**  
   Open a support ticket and request the corrected `Telerik.Documents.AI.Core.dll` built for .NET Standard 2.0. Replace the incorrect DLL in the affected application or installation directory with the one provided.

### Temporary Workaround

Replace the distributed `Telerik.Documents.AI.Core.dll` in the `AdditionalLibraries\Bin462` folder with the corrected version provided by support. Ensure the replacement DLL is compatible with the other AI assemblies targeting `.NETFramework,Version=v4.6.2`.

## See Also

- [UI for ASP.NET AJAX Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/introduction)
- [Telerik Document Processing Overview](https://www.telerik.com/document-processing-libraries/documentation/introduction)
