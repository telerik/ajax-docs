---
title: Upload Files to a Shared Drive
page_title: Upload Files to a Shared Drive | RadEditor for ASP.NET AJAX Documentation
description: Upload Files to a Shared Drive
slug: editor/functionality/dialogs/examples/upload-files-to-a-shared-drive
tags: upload,files,to,a,shared,drive
published: True
position: 4
---

# Upload Files to a Shared Drive

Upload images and other files to a shared drive.

**Scenario 1**: You will be able to upload any images located in a **virtual folder,** which is a subfolder of the web application, hosting the editor. This means that you need to create a virtual directory that is a subdirectory of the web application folder, which will point to the physical folder located on the other PC. You also have to set the needed ASPNET/NETWORK SERVICE permissions to this virtual directory. Here is an example which assumes that we have a domain environment and both computers are members of the same domain. The machine hosting the editor application must have IIS 6.0 installed.

>note This scenario does not work with IIS 5.1.

The computer that we are sharing Images from is an XP Pro Operating system for example. Machine name “SharedImages”. Current user on that machine is domain\User with password “pass”.We share a folder from that computer using a name “test” with **Sharing** permissions for the group “Everyone” from “domain” (not the local machine “everyone” group). We set the permissions for that group to “read” and we add another user that we will afterwards use from the server 2003 machine to authenticate with. In our example, this will be “domain\user” with password “pass”. We then move on to the **Security** tab and add the “everyone” group from “domain” and the “domain\user”. The “domain\user” can have higher access privileges (depending on the needs).

We move on to the **Server 2003** machine which hosts our application. We open IIS 6.0 manager, and navigate to the application to which we need to set a virtual directory. Selecting the web application, right-click, select “**New Virtual Directory**”. Input the alias “test”, click Next, and enter the network path (UNC) *\\SharedImages\test*. Click next and input the credentials of “domain\User” from machine “SharedImages” and the correct password (“pass”). To do this “uncheck” Always use the authenticated user’s credentials…….”. Click Next. Allow only the “Read” permissions from the Virtual Directory Access Permissions screen. (This will create a virtual directory, unlike had you selected the “Run Scripts (such as ASP) checkbox, which would have created a web application). Click Next and Finish. From the newly created virtual directory, you should be able to see the contents of the shared folder *\\SharedImages\test* by selecting the “test” virtual directory under your web application in the left navigation screen of the IIS manager.

Open the aspx/ascx file where the editor resides and input the new virtual directory ImagesPaths to point to your new virtual directory like this:

````ASP.NET
<telerik:RadEditor
   ID="RadEditor1"
   Enabled="true"
   ImageManager-ViewPaths="~/test"
   ImageManager-UploadPaths="~/test"
   ImageManager-DeletePaths="~/test"
   runat="server" >
</telerik:RadEditor> 	
````


Save your page and open the editor page in your browser.

>note Once again please note that this scenario applies if your web application is running on the 2003 server IIS 6 platform and are accessing a shared folder from another computer.

**Scenario 2:**

Another approach to achieve this scenario (not supported by Telerik) is to implement a [custom file system content provider]({%slug editor/functionality/dialogs/examples/custom-filebrowsercontentprovider%}) that will be able to read the files for physical resources or virtual folders outside of the web application. You need to override the StoreFile function:

````C#
protected void Page_Load(object sender, EventArgs e)
{
	   RadEditor1.ImageManager.ContentProviderTypeName = typeof(myprovider).AssemblyQualifiedName;
}

public class myprovider : Telerik.Web.UI.Widgets.FileSystemContentProvider
{  
	   public  myprovider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag)
	   : base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)
	   {
	   }
	   public override string StoreFile(UploadedFile file, string path, string name, params string[] arguments)
	   {
		   //code
		   return base.StoreFile(file, path, name, arguments);
	   }
} 
````



## See Also

 * [Upload Images to the Server]({%slug editor/functionality/dialogs/examples/upload-images-to-the-server%})
