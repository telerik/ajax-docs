---
title: Use Custom FileBrowserContentProvider
page_title: Use Custom FileBrowserContentProvider | RadFileExplorer for ASP.NET AJAX Documentation
description: Use Custom FileBrowserContentProvider
slug: fileexplorer/server-side-programming/use-custom-filebrowsercontentprovider
tags: use,custom,filebrowsercontentprovider
published: True
position: 3
---

# Use Custom FileBrowserContentProvider

**The FileBrowserContentProvider** abstract class allows for different file sources to be used for the content in the **RadFileExplorer** control, such as file system, database system, CMS-specific resource system or even online storage systems such as Amazon S3.

The **FileBrowserContentProvider** implementation in **RadFileExplorer** is an instance of **Telerik.Web.UI.Widgets.FileSystemContentProvider. It works with the underlying machine's physical file system.**

While the default implementation is good for most scenarios, in some cases (see above) the RadFileExplorer should be hooked to a different file source, such as when using it in a CMS system. This can be achieved in 2 ways:

1. By subclassing the existing **Telerik.Web.UI.Widgets.FileSystemContentProvider** and overriding only the methods that you need changed.

1. By implementing a new **Telerik.Web.UI.Widgets.FileBrowserContentProvider**

## 1. Subclassing existing FileSystemContentProvider

The following example shows how to override the **ResolveDirectory** method so it does not show files that have names starting with "private_":

````C#
protected void Page_Load(object sender, EventArgs e)
{
    string[] paths = new string[] { "~/" };
    RadFileExplorer1.Configuration.ViewPaths = paths;
    RadFileExplorer1.Configuration.UploadPaths = paths;
    RadFileExplorer1.Configuration.DeletePaths = paths;

    #region assign-provider_cs
    RadFileExplorer1.Configuration.ContentProviderTypeName = typeof(ExtendedFileProvider).AssemblyQualifiedName;
    #endregion
}


