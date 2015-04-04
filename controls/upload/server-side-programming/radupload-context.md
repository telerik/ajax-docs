---
title: RadUpload Context
page_title: RadUpload Context | UI for ASP.NET AJAX Documentation
description: RadUpload Context
slug: upload/server-side-programming/radupload-context
tags: radupload,context
published: True
position: 3
---

# RadUpload Context



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

You can access all uploaded files within the current request using the__RadUploadContext__ object. This is especially useful when youare [using standard file input controls]({%slug upload/uploading-files/using-standard-file-input-controls%}).You can obtain an instance of the upload context object using the __static__(C#) or __shared__ (VB) property __Current__:





````C#
	     
	    using Telerik.Web.UI...
	        protected void Button1_Click(object sender, EventArgs e)
	        {  
	            RadUploadContext uploadContext = RadUploadContext.Current;  
	            ...
	        }
				
````
````VB.NET
	     
		Imports Telerik.Web.UI
	    ...
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Dim uploadContext As RadUploadContext = RadUploadContext.Current
	    End Sub
	
````


The __RadUploadContext__ object has a single property:__UploadedFiles__. __UploadedFiles__ is a collection ofall files that have been uploaded within the current request, including those selected with__RadUpload__ controls and those selected with regular__<input type=file>__ elements.

Each file in the collection is of type __UploadedFile__. The following tablelists the members of the __UploadedFile__ class:


>caption  

| Property or Method | Type (Return Type) | Description |
| ------ | ------ | ------ |
| __Properties__ |||
|ContentLength|integer|The size of the uploaded file, in bytes.|
|ContentType|string|The MIME type of the uploaded file.|
|FileName|string|The fully qualified name of the file on the client. (IE6 and some older browsers only).To get a file name that is the same for all browsers, use the __GetName()__ method instead.|
|InputStream|System.IO.Stream|A stream object that can be used to read the file contents.|
| __Methods__ |||
|GetName()|string|Returns the name of the uploaded file.|
|GetNameWithoutExtension()|string|Returns the name of the uploaded file, without the file extension.|
|GetExtension()|string|Returns the extension of the uploaded file, including the leading dot (".")|
|SaveAs(string, [bool])|none|Save the file to the location specified by the first parameter. The optional second parameterspecifies whether to overwrite an existing file if it is found.|
|GetFieldValue(string)|string|Retrieves a[custom field]({%slug upload/application-scenarios/adding-information-to-uploaded-files%})added to the uploaded file.|
|GetIsFieldChecked(string)|boolean|Retrieves whether a[custom check box]({%slug upload/application-scenarios/adding-information-to-uploaded-files%})added to the uploaded file was checked.|

For an example of using the __UploadedFile__ object, see[Manipulating Uploaded Files](FC66018F-9560-4F29-A685-C6DC5D9BF5C9).
