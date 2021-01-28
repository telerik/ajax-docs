---
title: FileExists
page_title: FileExists - RadUpload
description: Check our Web Forms article about FileExists.
slug: upload/server-side-programming/fileexists
tags: fileexists
published: True
position: 1
---

# FileExists



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The server-side **FileExists** event occurs when the following three conditions hold:

* The **TargetFolder** or **TargetPhysicalFolder** property is set.

* The **OverwriteExistingFiles** property is set to **false.**

* The target folder already contains a file with the same name as the currently uploaded file.

The **FileExists** event handler receives two arguments:

1. The **RadUpload** control that initiated the file upload. This argument is of type object, but can be cast to the **RadUpload** type.

1. An **UploadedFileEventArgs** object. This object has an **UploadedFile** property that you can use to access the file that could not be automatically saved.

The example below demonstrates how to use the **FileExists** event to rename the uploaded files:





````C#
	     
using Telerik.Web.UI.Upload;
...
protected void RadUpload1_FileExists( object sender, UploadedFileEventArgs e)
{
  int counter = 1;
  UploadedFile file = e.UploadedFile;
  string targetFolder = Server.MapPath(RadUpload1.TargetFolder);
  string targetFileName = System.IO.Path.Combine(targetFolder,
      file.GetNameWithoutExtension() + counter.ToString() + file.GetExtension());
  while (System.IO.File.Exists(targetFileName))
  {
      counter ++;
      targetFileName = System.IO.Path.Combine(targetFolder,
          file.GetNameWithoutExtension() + counter.ToString() + file.GetExtension());
  }
  file.SaveAs(targetFileName);
} 
````
````VB.NET
	     
Protected Sub RadUpload1_FileExists(ByVal sender As Object, _
                     ByVal e As UploadedFileEventArgs) _
                     Handles RadUpload1.FileExists
    Dim counter As Integer = 1
    Dim file As UploadedFile = e.UploadedFile
    Dim targetFolder As String = Server.MapPath(RadUpload1.TargetFolder)
    Dim targetFileName As String = System.IO.Path.Combine(targetFolder, _
        file.GetNameWithoutExtension & counter & file.GetExtension)
    While System.IO.File.Exists(targetFileName)
        counter += 1
        targetFileName = System.IO.Path.Combine(targetFolder, _
            file.GetNameWithoutExtension & counter & file.GetExtension)
    End While
    file.SaveAs(targetFileName)
End Sub
````


# See Also

 * [Auto Saving to a Target Folder]({%slug upload/how-to/auto-saving-to-a-target-folder%})
 
 * [How to Manipulate the Uploaded Files]({%slug asyncupload/how-to/how-to-manipulate-the-uploaded-files%})
