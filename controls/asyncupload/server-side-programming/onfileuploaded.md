---
title: OnFileUploaded
page_title: OnFileUploaded | UI for ASP.NET AJAX Documentation
description: OnFileUploaded
slug: asyncupload/server-side-programming/onfileuploaded
tags: onfileuploaded
published: True
position: 2
---

# OnFileUploaded



## 

The server-side __FileUploaded__ occurs after a file is uploaded and a postback is triggered.

>note When the[PostbackTriggers]({%slug asyncupload/how-to/how-to-persist-uploaded-files%})property of the __RadAsyncUpload__ is set to a particular button, the __FileUploaded__ event will fire only when that button is clicked.
>


The __FileUploaded__ event handler receives two arguments:

* The __RadAsyncUpload__ control that initiated the file upload. This argument is of type object, but can be cast to the __RadAsyncUpload__ type.

* An __FileUploadedEventArgs__ object that has three properties:

* __IsValid__ - Allows you to specify whether the uploaded file is valid. If it is, __RadAsyncUpload__ will automatically save it to the TargetFolder, if one is set.

* __File__ - Provides reference to the file uploaded.

* __UploadResult__ - A container object containing information sent from the __RadAsyncUpload__ file handler. For additional information, visit [How to extend the RadAsyncUpload handler.]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})



The example below demonstrates how to prepare the previously uploaded file to send as an e-mail attachment:



````C#
	
	
	    void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
	    {
	        e.IsValid = !CheckUploadedFileValidity();
	        if (e.IsValid)
	        {
	            byte[] buffer = new byte[e.File.ContentLength];
	            using (Stream str = e.File.InputStream)
	            {
	                str.Read(buffer, 0, e.File.ContentLength);
	                var attachment = createAttachment(buffer);
	                // more code
	            }
	        }
	    }
	
````
````VB.NET
	
	    Private Sub RadAsyncUpload1_FileUploaded(ByVal sender As Object, ByVal e As FileUploadedEventArgs)
	        e.IsValid = Not CheckUploadedFileValidity()
	        If e.IsValid Then
	            Dim buffer As Byte() = New Byte(e.File.ContentLength - 1) {}
	            Using str As Stream = e.File.InputStream
	                str.Read(buffer, 0, e.File.ContentLength)
	                ' more code
	                Dim attachment = createAttachment(buffer)
	            End Using
	        End If
	    End Sub
	
	
````


## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[How to extend the RadAsyncUpload handler]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})

[Server-Side Events]({%slug asyncupload/server-side-programming/events%})
