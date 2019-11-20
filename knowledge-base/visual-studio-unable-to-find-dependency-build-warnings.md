---
title: Unable to Find Dependency (MICROSOFT.WINDOWSAZURE.STORAGE, TELERIK.EVERLIVE.SDK.NET35, AWSSDK.CORE, AWSSDK.S3) build warnings on Telerik.Web.UI.dll in Visual Studio
description: You may experience build warnings when compiling a solution with Telerik.Web.UI.dll in Visual Studio. They might be due to that RadCloudUpload relies on external references to Amazon, Azure and Everlive storage providers.
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

WARNING: Unable to find dependency 'TELERIK.EVERLIVE.SDK.NET35' (Signature='B28C218413BDF563' Version='1.0.0.0') of assembly 'Telerik.Web.UI.dll'

WARNING: Unable to find dependency 'AWSSDK.CORE' (Signature='885C28607F98E604' Version='3.3.0.0') of assembly 'Telerik.Web.UI.dll'

WARNING: Unable to find dependency 'AWSSDK.S3' (Signature='885C28607F98E604' Version='3.3.0.0') of assembly 'Telerik.Web.UI.dll'


While those warnings do not influence the proper work of the solution, they might be annoying and the purpose of this blog post is to help you solve them out.

## Solution
The references of the Telerik.Web.UI.dll assembly to MICROSOFT.WINDOWSAZURE.STORAGE, TELERIK.EVERLIVE.SDK.NET35, AWSSDK.CORE, AWSSDK.S3 are for the RadCloudUpload built-in support for the Amazon, Azure and Everlive cloud storages.

What you can do in case your Visual Studio is warning you about those missing dependencies:

* You can add the missing assemblies and reference them, especially if your web app is using [RadCloudUpload](https://www.telerik.com/help/aspnet-ajax/cloud-upload-amazon-s3.html).
* Or restart the computer and [clean the solution](https://docs.microsoft.com/en-us/visualstudio/ide/building-and-cleaning-projects-and-solutions-in-visual-studio?view=vs-2019#to-build-rebuild-or-clean-an-entire-solution).
* You may experience the warnings if the **Visual Studio MSBuild project build output verbosity** is set to **Detailed**. You can find this VS setting under Tools – Options – Projects and Solutions – Build and Run, there’s the MSBuild project build output verbosity combo box. It controls how much info you want to see in the Output window
* The warning might be due to the license.licx file. To fix it delete its contents or delete the whole file as suggested in [this KB](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-fix-license-file-related-errors)
* Be aware that the Telerik ASP.NET AJAX controls can work and operate only inside an ASP.NET Web Forms applications/websites. If the app is of different type, this can also generate this error. 
* You will get the same warnings if you open the Telerik.Web.UI.dll in tools like [Telerik JustDecompile](https://www.telerik.com/products/decompiler.aspx) because of the missing storage assemblies. This is an expected behavior.

