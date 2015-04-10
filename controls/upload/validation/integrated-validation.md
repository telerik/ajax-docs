---
title: Integrated Validation
page_title: Integrated Validation | UI for ASP.NET AJAX Documentation
description: Integrated Validation
slug: upload/validation/integrated-validation
tags: integrated,validation
published: True
position: 2
---

# Integrated Validation



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


__RadUpload__ can automatically validate the size, file extension and mime-type of uploaded files against your preferences.

>caution The selected files must be transferred to the server in order to be validated for __size__ or __mime-type__ . File __extensions__ can be validated on the client[using ASP.NET validators]({%slug upload/validation/client-side-validation%})before the upload.
>


To enable integrated validation, you need only set the following __RadUpload__ validation properties:

## Size

Set the __MaxFileSize__ property to enable file size validation. The value of this property specifies the maximum number of __bytes__ allowed for each uploaded file.

>note The default number of bytes you can transfer for all uploaded files is 4MB. If you want to allow uploads greater than 4 MB, you must[ configure the application for large uploads ]({%slug upload/uploading-files/uploading-large-files%}).
>


## AllowedFileExtensions

The __AllowedFileExtensions__ property lists the valid file extensions for uploaded files. When the __AllowedFileExtensions__ property is set, __RadUpload__ automatically validates the extensions of selected files, moving any files with disallowed extensions to the __InvalidFiles__ collection.

>note You must include the leading dot (".") in the file extension.
>


* Click on the ellipsis button next to the __AllowedFileExtensions__ property in the properties pane, and enter each extension on a separate line in the string collection editor.

* In the ASP.NET source, list the extensions in a comma-delimited list:

````ASPNET
	    <telerik:radupload id="RadUpload1" runat="server" allowedfileextensions=".zip,.jpg,.jpeg" />
````



* In the code-behind, assign the value of the AllowedFileExtensions property to a string array:



````C#
	     
		RadUpload1.AllowedFileExtensions = new string[] {".zip", ".jpg", ".jpeg"};
				
````
````VB.NET
	     
	    RadUpload1.AllowedFileExtensions = New String() {".zip", ".jpg", ".jpeg"}
				
````


__AllowedMimeTypes__

The __AllowedMimeTypes__ property lists the valid [MIME types]({%slug upload/how-to/mime-types%}) for uploaded files. When the __AllowedMimeTypes__ property is set, __RadUpload__ automatically validates the MIME types of selected files, moving any files with disallowed extensions to the __InvalidFiles__ collection.

>caution There are several file extensions that have multiple MIME types associated with them. Different browsers send different MIME types for the same file. For these types of files, you need to set all associated MIME types for the file extension you want to allow.
>


You can set multiple mime-types the same way as setting multiple file extensions.

## Validated files

Valid files can be accessed using the __UploadedFiles__ property. Files that fail validation can be accessed using the __InvalidFiles__ property.

After the validation, if you have [ specified a target folder ]({%slug upload/how-to/auto-saving-to-a-target-folder%}), the valid files are automatically saved to the target folder.

The following example shows a __RadUpload__ control configured to receive only ZIP files with size less than 1000000 bytes. It is configured to allow all mime-types associated with the .zip file extension. Valid files are automatically saved to the "~/My files" folder.

````ASPNET
	    <telerik:radupload id="RadUpload1" runat="server" allowedmimetypes="application/x-compressed,application/x-zip-compressed,application/zip,multipart/x-zip"
	        maxfilesize="1000000" allowedfileextensions=".zip" targetfolder="~/My Files" />
	    <asp:Button runat="server" ID="Button1" Text="Submit" OnClick="Button1_Click" />
````



## Processing Invalid files

The following example shows how to process invalid files. It provides feedback to the user about which files were rejected, and why:





````C#
	     
		using Telerik.Web.UI;
	    ...
	    protected void Button1_Click(object sender, EventArgs e)
	    {  
	        if (RadUpload1.InvalidFiles.Count > 0)  
	        { 
	            Response.Write("Some of your files could not be validated<br/>");
	            Response.Write( "Allowed MIME types: " + string.Join(",", RadUpload1.AllowedMimeTypes) + "<br/>");
	            Response.Write( "Allowed file extensions: " + string.Join(",", RadUpload1.AllowedFileExtensions) + "<br/>" );    
	            Response.Write( "Maximum file size: " + RadUpload1.MaxFileSize.ToString() + " bytes<br/><br/>");    
	            foreach (UploadedFile f in RadUpload1.InvalidFiles)    
	            {       
	                Response.Write( "File name: " + f.GetName() + "<br />");     
	                Response.Write( "File extension: " + f.GetExtension() + "<br />");
	                Response.Write( "Mime-type: " + f.ContentType + "<br />");       
	                Response.Write( "File size: " + f.ContentLength.ToString() + " bytes<br />");    
	            }  
	        }
	    }
				
````
````VB.NET
	     
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        If RadUpload1.InvalidFiles.Count > 0 Then
	            Response.Write("Some of your files could not be validated<br/>")
	            Response.Write("Allowed MIME types: " + String.Join(",", RadUpload1.AllowedMimeTypes) + "<br/>")
	            Response.Write("Allowed file extensions: " + String.Join(",", RadUpload1.AllowedFileExtensions) + "<br/>")
	            Response.Write("Maximum file size: " + RadUpload1.MaxFileSize.ToString() + " bytes<br/><br/>")
	            For Each f As UploadedFile In RadUpload1.InvalidFiles
	                Response.Write("File name: " + f.GetName() + "<br />")
	                Response.Write("File extension: " + f.GetExtension() + "<br />")
	                Response.Write("Mime-type: " + f.ContentType + "<br />")
	                Response.Write("File size: " + f.ContentLength.ToString() + " bytes<br />")
	            Next
	        End If
	    End Sub
````


# See Also

 * [Custom Validation]({%slug upload/validation/custom-validation%})
