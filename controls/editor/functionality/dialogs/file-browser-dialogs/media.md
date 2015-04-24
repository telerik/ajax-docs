---
title: Media
page_title: Media | RadEditor for ASP.NET AJAX Documentation
description: Media
slug: editor/functionality/dialogs/file-browser-dialogs/media
tags: media
published: True
position: 4
---

# Media



## 

**Functionality:**

Using the Media Manager dialog, users of RadEditor can:

* **insert media files** in the editor's content area

* **upload new media files**, which will be available for inserting

* **delete files**

**Properties to set:**

The behavior of the Media Manager dialog is controlled by the following properties:


>caption  

|  **Property**  |  **Description**  |
| ------ | ------ |
| **ViewPaths** |A string array which contains the paths where the RadEditor will look for media files. The default value is an empty array. These folders will be visible in the file browser part of the dialog.|
| **UploadPaths** |A string array which contains the paths to which the RadEditor will be able to upload media files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| **DeletePaths** |A string array which contains the paths from which the RadEditor will be able to delete media files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| **MaxUploadFileSize** |The maximum media file size in bytes, allowed for uploading. The default value is **204800** bytes (200 kilobytes).|
| **SearchPatterns** |A string array which contains the file extension filters that controls which files are shown in the Media Manager dialog and which file types can be uploaded through the upload dialog.The * character can be used as a wildcard in the file name, for example *.mpg will match all video file names with extension mpg.|



In order for a folder to be visible in the file browser, it must be present in the ViewPaths array. The users will be able to browse its subfolders since they inherit the permissions. If it is needed to grant permission for deleting or uploading media into a specific folder, it must be present in the corresponding array - DeletePaths or UploadPaths. These permissions are also inherited by the subfolders.The application root folder can be substituted with the "~" (tilde) character. It is possible to use paths relative to the root. For example, in order to access media files located in another web application.

**Example:**

The example below demonstrates the relationship between the folder structure and the property settings:

With the settings above, the users will be able to browse all subfolders of the "~/Media" folder. They will be able to upload media files to the "~/Media/New" folder and all its subfolders and delete media files from "~/Media/New/Articles" and "~/Media/New/News".**Setting Image manager properties inline:**

````XML
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <ImageManager ViewPaths="~/Media" UploadPaths="~/Media/New" DeletePaths="~/Media/New/Articles,~/Media/New/News" />
	    </telerik:RadEditor>
````



**Setting Image manager properties in CodeBehind:**



````C#
	
	        string[] viewMedia = new string[] { "~/Media" };
	        string[] uploadMedia = new string[] { "~/Media/New" };
	        string[] deleteMedia = new string[] { "~/Media/New/Articles", "~/Media/New/News" };
	
	        if (!IsPostBack)
	        {
	            RadEditor1.ImageManager.ViewPaths = viewMedia;
	            RadEditor1.ImageManager.UploadPaths = uploadMedia;
	            RadEditor1.ImageManager.DeletePaths = deleteMedia;
	        }
	
````
````VB
	        Dim viewMedia As String() = New String() {"~/Media"}
	        Dim uploadMedia As String() = New String() {"~/Media/New"}
	        Dim deleteMedia As String() = New String() {"~/Media/New/Articles", "~/Media/New/News"}
	        If Not IsPostBack Then
	            RadEditor1.ImageManager.ViewPaths = viewMedia
	            RadEditor1.ImageManager.UploadPaths = uploadMedia
	            RadEditor1.ImageManager.DeletePaths = deleteMedia
	        End If
````


Note that the viewMedia, uploadMedia and deleteMedia variables are string arrays and that the Media folders must be:

* a subdirectory of your web application

* directory placed in the root of IIS - you can set this folder by using the / forward slash symbol, e.g.RadEditor1.MediaManager.ViewPaths = new String []{"/Media"};

* a virtual directory of your web application that has a physical path pointing outside of your web application.

# See Also

 * [File Managers](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/FileManagers/DefaultCS.aspx)

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Enforce Roles]({%slug editor/functionality/dialogs/examples/enforce-roles%})
