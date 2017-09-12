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


The **HOTFIX** archive is a bare-bones upgrade option for our controls - it contains only those files you might need to replace in your project to upgrade to the new version of Telerik controls. If you are already using Telerik products and just want to update, download the latest **HOTFIX** and apply it. The **HOTFIX** archive contains the following files:

* **AdditionalLibraries** - contains the [Telerik document processing libraries]({%slug introduction/installation/included-assemblies%}#telerik-document-processing-libraries) allowing you to import and export content between different formats.	

* **BinXX** - contains the Telerik  controls assemblies (.dll files), where **XX** represents the version of the .NET framework against which the assemblies are built.

* **EditorDialogs** - contains the **Editor** dialog files.

* **ImageEditorDialogs** - contains the **ImageEditor** dialog files.

* **Live Demos** - contains the product Quick-Start Framework and examples and the VisualStudio solution file opening them. You can start the samples directly from this folder, using the **StartExamples.exe** file.

* **Scripts** - all controls part of the suite have their scripts embedded as web resources. However if you need to modify a script or use it as an external, you can find it in this folder.

* **Skins** - all controls part of the suite have their skins embedded as web resources. However if you need to modify a skin or use it as an external one, you can find it in this folder.

* **TypeScriptDefinitions** - contains the TypeScript definitions for the Telerik® UI for ASP.NET Ajax client-side objects.

>note If you are installing the Telerik products for the first time, we recommend that you download the complete package ([MSI]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) or [ZIP]({%slug introduction/installation/installing-the-telerik-controls-from-zip-file%}) file).
>


## To update Telerik® UI for ASP.NET Ajax to a new version

1. Log into your [Telerik account](http://www.telerik.com/account/default.aspx) and click on **Downloads** from the top menu.

1. On the loaded page choose from your purchased products Telerik® UI for ASP.NET Ajax, and click on it.

1. Click on the black **Latest internal build** button in order to download the latest hotfix directly, or on the **Internal Builds** option in order to chose from the available for you hotfix versions. 

1. Once the download completes, unzip the files at a convenient location.

1. Back up your application.

1. Close Visual Studio or any other IDE which may lock the old assembly.

1. From the newly downloaded and unzipped files, copy the new DLL (located in the **BinXX** folder) to your web-application's **Bin** folder. Replace the old dll.

1. If you are using VS.NET, update the control's reference in your project to point to the new DLL.

1. Recompile your project.

1. If you have added the controls in GAC, remove them by running a **gacUtil** to remove the old copy and then add the new one. More information on the topic can be located here: [Add/Remove Telerik® UI for ASP.NET Ajax to the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%})

1. In case you use external scripts and skins, register them manually following the guidelines from [here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) and [here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}).

1. Run the project.

1. If you still get the older version of Telerik® UI for ASP.NET Ajax
	* Sometimes the .NET Framework wrongly caches the Telerik® UI for ASP.NET Ajax's DLL and therefore the update may seem to have failed. Try the following to ensure that this is not the case:
		1. Terminate the aspnet_wp.exe process (from the Windows Task Manager)
		1. Open a Windows Explorer and navigate to C:\Windows(WINNT)\Microsoft.NET\Framework\v[YOUR_VERSION]\Temporary ASP.NET Files
		1. Delete all folders with names, corresponding to your Telerik projects, i.e. Telerik® UI for ASP.NET Ajax, etc.
	* Delete your Visual Studio web project cache(s) - it should be located in C:\Documents and Settings\[YOUR USER]\VSWebCache.
	* Delete your browser cache: Tools -> Internet Options -> Delete Files....

1. If you get a copyright message - the copyright message appears only when using the trial version of Telerik® UI for ASP.NET Ajax (the Developer versions of Telerik controls do not throw copyright messages).If you have purchased the controls, then you have downloaded the wrong "DLLs only" file. Make sure you you download the proper, developer file - you will recognize it by the **Dev** suffix in the file name.

## See Also

 * [Adding the Telerik Controls to Your Project]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/adding-the-telerik-controls-to-your-project%})

 * [Using the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%})

 * [Trial License Limitations]({%slug introduction/licensing/trial-license-limitations%})
