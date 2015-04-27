---
title: Getting Started
page_title: Getting Started | RadUpload for ASP.NET AJAX Documentation
description: Getting Started
slug: upload/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


This tutorial will walk you through creating a Web page that uses __RadUpload__ controls. It shows how to:

* Use __RadUpload__ to validate and upload files.

* Use __RadProgressArea__ to display a progress dialog.

* Use skins to provide a consistent look & feel.

## Enabling RadProgressManager

Before you can use any of the __RadUpload__ progress-monitoring controls, you must add __RadProgressManager__.

>note You can omit the below seven steps if you simply use the __SmartTag__ of __RadProgressManager__ 
>


![RadProgressManager Smart Tag](images/upload_radprogressmanager_smart_tag.png)



1. In the Solution explorer, double-click the __Web.config__ file to open it for editing:![Web Config](images/upload_webconfig.png)

1. Under the __<configuration>__ element locate the __<system.web>__ element. Add it if it does not exist.

1. Under the __<system.web>__ element locate the __<httpModules>__ element. Add it if it does not exist.

1. In the __<httpModules>__ element add the following tag:

````XML
	    <add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule, Telerik.Web.UI" />
````

This registers the __RadUploadHttpModule__ type, which enables __RadProgressManager__ to manage the upload progress.

>note If the __controls__ assembly is added in __GAC__ you must specify the full assembly qualified path of the __RadUploadHttpModule__ type. See the[Configuration](FAFFEB65-66D2-4CFE-8F40-E4BA471540A9)article for details.
>


1. Under the __<system.web>__ element, locate the __<httpHandlers>__ element. Add it if it does not exist.

1. In the __<httpHandlers>__ element, add the following tag:

````XML
	    <add verb="*" path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler, Telerik.Web.UI"
	        validate="false" />
````

This registers the __RadUploadProgressHandler__, which is required by the __RadProgressManager__ control.

>note If you are hosting your application in IIS 7 with integrated mode, you should additionally register RadUpload in the modules and handlers sections like this:
>


````XML
	    <system.webserver>  
	        <modules>
	         . . .      
	            <add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule, Telerik.Web.UI" preCondition="integratedMode"/>  
	        </modules>
	        <handlers>
	         . . .
	            <add name="Telerik_RadUploadProgressHandler_ashx" path="Telerik.RadUploadProgressHandler.ashx" verb="*" type="Telerik.Web.UI.Upload.RadUploadProgressHandler, Telerik.Web.UI" preCondition="integratedMode"/>
	        </handlers>
	     </system.webserver>
````



>note If the __controls__ assembly is added in __GAC__ you must specify the full assembly qualified path of the __RadUploadProgressHandler__ type. See[RadUploadProgressHandler](FAFFEB65-66D2-4CFE-8F40-E4BA471540A9)for details.
>


1. At this point, your Web.config should look as follows:

````XML
	    <configuration>
	      ...  
	      <system.web>
	          <httpHandlers>
	                <add verb="*" path="Telerik.RadUploadProgressHandler.ashx" type="Telerik.Web.UI.RadUploadProgressHandler, Telerik.Web.UI" />
	                ...
	          </httpHandlers>
	          <httpModules>
	               <add name="RadUploadModule" type="Telerik.Web.UI.RadUploadHttpModule, Telerik.Web.UI" />
	               ...
	          </httpModules>
	               ...
	      </system.web>
	
	    </configuration>
````





## Adding a RadUpload control

1. In the designer, drag a __RadUpload__ control from the toolbox onto your page. The __RadUpload__[Smart Tag]({%slug upload/design-time%}) should appear automatically:![Smart Tag](images/upload_smart_tag.png)

1. In the __Skin__ drop-down control, select the "Vista" skin, to provide the basic look & feel of your upload control.![How to Choose Skin](images/upload_choose_vista_skin.png)

1. Right click on the __RadUpload__ control, and choose __Properties__ from its context menu:![Choose Properties From Menu](images/upload_properties.png)

