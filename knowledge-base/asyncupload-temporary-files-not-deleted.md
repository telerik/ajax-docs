---
title: Troubleshooting RadAsyncUpload Temporary Files Not Being Deleted
description: Explore reasons why RadAsyncUpload may not delete temporary files as expected and how to address this issue.
type: troubleshooting
page_title: Why Are RadAsyncUpload Temporary Files Not Deleted After the Default Expiration Time?
slug: asyncupload-temporary-files-not-deleted
tags: radasyncupload, asp.net ajax, temporary files, temporaryfolder, temporaryfileexpiration
res_type: kb
ticketid: 1651946
---

## Environment

| Product                                  | Version   |
| ---------------------------------------- | --------- |
| RadAsyncUpload for ASP.NET AJAX          | all|

## Description

When using the [RadAsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview#temporary-files) control, I discovered that files in the temporary folder are not being deleted after the expected 4-hour default expiration period. Some files remain for an extended period, and there's an observed gap in file deletion between specific dates.

## Cause

Temporary files not being deleted as expected can be due to several reasons:

- A process is blocking the temporary file, preventing its deletion.
- Insufficient permissions for the folder designated for temporary files.
- Use of a custom handler that does not correctly implement file deletion.
- Application pool recycling which clears the ASP.NET Cache, affecting the scheduled cleanup tasks.
- High server load or specific server configurations that interfere with the cleanup process.
- The `TemporaryFileExpiration` property might not be explicitly set or could be inadvertently overridden.

## Solution

To resolve issues with temporary files not being deleted, consider the following actions:

- Use a tool like the [file locksmith tool](https://learn.microsoft.com/en-us/windows/powertoys/file-locksmith) to identify and resolve any processes blocking the deletion of temporary files.
- Ensure that the application pool identity or the user running the web application has sufficient permissions to delete files from the temporary folder.
- If using a [custom handler](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler), review and ensure its correct implementation. Compare with the example provided in the official documentation.
- Explicitly set the `TemporaryFileExpiration` property to confirm it's not being overridden:
  ```asp
  <telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" TemporaryFileExpiration="00:01:00"></telerik:RadAsyncUpload>
  ```
- Adjust the application pool settings to mitigate unintended recycling that could disrupt the cleanup tasks.
- Monitor server load and configurations to ensure they do not prevent the cleanup of temporary files.
- Consider changing the location of the temporary folder to ensure it's not affected by external factors like server maintenance or updates, e.g. set TemporaryFolder="~/App_Data/MyTemp".

## Notes

If the issue persists after trying the solutions above, it could be beneficial to manually check the temporary folder and observe if files older than the expected expiration are consistently present, which can help determine if the issue is consistent or intermittent.

## See Also

- [Telerik RadAsyncUpload Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
- [How to Extend the RadAsyncUpload Handler](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler)
 
