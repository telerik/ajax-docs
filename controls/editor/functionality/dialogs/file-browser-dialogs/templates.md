---
title: Templates
page_title: Templates | UI for ASP.NET AJAX Documentation
description: Templates
slug: editor/functionality/dialogs/file-browser-dialogs/templates
tags: templates
published: True
position: 3
---

# Templates



## 

Functionality:

Using the Template Manager dialog the users of a RadEditor can:

* __insert templates__ in the editor's content area

* __upload new templates__, which will be available for inserting

* __delete files__

Properties to set: 

The behavior of the Template Manager dialog is controlled by the following properties:


>caption  

|  __Property__  |  __Description__  |
| ------ | ------ |
| __ViewPaths__ |A string array which contains the paths where the RadEditor will look for templates files. The default value is an empty array. These folders will be visible in the file browser part of the dialog.|
| __UploadPaths__ |A string array which contains the paths to which the RadEditor will be able to upload templates files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| __DeletePaths__ |A string array which contains the paths from which the RadEditor will be able to delete templates files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| __MaxUploadFileSize__ |The maximum image file size in bytes, allowed for uploading. The default value is __204800__ bytes (200 kilobytes).|
| __SearchPatterns__ |A string array which contains the file extension filters that controls which files are shown in the Template Manager dialog and which file types can be uploaded through the upload dialog.The * character can be used as a wildcard in the file name, for example *.html will match all template names with extension html.|

Example:

The example below demonstrates the relationship between the folder structure and the property settings:

With the settings above, the users will be able to browse all subfolders of the "~/Templates" folder. They will be able to upload template files to the "~/Templates/New" folder and all its subfolders and delete template files from "~/Templates/New/Articles" and "~/Templates/New/News".__Setting Image manager properties inline:__

````XML
	     
	<telerik:radeditor runat="server" ID="RadEditor1"  >  
	   <TemplateManager ViewPaths="~/Templates" UploadPaths="~/Templates/New" DeletePaths="~/Templates/New/Articles,~/Templates/New/News" />
	</telerik:radeditor> 
				
````



__Setting Image manager properties in CodeBehind:__

````C#
	string[] viewTemplates = new string[] { "~/Templates" };
	string[] uploadTemplates = new string[] { "~/Templates/New" };
	string[] deleteTemplates = new string[] { "~/Templates/New/Articles", "~/Templates/New/News" };
	
	if (!IsPostBack)
	{
	   RadEditor1.TemplateManager.ViewPaths = viewTemplates;
	   RadEditor1.TemplateManager.UploadPaths = uploadTemplates;
	   RadEditor1.TemplateManager.DeletePaths = deleteTemplates;
	} 
````



````VB.NET
		Dim viewTemplates As String() = New String() {"~/Templates"}
		Dim uploadTemplates As String() = New String() {"~/Templates/New"}
		Dim deleteTemplates As String() = New String() {"~/Templates/New/Articles", "~/Templates/New/News"}
		If Not IsPostBack Then
		 RadEditor1.TemplateManager.ViewPaths = viewTemplates
		 RadEditor1.TemplateManager.UploadPaths = uploadTemplates
		 RadEditor1.TemplateManager.DeletePaths = deleteTemplates
		End If 	
````



Note that the viewTemplates, uploadTemplates and deleteTemplates variables are string arrays and that the Templates folders must be:

* a subdirectory of your web application

* directory placed in the root of IIS - you can set this folder by using the / forward slash symbol, e.g.RadEditor1.TemplateManager.ViewPaths = new String []{"/Templates"};

* a virtual directory of your web application that has a physical path pointing outside of your web application.

# See Also

 * [File Managers](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/FileManagers/DefaultCS.aspx)

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Enforce Roles]({%slug editor/functionality/dialogs/examples/enforce-roles%})