public class ExtendedFileProvider : Telerik.Web.UI.Widgets.FileSystemContentProvider
{
    //constructor must be present when overriding a base content provider class
    //you can leave it empty
    public ExtendedFileProvider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag)
        : base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)
    {
    }
    public override Telerik.Web.UI.Widgets.DirectoryItem ResolveDirectory(string path)
    {
        //get the directory information
        Telerik.Web.UI.Widgets.DirectoryItem baseDirectory = base.ResolveDirectory(path);
        //remove files that we do not want to see
        System.Collections.Generic.List<Telerik.Web.UI.Widgets.FileItem> files = new System.Collections.Generic.List<Telerik.Web.UI.Widgets.FileItem>();
        foreach (Telerik.Web.UI.Widgets.FileItem file in baseDirectory.Files)
        {
            if (!file.Name.StartsWith("private_"))
            {
                files.Add(file);
            }
        }

        Telerik.Web.UI.Widgets.DirectoryItem newDirectory = new Telerik.Web.UI.Widgets.DirectoryItem(baseDirectory.Name, baseDirectory.Location, baseDirectory.FullPath, baseDirectory.Tag, baseDirectory.Permissions, files.ToArray(), baseDirectory.Directories);
        //return the updated directory information
        return newDirectory;
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	Dim paths As String() = New String() {"~/"}
	RadFileExplorer1.Configuration.ViewPaths = paths
	RadFileExplorer1.Configuration.UploadPaths = paths
	RadFileExplorer1.Configuration.DeletePaths = paths


	'#region assign-provider_vb
	RadFileExplorer1.Configuration.ContentProviderTypeName = GetType(ExtendedFileProvider).AssemblyQualifiedName
	'#endregion
End Sub
Public Class ExtendedFileProvider
	Inherits Telerik.Web.UI.Widgets.FileSystemContentProvider
	'constructor must be present when overriding a base content provider class
	'you can leave it empty
	Public Sub New(ByVal context As HttpContext, ByVal searchPatterns As String(), ByVal viewPaths As String(), ByVal uploadPaths As String(), ByVal deletePaths As String(), ByVal selectedUrl As String, _
	 ByVal selectedItemTag As String)
		MyBase.New(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, _
		 selectedItemTag)
	End Sub
	Public Overloads Overrides Function ResolveDirectory(ByVal path As String) As Telerik.Web.UI.Widgets.DirectoryItem
		'get the directory information
		Dim baseDirectory As Telerik.Web.UI.Widgets.DirectoryItem = MyBase.ResolveDirectory(path)
		'remove files that we do not want to see
		Dim files As New System.Collections.Generic.List(Of Telerik.Web.UI.Widgets.FileItem)()
		For Each file As Telerik.Web.UI.Widgets.FileItem In baseDirectory.Files
			If Not file.Name.StartsWith("private_") Then
				files.Add(file)
			End If
		Next
		Dim newDirectory As New Telerik.Web.UI.Widgets.DirectoryItem(baseDirectory.Name, baseDirectory.Location, baseDirectory.FullPath, baseDirectory.Tag, baseDirectory.Permissions, files.ToArray(), _
		 baseDirectory.Directories)
		'return the updated directory information
		Return newDirectory
	End Function
End Class
````


## 2. Implementing a custom Telerik.Web.UI.Widgets.FileBrowserContentProvider

When subclassing is not enough to do the job, you can design a completely new FileBrowserContentProvider. The steps to implement are:

* Extend the abstract **Telerik.Web.UI.Widgets.FileBrowserContentProvider** class and implement its methods.

````C#
public class myNewProvider : Telerik.Web.UI.Widgets.FileBrowserContentProvider
{
	//constructor must be present when overriding a base content provider class
	//you can leave it empty
	public myNewProvider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag)
		: base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)
	{
	}
	public override Telerik.Web.UI.Widgets.DirectoryItem ResolveRootDirectoryAsTree(string path)
	{
		throw new NotImplementedException();
	}
	public override Telerik.Web.UI.Widgets.DirectoryItem ResolveDirectory(string path)
	{
		throw new NotImplementedException();
	}
	public override string GetFileName(string url)
	{
		throw new NotImplementedException();
	}
	public override string GetPath(string url)
	{
		throw new NotImplementedException();
	}
	public override System.IO.Stream GetFile(string url)
	{
		throw new NotImplementedException();
	}
	public override string StoreBitmap(System.Drawing.Bitmap bitmap, string url, System.Drawing.Imaging.ImageFormat format)
	{
		throw new NotImplementedException();
	}
	public override string StoreFile(Telerik.Web.UI.UploadedFile file, string path, string name, params string[] arguments)
	{
		throw new NotImplementedException();
	}
	public override string DeleteFile(string path)
	{
		throw new NotImplementedException();
	}
	public override string DeleteDirectory(string path)
	{
		throw new NotImplementedException();
	}
	public override string CreateDirectory(string path, string name)
	{
		throw new NotImplementedException();
	}
	public override string MoveFile(string path, string newPath)
	{
		return base.MoveFile(path, newPath);
	}
	public override string MoveDirectory(string path, string newPath)
	{
		return base.MoveDirectory(path, newPath);
	}
	public override string CopyFile(string path, string newPath)
	{
		return base.CopyFile(path, newPath);
	}
	public override string CopyDirectory(string path, string newPath)
	{
		return base.CopyDirectory(path, newPath);
	}

	// ##############################################################################
	// !!! IMPORTANT !!!
	// The compilator will not complain if these methods are not overridden, but it is highly recommended to override them

	public override bool CheckDeletePermissions(string folderPath)
	{
		return base.CheckDeletePermissions(folderPath);
	}
	public override bool CheckWritePermissions(string folderPath)
	{
		return base.CheckWritePermissions(folderPath);
	}

	//Introduced in the 2010.2.826 version of the control
	public override bool CheckReadPermissions(string folderPath)
	{
		return base.CheckReadPermissions(folderPath);
	}
	// ##############################################################################
}
````
````VB
Public Class myNewProvider
	Inherits Telerik.Web.UI.Widgets.FileBrowserContentProvider
	'constructor must be present when overriding a base content provider class
	'you can leave it empty
	Public Sub New(ByVal context As HttpContext, ByVal searchPatterns As String(), ByVal viewPaths As String(), ByVal uploadPaths As String(), ByVal deletePaths As String(), ByVal selectedUrl As String, _
	 ByVal selectedItemTag As String)
		MyBase.New(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, _
		 selectedItemTag)
	End Sub
	Public Overloads Overrides Function ResolveRootDirectoryAsTree(ByVal path As String) As Telerik.Web.UI.Widgets.DirectoryItem
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function ResolveDirectory(ByVal path As String) As Telerik.Web.UI.Widgets.DirectoryItem
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function GetFileName(ByVal url As String) As String
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function GetPath(ByVal url As String) As String
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function GetFile(ByVal url As String) As System.IO.Stream
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function StoreBitmap(ByVal bitmap As System.Drawing.Bitmap, ByVal url As String, ByVal format As System.Drawing.Imaging.ImageFormat) As String
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function StoreFile(ByVal file As Telerik.Web.UI.UploadedFile, ByVal path As String, ByVal name As String, ByVal ParamArray arguments As String()) As String
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function DeleteFile(ByVal path As String) As String
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function DeleteDirectory(ByVal path As String) As String
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function CreateDirectory(ByVal path As String, ByVal name As String) As String
		Throw New NotImplementedException()
	End Function
	Public Overloads Overrides Function MoveFile(ByVal path As String, ByVal newPath As String) As String
		Return MyBase.MoveFile(path, newPath)
	End Function
	Public Overloads Overrides Function MoveDirectory(ByVal path As String, ByVal newPath As String) As String
		Return MyBase.MoveDirectory(path, newPath)
	End Function
	Public Overloads Overrides Function CopyFile(ByVal path As String, ByVal newPath As String) As String
		Return MyBase.CopyFile(path, newPath)
	End Function
	Public Overloads Overrides Function CopyDirectory(ByVal path As String, ByVal newPath As String) As String
		Return MyBase.CopyDirectory(path, newPath)
	End Function


	' ##############################################################################
	' !!! IMPORTANT !!!
	' The compilator will not complain if these methods are not overridden, but it is highly recommended to override them
	Public Overrides Function CheckDeletePermissions(ByVal folderPath As String) As Boolean
		Return MyBase.CheckDeletePermissions(folderPath)
	End Function

	Public Overrides Function CheckWritePermissions(ByVal folderPath As String) As Boolean
		Return MyBase.CheckWritePermissions(folderPath)
	End Function

	' Introduced in the 2010.2.826 version of the control
	Public Overrides Function CheckReadPermissions(ByVal folderPath As String) As Boolean
		Return MyBase.CheckReadPermissions(folderPath)
	End Function
	' ##############################################################################


