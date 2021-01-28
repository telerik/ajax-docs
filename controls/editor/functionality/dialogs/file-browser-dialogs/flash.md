---
title: Flash
page_title: Flash - RadEditor
description: Check our Web Forms article about Flash.
slug: editor/functionality/dialogs/file-browser-dialogs/flash
tags: flash
published: True
position: 5
---

# Flash

**Functionality:**

Using the Flash Manager dialog the users of a RadEditor can:

* **insert flash files** in the editor's content area

* **upload new flash files**, which will be available for inserting

* **delete flash files**

**Properties to set:**

The behavior of the Flash Manager dialog is controlled by the following properties:  

|  **Property**  |  **Description**  |
| ------ | ------ |
| **ViewPaths** |A string array which contains the paths where the RadEditor will look for flash files. The default value is an empty array. These folders will be visible in the file browser part of the dialog.|
| **UploadPaths** |A string array which contains the paths to which the RadEditor will be able to upload flash files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| **DeletePaths** |A string array which contains the paths from which the RadEditor will be able to delete flash files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| **MaxUploadFileSize** |The maximum flash file size in bytes, allowed for uploading. The default value is **204800** bytes (200 kilobytes).|
| **SearchPatterns** |A string array which contains the file extension filters that controls which files are shown in the Flash Manager dialog and which file types can be uploaded through the upload dialog.The * character can be used as a wildcard in the file name, for example *.swf will match all flash names with extension swf.|

In order for a folder to be visible in the file browser, it must be present in the ViewPaths array. The users will be able to browse its subfolders since they inherit the permissions. If it is needed to grant permission for deleting or uploading flash files into a specific folder, it must be present in the corresponding array - DeletePaths or UploadPaths. These permissions are also inherited by the subfolders.The application root folder can be substituted with the "~" (tilde) character. It is possible to use paths relative to the root. For example, in order to access flash files located in another web application.

**Example 1** and **Example 2** demonstrate the relationship between the folder structure and the property settings:

With the settings above, the users will be able to browse all subfolders of the "~/Flash" folder. They will be able to upload Flash files to the "~/Flash/New" folder and all its subfolders and delete flash files from "~/Flash/New/Articles" and "~/Flash/New/News".

>caption Example 1: Setting Flash manager properties inline.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1">
	<ImageManager ViewPaths="~/Flash" UploadPaths="~/Flash/New" DeletePaths="~/Flash/New/Articles,~/Flash/New/News" />
</telerik:RadEditor>
````



>caption Example 2: Setting Flash manager properties in CodeBehind.

````C#
string[] viewFlash = new string[] { "~/Flash" };
string[] uploadFlash = new string[] { "~/Flash/New" };
string[] deleteFlash = new string[] { "~/Flash/New/Articles", "~/Flash/New/News" };

if (!IsPostBack)
{
	RadEditor1.FlashManager.ViewPaths = viewFlash;
	RadEditor1.FlashManager.UploadPaths = uploadFlash;
	RadEditor1.FlashManager.DeletePaths = deleteFlash;
} 	
````
````VB
Dim viewFlash As String() = New String() {"~/Flash"}
Dim uploadFlash As String() = New String() {"~/Flash/New"}
Dim deleteFlash As String() = New String() {"~/Flash/New/Articles", "~/Flash/New/News"}
If Not IsPostBack Then
	RadEditor1.FlashManager.ViewPaths = viewFlash
	RadEditor1.FlashManager.UploadPaths = uploadFlash
	RadEditor1.FlashManager.DeletePaths = deleteFlash
End If
````

Note that the viewFlash, uploadFlash and deleteFlash variables are string arrays and that the Flash folders must be:

* a subdirectory of your web application

* directory placed in the root of IIS - you can set this folder by using the / forward slash symbol, e.g. `RadEditor1.FlashManager.ViewPaths = new String []{"/Flash"};`

* a virtual directory of your web application that has a physical path pointing outside of your web application.

>note You should also grant full ASPNET account permissions over the Flash Folders on Win XP computers with IIS 5.1. On Win 2003 servers with IIS 6.0 you should grant full NETWORK SERVICE account permissions over the Flash Folder.


## See Also

 * [File Managers](https://demos.telerik.com/aspnet/prometheus/Editor/Examples/FileManagers/DefaultCS.aspx)

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Enforce Roles]({%slug editor/functionality/dialogs/examples/enforce-roles%})