1. In the __Appearance__ section of the properties pane, locate the __ControlObjectsVisibility__ property. This lets you configure what controls are associated with each input area of the __RadUpload__ control. Drop down the list and check the __ClearButtons__ item, so that all the possible controls are checked:![Control Objects Visibility](images/upload_control_objects_visibility.png)

1. In the __Behavior__ section of the properties pane, click the ellipsis button next to the __AllowedFileExtensions__ property. This displays the string collection editor. Add the file extensions for the file types you want to allow:![Allowed Extensions](images/upload_allowed_extensions.png)

1. Set the following additional properties in the __Behavior__ section:

* Set __InitialFileInputsCount__ to 2. This configures the __RadUpload__ control to start by showing 2 input areas.

* Set the __MaxFileInputsCount__ to 5. This configures the __RadUpload__ control so that it never shows more than 5 input areas.

* Set the __MaxFileSize__ to 1000000. This specifies that the __RadUpload__ should not upload a file of more than 1,000,000 bytes.

>note By default, your application can upload at most 4 megabytes of data over all the files uploaded in a single postback.
>


1. In the Solution Explorer, add a new folder called "Files" where the uploaded files will be placed:![Target Folder](images/upload_files_folder.png)

1. In the properties pane for the __RadUpload__ control set the __TargetFolder__ property to "~/Files". This tells the RadUpload control to automatically save uploaded files into the "Files" folder you created.![Target Folder](images/upload_target_folder.png)

## Adding a RadProgressArea control

If the user tries to upload a lot of large files, the process can take a while. Adding a __RadProgressArea__ control automatically causes your Web page to display a progress dialog while files are uploaded.

1. Drag a __RadProgressManager__ control from the toolbox onto your Web page. The __RadProgressManager__ is required for progress monitoring.

1. Drag a __RadProgressArea__ control from the toolbox onto your Web page. The __RadProgressArea__ control is responsible for displaying the progress dialog while files are uploaded. It operates automatically, whenever an update control on the page starts to upload files.

1. In the __RadProgressArea__[Smart Tag]({%slug upload/design-time%}) that appears automatically, choose "Vista" from the drop-down list for the __Skin__ property, so that the dialog matches the skin for the __RadUpload__ control.

1. In the properties pane for the __RadProgressArea__ control, locate the __DisplayCancelButton__ property. Set it to __True__, so that the user can cancel an upload that is taking a long time.

1. Locate the __ProgressIndicators__ property, drop down its list, and uncheck "TotalProgressPercent" and "FilesCountPercent". This removes the percentage values from the figures that the progress dialog reports.![Area Properties](images/upload_progress_area_properties.png)

## File Submission

1. Drag a __Horizontal Rule__ from the __HTML__ section of the toolbox onto your Web page below the __RadUpload__ control.

1. Drag a __Button__ from the __Standard__ section of the toolbox below the horizontal rule. Set its Text property to "Submit".

1. Since on localhost the upload speed is pretty fast (like 5mb/s) one needs to upload file larger than 15-20mb in order to trigger the progress area. If you do not see the progress this usually means that the file is too small and it is uploaded before there is enough time for the area to show up.

1. Run the application. The __RadUpload__ control appears, showing two file input areas:![Getting Started - Run the Page](images/upload_getting_started_run.png)

1. Experiment with the input areas:

* Use the __Select__ buttons to locate files.

* Use the __Clear__ buttons to clear the selected files.

* Use the __Remove__ link to remove an entire file input area.

* Use the __Add__ button to add new file input areas.

* Click the check box next to an item and click the __Delete__ button to remove the selected input area.

1. When you have selected a number of files, including some with invalid extensions, click the __Submit__ button to upload the files. The progress dialog appears:![Progress Dialog](images/upload_progress_dialog.png)

1. When the page reloads after the postback, it is reset to the initial starting configuration.

1. Use the Windows explorer to look in the __Files__ directory. Note that the uploaded files have been copied to that directory, except for the ones with invalid extensions.
