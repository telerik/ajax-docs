---
title: ValidatingFile
page_title: ValidatingFile | RadUpload for ASP.NET AJAX Documentation
description: ValidatingFile
slug: upload/server-side-programming/validatingfile
tags: validatingfile
published: True
position: 2
---

# ValidatingFile



>caution  **RadUpload** has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The server-side **ValidatingFile** event occurs when files are uploaded, before any [ integrated file validation ]({%slug upload/validation/integrated-validation%}) occurs:

The **ValidatingFile** event handler receives two arguments:

1. The **RadUpload** control that initiated the file upload. This argument is of type object, but can be cast to the **RadUpload** type.

1. A **ValidatingFileEventArgs** object. This object has the following properties:

* **UploadedFile** is the file that has not yet been validated.

* **IsValid** is a boolean you can set to indicate whether or not the file is valid.

* SkipInternalValidation lets you disabled the integrated file validation for this specific file.

Use the **ValidatingFile** event [custom file validation]({%slug upload/validation/custom-validation%}). The following example uses the event to check that the content of the file matches the file name. If it does, the integrated file validation can proceed, if not, the file is considered invalid, and there is no need of further validation:





````C#
	
	    protected void RadUpload1_ValidatingFile(object sender, Telerik.Web.UI.Upload.ValidateFileEventArgs e)
	    {
	        UploadedFile file = e.UploadedFile;
	        string name = file.GetNameWithoutExtension();
	        byte[] bytes = new byte[name.Length];
	        file.InputStream.Read(bytes, 0, name.Length);
	        for (int i = 0; i < name.Length; i++)
	        {
	            if (bytes[i] != Convert.ToByte(name[i]))
	            {
	                e.IsValid = false;
	                break;
	            }
	        }
	        // if file is invalid, there is no need
	        // to proceed with integrated validation
	        e.SkipInternalValidation = !e.IsValid;
	    } 
````
````VB.NET
	     
	    Protected Sub RadUpload1_ValidatingFile(ByVal sender As Object, _
	            ByVal e As Telerik.Web.UI.Upload.ValidateFileEventArgs) _
	            Handles RadUpload1.ValidatingFile
	        Dim file As UploadedFile = e.UploadedFile
	        Dim name As String = file.GetNameWithoutExtension()
	        Dim bytes As Byte() = New Byte(name.Length) {}
	        file.InputStream.Read(bytes, 0, name.Length)
	        Dim i As Integer = 0
	        While i < name.Length
	            If bytes(i) <> Convert.ToByte(name(i)) Then
	                e.IsValid = False
	                Exit While
	            End If
	            i = i + 1
	        End While
	        ' if file is invalid, there is no need
	        ' to proceed with integrated validation
	        e.SkipInternalValidation = Not e.IsValid
	    End Sub
````


# See Also

 * [Client-side Validation]({%slug upload/validation/client-side-validation%})
