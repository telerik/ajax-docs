---
title: Commands Not Recognized in Telerik.Zip.Extensions
description: Resolve issues with unrecognized commands in Telerik.Zip.Extensions due to namespace changes in Telerik Document Processing libraries.
type: troubleshooting
page_title: Fix Missing Commands in Telerik.Zip.Extensions
meta_title: Fix Missing Commands in Telerik.Zip.Extensions
slug: commands-not-recognized-telerik-zip-extensions
tags: installer, visual studio extensions, asp.net ajax, zip, namespaces, refactor
res_type: kb
ticketid: 1718298
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
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I encountered issues with unrecognized commands when using `Telerik.Zip.Extensions`. The `Telerik.Windows.Zip.Extensions` namespace and related commands are not functioning after a library update. The problem occurs while refactoring old code, likely due to changes in namespaces in Telerik Document Processing libraries.

## Cause

Starting with Q3 2016, Telerik Document Processing libraries transitioned to platform-agnostic namespaces. As a result, `Windows` was removed from all namespaces. This change affects namespaces such as `Telerik.Windows.Zip.Extensions`, which is now `Telerik.Zip.Extensions`. The assembly and NuGet package names remain unchanged, but the namespaces in code have been updated.

## Solution

Update the imports and code to reflect the new namespaces and methods.

### Steps

1. Replace the old namespaces with the new platform-agnostic namespaces in all affected files:

   | Old Namespace                    | New Namespace             |
   |----------------------------------|---------------------------|
   | `Telerik.Windows.Zip`           | `Telerik.Zip`             |
   | `Telerik.Windows.Zip.Extensions`| `Telerik.Zip.Extensions`  |
   | `Telerik.Windows.Documents.*`   | `Telerik.Documents.*`     |

2. Example of updated imports:

   ```vb
   Imports System.IO
   Imports Telerik.Zip
   Imports Telerik.Zip.Extensions
   ```

3. Update the code to use the correct methods. For example, use the `ExtractToFile` method on a `ZipArchiveEntry`:

   ```vb
   Using archive As ZipArchive = ZipArchive.Read(str)
       For Each entry As ZipArchiveEntry In archive.Entries
           entry.ExtractToFile(
               Path.Combine(dxftools.TargetFolder, entry.Name),
               True,
               Nothing)
       Next
   End Using
   ```

   - `ExtractToFile` is an extension method for `ZipArchiveEntry`.
   - Ensure the method is used on an entry object and not on `ZipFile`.

4. The `ExtractToFile` method signature:

   ```vb
   ExtractToFile(
       source As ZipArchiveEntry,
       destinationFileName As String,
       overwrite As Boolean,
       timeout As Nullable(Of TimeSpan))
   ```

## See Also

- [Telerik Document Processing Libraries: Migrating to Platform-Agnostic Namespaces](https://www.telerik.com/document-processing-libraries/documentation/knowledge-base/platform-agnostic-namespaces-migration)
- [Telerik.Zip.Extensions.ZipFile API Reference](https://www.telerik.com/document-processing-libraries/documentation/api/telerik.zip.extensions.zipfile)
- [Forum Discussion on ExtractToFile](https://www.telerik.com/forums/extracting-files-from-zip---unable-after-last-update---missing-extracttofile)
