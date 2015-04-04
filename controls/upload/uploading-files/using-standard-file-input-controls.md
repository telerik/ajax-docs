---
title: Using standard file input controls
page_title: Using standard file input controls | UI for ASP.NET AJAX Documentation
description: Using standard file input controls
slug: upload/uploading-files/using-standard-file-input-controls
tags: using,standard,file,input,controls
published: True
position: 4
---

# Using standard file input controls



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


If you add a __RadProgressManager/RadProgressArea__ to your Web page or user control, you can include both __FileUpload__ and the standard __<input type=file__> (file input) HTML elements. However, the standard file inputs are unable to find their files automatically. In order to access the files uploaded using the above controls you need to use the __Request.Files__ collection:





````C#
	
	    UploadedFile file =  UploadedFile.FromHttpPostedFile(Request.Files[FileUpload1.UniqueID])
	       
	        
````
````VB.NET
	
	    Dim file As UploadedFile = UploadedFile.FromHttpPostedFile(Request.Files(FileUpload1.UniqueID))
	        
````




>caution Although you can use standard file input controls with __RadProgressArea__ , do not use them with __RadUpload__ controls. Standard file input controls interfere with the properly functioning of __RadUpload__ .
>




>note  __RadUpload__ automatically sets the proper __enctype__ property of the form to:
> __enctype="multipart/form-data"__ which is needed when you upload a file. The <input type="file"> does not set this property so you need to add it manually.
>




## Example

The following example illustrates how to save the files uploaded with standard file inputs:

````ASPNET
	    <asp:FileUpload ID="FileUpload1" runat="server" />
	    <input type="file" runat="server" id="FileUpload2" />
	    <asp:Button runat="server" ID="Button1" Text="Submit" OnClick="Button1_Click" />
````







````C#
	     
	
	    UploadedFile file = UploadedFile.FromHttpPostedFile(Request.Files[FileUpload1.UniqueID]);
	    if (file != null)
	    {  
	        file.SaveAs(Server.MapPath("~/MyFiles/" + file.GetName()));
	    }
	
	    if (file != null)
	    {
	        file.SaveAs(Server.MapPath("~/MyFiles/" + file.GetName()));
	    }
				
````
````VB.NET
	     
	
	    Dim file As UploadedFile = UploadedFile.FromHttpPostedFile(Request.Files(FileUpload1.UniqueID))
	    If Not file Is Nothing Then 
	        file.SaveAs(Server.MapPath("~/MyFiles/" + file.GetName()))
	    End If
	        file = UploadedFile.FromHttpPostedFile(Request.Files(FileUpload2.UniqueID))
	    If Not file Is Nothing Then 
	        file.SaveAs(Server.MapPath("~/MyFiles/" + file.GetName()))
	    End If
				
````

