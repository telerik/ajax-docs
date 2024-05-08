---
title: Upload Zip File & Unzip Contents
description: Learn how to upload Zip File & Unzip Contents in RadEditor
type: how-to
page_title: Upload Zip File & Unzip Contents. | RadEditor
slug: editor-upload-zip-file-unzip-contents
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Editor for ASP.NET AJAX</td>
		</tr>editor-upload-zip-file-unzip-contents
	</tbody>
</table>


## Description

This is a project that contains a running example of how to enable a user to upload a zip file in any of the File Browser Dialogs, and then unzip the contents of the zip file to the selected directory.

Since the user is allowed to upload a zip file we no longer know for sure what is contained in that file - it could be any combination of any kinds of files and / or directories. I decided that I liked the feature of the user being able to upload directories of files so the code allows for that. Essentially, this is the pseudocode:


1. Is the uploaded file a zip file?  If yes, then goto step 2, otherwise, proceed as normal.
1. Don't save the zip file to disk, begin extraction in-memory
1. For each entry in the zip file, determine if it's a file or a directory
1. If it's a file, delete the file if it already exists.  If it's a directory, create the directory.
1. Check that the file is a non-zip file that complies with the file types specified in the search patterns.  If it is a valid file, save it to disk.
1. Check that all directories and sub-directories contain image files.  If the directory is empty, delete it.  This is because a directory in the zip file could have contained an invalid file - but the directory would have still be created.
1. Try to return the path of the last extracted file to the File Browser Dialog - this doesn't work if the File Browser needs to change a directory but it does work in all other cases.

## Solution

