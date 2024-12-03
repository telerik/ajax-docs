---
title: Unable to Find Dependency Microsoft.WindowsAzure.Storage, AWSSDK.CORE, AWSSDK.S3
description: You may experience build warnings when compiling a solution with Telerik.Web.UI.dll in Visual Studio. They might be due to that RadCloudUpload relies on external references to Amazon and Azure storage providers.
type: troubleshooting
page_title: Visual Studio Build warnings on Telerik.Web.UI.dll
slug: visual-studio-unable-to-find-dependency-build-warnings
position: 
tags: 
ticketid: 1441294
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
You may get the following warnings when building a solution with Telerik.Web.UI.dll in it:

WARNING: Unable to find dependency 'MICROSOFT.WINDOWSAZURE.STORAGE' (Signature='31BF3856AD364E35' Version='3.0.2.0') of assembly 'Telerik.Web.UI.dll'

WARNING: Unable to find dependency 'AWSSDK.CORE' (Signature='885C28607F98E604' Version='3.3.0.0') of assembly 'Telerik.Web.UI.dll'

WARNING: Unable to find dependency 'AWSSDK.S3' (Signature='885C28607F98E604' Version='3.3.0.0') of assembly 'Telerik.Web.UI.dll'


While those warnings do not influence the proper work of the solution, they might be annoying and the purpose of this blog post is to help you solve them out.

## Solution
The references of the Telerik.Web.UI.dll assembly to MICROSOFT.WINDOWSAZURE.STORAGE, AWSSDK.CORE, AWSSDK.S3 are for the RadCloudUpload built-in support for the Amazon and Azure cloud storages.

What you can do in case your Visual Studio is warning you about those missing dependencies:

* You can add the missing assemblies and reference them, especially if your web app is using [RadCloudUpload](https://www.telerik.com/help/aspnet-ajax/cloud-upload-amazon-s3.html).
* Or restart the computer and [clean the solution](https://docs.microsoft.com/en-us/visualstudio/ide/building-and-cleaning-projects-and-solutions-in-visual-studio?view=vs-2019#to-build-rebuild-or-clean-an-entire-solution).
* You may experience the warnings if the **Visual Studio MSBuild project build output verbosity** is set to **Detailed**. You can find this VS setting under Tools – Options – Projects and Solutions – Build and Run, there’s the MSBuild project build output verbosity combo box. It controls how much info you want to see in the Output window
* The warning might be due to the license.licx file. To fix it delete its contents or delete the whole file as suggested in [this KB](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-fix-license-file-related-errors)
* Be aware that the Telerik ASP.NET AJAX controls can work and operate only inside an ASP.NET Web Forms applications/websites. If the app is of different type, this can also generate this error. 
* You will get the same warnings if you open the Telerik.Web.UI.dll in tools like [Telerik JustDecompile](https://www.telerik.com/products/decompiler.aspx) because of the missing storage assemblies. This is an expected behavior.

You can find more information in the following resources:
* [Visual Studio 2017 Build warnings on Telerik.Web.UI.dll](https://www.telerik.com/forums/visual-studio-2017-build-warnings-on-telerik-web-ui-dll) 
* [Could Not Load File or Assembly 'Telerik.Web.UI' After Upgrade](https://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/troubleshoot-upgrade#could-not-load-file-or-assembly-telerikwebui-after-upgrade)
* [Could not load file or assembly](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-how-to-fix-license-file-related-errors)
* [Telerik.Web.Ui.pdb not loaded error when debugging in Visual Studio]({%slug common-telerik-web-ui-pdb-not-loaded-error%}) 
* [Could not load file or assembly 'Telerik.Web.UI' or one of its dependencies](https://stackoverflow.com/questions/8754626/could-not-load-file-or-assembly-telerik-web-ui-or-one-of-its-dependencies)

 
