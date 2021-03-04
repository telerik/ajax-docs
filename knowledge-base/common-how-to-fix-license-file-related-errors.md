---
title: How To Fix License File Related Errors
description: Find out tips and tricks on fixing License File (licenses.licx) related errors
type: troubleshooting
page_title: How To Fix License File Related Errors
slug: common-how-to-fix-license-file-related-errors
res_type: kb
---

Sometimes when upgrading a Web Site or Web App project to a newer version of Telerik.Web.UI.dll assembly, you may experience license file (licenses.licx) errors like the ones below, which may prevent the compiler to build the solution:

 * [LC : error LC0000: 'Could not load file or assembly 'Telerik.Web.UI, Version=20xx.xxxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4' or one of its dependencies. Operation is not supported. (Exception from HRESULT: 0x80131515)' or Could not load file or assembly 'Telerik.Web.UI, Version=20xx.xxxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4' or one of its dependencies. Invalid pointer (Exception from HRESULT: 0x80004003 (E_POINTER))'](#could-not-load-file-or-assembly)
 * [licenses.licx (1): Unable to resolve type 'Telerik.Web.UI.Rad<control_name>, Telerik.Web.UI, Version=201x.x.xxxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4'](#could-not-load-file-or-assembly)
 * [Processing complist 'Properties\licenses.licx'...
12>C:\Projects\<Project Name>\Properties\licenses.licx(3): error LC0004: Exception occurred creating type 'Telerik.Web.UI.<Control_Name>, Telerik.Web.UI, Version=201x.x.xxxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4' System.MissingMethodException: Constructor on type 'Telerik.Web.UI.<Control_Name>' not found](#could-not-load-file-or-assembly)
 * [License file is missing](#missing-licenses-licx-file)
 * [License file is not updated and contains information for older versions of the controls](#license-file-is-not-updated-and-contains-information-for-older-versions-of-the-controls)
 * [Task could not find "LC.exe" using the SdkToolsPath](#task-could-not-find-lc.exe-using-the-sdktoolspath)
 * [Could not transform licenses file into a binary resource](#could-not-transform-licenses-file-into-a-binary-resource)
 * [Source controls issues](#source-control-issues)
 * ["Thank you for using the Trial Version of Telerik UI for ASP.NET Ajax to build more powerful applications faster" error message in the browser](#getting-a-trial-error-message-when-refreshing-the-page)
 
## DESCRIPTION
As of Q1 2015, the Telerik ASP.NET AJAX uses the standard .NET licensing mechanism, which when adding the Telerik controls in design-time causes Visual Studio to add a license.licx file to the solution. Its purpose is to:
 * combat copyright infringement.
 * provide license holders in the company with statistics on the use of the available licenses.
 * send anonymous statistics about the controls usage.
The structure of the Licenses.licx file is similar to:

````ASP.NET
Telerik.Web.UI.Rad<Control_Name>, Telerik.Web.UI, Version=<Version_of_Telerik.Web.UI.dll_Assembly>, Culture=neutral, PublicKeyToken=121fae78165ba3d4
...
Telerik.Web.UI.RadGrid, Telerik.Web.UI, Version=2015.1.401.40, Culture=neutral, PublicKeyToken=121fae78165ba3d4
Telerik.Web.UI.RadCalendar, Telerik.Web.UI, Version=2015.1.401.40, Culture=neutral, PublicKeyToken=121fae78165ba3d4
````

and enlists the Telerik ASP.NET AJAX components used in the application and their fully qualified names.

The default location of the LicenseFile.licx is:

 * Web Sites - in the root of the site
 * Web Applications - in the Properties folder of the project

If your project build fails with errors pointing to the license file, follow the instructions in the section below to resolve them.

 
## SOLUTION
If you get errors related to the LC.exe (License compiler) as

### Could not load file or assembly
LC : error LC0000: 'Could not load file or assembly 'Telerik.Web.UI, Version=201x.xxxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4' or one of its dependencies. Operation is not supported. (Exception from HRESULT: 0x80131515)'
licenses.licx (1): Unable to resolve type 'Telerik.Web.UI.Rad<control_name>, Telerik.Web.UI, Version=201x.x.xxxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4'
Processing complist 'Properties\licenses.licx'...
12>C:\Projects\<Project Name>\Properties\licenses.licx(3): error LC0004: Exception occurred creating type 'Telerik.Web.UI.<Control_Name>, Telerik.Web.UI, Version=201x.x.xxxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4' System.MissingMethodException: Constructor on type 'Telerik.Web.UI.<Control_Name>' not found

or 

Could not load file or assembly 'Telerik.Web.UI, Version=20xx.x.xxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4' or one of its dependencies. Invalid pointer (Exception from HRESULT: 0x80004003 (E_POINTER))' 

you can solve them by:
 * Deleting the contents of the license.licx and making it read only
 * Or deleting the whole license.licx file and rebuild
 * Or right-clicking the Telerik.Web.UI.dll file in Windows Explorer, select Properties, and then click the 'Unblock' button on the General tab near the bottom.
 * Or if your app is under the source control to make it ignore the license file so any changes on a developer machine won't make it into the build machine or anywhere elsewhere.

A customer report indicates that if the reference errors persist after following these steps, the solution was to re-install the NuGet package microsoft.bcl.build.

If the above does not help:

 * remove the reference to Telerik.Web.UI.dll in Visual Studio and re-add it.
 * [clean the Temporary ASP.NET Files folder](https://stackoverflow.com/questions/16137457/asp-net-temporary-files-cleanup)
 * [clean Visual Studio cache](https://errorhandlinginskills.wordpress.com/2018/07/28/how-to-clear-visual-studio-cache/)
 * restart the PC
 * and test again the project
 
### Missing Licenses licx file
If for some reason the license.licx file is missing and you are getting build errors because of it, you can rebuild the application and it should be recreated. 
Another approach is to create an empty license.licx file in the root of your Web Site or in the /ProjectName/Properties folder, if you are developing a Web Application project.
 
### License file is not updated and contains information for older versions of the controls
If for some reason the licenses.licx file is not updated properly, you can delete its contents and rebuild the application.
 
### Task could not find LC.exe using the SdkToolsPath

If you get the Task could not find "LC.exe" using the SdkToolsPath error during automated MS Build tasks, review the [Telerik MSBuild Task could not find “LC.exe” using the SdkToolsPath](http://www.msigman.com/telerik-msbuild-task-find-lc-exe-sdktoolspath/) blog post by Matthew Sigman. Essentially, you should either install [Windows SDK](https://www.microsoft.com/en-us/download/details.aspx?id=82790) on the build machine, or add the /p:GenerateSerializationAssemblies=Off flag to the build arguments.

### Could not transform licenses file into a binary resource

The issue is discussed in the following MSDN article: [Could not transform licenses file 'file' into a binary resource. <reason>.](https://msdn.microsoft.com/en-us/library/caey6t0z.aspx)

### Source Control Issues

 * Unwanted check out of the project and solution files - After opening the Visual Studio designer, the licx file checks out the proj/sln file from source control, which may be annoying.
  * Preventing .NET from properly updating the file - the source control integration could prevent .NET to properly update the licenses.file (e.g., it may be read-only)

The solution for the above issues is to:
 * Delete the contents of the license.licx
 * Check in the file
 * Make the source control ignore the license file so any changes on a developer machine won't make it into the build machine or anywhere elsewhere.
 
### Getting a trial error message when refreshing the page

The "Thank you for using the Trial Version of Telerik® UI for ASP.NET Ajax to build more powerful applications faster. Purchase the Commercial Version now to get access to all product updates and the Telerik expert support." error is not directly related to the Licenses.licx file functionality, but to that the Telerik.Web.UI.dll is a trial build for demonstration and trial purposes only. You can check the articles below to see how to remove the trial error:
 * [Trial License Limitations](https://docs.telerik.com/devtools/aspnet-ajax/licensing/trial-license-limitations)
 * [Getting tired of seeing trial messages in your ASP.NET AJAX application?](https://www.telerik.com/blogs/getting-tired-of-seeing-trial-messages-in-your-asp-net-ajax-application)



