---
title: File upload is terminated on Android when choosing a file from Google Drive
description: Learn how to resolve the issue of not being able to upload files from Google Drive on Android devices using the RadAsyncUpload for ASP.NET AJAX component.
type: troubleshooting
page_title: Troubleshooting File Upload Issue from Google Drive on Android
slug: asyncupload-uploading-files-google-drive-android-issue
tags: android, file upload, RadAsyncUpload, Chrome, Google Drive
res_type: kb
---

## Environment

| Property | Value |
|----------|-------|
| Product  | RadAsyncUpload for ASP.NET AJAX |
| Version  | all |

## Description

I am experiencing an issue where I cannot upload files from Google Drive on Android devices using the RadAsyncUpload component. When I select a file from Google Drive, nothing happens and the whole page becomes unresponsive. However, uploading a photo directly from the camera works fine.

## Solution

To resolve this known Chrome issue on Android, you need to use the fallback iframe upload module when the browser is Chrome and the platform is Android. You can do that by adding the following script under the ScriptManager in your application:

```
<script>
    if (Telerik.Web.Platform.android && Telerik.Web.Browser.chrome && Telerik.Web.UI.RadAsyncUpload) {
        // force iframe mode due to https://issues.chromium.org/issues/40123366
        Telerik.Web.UI.RadAsyncUpload.Modules.FileApi.isAvailable = function () { return false; };
        Telerik.Web.UI.RadAsyncUpload.Modules.Flash.isAvailable = function () { return false; };
        Telerik.Web.UI.RadAsyncUpload.Modules.Silverlight.isAvailable = function () { return false; };
    }
</script>
```

By adding this script, the RadAsyncUpload component will use the iframe module over the FileAPI, which resolves the issue with uploading files from Google Drive on Android devices using Chrome.

## See Also

- [RadAsyncUpload Modules Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/upload-modules)
 
