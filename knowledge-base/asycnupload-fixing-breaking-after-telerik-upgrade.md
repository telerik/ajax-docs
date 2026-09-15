---
title: Fixing RadAsyncUpload Breaking After Telerik Upgrade
description: Resolve the issue where RadAsyncUpload breaks after upgrading Telerik UI for ASP.NET AJAX controls, resulting in errors such as "invalid upload configuration."
type: how-to
page_title: How to Resolve RadAsyncUpload Invalid Upload Configuration Error
meta_title: How to Resolve RadAsyncUpload Invalid Upload Configuration Error
slug: fixing-radasyncupload-breaking-after-telerik-upgrade
tags: radasyncupload, asp.net ajax, upload configuration, encryption keys, permissions
res_type: kb
ticketid: 1718746
---

## Environment
<table>
<tbody>
<tr>
<td>Product</td>
<td>AsyncUpload for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.812</td>
</tr>
</tbody>
</table>

## Description

After upgrading Telerik UI for ASP.NET AJAX controls to the latest version, RadAsyncUpload fails and returns the error: `Invalid upload configuration`. The issue often manifests as a `HTTP 400` error originating from `Telerik.Web.UI.WebResource.axd?type=rau`. This problem may occur due to server-specific configurations, missing encryption keys, or invalid temporary folder paths. 

This knowledge base article also answers the following questions:
- Why does RadAsyncUpload throw an "Invalid upload configuration" error after upgrading Telerik controls?
- How to configure the temporary folder for RadAsyncUpload after an upgrade?
- Why does RadAsyncUpload work on some servers but not others after a Telerik upgrade?

## Solution

To resolve this issue, follow these steps:

1. **Verify Encryption Keys:**
   Ensure that the following keys are present in the `<appSettings>` section of your `web.config` file and have identical values across all servers:
   ```xml
   <appSettings>
       <add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="your-encryption-key" />
       <add key="Telerik.Upload.ConfigurationHashKey" value="your-hash-key" />
       <add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="your-dialog-key" />
   </appSettings>
   ```

2. **Temporary Folder Validation:**
   RadAsyncUpload requires the temporary folder path to be an absolute, canonical physical path. Ensure the temporary folder path meets the following criteria:
   - It is not relative (e.g., avoid paths like `~/App_Data/RadUploadTemp`).
   - It does not contain traversal segments (`.` or `..`).
   - It resolves to the same canonical path across all servers.

   Example of a valid path:
   ```xml
   <add key="Telerik.AsyncUpload.TemporaryFolder" value="C:\Sites\Shared\UploadTemp" />
   ```

3. **Check Application Code Temporary Folder Configurations:**
   If setting the temporary folder path programmatically, verify it resolves correctly to an absolute physical path:
   ```csharp
   RadAsyncUpload1.TemporaryFolder = Path.Combine(System.Environment.GetEnvironmentVariable("TEMP"), "PackageWizardUpload");
   if (!Directory.Exists(RadAsyncUpload1.TemporaryFolder))
       Directory.CreateDirectory(RadAsyncUpload1.TemporaryFolder);
   ```
   Avoid using relative paths or paths containing traversal segments.

4. **Set Folder Permissions:**
   Ensure the application pool identity has write permissions for the configured temporary folder. Use full control permissions if necessary for testing.

5. **Enable Debug Logs:**
   To enable detailed logging, add the following setting in your `web.config` file:
   ```xml
   <appSettings>
       <add key="Telerik.AsyncUpload.Debug" value="true" />
   </appSettings>
   ```
   Review the logs for additional error details.

6. **Verify Server-Specific Configurations:**
   Compare the IIS application path and resolved temporary folder path on the affected server with those of the working servers. Ensure consistency across all servers.

## See Also

- [AsyncUpload Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
- [Mandatory Additions to the Web.Config](https://docs.telerik.com/devtools/aspnet-ajax/general-information/web-config-settings-overview#mandatory-additions-to-the-webconfig)
- [AsyncUpload Security Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/security/security)
```
