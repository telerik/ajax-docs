---
title: Using Custom Content Provider
page_title: Using Custom Content Provider | UI for ASP.NET AJAX Documentation
description: Using Custom Content Provider
slug: imageeditor/functionality/using-custom-content-provider
tags: using,custom,content,provider
published: True
position: 3
---

# Using Custom Content Provider



## Using Custom Content Provider

Starting from __Q3 2011__ RadImageEditor can use custom content providers. This ability will ease the usage of the control in CMS scenarios and its colaboration with RadFileExplorer where the content is stored in a DataBase, FTP or even an online storage system such as Amazon S3.

RadImageEditor is using the same abstract class, FileBrowserContentProvider, as RadFileExplorer and RadEditor for the custom content provider, which allows you to use already operational custom content providers without any modifications.

To configure RadImageEditor to use custom content provider you need to configure its ImageManager like follows:



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        string[] paths = new string[] {"~/Images"};
	        RadImageEditor1.ImageManager.EnableContentProvider = true;
	        RadImageEditor1.ImageManager.ContentProviderTypeName = typeof(Telerik.Web.Examples.DBContentProvider).AssemblyQualifiedName;
	        RadImageEditor1.ImageManager.ViewPaths = paths;
	        RadImageEditor1.ImageManager.DeletePaths = paths;
	        RadImageEditor1.ImageManager.UploadPaths = paths;
	        RadImageEditor1.ImageManager.SearchPatterns = new string[] { "*.jpg", "*.jpeg", "*.gif", "*.png", "*.bmp" };
	    }
````
````VB
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        Dim paths As String() = New String() {"~/Images"}
	        RadImageEditor1.ImageManager.EnableContentProvider = True
	        RadImageEditor1.ImageManager.ContentProviderTypeName = GetType(Telerik.Web.Examples.DBContentProvider).AssemblyQualifiedName
	        RadImageEditor1.ImageManager.ViewPaths = paths
	        RadImageEditor1.ImageManager.DeletePaths = paths
	        RadImageEditor1.ImageManager.UploadPaths = paths
	        RadImageEditor1.ImageManager.SearchPatterns = New String() {"*.jpg", "*.jpeg", "*.gif", "*.png", "*.bmp"}
	    End Sub
````


>note  __ViewPaths__ , __UploadPaths__ and __DeletePaths__ for RadImageEditor's ImageManager should be set to the same path.
>


## FileBrowserContentProvider abstract class structure



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

