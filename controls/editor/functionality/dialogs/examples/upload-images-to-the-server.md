---
title: Upload Images to the Server
page_title: Upload Images to the Server | RadEditor for ASP.NET AJAX Documentation
description: Upload Images to the Server
slug: editor/functionality/dialogs/examples/upload-images-to-the-server
tags: upload,images,to,the,server
published: True
position: 3
---

# Upload Images to the Server

RadEditor has built-in support for uploading/deleting/inserting images. The developer can allow end-users to upload, insert and delete images in the folder structure of the web-application by setting the following properties:

>tip As of **Q2 2015** the default upload control is [RadAsycnUpload]({%slug asyncupload/overview%}). In order for the uploading to work, you need to either permit the application to read/write in App_Data folfer, or change the target folder set to the **TemporaryFolder** property.  

For example, to enable users to upload images in the "~/Images" folder and all of its subfolders, you need to set the ImageManager-ViewPaths, ImageManager-UploadPaths, and ImageManager-DeletePaths properties as follows:

There are two approaches to set the Image Manager's paths:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server"
	ImageManager-ViewPaths="~/Images"
	ImageManager-UploadPaths="~/Images"
	ImageManager-DeletePaths="~/Images" >
</telerik:RadEditor>
````
````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
	<ImageManager
		ViewPaths="~/Images"
		DeletePaths="~/Images"
		UploadPaths="~/Images" />
 </telerik:RadEditor>
````

````C#  
string[] imagepath = {"~/Images"};
RadEditor1.ImageManager.UploadPaths = imagepath;
RadEditor1.ImageManager.ViewPaths = imagepath;
RadEditor1.ImageManager.DeletePaths = imagepath; 		
````
````VB
Dim imagepath() As String = {"~/Images"}
RadEditor1.ImageManager.UploadPaths = imagepath
RadEditor1.ImageManager.ViewPaths = imagepath
RadEditor1.ImageManager.DeletePaths = imagepath 
````


>tip Note that the imagepath variable is an array of strings and that the Images folder must be:
>
* a subdirectory of your web application or
* a virtual directory of your web application that has a physical path pointing outside of your web application.
* a shared drive that is a virtual folder of your web application.
>
>You should also grant full **ASP.NET** (WinXP) / **NETWORK SERVICE** (Win 2003 and Vista) account permissions to the Images Folders.
>


## See Also

 * [Upload Files to a Shared Drive]({%slug editor/functionality/dialogs/examples/upload-files-to-a-shared-drive%})
