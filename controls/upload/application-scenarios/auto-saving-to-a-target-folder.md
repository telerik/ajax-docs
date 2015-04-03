---
title: Auto Saving to a Target Folder
page_title: Auto Saving to a Target Folder | UI for ASP.NET AJAX Documentation
description: Auto Saving to a Target Folder
slug: upload/application-scenarios/auto-saving-to-a-target-folder
tags: auto,saving,to,a,target,folder
published: True
position: 11
---

# Auto Saving to a Target Folder



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

To enable __RadUpload__ to automatically save files to a folder, all you must do is set a single property, giving the directory where the files should be saved. Which property you use depends on whether you are using a virtual path name or a physical path name:

* The __TargetFolder__ property specifies the name of an existing virtual path such as "~/UploadedFiles". This virtual path is internally resolved to a physicalpath by a call to the __Server.MapPath()__ method. Using virtual paths can make your application more portable.

* The __TargetPhysicalFolder__ property specifies the name of an existing physical path where files should be saved. Using physical paths is useful for applications that need to upload files to the same location, regardless of how they are deployed.

>note If you set both the __TargetFolder__ and __TargetPhysicalFolder__ properties, __RadUpload__ uses the __TargetPhysicalFolder__ property.
>


When you enable automatic file saving using the __TargetFolder__ or __TargetPhysicalFolder__ properties, files are saved to the target folder with their original names from the client computer. Some files may still not be saved to the specified folder:

* If you are using the [integrated validation]({%slug upload/validation/integrated-validation%}), invalid files are not saved to the target folder. You can, however, still [access them using the server-side API](FC66018F-9560-4F29-A685-C6DC5D9BF5C9).

* By default, if a file with the same name as an uploaded file already exists in the target directory, __RadUpload__ does not overwrite the existing file. There are two approaches you can take to deal with name clashes:

* You can allow __RadUpload__ to overwrite existing files in the target directory by setting the __OverwriteExistingFiles__ property to __True__.

* You can write special code to handle the name clash using the [FileExists event]({%slug upload/server-side-programming/fileexists%}).

The following example illustrates how to implement automatic file saving. The uploaded files are saved in the "~/MyFiles" folder, overwriting any existing files:

````ASPNET
	    <telerik:radupload id="RadUpload1" runat="server" overwriteexistingfiles="true" targetfolder="~/MyFiles" />
	    <asp:Button runat="server" ID="Button1" Text="Submit" />
````


