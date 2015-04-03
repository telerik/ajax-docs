---
title: ExternalDialogsPath Property
page_title: ExternalDialogsPath Property | UI for ASP.NET AJAX Documentation
description: ExternalDialogsPath Property
slug: editor/functionality/dialogs/externaldialogspath-property
tags: externaldialogspath,property
published: True
position: 7
---

# ExternalDialogsPath Property



## 



By default, all RadEditor dialogs are embedded as resource files in the Telerik.Web.UI.dll file, which makes their customization harder.In order to provide an easy way to modify the editor's dialogs, the Telerik UI for ASP.NET AJAX suite installation now comes with an extra folder named__EditorDialogs__ which contains the dialogs' ascx files. You can configure RadEditor to use the external dialogfiles by copying the __EditorDialogs__folder to the root of the web application and setting the __ExternalDialogsPath__ property to point to it, e.g.

>tip The mentioned dialog files could be located in different folders depending on the chosen type of installation. If the manual installation is used,they could be found in the __[Extracted_Directory]\EditorDialogs__ folder. If your choice is the MSI installation, thenthe dialogs should be located in the __[Installation_Directory]\EditorDialogs__ folder.
>


````XML
	    <telerik:RadEditor ID="RadEditor1" ExternalDialogsPath="~/EditorDialogs" runat="server">
	        <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />
	    </telerik:RadEditor>
````



__Example:__

The example below demonstrates how to hide the "New Folder" button in all the dialogs containing FileExplorer. Here are the steps:

1. Copy the __EditorDialogs__ folder to the root of the web application.

1. Set the __ExternalDialogsPath__ property to point to the EditorDialogs folder

1. Open the __FileBrowser.ascx__ file, which is in the __EditorDialogs__folder and locate the following control, which represent the FileExplorer:

````XML
	    <telerik:RadFileExplorer ID="RadFileExplorer1" Height="450px" Width="400px" TreePaneWidth="150px"
	        runat="Server" EnableOpenFile="false" AllowPaging="true" />
````



1. To hide the "New Folder" button set the __EnableCreateNewFolder__property to __false__.

````XML
	    <telerik:RadFileExplorer ID="RadFileExplorer1" Height="450px" Width="400px" TreePaneWidth="150px"
	        EnableCreateNewFolder="false" runat="Server" EnableOpenFile="false" AllowPaging="true" />
````



1. Save the file and test the editor.
