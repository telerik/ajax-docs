---
title: FileExists
page_title: FileExists | UI for ASP.NET AJAX Documentation
description: FileExists
slug: upload/server-side-programming/fileexists
tags: fileexists
published: True
position: 1
---

# FileExists



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The server-side __FileExists__ event occurs when the following three conditions hold:

* The __TargetFolder__ or __TargetPhysicalFolder__ property is set.

* The __OverwriteExistingFiles__ property is set to __false.__

* The target folder already contains a file with the same name as the currently uploaded file.

The __FileExists__ event handler receives two arguments:

1. The __RadUpload__ control that initiated the file upload. This argument is of type object, but can be cast to the __RadUpload__ type.

1. An __UploadedFileEventArgs__ object. This object has an __UploadedFile__ property that you can use to access the file that could not be automatically saved.

The example below demonstrates how to use the __FileExists__ event to rename the uploaded files:





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

 * [Auto Saving to a Target Folder]({%slug upload/how-to/auto-saving-to-a-target-folder%})[](FC66018F-9560-4F29-A685-C6DC5D9BF5C9)
