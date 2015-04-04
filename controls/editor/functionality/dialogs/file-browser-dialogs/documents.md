---
title: Documents
page_title: Documents | UI for ASP.NET AJAX Documentation
description: Documents
slug: editor/functionality/dialogs/file-browser-dialogs/documents
tags: documents
published: True
position: 2
---

# Documents



## 

Functionality:

Using the Document Manager dialog, RadEditor users can:

* __insert documents__ in the editor's content area

* __upload new documents__, which will be available for inserting.

* __delete documents__

Properties to set: 

The behavior of the Document Manager dialog is controlled by the following properties:


>caption  

|  __Property__  |  __Description__  |
| ------ | ------ |
| __ViewPaths__ |A string array which contains the paths where the RadEditor will look for documents. The default value is an empty array. These folders will be visible in the file browser part of the dialog.|
| __UploadPaths__ |A string array which contains the paths to which the RadEditor will be able to upload documents. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| __DeletePaths__ |A string array which contains the paths from which the RadEditor will be able to delete documents. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| __MaxUploadFileSize__ |The maximum document file size in bytes, allowed for uploading. The default value is __204800__ bytes (200 kilobytes).|
| __SearchPatterns__ |A string array which contains the file extension filters that controls which files are shown in the Document Manager dialog and which file types can be uploaded through the upload dialog.The * character can be used as a wildcard in the file name, for example *.doc will match all document names with extension doc.|

In order for a folder to be visible in the file browser, it must be present in the ViewPaths array. The users will be able to browse its subfolders since they inherit the permissions. If it is needed to grant permission for deleting or uploading documents into a specific folder, it must be present in the corresponding array - DeletePaths or UploadPaths. These permissions are also inherited by the subfolders.The application root folder can be substituted with the "~" (tilde) character. It is possible to use paths relative to the root. For example, in order to access Document files located in another web application.

Example:

The example below demonstrates the relationship between the folder structure and the property settings:

The users will be able to browse all subfolders of the "~/Documents" folder. They will be able to upload documents to the "~/Documents/New" folder and all its subfolders and delete documents from "~/Documents/New/Articles" and "~/Documents/New/News".__Setting Document manager properties inline:__

````XML
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <DocumentManager ViewPaths="~/Documents" UploadPaths="~/Documents/New" DeletePaths="~/Documents/New/Articles,~/Documents/New/News" />
	    </telerik:RadEditor>
````



__Setting the DocumentManager properties in CodeBehind:__

>tabbedCode

````C#
	
	        string[] viewDocuments = new string[] { "~/Documents" }; 
	        string[] uploadDocuments = new string[] { "~/Documents/New" }; 
	        string[] deleteDocuments = new string[] { "~/Documents/New/Articles", "~/Documents/New/News" }; 
	        
	        if (!IsPostBack) 
	        { 
	            RadEditor1.DocumentManager.ViewPaths = viewDocuments; 
	            RadEditor1.DocumentManager.UploadPaths = uploadDocuments; 
	            RadEditor1.DocumentManager.DeletePaths = deleteDocuments; 
	        }
	
````
````VB
	
	        Dim viewDocuments As String() = New String() {"~/Documents"}
	        Dim uploadDocuments As String() = New String() {"~/Documents/New"}
	        Dim deleteDocuments As String() = New String() {"~/Documents/New/Articles", "~/Documents/New/News"}
	
	        If Not IsPostBack Then
	            RadEditor1.DocumentManager.ViewPaths = viewDocuments
	            RadEditor1.DocumentManager.UploadPaths = uploadDocuments
	            RadEditor1.DocumentsManager.DeletePaths = deleteDocuments
	        End If
	
````
>end

Note that the viewDocuments, uploadDocuments and deleteDocuments variables are string arrays and that the Documents folder must be:

* a subdirectory of your web application

* directory placed in the root of IIS - you can set this folder by using the / forward slash symbol, e.g.RadEditor1.DocumentManager.ViewPaths = new String []{"/Documents"};

* a virtual directory of your web application that has a physical path pointing outside of your web application.


>caption  

| 
>caption 

![](images/editor-hs_note.gif) | The Links inserted via the __DocumentManager__ have __relative paths__ . In scenarios when __absolute paths__ are needed enable the __MakeUrlsAbsolute__ client-side filter of RadEditor:

* via the codebehind: RadEditor1.EnableFilter(EditorFilters. __MakeUrlsAbsolute__ );

* inline: <telerik:RadEditor ID="RadEditor1" __ContentFilters="MakeUrlsAbsolute"__ runat="server" /> |
| ------ | ------ |



# See Also

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Enforce Roles]({%slug editor/functionality/dialogs/examples/enforce-roles%})

 * [File Managers](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/FileManagers/DefaultCS.aspx)

 * [DB File Browser Content Provider](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/DBFileBrowserContentProvider/DefaultCS.aspx)

 * [Content Filters]({%slug editor/managing-content/content-filters%})
