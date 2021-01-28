---
title: License File
page_title: License File
description: Check our Web Forms article about License File.
slug: introduction/licensing/license-file
tags: license,file
published: True
position: 2
---

# License File



As of **Q1 2015**, the **Telerik® UI for ASP.NET AJAX** suite	uses the standard .NET licensing mechanism, which means that using the controls in design-time	causes Visual Studio to add a **license.licx** to the solution.	This file is used only in design-mode and is not needed for deployment explicitly. The .NET framework (lc.exe) will	embed it in the assembly your WebApplication will be built for deployment.

The license file is maintained by Visual Studio and contains information about all licensed components in the application (including non-Telerik products).

Having this license file is not expected to bring any performance/compilation issues and you can ignore it.

>tip In case your project build fails with errors pointing to the license file, you can delete it and rebuild. 
>
>Alternatively, you can clear its contents and mark it as `Read Only`.
>
>All known errors related to the licenses file usage are covered by the following KB article: [How to fix License File related errors](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-fix-license-file-related-errors).


If you are working under source control, once the file is created, it will be detected as a change by your source control system.	We would suggest that you check-in this file initially. Then, when it is checked-out again during your work,	it is up to you to decide whether to check it in, or discard the changes.

>tip If you are getting random copyright errors in the browser that you are using the trial version of Telerik UI for ASP.NET AJAX, please refer to this article [I Still Get the Copyright Message](https://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#i-still-get-the-copyright-message). You just need to upgrade the Trial version of Telerik.Web.UI.dll with the registered developer one as explained in this article: [Upgrading a Trial to a Developer License](https://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-from-trial-to-licensed-version-of-telerik-ui-for-aspnet-ajax).

## See Also

 * [License Agreement]({%slug introduction/licensing/license-agreement%})

 * [Trial License Limitations]({%slug introduction/licensing/trial-license-limitations%})

 * [Telerik MSBuild Task could not find “LC.exe” using the SdkToolsPath blog post](http://www.msigman.com/telerik-msbuild-task-find-lc-exe-sdktoolspath/)
 
 * [How to fix License File related errors](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-fix-license-file-related-errors) KB article
 
 * [Upgrading a Trial to a Developer License](https://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-from-trial-to-licensed-version-of-telerik-ui-for-aspnet-ajax)
 
 * [I Still Get the Copyright Message](https://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#i-still-get-the-copyright-message)

