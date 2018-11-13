---
title: OnFileUploaded
page_title: OnFileUploaded | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnFileUploaded
slug: asyncupload/server-side-programming/onfileuploaded
tags: onfileuploaded
published: True
position: 2
---

# OnFileUploaded

## 

The server-side **FileUploaded** occurs after a file is uploaded and a postback is triggered.

>note When the [PostbackTriggers]({%slug asyncupload/how-to/how-to-persist-uploaded-files%}) property of the **RadAsyncUpload** is set to a particular button, the **FileUploaded** event will fire only when that button is clicked.
>

The **FileUploaded** event handler receives two arguments:

* The **RadAsyncUpload** control that initiated the file upload. This argument is of type object, but can be cast to the **RadAsyncUpload** type.

* An **FileUploadedEventArgs** object that has three properties:

* **IsValid** - Allows you to specify whether the uploaded file is valid. If it is, **RadAsyncUpload** will automatically save it to the TargetFolder, if one is set.

* **File** - Provides reference to the file uploaded.

* **UploadResult** - A container object containing information sent from the **RadAsyncUpload** file handler. For additional information, visit [How to extend the RadAsyncUpload handler.]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})


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
            str.Read(buffer, 0, buffer.Length);
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
            str.Read(buffer, 0, buffer.Length)
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
