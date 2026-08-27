---
title: Resolving Namespace Issues After Upgrading to UI for ASP.NET AJAX 2026.3.812
description: Learn how to resolve namespace errors caused by a breaking change in Telerik Document Processing Libraries after upgrading to UI for ASP.NET AJAX 2026.3.812.
type: how-to
page_title: Fixing Namespace Not Found Errors in UI for ASP.NET AJAX After Upgrade
meta_title: Fixing Namespace Not Found Errors in UI for ASP.NET AJAX After Upgrade
slug: resolving-namespace-issues-after-upgrading-ui-aspnet-ajax
tags: asp.net, ui for asp.net ajax, namespace, telerik document processing, upgrade
res_type: kb
ticketid: 1717781
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

After upgrading to UI for ASP.NET AJAX version 2026.3.812, namespace errors may occur in projects that reference Telerik Document Processing Libraries. This issue is caused by a breaking change introduced in version 2026.3.805, where the `Windows` prefix was removed from namespaces to provide a platform-agnostic convention.

For example:

- `Telerik.Windows.Documents.Spreadsheet.Model` changed to `Telerik.Documents.Spreadsheet.Model`.
- `Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.Xlsx` changed to `Telerik.Documents.Spreadsheet.FormatProviders.OpenXml.Xlsx`.
- `Telerik.Windows.Zip` changed to `Telerik.Zip`.

The assembly and NuGet package names remain unchanged. For example, the assembly is still named `Telerik.Windows.Documents.Spreadsheet.dll`. This is why upgrade tools do not report errors, while existing `using` directives and type references in source code fail to resolve.

This knowledge base article also answers the following questions:

- Why am I seeing "namespace not found" errors after upgrading UI for ASP.NET AJAX?
- How do I update namespaces in my project after upgrading Telerik references?
- What changed in Telerik Document Processing Libraries namespaces?

## Solution

To resolve namespace errors, update your source code as follows:

1. Open **Find and Replace** in Visual Studio by pressing `Ctrl+H`.
2. Set the scope to your **entire solution**.
3. Search for `Telerik.Windows.Documents.` and replace it with `Telerik.Documents.`.
4. If applicable, search for `Telerik.Windows.Zip` and replace it with `Telerik.Zip`.
5. Rebuild the solution to confirm that the errors are resolved.

Example of updated `using` directives:

```C#
using Telerik.Documents.Spreadsheet.FormatProviders;
using Telerik.Documents.Spreadsheet.FormatProviders.OpenXml.Xlsx;
using Telerik.Documents.Spreadsheet.Model;
using xlsx = Telerik.Documents.Spreadsheet.Model;
```

Also, check for the following references:

- Fully qualified type names, such as `Telerik.Windows.Documents.Fixed.Model.RadFixedDocument`, elsewhere in the code.
- String-based type references in XML configurations or reflection logic.

Refer to the [Migrating to Platform-Agnostic Namespaces](https://www.telerik.com/document-processing-libraries/documentation/knowledge-base/platform-agnostic-namespaces-migration) article for guidance on projects that use both .NET Framework and .NET Standard package variants simultaneously.

For examples of updated namespace usage, see the code-behind in the [RadSpreadProcessing - Convert Documents](https://demos.telerik.com/aspnet-ajax/spreadprocessing/convert-documents/defaultcs.aspx) demo.

## See Also

- [Telerik Document Processing Libraries Release Notes for Q3 2026](https://www.telerik.com/support/whats-new/telerik-document-processing/release-history/progress-telerik-document-processing-2026-3-805)
- [Telerik Document Processing Libraries - Migrating to Platform-Agnostic Namespaces](https://www.telerik.com/document-processing-libraries/documentation/knowledge-base/platform-agnostic-namespaces-migration)