First, download and add a reference to the [SharpZipLib.dll](https://github.com/icsharpcode) for your website / project.

After that, extend the built-in **FileSystemContentProvider**.  The only method that needs to be overridden is the `StoreFile` method, but you'll also need to create a New(...) method.  Add the following class to your **App_Code** folder.

````C#
using ICSharpCode.SharpZipLib.Zip;
using System.IO;
using Telerik.Web.UI;
using Telerik.Web.UI.Widgets;

public class UnzipFileSystemContentProvider : FileSystemContentProvider
{
    public UnzipFileSystemContentProvider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag)
        : base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)
    {
        this.ProcessPaths(base.ViewPaths);
        this.ProcessPaths(base.UploadPaths);
        this.ProcessPaths(base.DeletePaths);
        base.SelectedUrl = FileBrowserContentProvider.RemoveProtocolNameAndServerName(this.GetAbsolutePath(base.SelectedUrl));
    }

    public override string StoreFile(UploadedFile file, string path, string name, params string[] arguments)
    {
        string relFolder = path;
        string relFull = Path.Combine(relFolder, name);
        string mapFolder = base.Context.Server.MapPath(relFolder);
        string mapFull = base.Context.Server.MapPath(relFull);

        if (file.GetExtension == ".zip")
        {
            string lastValidFile = "";
            using (ZipInputStream ZIS = new ZipInputStream(file.InputStream))
            {
                ZipEntry ZE = ZIS.GetNextEntry();
                while (ZE != null)
                {
                    string strDir = Path.GetDirectoryName(ZE.Name);
                    string strFil = Path.GetFileName(ZE.Name);

                    if (strDir.Length > 0)
                    {
                        Directory.CreateDirectory(mapFolder + strDir);
                    }
                    if (!string.IsNullOrEmpty(strFil))
                    {
                        if (IsValidFileTypeAfterUnZip(ZE.Name))
                        {
                            DeleteFileIfAlreadyExists(mapFolder + ZE.Name);
                            lastValidFile = relFolder + ZE.Name;

                            using (FileStream FS = File.Create(mapFolder + ZE.Name))
                            {
                                int i = 2048;
                                byte[] b = new byte[2048];
                                while (true)
                                {
                                    i = ZIS.Read(b, 0, b.Length);
                                    if (i > 0)
                                    {
                                        FS.Write(b, 0, i);
                                    }
                                    else
                                    {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    ZE = ZIS.GetNextEntry();
                }
            }
            DeleteEmptyDirectoriesAfterZip(mapFolder);
            return lastValidFile;
        }
        else
        {
            DeleteFileIfAlreadyExists(mapFull);
            file.SaveAs(mapFull);
            return relFull;
        }
    }

    private void DeleteFileIfAlreadyExists(string mapFull)
    {
        if (File.Exists(mapFull))
        {
            File.Delete(mapFull);
        }
    }

    private void DeleteEmptyDirectoriesAfterZip(string mapFolder)
    {
        foreach (string Dir in Directory.GetDirectories(mapFolder))
        {
            DeleteEmptyDirectoriesAfterZip(Dir);
            if (Directory.GetFiles(Dir).Length == 0 && Directory.GetDirectories(Dir).Length == 0)
            {
                Directory.Delete(Dir);
            }
        }
    }

    private bool IsValidFileTypeAfterUnZip(string fileName)
    {
        string strExt = fileName.Substring(fileName.LastIndexOf('.')).ToLower();
        if (strExt == ".zip")
        {
            return false;
        }
        else
        {
            foreach (string s in base.SearchPatterns)
            {
                string ext = s.Substring(s.LastIndexOf('.')).ToLower();
                if (ext == strExt)
                {
                    return true;
                }
            }
        }
        return false;
    }
}
````
````VB
Imports ICSharpCode.SharpZipLib.Zip  
Imports System.IO  
Imports Telerik.Web.UI  
Imports Telerik.Web.UI.Widgets  
 
Public Class UnzipFileSystemContentProvider  
  Inherits FileSystemContentProvider  
 
  Public Sub New(ByVal context As HttpContext, ByVal searchPatterns As String(), ByVal viewPaths As String(), ByVal uploadPaths As String(), ByVal deletePaths As String(), ByVal selectedUrl As String, ByVal selectedItemTag As String)  
    MyBase.New(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)  
    Me.ProcessPaths(MyBase.ViewPaths)  
    Me.ProcessPaths(MyBase.UploadPaths)  
    Me.ProcessPaths(MyBase.DeletePaths)  
    MyBase.SelectedUrl = FileBrowserContentProvider.RemoveProtocolNameAndServerName(Me.GetAbsolutePath(MyBase.SelectedUrl))  
  End Sub 
 
  Public Overrides Function StoreFile(ByVal file As UploadedFile, ByVal path As String, ByVal name As String, ByVal ParamArray arguments As String()) As String 
    Dim relFolder As String = path  
    Dim relFull = IO.Path.Combine(relFolder, name)  
    Dim mapFolder As String = MyBase.Context.Server.MapPath(relFolder)  
    Dim mapFull As String = MyBase.Context.Server.MapPath(relFull)  
    If file.GetExtension = ".zip" Then 
      Dim lastValidFile As String = "" 
      Using ZIS As New ZipInputStream(file.InputStream)  
        Dim ZE As ZipEntry = ZIS.GetNextEntry  
        While Not IsNothing(ZE)  
          Dim strDir As String = IO.Path.GetDirectoryName(ZE.Name)  
          Dim strFil As String = IO.Path.GetFileName(ZE.Name)  
          If strDir.Length > 0 Then 
            IO.Directory.CreateDirectory(mapFolder & strDir)  
          End If 
          If strFil <> String.Empty Then 
            If IsValidFileTypeAfterUnZip(ZE.Name) Then 
              DeleteFileIfAlreadyExists(mapFolder & ZE.Name)  
              lastValidFile = relFolder & ZE.Name  
              Using FS As FileStream = IO.File.Create(mapFolder & ZE.Name)  
                Dim i As Integer = 2048  
                Dim b As Byte() = New Byte(2048) {}  
                While True 
                  i = ZIS.Read(b, 0, b.Length)  
                  If i > 0 Then 
                    FS.Write(b, 0, i)  
                  Else 
                    Exit While 
                  End If 
                End While 
              End Using  
            End If 
          End If 
          ZE = ZIS.GetNextEntry  
        End While 
      End Using  
      DeleteEmptyDirectoriesAfterZip(mapFolder)  
      Return lastValidFile  
    Else 
      DeleteFileIfAlreadyExists(mapFull)  
      file.SaveAs(mapFull)  
      Return relFull  
    End If 
  End Function 
 
  Private Sub DeleteFileIfAlreadyExists(ByVal mapFull As String)  
    If IO.File.Exists(mapFull) Then 
      IO.File.Delete(mapFull)  
    End If 
  End Sub 
 
  Private Sub DeleteEmptyDirectoriesAfterZip(ByVal mapFolder As String)  
    For Each Dir As String In IO.Directory.GetDirectories(mapFolder)  
      DeleteEmptyDirectoriesAfterZip(Dir)  
      If IO.Directory.GetFiles(Dir).Count = 0 And IO.Directory.GetDirectories(Dir).Count = 0 Then 
        IO.Directory.Delete(Dir)  
      End If 
    Next 
  End Sub 
 
  Private Function IsValidFileTypeAfterUnZip(ByVal fileName As String) As Boolean 
    Dim strExt As String = Right(fileName, fileName.Length - fileName.LastIndexOf(".")).ToLower  
    If strExt = ".zip" Then 
      Return False 
    Else 
      For Each s As String In MyBase.SearchPatterns  
        s = Right(s, s.Length - s.LastIndexOf(".")).ToLower  
        If s = strExt Then Return True 
      Next 
    End If 
    Return False 
  End Function 
 
End Class 
````

After that, add the "*.zip" extension to the SearchPatterns of the Image/Document/Media/Etc Manager; which unfortunately also means you need to manually re-input all of the default file extensions. This is what it looks like for the ImageManager:

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" Skin="Default">  
    <ImageManager DeletePaths="~/Images/" SearchPatterns="*.gif,*.jpg,*.jpeg,*.jpe,*.tiff,*.tif,*.bmp,*.png,*.zip" UploadPaths="~/Images/" ViewPaths="~/Images/" /> 
</telerik:RadEditor>      
````

Step 4: Set the ContentProviderTypeName for the Image/Document/Media/Etc Manager that you want to enable zip files for:

````ASP.NET
RadEditor1.ImageManager.ContentProviderTypeName = GetType(UnzipFileSystemContentProvider).AssemblyQualifiedName  
````


Finally, make sure you add all the other necessary stuff required by the Editor in Q1 2008 and going forward, such as the HttpHandlers in the Web.config and the RadSpell dictionary in the **App_Data** folder.
 
[Download the project](files/editor-upload-zip-file-unzip-contents.zip)

