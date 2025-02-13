---
title: Using the HOTFIX Archive
page_title: Using the HOTFIX Archive
description: "Learn what files the HOTFIX archive contains and update to latest Telerik UI for ASP.NET AJAX versions."
slug: introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)
tags: hotfix, use, files
previous_url: installation/Using-the-HOTFIX
published: True
position: 6
---

# Using the HOTFIX Archive

The `HOTFIX` archive is a bare-bones upgrade option for the Telerik UI for ASP.NET AJAX controls. It contains only the files you need to replace in your project to upgrade to the latest version of the Telerik controls. If you are already using Telerik products and want to update only, download the latest `HOTFIX` and apply it.

Note that if you are installing the Telerik products for the first time, it is recommended that you download the complete package ([MSI]({%slug getting-started/installation/install-using-msi%}) or [ZIP]({%slug getting-started/installation/install-from-zip%}) file).

## List of HOTFIX Files

The `HOTFIX` archive contains the following files:

|HOTFIX Files|Specifics
|:--|:--
|`AdditionalLibraries`|Contains the [Telerik document processing libraries]({%slug introduction/installation/included-assemblies%}) that allow you to import and export content between different formats.
|`BinXX`|Contains the Telerik controls assemblies (`.dll` files), where `XX` represents the version of the .NET framework against which the assemblies are built.
|`EditorDialogs`|Contains the **Editor** dialog files.
|`ImageEditorDialogs`|Contains the **ImageEditor** dialog files.
|`Live Demos`|Contains the product Quick-Start Framework and examples and the Visual Studio solution file for opening them. You can start the samples directly from this folder by using the `StartExamples.exe` file.
|`Scripts`|All controls that are part of the suite have their scripts embedded as web resources. However, if you need to modify a script or use it as an external, you can find it in this folder.
|`Skins`|All controls that are part of the suite have their skins embedded as web resources. However, if you need to modify a skin or use it as an external one, you can find it in this folder.
|`TypeScriptDefinitions`|Contains the TypeScript definitions for the Telerik UI for ASP.NET AJAX client-side objects.

## Updating to Latest Versions

To update your project to the latest Telerik UI for ASP.NET AJAX version:  

1. Log into your [Telerik account](https://www.telerik.com/account/default.aspx) and click [**Downloads**](https://www.telerik.com/account/product-download?product=RCAJAX) from the top menu.

1. On the loaded page, choose **Telerik UI for ASP.NET AJAX** from your purchased products and click it.

1. Click the black **Latest internal build** button to download the latest hotfix directly. Alternatively, select the **Internal Builds** option to chose from the available HOTFIX versions.

1. Once the download completes, unzip the files at a convenient location.

1. Back up your application.

1. Close Visual Studio or any other IDE which may lock the old assembly.

1. From the newly downloaded and unzipped files, copy the new `dll` (located in the `BinXX` folder) to the `Bin` folder of your web-application. Replace the old `dll`.

1. If you are using VS.NET, update the control reference in your project to point to the new `dll`.

1. Recompile your project.

1. If you have added the controls in GAC, remove them by running `gacUtil` to remove the old copy and then add the new one. For more information, refer to [Add/Remove Telerik® UI for ASP.NET AJAX to the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%}).

1. If you use external scripts and skins, register them manually by [following the guidelines here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) and [here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}).

1. Run the project.

## Handling Possible Issues

If you still get the previous version of Telerik UI for ASP.NET AJAX, note that sometimes the .NET Framework wrongly caches the Telerik UI for ASP.NET AJAX `dll` and, therefore, the update may seem to have failed.

Try the following to ensure that this is not the case:

1. From the Windows Task Manager, terminate the `aspnet_wp.exe` process.

1. Open a Windows Explorer and navigate to `C:\Windows(WINNT)\Microsoft.NET\Framework\v[YOUR_VERSION]\Temporary ASP.NET Files`.

1. Delete all folders with names corresponding to your Telerik projects, that is, Telerik UI for ASP.NET AJAX, and so on.

1. Delete your Visual Studio web project caches. These are located in `C:\Documents and Settings\[YOUR USER]\VSWebCache`.

1. Delete your browser cache by navigating to **Tools** > **Internet Options** > **Delete Files**.

If you get a copyright message, this means that either you are using the trial version of Telerik UI for ASP.NET AJAX as the Developer versions of Telerik controls do not throw copyright messages, or that you have downloaded the wrong `DLLs only` file. Make sure you download the proper, developer file with the `Dev` suffix in the file name.

## See Also

* [Adding the Telerik Controls to Your Project]({%slug getting-started/adding-the-telerik-controls-to-your-project%})
* [Using the Global Assembly Cache]({%slug introduction/deployment/using-the-global-assembly-cache%})
* [Licensing Overview]({%slug licensing/overview%})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)
