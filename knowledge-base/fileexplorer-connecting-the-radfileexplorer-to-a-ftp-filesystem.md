---
title: Connecting the RadFileExplorer to a FTP filesystem
description: Connecting the RadFileExplorer to a FTP filesystem. Check it now!
type: how-to
page_title: Connecting the RadFileExplorer to a FTP filesystem
slug: connecting-the-radfileexplorer-to-a-ftp-filesystem
res_type: kb
---
   
## HOW TO

Connect the **RadFileExplorer** control (used in the **RadEditor**'s dialogs as well) to an FTP file system.  
   
## Solution

First we need to determine the format of the paths that can be set to the `ViewPaths`, `DeletePaths` and the `UploadPaths` properties of **RadFileExplorer**. In the current implementation, the path format looks like this:  
   
**Real FTP path:** `ftp://localhost/FtpSource/` 

**Path set to RadFileExplorer:**  `/FtpSource/`
  
   
The protocol and the server name, and other configurations (like user name and password) are exposed in an configuration file named *FtpSettings.config*. That file should be referred by using `configSource` property of the &lt;appSettings&gt; tag inside the Web.config file:  
 
````ASP.NET
appSettings configSource="FtpSettings.config"/>
````

Setting the configuration properties in that external file avoids restarting the application. If the configurations are put directly inside the *web.config* file, then all changes will cause resetting the application.  
   
 #### FORCE THE BROWSER TO DOWNLOAD THE FILES 

You can modify the *Generic Handler* (`.ashx` file) to force the browser to download the files. More information on the subject can be found in the first link at the end of this article.  
   
 HOW TO USE THE  FTP PROVIDER
 
 The [used library for FTP connection](http://ftpclient.codeplex.com/) does not provide "copy" feature. The implemented in the provider "copy" logic requires a `Temp` directory to be created, where a file will be cached and immediately deleted. This is necessary, because when the `FileCopy` operation is performed, the file is downloaded from the FTP server and then immediately uploaded to the new location in the Ftp server. In the currently implemented provider you need to set the `TempDirectoryPath` configuration element to a valid virtual directory.  

 >note In the earlier versions of the control the `CheckDeletePermissions` and `CheckReadPermissions` methods do not exist and need to be removed.
> 

This is an example configuration file:  
 
````XML
<?xml version="1.0"?>
<appSettings>
  <!--The name of the FTP server. Should not contain the full path to a folder - just the server's address-->
  <add key="FtpServerName"
       value="ftp://localhost"/>
  <!--User name for login. If the username is not required for connecting to the server, then leave it empty but do not remove it-->
  <add key="UserName"
       value=""/>
  <!--Password for login. If the password is not required for connecting to the server, then leave it empty but do not remove it-->
  <add key="Password"
       value=""/>
  <!--The path to a virtual folder which will contain the buffered file (when copying a file). This is necessary, because when the FileCopy method is
    performed, the file is downloaded from the FTP server and then immediately uploaded to the new location in the Ftp server-->
  <add key="TempDirectoryPath"
       value="~/Temp"/>
  <!--Path to the ASHX handler which will serve the files to the browser-->
  <add key="ItemHandlerPath"
       value="~/FtpFileSystemHandler_Cs.ashx"/>
</appSettings>
````
   
   
## See Also 
 
- [Use RadFileExplorer with physical paths and different content types](/support/kb/aspnet-ajax/fileexplorer/physical-paths-and-different-content-types.aspx)
- [Amazon S3 FileBrowserContentProvider](/community/code-library/aspnet-ajax/file-explorer/amazon-s3-filebrowsercontentprovider.aspx)

## Downloads

You can find atached the projects demonstrating the described approached here:

* [FtpContentProvider_Cs.zip](files/filebrowser-ftpcontentprovider_cs.zip)

* [FtpContentProvider_Vb.zip](files/filebrowser-ftpcontentprovider_vb.zip)



