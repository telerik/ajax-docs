---
title: Fixing RadAsyncUpload Breaking After Telerik Upgrade
description: Resolve RadAsyncUpload Invalid upload configuration errors after an upgrade by checking encryption keys, temporary-folder paths, permissions, and deployment-specific settings.
type: how-to
page_title: How to Resolve RadAsyncUpload Invalid Upload Configuration Error
meta_title: How to Resolve RadAsyncUpload Invalid Upload Configuration Error
slug: fixing-radasyncupload-breaking-after-telerik-upgrade
tags: radasyncupload, asp.net ajax, upload configuration, encryption keys, permissions, temporary folder, invalid upload configuration, security
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

After upgrading Telerik UI for ASP.NET AJAX controls, RadAsyncUpload can fail and return the error: `Invalid upload configuration`. The issue often manifests as a `HTTP 400` error originating from `Telerik.Web.UI.WebResource.axd?type=rau`. This problem may occur because of server-specific configuration, missing encryption keys, an unavailable temporary folder, or an incorrect deployment setup.

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
   The `Telerik.AsyncUpload.TemporaryFolder` setting can use a relative or absolute path. Verify that the path resolves on the server where the application runs, that the folder exists or can be created by the application, and that the application pool identity can read and write to it.

   Example of a relative path:
   ```xml
   <add key="Telerik.AsyncUpload.TemporaryFolder" value="~/App_Data/RadUploadTemp" />
   ```

   Example of an absolute path:
   ```xml
   <add key="Telerik.AsyncUpload.TemporaryFolder" value="C:\Sites\Shared\UploadTemp" />
   ```

   If the application runs in a web farm, the temporary folder must be available to all servers. Use a shared location, such as a UNC path or a virtual directory that points to shared storage, and configure the required permissions on that location. A shared folder is not required for a single-server deployment.

3. **Check Application Code Temporary Folder Configurations:**
   If setting the temporary folder path programmatically, verify that the value resolves correctly in the application context and that the folder exists before the upload handler uses it:
   ```csharp
   string temporaryFolder = Server.MapPath("~/App_Data/RadUploadTemp");
   RadAsyncUpload1.TemporaryFolder = temporaryFolder;
   if (!Directory.Exists(RadAsyncUpload1.TemporaryFolder))
       Directory.CreateDirectory(RadAsyncUpload1.TemporaryFolder);
   ```
   Use the path form appropriate for the deployment and avoid values that do not resolve from the web application's server context.

4. **Set Folder Permissions:**
   Ensure the Windows account used by the application pool can read and write to the configured temporary folder. Grant only the permissions required by the application. If you temporarily grant broad permissions to diagnose an access problem, remove them after testing and grant access to the actual application pool identity.

5. **Check the Upgrade and Security Configuration:**
   Do not treat changing `TemporaryFolder` or reverting to the default as a general CVE remediation. Identify the security advisory that applies to your version and follow its version-specific mitigation. For example, the [CVE-2026-2878 guidance]({%slug kb-security-insufficient-entropy-cve-2026-2878%}) describes per-session temporary-folder isolation for affected versions, while the [CVE-2026-13181 guidance]({%slug kb-security-rau-asyncuploadtypename-deserialization-CVE-2026-13181%}) recommends upgrading and only describes disabling the handler when RadAsyncUpload is not needed.

   If you are already using a patched version, do not disable `Telerik.Web.DisableAsyncUploadHandler` solely because a custom temporary folder fails validation. First resolve the path and application-pool configuration. The handler should be disabled only when uploads are not required or when a specific security advisory instructs you to do so.

6. **Verify Server-Specific Configurations:**
   Compare the IIS application path, resolved temporary folder, application-pool identity, and relevant `web.config` keys on the affected server with those of working servers. In a web farm, also verify that the shared temporary and target locations are reachable from every server.

## See Also

- [AsyncUpload Documentation]({%slug asyncupload/overview%})
- [Mandatory Additions to the Web.Config]({%slug general-information/web-config-settings-overview%})
- [AsyncUpload Security Documentation]({%slug asyncupload-security%})
