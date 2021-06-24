---
title: UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler
description: UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler. Check it now!
type: how-to
page_title: UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler
slug: upload-uploadedfiles-saveas-throws-filenotfound-error
res_type: kb
---


## Problem

An error similar to `System.IO.FileNotFoundException: Could not find file <path to file>` is thrown by RadAsyncUpload.

## Description

This can happen under the following conditions:

- A [custom handler](http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler#override-the-changeoriginalfilename-method) is used for the file upload
- The `UploadedFiles` collection is used to save the files in the [FileUploaded server event](http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/server-side-programming/onfileuploaded) of the RadAsyncUpload instance. For example: `RadAsyncUpload1.UploadedFiles[0].SaveAs("someFileName");`

The `FileUploaded` event arguments point to the files in the temporary folder of the RadAsyncUpload instance. If they are not available, the event handler will throw errors when you attempt to access them.

## Solution

There are two ways to resolve this situation, depending on your preferences:

#### Option 1
If you do not want to use the temporary folder, **save the files to your storage in the custom handler and remove the FileUploaded event**.

#### Option 2

Or, put the file in the temporary folder by calling the `file.SaveAs(FullPath, false)` method in the `Process` method of the handler. For example:  


```C#
protected override IAsyncUploadResult Process(UploadedFile file, HttpContext httpContext, IAsyncUploadConfiguration iauConfiguration, string strTemporaryFileName)
{
        file.SaveAs(FullPath, false);
        var fileName = file.FileName;
        AsyncUploadResult result = CreateDefaultUploadResult<AsyncUploadResult>(file);
    
        return result;
}
```
```VB
Protected Overrides Function Process(ByVal file As UploadedFile, ByVal httpContext As HttpContext, ByVal iauConfiguration As IAsyncUploadConfiguration, ByVal strTemporaryFileName As String) As IAsyncUploadResult
    file.SaveAs(FullPath, False)
    Dim fileName = file.FileName
    Dim result As AsyncUploadResult = CreateDefaultUploadResult(Of AsyncUploadResult)(file)
    Return result
End Function
```




