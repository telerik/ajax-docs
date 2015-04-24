---
title: Enable Tabs
page_title: Enable Tabs | RadEditor for ASP.NET AJAX Documentation
description: Enable Tabs
slug: editor/functionality/dialogs/examples/enable-tabs
tags: enable,tabs
published: True
position: 1
---

# Enable Tabs



## 

**TASK**

Enable **Upload Image** tab of the [Image Manager]({%slug editor/functionality/dialogs/file-browser-dialogs/images%}) dialog.

>tip example holds true for[Documents]({%slug editor/functionality/dialogs/file-browser-dialogs/documents%}),[Flash]({%slug editor/functionality/dialogs/file-browser-dialogs/flash%})and[Media]({%slug editor/functionality/dialogs/file-browser-dialogs/media%}), too, when setting the correspondent properties.
>


**SOLUTION**

To use the Upload tab of the image dialog you would need to set two properties: **ImageManager.ViewPaths** and **ImageManager.UploadPaths**. These properties should point to the folders where the files will reside on the server. Here's an examplethat assumes you have a "mypics" and "mypics/upload" directories in your web application root folder:

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <ImageManager ViewPaths="~/mypics" UploadPaths="~/mypics/upload" />
	    </telerik:RadEditor>
````



In addition, the Upload tab will remain disabled if the path is wrong or the **UploadImagesPaths**folder does not exist.

>note Note that the mypics variable is an array of strings and that the Images folder must be:
>
* a subdirectory of your web application or
* a virtual directory of your web application that has a physical path pointing outside of your web application.
* a shared drive that is a virtual folder of your web application.>You should also grant full **ASPNET** (WinXP) / **NETWORK SERVICE** (Win 2003 and Vista) account permissions to the Images Folders.
>


Once these conditions are met, you can open the Images dialog. If you have images in the "mypics" directory, you will see them. Select the directory where you want to upload new images. The UPLOAD tab should become active. Click on it and upload the image.
>caption 

![](images/editor-imagemanager001.png)

# See Also

 * [Adding Custom Dialogs](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/CustomDialogs/DefaultCS.aspx)