End Class
````

* Set the **RadFileExplorer's** property **Configuration.ContentProviderTypeName** to the fully qualified assembly name of your custom content provider. The general format of the assembly name should be **"Full.Class.Name.Including.The.Namespace, Assembly.Name"**. For example:

````C#
RadFileExplorer1.Configuration.ContentProviderTypeName = typeof(ExtendedFileProvider).AssemblyQualifiedName;
````
````VB
RadFileExplorer1.Configuration.ContentProviderTypeName = GetType(ExtendedFileProvider).AssemblyQualifiedName
````

Below you can see the order of calling the various methods of FileBrowserContentProvider's common operations such as initial loading, moving, deleting and uploading files

**Initial Loading**

1. **ResolveRootDirectoryAsTree** - Called from the server in order to bind the treeview and get the root folder
1. **ResolveRootDirectoryAsTree** - Get all subfolders of the root folder
1. **ResolveRootDirectoryAsTree** - Checks all folders in the root for subfolders (*called for every folder*)
1. **ResolveRootDirectoryAsTree** - Updates folders in grid
1. **ResolveDirectory**- Updates files in grid


**Moving File**

1. **GetPath** - Gets the current item's parent folder
1. **ResolveDirectory** - Checks permissions
1. **GetPath** - Gets the parent folder where the file will be copied (including file's name)
1. **ResolveDirectory** - Checks permissions
1. **MoveFile** - Moves the file
1. **ResolveRootDirectoryAsTree** - Updates the RadTreeView in RadFileExplorer
1. **ResolveDirectory** - Updates the RadTreeView in RadFileExplorer
1. **ResolveRootDirectoryAsTree** - Updates the RadGrid
1. **ResolveDirectory** - Updates the RadGrid

**Deleting File**

1. **GetPath** - Gets the parent folder for the deleted item
1. **ResolveDirectory** - Checks permissions
1. **DeleteFile** - Deletes the item
1. **ResolveRootDirectoryAsTree** - Updates the parent tree node
1. **ResolveDirectory** - Updates the parent tree node
1. **ResolveRootDirectoryAsTree** - Updates the RadGrid
1. **ResolveDirectory** - Updates the RadGrid

**Uploading File**

1. **GetFile** - Returns Stream for accessing the contents of the file item with the given Url
1. **StoreFile** - Creates a file item from a Telerik.Web.UI.UploadedFile in the given path with the given name.
1. **ResolveRootDirectoryAsTree** - Update the RadTreeView in RadFileExplorer
1. **ResolveDirectory** - Updates the RadTreeView
1. **ResolveRootDirectoryAsTree** - Updates the RadGrid
1. **ResolveDirectory** - Updates the RadGrid

## FileBrowserContentProvider's properties and methods:

**ResolveRootDirectoryAsTree(string path):** called for every path set in the ViewPaths collection per request. It returns all subfolders in the root folder given as a parameter.*Sample:* *string path: "/FileExplorerCustomProvider" returns:dir: {C:\Work\InHouse\FileExplorerCustomProvider} virtualName: "FileExplorerCustomProvider"virtualParentPath: "/"path: "/FileExplorerCustomProvider"*

**ResolveRootDirectoryAsList(string path):** This method is obsolete and you do not need to implement it

**ResolveDirectory(string path)** is used mainly in the Ajax calls and returns all immediate children of the directory passed as the path parameter. This includes both files and sub-folders.*Sample:string path: "/FileExplorerCustomProvider"returns:dir: {C:\Work\InHouse\FileExplorerCustomProvider}path: "/FileExplorerCustomProvider"*

**CreateDirectory(string path, string name):** Creates a directory item with the given parameters:

1. path (string) - The path where the directory item should be created.

1. name (string) - The name of the new directory item.

*Sample:string path: "/FileExplorerCustomProvider/"string name: "NewFolder"returns: string.Empty (operation successful)*

**GetFileName(string url):** Gets the name of the file with the given Url. Returns a string containing the file name

**GetPath(string url):** Gets the virtual path of the item with the given Url.Returns a string containing the path of the item.

**GetFile(string url):** Returns Stream for accessing the contents of the file item with the given url.

**StoreBitmap(Bitmap bitmap, string url, ImageFormat format):** Used when creating new images in the Image Editor dialog. Stores an image with the given Url and image format. Returns string.Empty when the operation was successful, otherwise returns a string with the error message to be displayed to the user. Accepts the following parameters:

1. The Bitmap object to be stored

1. The Url of the bitmap as string

1. The image format of the bitmap.

**StoreFile(UploadedFile file, string path, string name, params string[] arguments):** Creates a file item from a Telerik.Web.UI.UploadedFile in the given path with the given name. Returns string containing the full virtual path (including the file name) of the file item. The method receives the following parameters:

1. The UploadedFile instance to store.

1. The virtual path where the file item should be created.

1. The name of the file item.

1. Additional values to be stored such as Description, DisplayName, etc.

*Sample:parameters:file: {Telerik.Web.UI.PostedFile}string path: "/FileExplorerCustomProvider/"string name: "smiley.jpg"argument: {string[0]}returns: string targetFullPath: "/FileExplorerCustomProvider/smiley.jpg"*

**DeleteFile(string path):** Deletes the file item with the given virtual path. Returns string.Empty when the operation was successful.*Sample:string path: "/FileExplorerCustomProvider/smiley.jpg"*

*Returns: string.Empty (operation successful)*

**DeleteDirectory(string path):** Deletes the directory item with the given virtual path. Returns string.Empty when the operation was successful.*Sample:string path: "/FileExplorerCustomProvider/NewSubFolder"Returns: string.Empty (operation successful)*

**CreateDirectory(string path, string name):** Creates a directory item in the given path with the given name. Returns string.Empty when the operation was successful, otherwise returns a string with the error message to be displayed to the user. The method receives the following parameters:

1. The path where the directory item should be created.

1. The name of the new directory item.

**MoveFile(string path, string newPath):** Moves a file from a one virtual path to a new one. This method can also be used for renaming items. Returns string.Empty when the operation was successful, otherwise returns a string with the error message to be displayed to the user. The method receives the following parameters:

1. old virtual location

1. new virtual location

*Sample:string path: "/FileExplorerCustomProvider/smiley.jpg"string newPath: "/FileExplorerCustomProvider/NewFolder/smiley.jpg"Returns: string.Empty (operation successful)*

**MoveDirectory(string path, string newPath):** Moves a directory from a one virtual path to a new one. This method can also be used for renaming items. Returns string.Empty when the operation was successful, otherwise returns a string with the error message to be displayed to the user. The method receives the following parameters:

1. old virtual location

1. new virtual location

*Sample:string path: "/FileExplorerCustomProvider/NewFolder/NewSubFolder" string newPath: "/FileExplorerCustomProvider/NewSubFolder" Returns: string.Empty (operation successful)*

**DisplayMode:** This property is obsolete. You do not need to override it.

**CanCreateDirectory:** Gets a value indicating whether the ContentProvider can create directory items or not.

**Context:** Provides a reference to the current HttpContext object, set in the constructor of the class.

**SelectedUrl:** Gets or sets the url of the selected item. The file browser will navigate to the item which has this url. **SearchPatterns:** Gets the search patterns for the file items to be displayed in the FileBrowser control. This property is set in the constructor of the class. Supports wildcards.

**ViewPaths:** Gets the paths which will be displayed in the dialog. This is passed by RadEditor and is one of the values of ImagesPaths, DocumentsPaths, MediaPaths, FlashPaths, TemplatesPaths properties. You can disregard this value if you have custom mechanism for determining the rights for directory / file displaying. **UploadPaths:** Gets the paths which will allow uploading in the dialog. This is passed by RadEditor and is one of the values of UploadImagesPaths, UploadDocumentsPaths, UploadMediaPaths, UploadFlashPaths, UploadTemplatesPaths properties. You can disregard this value if you have custom mechanism for determining the rights for uploading.

**DeletePaths:** The paths which will allow deleting in the dialog. This is passed by RadEditor and is one of the values of DeleteImagesPaths, DeleteDocumentsPaths, DeleteMediaPaths, DeleteFlashPaths, DeleteTemplatesPaths properties. You can disregard this value if you have custom mechanism for determining the rights for deleting.

## See Also

 * [Overview]({%slug fileexplorer/client-side-programming/overview%})
 
 * [RadEditor's Custom FileBrowserContent Provider]({%slug editor/functionality/dialogs/examples/custom-filebrowsercontentprovider%})

 * [Use RadFileExplorer with physical paths and different content types (KB article)](http://www.telerik.com/support/kb/aspnet-ajax/fileexplorer/physical-paths-and-different-content-types.aspx)

 * [Amazon S3 FileBrowserContentProvider](http://www.telerik.com/community/code-library/aspnet-ajax/file-explorer/amazon-s3-filebrowsercontentprovider.aspx)
