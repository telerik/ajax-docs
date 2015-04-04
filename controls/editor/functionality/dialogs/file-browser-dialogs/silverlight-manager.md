---
title: Silverlight Manager
page_title: Silverlight Manager | UI for ASP.NET AJAX Documentation
description: Silverlight Manager
slug: editor/functionality/dialogs/file-browser-dialogs/silverlight-manager
tags: silverlight,manager
published: True
position: 6
---

# Silverlight Manager



## 

Functionality:

Using the Silverlight Manager dialog the users of RadEditor can:

* __insert____xap files__ in the editor's content area

* __upload new xap files__, which will be available for inserting.

* __delete xap files__

Properties to set: 

The behavior of the Silverlight Manager dialog is controlled by the following properties:


>caption  

|  __Property__  |  __Description__  |
| ------ | ------ |
| __ViewPaths__ |A string array which contains the paths where the RadEditor will look for xap files. The default value is an empty array. These folders will be visible in the file browser part of the dialog.|
| __UploadPaths__ |A string array which contains the paths to which the RadEditor will be able to upload xap files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| __DeletePaths__ |A string array which contains the paths from which the RadEditor will be able to delete xap files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| __MaxUploadFileSize__ |The maximum xap file size in bytes, allowed for uploading. The default value is __204800__ bytes (200 kilobytes).|
| __SearchPatterns__ |A string array which contains the file extension filters that controls which files are shown in the Silverlight Manager dialog and which file types can be uploaded through the upload dialog.The * character can be used as a wildcard in the file name, for example __*.xap__ will match all file names with extension of xap.|

In order for a folder to be visible in the file browser, it must be present in the ViewPaths array. The users will be able to browse its subfolders since they inherit the permissions. If it is needed to grant permission for deleting or uploading xap files into a specific folder, it must be present in the corresponding array - DeletePaths or UploadPaths. These permissions are also inherited by the subfolders.The application root folder can be substituted with the "~" (tilde) character. It is possible to use paths relative to the root. For example, in order to access xap files located in another web application.

Example:

The example below demonstrates the relationship between the folder structure and the property settings:

With the settings above, the users will be able to browse all subfolders of the "~/Files" folder. They will be able to upload xap files to the "~/Files/New" folder and all its subfolders and delete xap files from "~/Files/New/Articles" and "~/Files/New/News".__Setting Silverlight manager properties inline:__

````ASPNET
	<telerik:radeditor runat="server" ID="RadEditor1">  
	   <SilverlightManager ViewPaths="~/Files" UploadPaths="~/Files/New" DeletePaths="~/Files/New/Articles,~/Files/New/News" />
	</telerik:radeditor> 
````



__Setting Silverlight manager properties in CodeBehind:__

>tabbedCode

````C#
	string[] viewFiles = new string[] { "~/Files" };
	string[] uploadFiles = new string[] { "~/Files/New" };
	string[] deleteFiles = new string[] { "~/Files/New/Articles", "~/Files/New/News" };
	
	if (!IsPostBack)
	{
	   RadEditor1.SilverlightManager.ViewPaths = viewFiles;
	   RadEditor1.SilverlightManager.UploadPaths = uploadFiles;
	   RadEditor1.SilverlightManager.DeletePaths = deleteFiles;
	} 
````
````VB.NET
		Dim viewFiles As String() = New String() {"~/Files"}
		Dim uploadFiles As String() = New String() {"~/Files/New"}
		Dim deleteFiles As String() = New String() {"~/Files/New/Articles", "~/Files/New/News"}
		If Not IsPostBack Then
		 RadEditor1.SilverlightManager.ViewPaths = viewFiles
		 RadEditor1.SilverlightManager.UploadPaths = uploadFiles
		 RadEditor1.SilverlightManager.DeletePaths = deleteFiles
		End If 
````
>end

Note that the viewFiles, uploadFiles and deleteFiles variables are string arrays and that the Files folders must be:

* a subdirectory of your web application

* directory placed in the root of IIS - you can set this folder by using the / forward slash symbol, e.g.RadEditor1.SilverlightManager.ViewPaths = new String []{"/Files"};

* a virtual directory of your web application that has a physical path pointing outside of your web application.
