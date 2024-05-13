---
title: Resolving RadAsyncUpload does not have permission to write files in the TemporaryFolder Error
description: Learn how to solve the error message "RadAsyncUpload does not have permission to write files in the TemporaryFolder" in RadAsyncUpload for ASP.NET AJAX.
type: troubleshooting
page_title: RadAsyncUpload Permission Error | Troubleshooting | Telerik
slug: asyncupload-permission-error-troubleshooting
tags: asyncupload, permission error, troubleshooting
res_type: kb
---

## Environment

| Property | Value |
|---|---|
| Product | RadAsyncUpload for ASP.NET AJAX |
| Version | all |

## Description

I encountered an error message that says "RadAsyncUpload does not have permission to write files in the TemporaryFolder" while using RadAsyncUpload for ASP.NET AJAX. How to solve it?

## Solution

To resolve the "RadAsyncUpload does not have permission to write files in the TemporaryFolder" error, you can try the following solutions:

1. Give write permission to both the Temporary and Target folders. Right-click on the folder, go to Properties, navigate to the Security tab, click on Add, add a new user or select Everyone, and check the "Full Control" checkbox.
2. Delete the file or folder named 'RadUploadTestFile' from the 'TemporaryFolder' directory.
3. If you are running Telerik RadAsyncUploader inside an Azure App Service, you need to set the Temporary folder to a shared folder among all used instances. Refer to the following resources for more information:
   - [Microsoft Azure blog post on sharing folders in Azure](https://learn.microsoft.com/bg-bg/archive/blogs/mariok/sharing-folders-in-azure)
   - [Telerik forum post on using AsyncUpload with Azure and Blob Service](https://www.telerik.com/forums/any-guidelines-to-use-asyncupload-with-azure-and-blob-service)

## Notes

- Make sure to adjust the folder permissions according to your specific setup and security requirements.
- Ensure that the Temporary folder is accessible and has the necessary write permissions for the RadAsyncUpload control to function properly.
  
   
