---
title: Using the HOTFIX (DLLs and Scripts/Skins Only)
page_title: Using the HOTFIX (DLLs and Scripts/Skins Only) | UI for ASP.NET AJAX Documentation
description: Using the HOTFIX (DLLs and Scripts/Skins Only)
slug: introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)
tags: hotfix
published: True
position: 4
---

# Using the HOTFIX (DLLs and Scripts/Skins Only)



>important As of Q1 2011, Telerik UI for ASP.NET AJAX is shipped with .NET 3.5 and above assemblies only.The following page contains more information about the product support lifecycle of the controls:
>[http://www.telerik.com/aspnet-ajax/tech-sheets/net-support](http://www.telerik.com/aspnet-ajax/tech-sheets/net-support)
>


The **HOTFIX** archive is a bare-bones upgrade option for our controls - it contains only those files you might need to replace in your project to upgrade to the new version of Telerik controls. If you are already using Telerik products and just want to update, download the latest **HOTFIX** and apply it.The **HOTFIX** archive contains the following files:

* **binXX** folder - contains the Telerik controls assemblies (.dll files), where **XX** represents the version of the .NET framework against which the assemblies are built.

>note If you are installing the Telerik products for the first time, we recommend that you download the complete package ([MSI]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) or [ZIP]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%}) file).
>


## To update Telerik UI for ASP.NET AJAX to a new version

1. Log into your [Telerik account](http://www.telerik.com/account/default.aspx) and click on **Products & Subscriptions** from the top menu.

1. In the dropdown that appears choose from your purchased products or trial downloads the Telerik UI for ASP.NET AJAX, and click on it. If you have purchased a collection you would need to click on it and the trial downloads page will show all trial downlads directly.

1. Click on **Download Installer and other resources** (the Download link next to the suite if you are a trial user).You need to choose the Telerik UI for ASP.NET AJAX suite if you have purchased the collection and click its Browse all product files button.

1. Click on the **"DLL, Scripts and Skins only"** file. If you are downloading a licensed version make sure that the file you are downloading contains the "Dev" suffix.

1. Once the download completes, unzip the files at a convenient location.

1. If the upgrade is major (i.e. from Q1 2009 to Q2 2009), check the **Changes and Backward Compatibility** section in this manual for further instructions.

1. Back up your application.

1. Close Visual Studio or any other IDE which may lock the old assembly.

1. From the newly downloaded and unzipped files, copy the new DLL (located in the **binXX*** folder) to your web-application's **bin** folder. Replace the old dll. ***binXX** folder - contains the Telerik controls assemblies (.dll files), where **XX** represents the version of the .NET framework against which the assemblies are built.

1. If you are using VS.NET, update the control's reference in your project to point to the new DLL.

1. Recompile your project.

1. If you have added the control in GAC, remove it by running a **gacUtil** to remove the old copy and then add the new one. More information on the topic can be located here: [Add/Remove Telerik UI for ASP.NET AJAX to the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%})

1. In case you use external scripts and skins, register them manually following the guidelines from [here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) and [here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}).

1. Run the project.

1. If you still get the older version of Telerik UI for ASP.NET AJAX

* Sometimes the .NET Framework wrongly caches the Telerik UI for ASP.NET AJAX's DLL and therefore the update may seem to have failed. Try the following to ensure that this is not the case:

1. Terminate the aspnet_wp.exe process (from the Windows Task Manager)

1. Open a Windows Explorer and navigate to C:\Windows(WINNT)\Microsoft.NET\Framework\v[YOUR_VERSION]\Temporary ASP.NET Files

1. Delete all folders with names, corresponding to your Telerik projects, i.e. Telerik UI for ASP.NET AJAX, etc.
* Delete your Visual Studio web project cache(s) - it should be located in C:\Documents and Settings\[YOUR USER]\VSWebCache.
* Delete your browser cache: Tools -> Internet Options -> Delete Files....

1. If you get a copyright message - the copyright message appears only when using the trial version of Telerik UI for ASP.NET AJAX (the Developer versions of Telerik's controls do not throw copyright messages).If you have purchased the control, then you have downloaded the wrong "DLLs only" file. Make sure you you download the proper, Developer "DLLs only" file. You will recognize it by the **Dev** abbreviation in the file name.

## See Also

 * [Adding the Telerik Controls to Your Project]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/adding-the-telerik-controls-to-your-project%})

 * [Using the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%})

 * [Trial License Limitations]({%slug introduction/licensing/trial-license-limitations%})
