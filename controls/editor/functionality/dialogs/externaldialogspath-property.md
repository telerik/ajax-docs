---
title: ExternalDialogsPath Property
page_title: ExternalDialogsPath Property | RadEditor for ASP.NET AJAX Documentation
description: ExternalDialogsPath Property
slug: editor/functionality/dialogs/externaldialogspath-property
tags: externaldialogspath,property
published: True
position: 7
---

# ExternalDialogsPath Property

By default, all RadEditor dialogs are embedded as resource files in the Telerik.Web.UI.dll file, which makes their customization harder.In order to provide an easy way to modify the editor's dialogs, the Telerik UI for ASP.NET AJAX suite installation now comes with an extra folder named **EditorDialogs** which contains the dialogs' ascx files. You can configure RadEditor to use the external dialog files by copying the **EditorDialogs** folder to the root of the web application and setting the **ExternalDialogsPath** property to point to it, e.g.

>tip The mentioned dialog files could be located in different folders depending on the chosen type of installation. If the manual installation is used,they could be found in the **[Extracted_Directory]\EditorDialogs** folder. If your choice is the MSI installation, then the dialogs should be located in the **[Installation_Directory]\EditorDialogs** folder.

>note In order to use the external dialogs of the control in a [precompiled site scenario](https://msdn.microsoft.com/en-us/library/399f057w%28v=vs.85%29.aspx) you have to manually copy the folder with the modified dialogs to the precompiled version of the site.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" ExternalDialogsPath="~/EditorDialogs" runat="server">
	<ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />
</telerik:RadEditor>
````

**Example:**

The example below demonstrates how to hide the "New Folder" button in all the dialogs containing FileExplorer. Here are the steps:

1. Copy the **EditorDialogs** folder to the root of the web application.
1. Set the **ExternalDialogsPath** property to point to the EditorDialogs folder
1. Open the **FileBrowser.ascx** file, which is in the **EditorDialogs** folder and locate the following control, which represent the FileExplorer:

	**ASP.NET**

		<telerik:RadFileExplorer RenderMode="Lightweight" ID="RadFileExplorer1" Height="450px" Width="400px" TreePaneWidth="150px"
			runat="Server" EnableOpenFile="false" AllowPaging="true" />

1. To hide the "New Folder" button set the **EnableCreateNewFolder** property to **false**.

	**ASP.NET**
	
		<telerik:RadFileExplorer RenderMode="Lightweight" ID="RadFileExplorer1" Height="450px" Width="400px" TreePaneWidth="150px"
			EnableCreateNewFolder="false" runat="Server" EnableOpenFile="false" AllowPaging="true" />

1. Save the file and test the editor.
