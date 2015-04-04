---
title: Custom Validation
page_title: Custom Validation | UI for ASP.NET AJAX Documentation
description: Custom Validation
slug: upload/validation/custom-validation
tags: custom,validation
published: True
position: 1
---

# Custom Validation



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

In addition to the integrated validation, __RadUpload__ lets you perform your own custom validation using the server-side __ValidatingFile__ event. By using this event, you can use your own custom validation logic and override the integrated validation if needed.

To validate a file in the __ValidatingFile__ event handler, set the __IsValid__ property of the event arguments to __true__ or __false__, in order to indicate whether the file is valid. Then set the __SkipInternalValidation__ property of the event arguments to true to bypass the default validation on any files you have validated using the event handler.

As with [integrated validation]({%slug upload/validation/integrated-validation%}), valid files can be accessed using the __UploadedFiles__ property and invalid files using the __InvalidFiles__ property.

The following example illustrates using custom validation to bypass the integrated size validation for zip files. The rest of the uploaded files are validated against the declared maximum file size:

````ASPNET
	    <telerik:radupload id="RadUpload1" runat="server" maxfilesize="1000000" targetfolder="~/MyFiles"
	        onvalidatingfile="RadUpload1_ValidatingFile"></telerik:radupload>
	    <asp:Button runat="server" ID="Button1" Text="Submit" />
````







````C#
	     
	
	using Telerik.Web.UI;
	using Telerik.Web.UI.Upload;...
	    
	    private void RadUpload1_ValidatingFile( object sender, ValidateFileEventArgs e) 
	    {  
	        // check only the zip files  
	        if (e.UploadedFile.GetExtension().ToLower() == ".zip")  
	        {    
	            //define the maximum file size to be 2000000 bytes    
	            int maxZipFileSize = 2000000;    
	            //if the zip file size exceeds 2000000 bytes mark it as invalid    
	            if (e.UploadedFile.ContentLength > maxZipFileSize)    
	            {       
	                e.IsValid = false;
	            }    
	            // zip files must not be validated for file size by the internal validator    
	            e.SkipInternalValidation = true;
	        }
	    }
				
````
````VB.NET
	     
	
	Imports Telerik.Web.UI
	Imports Telerik.Web.UI.Upload...
	
	    Private Sub RadUpload1_ValidatingFile(ByVal sender As Object, ByVal e As ValidateFileEventArgs) Handles RadUpload1.ValidatingFile
	
	        ' check only the zip files  
	        If e.UploadedFile.GetExtension.ToLower = ".zip" Then
	            'define the maximum file size to be 2000000 bytes    
	            Dim maxZipFileSize As Integer = 2000000
	            'if the zip file size exceeds 2000000 mark it as invalid
	            If e.UploadedFile.ContentLength > maxZipFileSize Then
	                e.IsValid = False
	            End If
	            'The zip files must not be validated for file size by the internal validator    
	            e.SkipInternalValidation = True
	        End If
	
	    End Sub
	
	
````


>note For an example of custom validation that checks the content of the uploaded file, see[ValidatingFile]({%slug upload/server-side-programming/validatingfile%}).
>


# See Also

 * [Client-side Validation]({%slug upload/validation/client-side-validation%})
