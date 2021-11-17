---
title: Use RadFileExplorer with physical and shared folder paths
description: Use RadFileExplorer and RadEditor with physical and shared folder paths. Check it now!
type: how-to
page_title: Use RadFileExplorer with physical and shared folder paths
slug: editor-use-radfileexplorer-with-physical-and-shared-folder-s-paths
res_type: kb
---

  
  
## HOW-TO  
  
The basic steps needed to implement a custom provider, that works with files and folders from a physical (or shared) file system are shown in the attached demos. A *GenericHandler.ashx* is used in the examples in order to serve the files to the browser. The different file types should be handled in this .ASHX file in order to force the browser to download or open a file.  
  
## UPDATE  
The provider supports shared folder's paths like "\\server.name\Path\Folder" as well. The mapping is done in the *MappingFile.mapping* file as shown in the attached demo.  
  
## THE MAIN PROBLEM
  
The main problem in this case is that we are working with physical paths that we do not want to pass (show) to the client. In the address bar of the **RadFileExplorer** we need to show custom paths, which uniquely identify the items in the FileExplorer (and on the server). In this case, a strong mapping between the physical path and the virtual path (that will be shown in the address bar) is necessary.   
In the example, which you can download from [here](files/fileexplorer-PhysicalpathFilesystemProvider.zip), the mapping is specified in the *MappingFile* sfile. You can add another mapping in the .*mapping*file and then use the mapped physical paths in the *ViewPath*, *DeletePath* or *UploadPath* collections of the FileExplorer. In the demo, the *GetPhysicalFromVirtualPath* function is widely used, and this function gets the mapped physical path from the passed virtual path.   
  
This is an example configuration using *CustomFileSystemProvider*:  
  

````C#
protected void Page_Load(object sender, EventArgs e)
{
string[] viewPaths = new string[]
{
   @"C:\PhysicalSource\ROOT", 
   @"\\Telerik.com\Path\SharedDir"
};
  
string[] uploadPaths = new string[]
{
   @"C:\PhysicalSource\ROOT\CanUpload",
   @"\\Telerik.com\Path\SharedDir\ROOT\CanUpload"
};
  
string[] deletePaths = new string[] 
{
   @"C:\PhysicalSource\ROOT\Folder_1\CanDelete",
   @"\\Telerik.com\Path\SharedDir\ROOT\Folder_1\CanDelete"
};
  
    RadFileExplorer1.Configuration.ViewPaths = viewPaths;
    RadFileExplorer1.Configuration.UploadPaths = uploadPaths;
    RadFileExplorer1.Configuration.DeletePaths = deletePaths;
    RadFileExplorer1.Configuration.SearchPatterns = new []{"*.*"};
    RadFileExplorer1.Configuration.ContentProviderTypeName = typeof(CustomFileSystemProvider).AssemblyQualifiedName;
}
````
  
  
 When a custom provider is used, the security part needs to be implemented as well - for example : the upload and delete logic depending from the path set.  
  
  
## FORCE THE BROWSER TO DOWNLOAD THE FILES
     
 A GenericHandler is used in order to serve the files to the browser. Please note that the different browsers handle the file types in a different manner. You can control browsers' action, specifying the *Response.ContentType* and adding a header with the *Response.AddHeader* method before writing the file to the browser. This is a common programming task and needs to be done in the used GenericHandler. The implemented code in the demo, forces the browser to download files with *.jpg* and *.docx* extensions.  


## USEFUL LINKS
  
* [Using custom FileBrowserContentProvider](https://docs.telerik.com/devtools/aspnet-ajax/controls/fileexplorer/server-side-programming/use-custom-filebrowsercontentprovider)
* More details about the MIME types can be found on [this site](http://www.iana.org/assignments/media-types/media-types.xhtml).
* [This is a full demo](http://demos.telerik.com/aspnet-ajax/fileexplorer/examples/applicationscenarios/filteranddownloadfiles/defaultcs.aspx) that shows how can cancel the default "Preview" window and force the browsers to download  specific files
* [This is a full demo](https://demos.telerik.com/aspnet-ajax/fileexplorer/examples/server-sideapi/dbfilebrowsercontentprovider/defaultcs.aspx)that shows an implementation of the FileBrowserContentProvider for working with database.

  
## NOTE   
Please, read the comment in the beginning of the *MoveDirectory*function. Also, in the earlier versions of the control the *CheckDeletePermissions*method does not exist and needs to be removed. Also, a new method is added in the FileBrowserContentProvider - *CheckReadPermissions* (starting from version *2010.2.286*) and It should be overridden as well in order to ensure that the content provider will work properly.

You can download the sample files from [here](files/fileexplorer-PhysicalpathFilesystemProvider.zip). There are both C# and VB.NET versions inside the archive.

 